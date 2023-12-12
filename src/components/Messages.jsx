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

  const { gameData } = useGameContext();

  const { id } = useParams();

  const selectedGame = gameData.find((game) => game.id == id);

  // Funzione per recuperare i messaggi associati al gioco selezionato
  const getMessages = async () => {
    const { data, error } = await supabase
      .from("messages")
      .select("*, profile: profiles(*)")
      .eq("game_id", selectedGame.id);
    if (error) {
      // Gestisce gli errori durante il recupero dei messaggi
      alert(error.message);
    } else {
      // Imposta i messaggi recuperati nello stato e scrolla alla fine della chat se è disponibile un riferimento all'elemento
      setChat(data);
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
    }
  };

  // Gestisce l'invio di un nuovo messaggio
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
        // Gestisce gli errori durante l'inserimento del messaggio
        alert(error.message);
      } else {
        inputForm.reset();
      }
    }
  };

  // Effetto per recuperare i messaggi all'avvio e sottoscriversi ai cambiamenti nella tabella dei messaggi
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

  // Effetto per scrollare alla fine della chat quando i messaggi vengono aggiornati
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chat]);

  return (
    <>
      {profile && (
        <div className="d-flex justify-content-center col-12 slide-in-blurred-right my-5 py-5">
          <div className="card-chat my-shadow">
            <div className="card-header msg_head">
              <div className="container my-3 mb-3">
                <div className="row">
                  <div className="col-4 col-lg-3">
                    <img
                      src={selectedGame.img}
                      className="user_img_game ms-0 ms-lg-3"
                    />
                  </div>
                  <div className="col-6 col-lg-9">
                    <div className="row">
                      <h2 className="text-danger fw-bold position-relative fs-1 text-nowrap">
                        Live Chat <br />
                        <span className="text-light  text-nowrap fs-3 fw-bold">
                          per {selectedGame.title}{" "}
                        </span>
                      </h2>

                      <span className="d-none d-lg-block">
                        <iframe
                          src="https://giphy.com/embed/DzEb7JBoJYuIRJBL3c"
                          width="100%"
                          height="100%"
                          className="giphy-embed position-absolute "
                          allowFullScreen
                        ></iframe>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="msg_card_body" ref={chatRef}>
              {chat &&
                chat.map((message, index) => (
                  <div
                    key={index}
                    className={`row my-3 ${
                      profile.id == message.profile_id
                        ? "d-flex justify-content-end"
                        : ""
                    }`}
                  >
                    <div className="col-10 col-lg-8">
                      {profile.id === message.profile_id ? (
                        <div className="row ">
                          <div className="col-9 col-lg-10 d-flex justify-content-end">
                            <div className="my_msg_container">
                              <p className="my-msg">{message.content}</p>
                              <span className="msg_time d-flex justify-content-end">
                                {formatMessageDate(message.created_at)}
                              </span>
                            </div>
                          </div>
                          <div className="col-2 p-0 d-flex align-items-end">
                            <div className="img_cont_msg">
                              <img
                                src={profile && message.profile.avatar_url}
                                className="rounded-circle user_img_msg "
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="row">
                          <div className="col-2 col-lg-2">
                            <div className="img_cont_msg">
                              <img
                                src={message.profile.avatar_url}
                                className="rounded-circle user_img_msg ms-1"
                              />
                            </div>
                          </div>
                          <div className="col-10 col-lg-10 d-flex justify-content-start">
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
            <div className="card-footer p-3">
              <div className="input-group">
                <form className="d-flex py-2" onSubmit={handleMessageSubmit}>
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
