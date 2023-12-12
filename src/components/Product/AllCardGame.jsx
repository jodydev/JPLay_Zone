import { Link } from "react-router-dom";
import { useGameContext } from "../../contexts/GameContext";

function AllCardGame() {
  const { gameData } = useGameContext();

  const games = gameData;

  const getCardClass = (platform) => {
    if (platform === "PS5") {
      return "blue-border";
    } else if (platform === "Xbox One") {
      return "green-border";
    } else if (platform === "Nintendo Switch") {
      return "red-border";
    }
    return "";
  };

  const handleClickToShowDetail = () => {
    // Reset dello scroll prima di navigare alla pagina di dettaglio
    window.scrollTo(0, 0);
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

              <div className={`flip-card-back ${getCardClass(game.platform)}`}>
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
                      onClick={handleClickToShowDetail}
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
        ))}
      </div>
    </div>
  );
}

export default AllCardGame;
