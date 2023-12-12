import { useParams } from "react-router-dom";
import { useGameContext } from "../contexts/GameContext";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import SwiperCore from "swiper/core";
import useProfile from "../hooks/useProfile";
import supabase from "../supabase/client";
import formatMessageDate from "../utils/formatMessageDate";

function Comments() {
  SwiperCore.use([EffectCards]);

  const [comments, setComments] = useState([]);

  const { gameData } = useGameContext();

  const { profile } = useProfile();

  const { id } = useParams();

  // Trova il gioco selezionato utilizzando l'ID dall'elenco di dati dei giochi
  const selectedGame = gameData.find((game) => game.id == id);

  // Effettua il recupero dei commenti associati al gioco selezionato
  useEffect(() => {
    const getComments = async () => {
      const { data, error } = await supabase
        .from("comments")
        .select("*, profile: profiles(*)")
        .eq("game_id", selectedGame.id);
      if (error) {
        // Gestisce gli errori durante il recupero dei commenti del gioco
        alert(error.message);
      } else {
        setComments(data);
      }
    };
    // Esegue il recupero dei commenti al caricamento della pagina, senza dipendenze
    getComments();
  }, []);

  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      {comments &&
        comments.map((comment) => (
          <SwiperSlide className="swiper" key={comment.id}>
            <div className="row p-3 d-flex justify-content-center align-items-center my-padding">
              <div className="col-4 col-lg-2 ">
                <img
                  src={comment.profile.avatar_url}
                  className="rounded-circle user_img_recenzioni ms-2"
                />
              </div>
              <div className="col-8 col-lg-10">
                <p className="text-muted h6">
                  Publicato da
                  <span className="h6 fw-bold ">
                    {" "}
                    {comment.profile.username}
                  </span>
                </p>
                <p className="text-dark h6">
                  il {formatMessageDate(comment.created_at)}
                </p>
              </div>
              <div className="container">
                <p className="text-muted fw-bold h4 mt-4">
                  {comment.comment_title}
                </p>
                <p className="text-dark fw-bold h5 my-3">
                  {comment.comment_content}
                </p>

                <p className="text-italic h6 d-flex justify-content-end">
                  {formatMessageDate(comment.created_at)}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default Comments;
