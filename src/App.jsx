import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/Layout";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import GameSearch from "./pages/GameSearch";
import RouteNotFound from "./pages/RouteNotFound";

import "./assets/css/AppNavbar.css";
import "./assets/css/AppCarouselHero.css";
import "./assets/css/AppProducts.css";
import "./assets/css/AppCardGame.css";

export function App() {
  const data = [
    [
      {
        id: 1,
        title: "SpiderMan 2",
        category: "Azione",
        platform: "PS5",
        price: 69.99,
        disponibility: true,
        img: ["/assets/img/game-cover/game-ps5/spidermain.jpeg"],
      },
      {
        id: 2,
        title: "Mortal Kombat",
        category: "Azione",
        platform: "PS5",
        price: 39.99,
        disponibility: true,
        img: ["/assets/img/game-cover/game-ps5/mortal-kombat.jpeg"],
      },
      {
        id: 3,
        title: "Gran Turismo 7",
        category: "Auto",
        platform: "PS5",
        price: 59.99,
        disponibility: false,
        img: ["/assets/img/game-cover/game-ps5/gran-turismo-7.jpeg"],
      },
      {
        id: 4,
        title: "Assassin's Creed",
        category: "Action",
        platform: "PS5",
        price: 89.99,
        disponibility: true,
        img: ["/assets/img/game-cover/game-ps5/assassins-creed.jpeg"],
      },
      {
        id: 5,
        title: "FC 24",
        category: "Football",
        platform: "PS5",
        price: 89.99,
        disponibility: true,
        img: ["/assets/img/game-cover/game-ps5/fc24.jpeg"],
      },
      {
        id: 6,
        title: "Avatar",
        category: "Fantasy",
        platform: "PS5",
        price: 79.99,
        disponibility: true,
        img: ["/assets/img/game-cover/game-ps5/avatar.jpeg"],
      },
      {
        id: 7,
        title: "Final Fantasy XV",
        category: "Fantasy",
        platform: "PS5",
        price: 49.99,
        disponibility: true,
        img: ["/assets/img/game-cover/game-ps5/final-fantasy.jpeg"],
      },
      {
        id: 8,
        title: "Prince Of Persia",
        category: "Fantasy",
        platform: "PS5",
        price: 39.99,
        disponibility: true,
        img: ["/assets/img/game-cover/game-ps5/prince-of-persia.jpeg"],
      },
    ],
    [
      {
        id: 9,
        title: "WereWolf",
        category: "Fantasy",
        platform: "Xbox",
        price: 69.99,
        disponibility: true,
        img: [
          "https://cdn.gamestorm.it/resized/568x/upload/bfcaf859a8-XSX.jpg",
        ],
      },
      {
        id: 10,
        title: "Watch Dogs Legion",
        category: "Sparatutto",
        platform: "Xbox",
        price: 39.99,
        disponibility: true,
        img: [
          "https://cdn.gamestorm.it/resized/568x/upload/b483befa47-XSX.jpg",
        ],
      },
      {
        id: 11,
        title: "Call OF Duty",
        category: "Azione",
        platform: "Xbox",
        price: 59.99,
        disponibility: false,
        img: [
          "https://cdn.gamestorm.it/resized/568x/upload/861a046aab-XSX_2D_IT.jpg",
        ],
      },
      {
        id: 12,
        title: "Assassin's Creed Valhalla",
        category: "Action",
        platform: "Xbox",
        price: 89.99,
        disponibility: true,
        img: [
          "https://cdn.gamestorm.it/resized/568x/upload/00830bc9d7-XSX.jpg",
        ],
      },
      {
        id: 13,
        title: "WRC 10",
        category: "Motori",
        platform: "Xbox",
        price: 89.99,
        disponibility: true,
        img: [
          "https://cdn.gamestorm.it/resized/568x/upload/485400c58e-XBX_WRC10_2D_PEGI_HYUNDAI.png",
        ],
      },
      {
        id: 14,
        title: "Far Cry 6",
        category: "Fantasy",
        platform: "Xbox",
        price: 79.99,
        disponibility: true,
        img: [
          "https://cdn.gamestorm.it/resized/568x/upload/92e4379722-XSX.jpg",
        ],
      },
      {
        id: 15,
        title: "NBA 20K1",
        category: "Sport",
        platform: "Xbox",
        price: 49.99,
        disponibility: true,
        img: [
          "https://cdn.gamestorm.it/resized/568x/upload/11dd947ae7-XSX.jpg",
        ],
      },
      {
        id: 16,
        title: "Mortal Kombat 11",
        category: "Fantasy",
        platform: "Xbox",
        price: 39.99,
        disponibility: true,
        img: [
          "https://cdn.gamestorm.it/resized/568x/upload/4723e092f5-XSX.jpg",
        ],
      },
    ],
    [
      {
        id: 17,
        title: "Super Mario",
        category: "Fantasy",
        platform: "Nintendo",
        price: 69.99,
        disponibility: true,
        img: ["/assets/img/nintendo/supermario.jpeg"],
      },
      {
        id: 18,
        title: "Ben Ten",
        category: "Fantasy",
        platform: "Nintendo",
        price: 39.99,
        disponibility: true,
        img: ["/assets/img/nintendo/benten.jpeg"],
      },
      {
        id: 19,
        title: "Hot Wheels",
        category: "Auto",
        platform: "Nintendo",
        price: 59.99,
        disponibility: false,
        img: ["/assets/img/nintendo/hotwheels.jpg"],
      },
      {
        id: 20,
        title: "Monkey",
        category: "Fantasy",
        platform: "Nintendo",
        price: 89.99,
        disponibility: true,
        img: ["/assets/img/nintendo/monkey.jpeg"],
      },
      {
        id: 21,
        title: "Naruto",
        category: "Fantasy",
        platform: "Nintendo",
        price: 89.99,
        disponibility: true,
        img: ["/assets/img/nintendo/naruto.jpeg"],
      },
      {
        id: 22,
        title: "Spyro",
        category: "Fantasy",
        platform: "Nintendo",
        price: 79.99,
        disponibility: true,
        img: ["/assets/img/nintendo/spyro.jpeg"],
      },
      {
        id: 23,
        title: "Ary",
        category: "Fantasy",
        platform: "Nintendo",
        price: 49.99,
        disponibility: true,
        img: ["/assets/img/nintendo/ary.jpeg"],
      },
      {
        id: 24,
        title: "Mortal Kombat 11",
        category: "Fantasy",
        platform: "Nintendo",
        price: 39.99,
        disponibility: true,
        img: ["/assets/img/nintendo/animal-crossing.jpeg"],
      },
      {
        id: 25,
        title: "Witcher",
        category: "Fantasy",
        platform: "Nintendo",
        price: 39.99,
        disponibility: true,
        img: ["/assets/img/nintendo/witcher.jpeg"],
      },
      {
        id: 26,
        title: "Doraemon",
        category: "Fantasy",
        platform: "Nintendo",
        price: 39.99,
        disponibility: true,
        img: ["/assets/img/nintendo/doraemon.jpeg"],
      },
    ],
  ];

  const [gamePs5] = useState(data[0]);
  const [gameXbox] = useState(data[1]);
  const [gameNintendo] = useState(data[2]);
  const allGames = data.flat(); // Combinazione di tutti i giochi in un unico array

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              gamePs5={gamePs5}
              gameXbox={gameXbox}
              gameNintendo={gameNintendo}
            />
          }
        />
        <Route path="/details/:id" element={<DetailsPage games={allGames} />} />
        <Route path="/searchGame" element={<GameSearch games={allGames} />} />
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
    </Layout>
  );
}

function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Root;
