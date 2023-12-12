import { useParams } from "react-router-dom";
import { useGameContext } from "../contexts/GameContext";
import { useState, useEffect, useContext } from "react";
import supabase from "../supabase/client";
import AppContext from "../contexts/AppContext";
import useProfile from "../hooks/useProfile";
import Comment from "./Comment";

function ReviewForm() {
  const { gameData } = useGameContext();

  const { profile } = useProfile();

  const { session } = useContext(AppContext);

  const { id } = useParams();

  const [comments, setComments] = useState([]);
  const [userHasCommented, setUserHasCommented] = useState(false);
  const selectedGame = gameData.find((game) => game.id == id);

  // Funzione per inviare un commento
  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    const commentForm = event.currentTarget;
    const { title, content } = Object.fromEntries(new FormData(commentForm));

    // Verifica se il titolo e il contenuto sono stringhe non vuote
    if (
      typeof title === "string" &&
      typeof content === "string" &&
      title.trim().length !== 0 &&
      content.trim().length !== 0
    ) {
      // Inserisce il commento nel database
      const { data, error } = await supabase
        .from("comments")
        .insert([
          {
            game_id: selectedGame.id,
            game_name: selectedGame.title,
            comment_title: title,
            comment_content: content,
            game_category: selectedGame.category,
            game_platform: selectedGame.platform,
          },
        ])
        .select();

      if (error) {
        // Mostra un messaggio di errore in caso di errore nell'inserimento del commento
        alert(error.message);
      } else {
        // Resettare il form e aggiornare lo stato dei commenti
        commentForm.reset();
        setComments([...comments, ...data]);
      }
    }
  };

  // Effetto per recuperare i commenti relativi al gioco selezionato
  useEffect(() => {
    async function fetchComments() {
      const { data, error } = await supabase
        .from("comments")
        .select()
        .eq("game_id", selectedGame.id);

      if (error) {
        // Log dell'errore nel recupero dei commenti
        console.error(error);
        return;
      }

      // Imposta lo stato dei commenti con i dati ottenuti
      setComments(data || []);

      // Controlla se l'utente corrente ha già commentato il gioco
      const userComment = data.find(
        (comment) => comment.profile_id === session.user.id
      );
      if (userComment) {
        setUserHasCommented(true); // Imposta lo stato a true se l'utente ha già commentato
      }
    }

    // Richiama la funzione per recuperare i commenti quando cambia il gioco selezionato o l'utente
    fetchComments();
  }, [selectedGame.id, session.user.id]);

  return (
    <div className="container">
      <div className="row">
        {comments.length === 0 ? (
          <div className=" my-5 px-5">
            <h2 className="fs-1 fw-bold">Ancora nessuna recensione</h2>
            <p className="fs-5 text-muted">
              Pubblica per primo una recenzione su questo gioco!
            </p>
          </div>
        ) : (
          <>
            <h2 className="fs-1 fw-bold my-5 px-5">
              Le recensioni dei nostri clienti!{" "}
              <span className="pt-3">
                <i class="fa-solid fa-comments"></i>
              </span>
            </h2>
            <div className="container p-5">
              {comments.length > 0 && <Comment />}
            </div>
          </>
        )}
      </div>

      <div className="container p-5">
        {!userHasCommented && (
          <div className="form-container-recenzioni my-5 py-5 my-shadow w-100">
            <form className="form" onSubmit={handleCommentSubmit}>
              <div>
                <h1 className="text-dark fw-bold">Inserisci una recenzione </h1>
                <h5 className="text-dark fw-bold h5">
                  per <span className="text-danger">{selectedGame.title}</span>{" "}
                </h5>
              </div>

              <div className="form-group my-0 my-lg-3 ">
                <label htmlFor="email">Inserisci un titolo</label>
                <input type="text" id="title" name="title" />
              </div>
              <div className="form-group my-0 my-lg-3">
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
          </div>
        )}
      </div>
    </div>
  );
}

export default ReviewForm;
