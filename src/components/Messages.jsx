import { useState, useEffect, useRef, useContext } from "react";
import supabase from "../supabase/client";
import formatMessageDate from "../utils/formatMessageDate";
import { useParams } from "react-router-dom";
import { useGameContext } from "../contexts/GameContext";
import useProfile from "../hooks/useProfile";
import AppContext from "../contexts/AppContext";

function Messages() {
  const [chat, setChat] = useState([]);
  const chatRef = useRef(null);

  const { profile } = useProfile();
  const { session } = useContext(AppContext);

  console.log(profile);

  const { gameData } = useGameContext();

  const { id } = useParams(); // Estraiamo l'id dal parametro dell'URL

  const selectedGame = gameData.find((game) => game.id == id);

  const getMessages = async () => {
    const { data, error } = await supabase
      .from("messages")
      .select("*, profile: profiles(*)")
      .eq("game_id", selectedGame.id);
    if (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    } else {
      setChat(data);
    }
  };

  const handleMessageSubmit = async (event) => {
    event.preventDefault();
    const inputForm = event.currentTarget;
    const { message } = Object.fromEntries(new FormData(inputForm));
    if (typeof message === "string" && message.trim().length !== 0) {
      const { data, error } = await supabase
        .from("messages")
        .insert([
          {
            profile_id: profile.id,
            game_id: selectedGame.id,
            content: message,
          },
        ])
        .select();
      if (error) {
        alert(error.message);
      } else {
        inputForm.reset();
      }
    }
  };

  useEffect(() => {
    getMessages();
    const subscription = supabase
      .channel("messages")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
        },
        () => getMessages()
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chat]);

  return (
    <>
      {profile && (
        <div className="container d-flex justify-content-center">
          <div className="card-chat">
            <div className="card-header msg_head">
              <div className="container mb-3">
                <div className="row">
                  <div className="col-2">
                    <img src={selectedGame.img} className="user_img" />
                  </div>
                  <div className="col-9 px-5">
                    <h2 className="text-success fw-bold">
                      Live Chat{" "}
                      <span className="text-light text-nowrap ">
                        {selectedGame.title}{" "}
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="msg_card_body">
              <div
                classNameName="d-flex justify-content-start mb-4"
                ref={chatRef}
              >
                {chat &&
                  chat.map((message, index) => (
                    <div
                      key={index}
                      className={`row my-3 ${
                        session.user.id == message.profile_id
                          ? "d-flex justify-content-end"
                          : ""
                      }`}
                    >
                      <div className="col-8">
                        {session.user.id === message.profile_id ? (
                          <div className="row">
                            <div className="col-9 d-flex justify-content-end">
                              <div className="msg_container">
                                <p className="my-msg">{message.content}</p>
                                <span className="msg_time">
                                  {formatMessageDate(message.created_at)}
                                </span>
                              </div>
                            </div>
                            <div className="col-2 p-0">
                              <div className="img_cont_msg">
                                <img
                                  src={profile.avatar_url}
                                  className="rounded-circle user_img_msg"
                                />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="row">
                            <div className="col-2">
                              <div className="img_cont_msg">
                                <img
                                  src=""
                                  className="rounded-circle user_img_msg ms-2"
                                />
                              </div>
                            </div>
                            <div className="col-9 d-flex justify-content-start px-4">
                              <div className="msg_container">
                                <p className="msg">{message.content}</p>
                                <span className="msg_time">
                                  {formatMessageDate(message.created_at)}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="card-footer">
              <div className="input-group">
                <form
                  className="d-flex px-3 py-2"
                  onSubmit={handleMessageSubmit}
                >
                  <input
                    name="message"
                    type="text"
                    className=" type_msg"
                    placeholder="Scrivi un messaggio..."
                  ></input>
                  <div className="d-flex">
                    <button type="submit" className="input-group-text send_btn">
                      <i className="fas fa-lg fa-location-arrow me-2"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Messages;
