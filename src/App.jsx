import { useState } from "react";

import './assets/css/AppNavbar.css'
import './assets/css/AppCarouselHero.css'
import './assets/css/AppProducts.css'
import './assets/css/AppCardGame.css'
import './index.css'

import CustomizedBreadcrumbs from "./components/CustomizedBreadcrumbs";
import AppNavbar from './components/Navbar/AppNavbar';
import AppCarouselHero from './components/AppCarouselHero';
import AppPs5Products from './components/product/AppPs5Products';
import AppLogoShowCase from "./components/AppLogoShowCase";
import AppSponsorBannerKlarna from "./components/AppSponsorBannerKlarna";
import AppXboxProducts from './components/product/AppXboxProducts';
import AppSponsorBannerPayPal from "./components/AppSponsorBannerPayPal";
import AppFooter from "./components/AppFooter";


import Rating from '@mui/material/Rating';



const data = [
  [  
    {
      "id": 1,
      "title": "SpiderMan 2",
      "category": "Azione",
      "platform": "PS5",
      "price": 69.99,
      "disponibility": true,
      "img": ["/src/assets/img/game-cover/game-ps5/spidermain.jpeg"]
    },
    {
      "id": 2,
      "title": "Mortal-Kombat",
      "category": "Azione",
      "platform": "PS5",
      "price": 39.99,
      "disponibility": true,
      "img": ["/src/assets/img/game-cover/game-ps5/mortal-kombat.jpeg"]
    },
    {
      "id": 3,
      "title": "Gran Turismo 7",
      "category": "Auto",
      "platform": "PS5",
      "price": 59.99,
      "disponibility": false,
      "img": ["/src/assets/img/game-cover/game-ps5/gran-turismo-7.jpeg"]
    },
    {
      "id": 4,
      "title": "Assassin's Creed",
      "category": "Action",
      "platform": "PS5",
      "price": 89.99,
      "disponibility": true,
      "img": ["/src/assets/img/game-cover/game-ps5/assassins-creed.jpeg"]
    },
    {
      "id": 5,
      "title": "FC 24",
      "category": "Football",
      "platform": "PS5",
      "price": 89.99,
      "disponibility": true,
      "img": ["/src/assets/img/game-cover/game-ps5/fc24.jpeg"]
    },
    {
      "id": 6,
      "title": "Avatar",
      "category": "Fantasy",
      "platform": "PS5",
      "price": 79.99,
      "disponibility": true,
      "img": ["/src/assets/img/game-cover/game-ps5/avatar.jpeg"]
    },
    {
      "id": 7,
      "title": "Final Fantasy XV",
      "category": "Fantasy",
      "platform": "PS5",
      "price": 49.99,
      "disponibility": true,
      "img": ["/src/assets/img/game-cover/game-ps5/final-fantasy.jpeg"]
    },
    {
      "id": 8,
      "title": "Prince Of Persia",
      "category": "Fantasy",
      "platform": "PS5",
      "price": 39.99,
      "disponibility": true,
      "img": ["/src/assets/img/game-cover/game-ps5/prince-of-persia.jpeg"]
    }],
    [  
      {
        "id": 1,
        "title": "WereWolf",
        "category": "Fantasy",
        "platform": "XBOX X",
        "price": 69.99,
        "disponibility": true,
        "img": ["https://cdn.gamestorm.it/resized/568x/upload/bfcaf859a8-XSX.jpg"]
      },
      {
        "id": 2,
        "title": "Watch Dogs Legion",
        "category": "Sparatutto",
        "platform": "XBOX X",
        "price": 39.99,
        "disponibility": true,
        "img": ["https://cdn.gamestorm.it/resized/568x/upload/b483befa47-XSX.jpg"]
      },
      {
        "id": 3,
        "title": "Call OF Duty",
        "category": "Azione",
        "platform": "XBOX X",
        "price": 59.99,
        "disponibility": false,
        "img": ["https://cdn.gamestorm.it/resized/568x/upload/861a046aab-XSX_2D_IT.jpg"]
      },
      {
        "id": 4,
        "title": "Assassin's Creed Valhalla",
        "category": "Action",
        "platform": "XBOX X",
        "price": 89.99,
        "disponibility": true,
        "img": ["https://cdn.gamestorm.it/resized/568x/upload/00830bc9d7-XSX.jpg"]
      },
      {
        "id": 5,
        "title": "WRC 10",
        "category": "Motori",
        "platform": "XBOX X",
        "price": 89.99,
        "disponibility": true,
        "img": ["https://cdn.gamestorm.it/resized/568x/upload/485400c58e-XBX_WRC10_2D_PEGI_HYUNDAI.png"]
      },
      {
        "id": 6,
        "title": "Far Cry 6",
        "category": "Fantasy",
        "platform": "Xbox X",
        "price": 79.99,
        "disponibility": true,
        "img": ["https://cdn.gamestorm.it/resized/568x/upload/92e4379722-XSX.jpg"]
      },
      {
        "id": 7,
        "title": "NBA 20K1",
        "category": "Sport",
        "platform": "Xbox X",
        "price": 49.99,
        "disponibility": true,
        "img": ["https://cdn.gamestorm.it/resized/568x/upload/11dd947ae7-XSX.jpg"]
      },
      {
        "id": 8,
        "title": "Mortal Kombat 11",
        "category": "Fantasy",
        "platform": "Xbox X",
        "price": 39.99,
        "disponibility": true,
        "img": ["https://cdn.gamestorm.it/resized/568x/upload/4723e092f5-XSX.jpg"]
      }
    ]
];



