import { Link } from "react-router-dom";
import React, { useState } from "react";

const GameSearch = ({ games }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredGames, setFilteredGames] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value.trim().toLowerCase();
    setSearchTerm(term);

    const filtered = games.filter((game) => {
      const gameTitle = game.title.trim().toLowerCase();
      return gameTitle.includes(term);
    });

    setFilteredGames(filtered);
  };

  return (
    <div className="container px-5 my-5 py-3 my-container">
      <div className="row">
        <div className="col-12">
          <h1 className="fw-bold title-search px-4">
            Cerca il tuo gioco preferito
          </h1>
          <input
            class="input"
            name="text"
            type="text"
            placeholder="Inserisci un titolo.."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className="container py-5 px-5">
          <div className="row">
            {searchTerm && filteredGames.length === 0 && (
              <p className="text-center fw-bold">
                Nessun gioco trovato per "{searchTerm}"
              </p>
            )}

            {searchTerm && filteredGames.length > 0 && (
              <div className="d-flex flex-wrap">
                {filteredGames.map((game) => (
                  <div key={game.id} className="col-3">
                    <div
                      className="col-5 flip-card mx-5 my-5 flip-in-hor-bottom"
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
                                  class="fa-solid fa-circle-check"
                                  style={{ color: "green" }}
                                ></i>
                              </span>
                            ) : (
                              <span>
                                <i
                                  class="fa-solid fa-circle-xmark"
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
};

export default GameSearch;