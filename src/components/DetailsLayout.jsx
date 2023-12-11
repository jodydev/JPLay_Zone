import { useGameContext } from "../contexts/GameContext";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomizedBreadcrumbs from "./DetailsPage/CustomizedBreadcrumbs";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import useProfile from "../hooks/useProfile";
import Messages from "./Messages";
import supabase from "../supabase/client";



function DetailsLayout({ children }) {
  const { profile } = useProfile();

  const { gameData } = useGameContext();

  const [fav, setFav] = useState([]);

  const { id } = useParams(); // Estraiamo l'id dal parametro dell'URL

  const selectedGame = gameData.find((game) => game.id == id);

  const getFavGame = async () => {
    const { data, error } = await supabase
      .from("favorites")
      .select("*")
      .eq("game_id", selectedGame.id)
      .eq("profile_id", profile.id);
    if (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    } else {
      setFav(() => [...data]);
    }
  };

  const addToFavorites = async () => {
    const { error } = await supabase
      .from("favorites")
      .insert([
        {
          game_id: selectedGame.id,
          game_name: selectedGame.name,
        },
      ])
      .select();
    if (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    } else {
      getFavGame();
    }
  };

  const removeFromFavorites = async () => {
    const { error } = await supabase
      .from("favorites")
      .delete()
      .eq("game_id", selectedGame.id)
      .eq("profile_id", profile.id);
    if (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    } else {
      getFavGame();
    }
  };

  useEffect(() => {
    if (profile) {
      getFavGame();
    }
  }, []);

  return (
    <>
      <div className="container-fluid p-0 my-5">
        <CustomizedBreadcrumbs />

        <Container maxWidth="xl">
          <Divider />
        </Container>

        <Container maxWidth="xl">
          <div className="row">{children}</div>
        </Container>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 ">
            {profile && (
              <div>
                {fav.length !== 0 ? (
                  <button type="button" onClick={removeFromFavorites}>
                    Remove from Favorites
                  </button>
                ) : (
                  <button type="button" onClick={addToFavorites}>
                    Add to Favorites
                  </button>
                )}

                <button type="button">Write a review</button>
              </div>
            )}
          </div>
          <div className="col-12 col-lg-6">
            {profile && <Messages gameData={gameData} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsLayout;