function App() {

  

  const [gamePs5] = useState(data[0]);
  const [gameXbox] = useState(data[1]);


  return (
          <>

            <AppNavbar />

            <AppCarouselHero />

            <AppLogoShowCase /> 

            <AppPs5Products gamePs5={gamePs5} />

            <AppSponsorBannerKlarna />

            <AppXboxProducts gameXbox={gameXbox} />

            <AppSponsorBannerPayPal />

            <AppFooter />

            <div className="container-fluid py-5 my-5">
              <AppNavbar />

              <div className="container my-5 p-0 d-flex justify-content-start">
                <CustomizedBreadcrumbs />
                </div>

              <div className="container">
                <hr />
              </div>


              <div className="row">

                <div className="p-5 col-6 ">
                  <div className="container ">
                    <div className="row d-flex justify-content-center">
                      <div className="col-12 d-flex justify-content-center offset-3 ">
                        <img src="/src/assets/img/game-cover/game-ps5/spidermain.jpeg " className="w-50 my-5 py-5 " />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 p-5">
                  <div className="container shadow-lg rounded-4">
                    <div className="row bg-secondary d-flex justify-content-center align-items-center rounded-top-4">
                      <p className="text-center mt-3 fw-bold text-light">Approfitta dello sconto del 10%</p>
                    </div>

                    <div className="container p-5">
                      <h1 className="my-3 fw-normal fs-3">Spiderman 2</h1>
                      <h2 className="my-3 fw-bold fs-1">89.99$</h2>
                      <Rating name="size-large" defaultValue={2} size="large" />

                      <div className="container my-3">
                        <div className="row">
                          <div className="col-5 p-1">
                            <p className="text-nowrap"><i class="fa-solid fa-circle-check" style={{color: "green",}}></i> Consegna a domicilio</p>
                          </div>
                          <div className="col-4 p-1">
                            <p><i class="fa-solid fa-circle-check" style={{color: "green",}}></i> Reso gratuito</p>
                          </div>
                          <div className="col-3 p-1">
                            <p><i class="fa-solid fa-circle-check" style={{color: "green",}}></i> Sconto 10%</p>
                          </div>
                        </div>
                      </div>


                      <div className="container my-3">
                        <div className="row">
                          <div className="col-6 px-2" >
                          <img src="/src/assets/img/sponsor/klarna.avif"  className="rounded-4 w-100 shadow-lg" alt="Klarna" />

                          </div>
                          <div className="col-6 px-2" >
                            <img src="/src/assets/img/sponsor/paypall.png"  className="rounded-4 w-100 shadow-lg" alt="PayPal" />

                          </div>
                        </div>
                      </div>

                      <div className="container">
                        <div className="row">
                          <div className="col-6">
                            <div className="mt-5">
                              <button id="button-details" className="btn btn-danger w-100 p-2">
                              Acquista Ora
                              </button>
                            </div>
                          </div>

                          <div className="col-6">
                            <div className="mt-5">
                              <button id="button-cart" className="btn btn-danger w-100 p-2">
                                <i class="fa-solid fa-cart-shopping mx-3" style={{color: "red",}}></i> 
                                Aggiungi al carrello
                              </button>
                            </div>
                        </div>
                        </div>          
                      </div>

                      <div className="container my-5">
                        <div className="row">
                          <div className="col-12">
                            <h5 className="fw-bold ">Infomazioni su questo articolo</h5>
                            <ul className="fs-6 my-3">
                              <li className="fw-bold">Genere: <span className=" fw-normal">Azione</span> </li>
                              <li className="fw-bold">Data di rilascio: <span className=" fw-normal">20/10/2023</span> </li>
                              <li className="fw-bold">PEGI: <span className=" fw-normal">3+</span> </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      

                    </div>
                  </div>
                  
                </div>



              </div>

              <AppFooter />
            </div>




          </>
  );
}

export default App;
