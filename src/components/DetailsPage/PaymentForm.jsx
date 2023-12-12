import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useGameContext } from "../../contexts/GameContext";
import { useState, useEffect } from "react";
import useProfile from "../../hooks/useProfile";
import supabase from "../../supabase/client";

function PaymentForm() {
  const { gameData } = useGameContext();

  const { profile } = useProfile();

  const { id } = useParams(); // Estraiamo l'id dal parametro dell'URL

  const selectedGame = gameData.find((game) => game.id == id);

  const [fav, setFav] = useState([]);

  // Ottiene i giochi preferiti per un profilo specifico
  const getFavGame = async () => {
    const { data, error } = await supabase
      .from("favorites")
      .select("*")
      .eq("game_id", selectedGame.id)
      .eq("profile_id", profile.id);
    if (error) {
      // Gestisce gli errori durante il recupero dei giochi preferiti
      // eslint-disable-next-line no-alert
      alert(error.message);
    } else {
      setFav(() => [...data]);
    }
  };

  // Aggiunge un gioco ai preferiti
  const addToFavorites = async () => {
    const { error } = await supabase
      .from("favorites")
      .insert([
        {
          game_id: selectedGame.id,
          game_name: selectedGame.title,
          game_category: selectedGame.category,
          game_platform: selectedGame.platform,
        },
      ])
      .select();
    if (error) {
      // Gestisce gli errori durante l'aggiunta del gioco ai preferiti
      // eslint-disable-next-line no-alert
      alert(error.message);
    } else {
      getFavGame();
    }
  };

  // Rimuove un gioco dai preferiti
  const removeFromFavorites = async () => {
    const { error } = await supabase
      .from("favorites")
      .delete()
      .eq("game_id", selectedGame.id)
      .eq("profile_id", profile.id);
    if (error) {
      // Gestisce gli errori durante la rimozione del gioco dai preferiti
      // eslint-disable-next-line no-alert
      alert(error.message);
    } else {
      getFavGame();
    }
  };

  // Effettua il recupero dei giochi preferiti al caricamento della pagina, se è presente un profilo
  useEffect(() => {
    if (profile) {
      getFavGame();
    }
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-12 d-flex justify-content-center">
                <img
                  src={selectedGame.img}
                  className="w-75 my-5 p-2 p-lg-5 details-img slide-in-blurred-left position-relative"
                />

                {profile && (
                  <div>
                    {fav.length !== 0 ? (
                      <button
                        className="button-favorites"
                        type="button"
                        onClick={removeFromFavorites}
                      >
                        <span
                          class="d-flex justify-content-center align-items-center fs-2"
                          aria-label="Rimuovi dai preferiti!"
                        >
                          <i class="fa-solid fa-heart-circle-check love"></i>
                        </span>
                      </button>
                    ) : (
                      <button
                        className="button-favorites"
                        type="button"
                        onClick={addToFavorites}
                      >
                        <span
                          class="d-flex justify-content-center align-items-center fs-2"
                          aria-label="Aggiungi ai preferiti!"
                        >
                          <i className="fa-regular fa-heart love fs-2"></i>
                        </span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="container slide-in-blurred-right shadow-lg rounded-4 my-5 p-5">
            <h1 className="my-3 fw-normal fs-3">{selectedGame.title}</h1>
            <h2 className="my-3 fw-bold fs-1">{selectedGame.price}€</h2>

            <div className="container my-3">
              <div className="row">
                <div className="col-lg-5 p-1">
                  <p className="text-nowrap">
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "green" }}
                    ></i>{" "}
                    Consegna a domicilio
                  </p>
                </div>
                <div className="col-lg-4 p-1">
                  <p>
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "green" }}
                    ></i>{" "}
                    Reso gratuito
                  </p>
                </div>
                <div className="col-lg-3 p-1">
                  <p>
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "green" }}
                    ></i>{" "}
                    Sconto 10%
                  </p>
                </div>
              </div>
            </div>

            <div className="container my-3">
              <div className="row">
                <div className="col-lg-4 col-6 px-2">
                  <Link to="https://www.klarna.com/it/paga-in-3-rate/">
                    <img
                      src="/assets/img/sponsor/klarna.avif"
                      className="rounded-4 w-100 shadow-lg"
                      alt="Klarna"
                    />
                  </Link>
                </div>
                <div className="col-lg-4 col-6 px-2">
                  <Link to="https://www.paypal.com/it/webapps/mpp/paga-in-3-rate">
                    <img
                      src="/assets/img/sponsor/paypall.png"
                      className="rounded-4 w-100 shadow-lg"
                      alt="PayPal"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="mt-4">
                    <Link to="/">
                      <button
                        id="button-details"
                        className="btn btn-danger rounded-4 w-100 p-2"
                      >
                        Acquista Ora
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mt-4">
                    <Link to="/">
                      <button
                        id="button-cart"
                        className="btn btn-danger rounded-4 w-100 p-2"
                      >
                        <i
                          className="fa-solid fa-cart-shopping mx-3"
                          style={{ color: "red" }}
                        ></i>
                        Aggiungi al carrello
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="container mt-5">
              <div className="row">
                <div className="col-12">
                  <h5 className="fw-bold ">Infomazioni su questo articolo</h5>
                  <ul className="fs-6 my-3">
                    <li className="fw-bold">
                      Piattaforma:{" "}
                      <span className=" fw-normal">
                        {selectedGame.platform}
                      </span>{" "}
                    </li>
                    <li className="fw-bold">
                      Genere:{" "}
                      <span className=" fw-normal">
                        {selectedGame.category}
                      </span>{" "}
                    </li>
                    <li className="fw-bold">
                      Disponibilità:
                      {selectedGame ? (
                        <span className=" fw-normal text-nowrap">
                          {" "}
                          Disponibile
                          <i
                            className="fa-solid fa-circle-check ms-1"
                            style={{ color: "green" }}
                          ></i>
                        </span>
                      ) : (
                        <span className="fw-normal text-nowrap">
                          {" "}
                          Non disponibile
                          <i
                            className="fa-solid fa-circle-xmark ms-1"
                            style={{ color: "red" }}
                          ></i>
                        </span>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
