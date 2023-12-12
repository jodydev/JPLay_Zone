import supabase from "../supabase/client";

import { useParams } from "react-router-dom";
import { useGameContext } from "../contexts/GameContext";
import { useState, useEffect, useContext } from "react";
import AppContext from "../contexts/AppContext";
import useProfile from "../hooks/useProfile";
import Comment from "./Comment";

function ReviewForm() {
  const { gameData } = useGameContext();

  const { profile } = useProfile();

  const { session } = useContext(AppContext);

  console.log(session);

  const { id } = useParams();

  const selectedGame = gameData.find((game) => game.id == id);
  const [comments, setComments] = useState([]);
  const [userHasCommented, setUserHasCommented] = useState(false);

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    const commentForm = event.currentTarget;
    const { title, content } = Object.fromEntries(new FormData(commentForm));
    if (
      typeof title === "string" &&
      typeof content === "string" &&
      title.trim().length !== 0 &&
      content.trim().length !== 0
    ) {
      const { data, error } = await supabase
        .from("comments")
        .insert([
          {
            game_id: selectedGame.id,
            game_name: selectedGame.title,
            comment_title: title,
            comment_content: content,
          },
        ])
        .select();
      if (error) {
        alert(error.message);
      } else {
        commentForm.reset();
        setComments([...comments, ...data]); // Aggiungi i nuovi commenti ai commenti esistenti
      }
    }
  };

  useEffect(() => {
    async function fetchComments() {
      const { data, error } = await supabase
        .from("comments")
        .select()
        .eq("game_id", selectedGame.id);

      if (error) {
        console.error(error);
        return;
      }

      setComments(data || []);

      // Controlla se l'utente corrente ha già commentato il gioco
      const userComment = data.find(
        (comment) => comment.profile_id === session.user.id
      );
      if (userComment) {
        setUserHasCommented(true); // Imposta lo stato a true se l'utente ha già commentato
      }
    }

    fetchComments();
  }, [selectedGame.id, session.user.id]);

  return (
    <div className="container px-5 ms-5">
      {comments.length > 0 && <Comment />}
      <div className="d-flex justify-content-center align-items-center">
        <div className="form-container-recenzioni">
          {!userHasCommented && (
            <form className="form" onSubmit={handleCommentSubmit}>
              <div>
                <h1 className="text-dark fw-bold">Inserisci una recenzione </h1>
                <h5 className="text-dark fw-bold h5">
                  per <span className="text-danger">{selectedGame.title}</span>{" "}
                </h5>
              </div>

              <div className="form-group my-3">
                <label htmlFor="email">Inserisci un titolo</label>
                <input type="text" id="title" name="title" />
              </div>
              <div className="form-group my-3">
                <label htmlFor="password">Inserisci un commento</label>
                <textarea
                  type="text"
                  id="content"
                  name="content"
                  className="text-area"
                />
              </div>
              <button type="submit" className="form-submit-btn">
                Pubblica
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;
