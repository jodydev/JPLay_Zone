import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function PaymentForm({ games }) {
  const { id} = useParams(); // Estraiamo l'id dal parametro dell'URL
  console.log("ID:", id);
  // Concatena tutti gli array all'interno di 'games' in un unico array
  const flattenedGames = games.flat();
  console.log("Flattened Games:", flattenedGames);
  // Trova il gioco selezionato corrispondente all'ID

  const selectedGame = flattenedGames.find((game) => game.id == id && game.category == game.category);
  console.log("Selected Game:", selectedGame);


  return (
    <div className="container-fluid">
      <div className="row">

        <div className="col-12 col-lg-6">
          <div className="container slide-in-left">
              <div className="row d-flex justify-content-center">
                <div  className="col-12 d-flex justify-content-center">
                  <img src={selectedGame.img} className="w-75 my-5 p-0 p-lg-5 details-img" />
                </div>
              </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
                    <div className="container slide-in-right shadow-lg rounded-4 my-5 p-5">

                      <h1 className="my-3 fw-normal fs-3">{selectedGame.title}</h1>
                      <h2 className="my-3 fw-bold fs-1">{selectedGame.price}€</h2>
                      <Rating name="size-large"
                      defaultValue={2}
                      size="large" 
                      />
        
                      <div className="container my-3">
                        <div className="row">
                          <div className="col-lg-5 p-1">
                            <p className="text-nowrap"><i class="fa-solid fa-circle-check" style={{color: "green",}}></i> Consegna a domicilio</p>
                          </div>
                          <div className="col-lg-4 p-1">
                            <p><i class="fa-solid fa-circle-check" style={{color: "green",}}></i> Reso gratuito</p>
                          </div>
                          <div className="col-lg-3 p-1">
                            <p><i class="fa-solid fa-circle-check" style={{color: "green",}}></i> Sconto 10%</p>
                          </div>
                        </div>
                      </div>

                      <div className="container my-3">
                        <div className="row">
                          <div className="col-lg-4 col-6 px-2" >
                            <img src="/assets/img/sponsor/klarna.avif"  className="rounded-4 w-100 shadow-lg" alt="Klarna" />
                          </div>
                          <div className="col-lg-4 col-6 px-2" >
                            <img src="/assets/img/sponsor/paypall.png"  className="rounded-4 w-100 shadow-lg" alt="PayPal" />
                          </div>
                        </div>
                      </div>

                      <div className="container">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="mt-4">
                              <Link to="/">
                                <button id="button-details" className="btn btn-danger rounded-4 w-100 p-2">
                                Acquista Ora
                                </button>
                              </Link>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mt-4">
                            <Link to="/">
                              <button id="button-cart" className="btn btn-danger rounded-4 w-100 p-2">
                                <i class="fa-solid fa-cart-shopping mx-3" style={{color: "red",}}></i> 
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
                              <li className="fw-bold">Piattaforma: <span className=" fw-normal">{selectedGame.platform}</span> </li>
                              <li className="fw-bold">Genere: <span className=" fw-normal">{selectedGame.category}</span> </li>
                              <li className="fw-bold">Disponibilità: 
                              {selectedGame ? (
                                <span className=" fw-normal"> Disponibile</span> 
                              ) : (
                                <span className='fw-normal'> Non disponibile</span>
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


