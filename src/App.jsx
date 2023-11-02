import { useState } from "react";

import './assets/css/AppNavbar.css'
import './assets/css/AppCarouselHero.css'
import './assets/css/AppProducts.css'
import './assets/css/AppCardGame.css'
import './index.css'


import AppButtonGoOnTop from './components/AppButtonGoOnTop';
import AppNavbar from './components/Navbar/AppNavbar';
import AppCarouselHero from './components/AppCarouselHero';
import AppPs5Products from './components/product/AppPs5Products';
import AppLogoShowCase from "./components/AppLogoShowCase";
import AppSponsorBannerKlarna from "./components/AppSponsorBannerKlarna";
import AppXboxProducts from './components/product/AppXboxProducts';
import AppSponsorBannerPayPal from "./components/AppSponsorBannerPayPal";
import AppFooter from "./components/AppFooter";



const data = [
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
  }
];


function App() {

  const [gameData] = useState(data);

  return (
          <>

            <AppButtonGoOnTop />

            <AppNavbar />

            <AppCarouselHero />

            <AppLogoShowCase />
    
            <AppPs5Products gameData={gameData} />

            <AppSponsorBannerKlarna />

            <AppXboxProducts gameData={gameData} />

            <AppSponsorBannerPayPal />


            

            {/* <AppFooter /> */}

          </>
  );
}

export default App;
