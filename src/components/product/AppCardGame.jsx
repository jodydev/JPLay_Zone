function AppCardGame({ gameData }) {
  return (
    
     <div className="d-flex flex-wrap">

     
      {gameData.map(game => (

        <div className="col-4 flip-card mx-3 my-5 ">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <img src={game.img[0]} alt={game.title} className="card-img-top w-100 rounded-3" />
                </div>
                <div className="flip-card-back">
                  <div className="card-body text-center w-100 justify-content-center d-flex align-items-center flex-wrap rounded-4 shadow-lg">

                        <div className="container">
                        <h3 className="card-title single-line-text fs-5 my-3">{game.title}</h3>
                        </div>
                        
                        <div className="container">
                          <h6 className="fs-3 card-price">{game.price} €</h6>
                        </div>
                    
                        <div className="container">
                          <span className="card-span ">
                            {game.disponibility ? 'Disponibile ' : 'Non disponibile '}
                          </span>
                        
                          {game.disponibility ? (
                            <span>🟢</span>
                          ) : (
                            <span>🔴</span>)
                          }
                        </div>

                        <div className="d-flex justify-content-center my-2">
                          <button id="button-details" className="btn btn-danger">
                            Scopri
                          </button>
                        </div>
                      </div>
                </div>
            </div>
        </div>

      ))}

</div>

  );
}

export default AppCardGame;

