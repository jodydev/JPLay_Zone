import { Link } from "react-router-dom";
import { useGameContext } from "../contexts/GameContext";
import { useState } from "react";

function GameSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredGames, setFilteredGames] = useState([]);
  const { gameData } = useGameContext();

  // Funzione per gestire la ricerca dei giochi
  const handleSearch = (e) => {
    // Ottiene il termine di ricerca e lo normalizza
    const term = e.target.value.trim().toLowerCase();

    // Imposta il termine di ricerca nello stato
    setSearchTerm(term);

    // Filtra i giochi in base al termine di ricerca
    const filtered = gameData.filter((game) => {
      // Normalizza il titolo del gioco e confronta con il termine di ricerca
      const gameTitle = game.title.trim().toLowerCase();
      return gameTitle.includes(term);
    });

    // Imposta i giochi filtrati nello stato
    setFilteredGames(filtered);
  };

  return (
    <div className="container px-5 my-5 py-3 my-container">
      <div className="row">
        <div className="col-12">
          <h1 className="fw-bold title-search text-center text-lg-start">
            Cerca il tuo gioco preferito
          </h1>
          <input
            className="input"
            name="text"
            type="text"
            placeholder="Inserisci un titolo.."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className="container p-0 p-lg-5">
          <div className="row">
            {searchTerm && filteredGames.length === 0 && (
              <p className="text-center fw-bold my-5 my-lg-0">
                Nessun gioco trovato per "{searchTerm}"
              </p>
            )}

            {searchTerm && filteredGames.length > 0 && (
              <div className="d-flex flex-nowrap flex-lg-wrap my-overflow-x-scroll">
                {filteredGames.map((game) => (
                  <div
                    key={game.id}
                    className="col-12 col-lg-3 flip-card my-5 mx-3 mx-lg-3 flip-in-hor-bottom"
                  >
                    <div
                      className="col-5 flip-card mx-5 mx-lg-0 my-3 my-lg-0 flip-in-hor-bottom"
                      key={game.id}
                    >
                      <div className="flip-card-inner">
                        <div
                          className="flip-card-front"
                          style={{
                            backgroundImage: `url(${game.img[0]})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></div>

                        <div className="flip-card-back card-body text-center w-100 justify-content-center d-flex align-items-center flex-wrap rounded-4 shadow-lg">
                          <div className="container">
                            <h3 className="card-title single-line-text fs-5 my-3">
                              {game.title}
                            </h3>
                          </div>

                          <div className="container">
                            <h6 className="fs-3 card-price">{game.price}€</h6>
                          </div>

                          <div className="container">
                            <span className="card-span ">
                              {game.disponibility
                                ? "Disponibile "
                                : "Non disponibile "}
                            </span>

                            {game.disponibility ? (
                              <span>
                                <i
                                  className="fa-solid fa-circle-check"
                                  style={{ color: "green" }}
                                ></i>
                              </span>
                            ) : (
                              <span>
                                <i
                                  className="fa-solid fa-circle-xmark"
                                  style={{ color: "red" }}
                                ></i>
                              </span>
                            )}
                          </div>

                          <div className="d-flex justify-content-center my-2">
                            <Link to={`/details/${game.id}`}>
                              <button
                                id="button-details"
                                className="btn btn-danger"
                              >
                                Scopri
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameSearch;
