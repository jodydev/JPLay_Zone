import supabase from "../supabase/client";
import formatMessageDate from "../utils/formatMessageDate";

import { useParams } from "react-router-dom";
import { useGameContext } from "../contexts/GameContext";
import { useState, useEffect } from "react";
import useProfile from "../hooks/useProfile";


// Import Swiper styles
import 'swiper/css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore from 'swiper/core';

import { EffectCards } from 'swiper/modules';

 SwiperCore.use([EffectCards]);


function Comments() {
  const [comments, setComments] = useState([]);

  const { gameData } = useGameContext();

  const { profile } = useProfile();

  const { id } = useParams();

  const selectedGame = gameData.find((game) => game.id == id);

  useEffect(() => {
    const getComments = async () => {
      const { data, error } = await supabase
        .from("comments")
        .select("*, profile: profiles(*)")
        .eq("game_id", selectedGame.id);
      if (error) {
        alert(error.message);
      } else {
        setComments(data);
        console.log(data);
      }
    };
    getComments();
  }, []);

  return (
    <div className="container">
      <Swiper
         effect={'cards'}
         grabCursor={true}
         modules={[EffectCards]}
         className="mySwiper "
         
      >
        {comments &&
          comments.map((comment) => (
            <SwiperSlide className="swiper" key={comment.id}>
              <div className="row p-3 d-flex justify-content-center align-items-center">
                <div className="col-3 ">
                  <img
                    src={comment.profile.avatar_url}
                    className="rounded-circle user_img_recenzioni ms-2"
                  />
                </div>
                <div className="col-9">
                  <p className="text-muted h5">
                    Publicato da
                    <span className="h5 fw-bold ">
                      {" "}
                      {comment.profile.username}
                    </span>
                  </p>
                  <p className="text-dark h6">
                    il {formatMessageDate(comment.created_at)}
                  </p>
                </div>

                <p className="text-muted fw-bold h4 mt-4">
                  {comment.comment_title}
                </p>
                <p className="text-dark fw-bold h5">
                  {comment.comment_content}
                </p>

                <p className="text-italic h6 d-flex justify-content-end">
                  {formatMessageDate(comment.created_at)}
                </p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default Comments;
