import { Link } from "react-router-dom";

function CardGame({ gamePs5, gameXbox, gameNintendo }) {

   const handleClickToShowDetail = () => {
    // Reset dello scroll prima di navigare alla pagina di dettaglio
     window.scrollTo(0, 0);
}

  const games = gamePs5 || gameXbox || gameNintendo || []; // Usa i dati di PS5 se sono disponibili, altrimenti quelli di Xbox o di nintendo

  const getCardClass = () => {
    if (gamePs5) {
      return "card-body blue-border text-center w-100 justify-content-center d-flex align-items-center flex-wrap rounded-4 shadow-lg"; // Applica la classe blue-border se gamePs5 è passato
    } else if (gameXbox) {
      return "card-body green-border text-center w-100 justify-content-center d-flex align-items-center flex-wrap rounded-4 shadow-lg"; // Applica la classe green-border se gameXbox è passato
    } else if (gameNintendo) {
      return "card-body red-border text-center w-100 justify-content-center d-flex align-items-center flex-wrap rounded-4 shadow-lg"; // Applica la classe red-border se gameNintendo è passato
    }
  };

  return (
    <div className="container-fluid">
      <div className="d-flex flex-nowrap flex-lg-wrap my-overflow-x-scroll">
        {games.map((game) => (
          <div
            className="col-4 flip-card mx-3 my-5 slide-in-blurred-top"
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

              <div className="flip-card-back">
                <div className={getCardClass()}>
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
                      {game.disponibility ? "Disponibile " : "Non disponibile "}
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
                      <button onClick={handleClickToShowDetail} id="button-details" className="btn btn-danger">
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
    </div>
  );
}

export default CardGame;
