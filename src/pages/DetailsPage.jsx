import { useState } from "react";
import PaymentForm from "../components/PaymentForm";
import DetailsLayout from "../components/DetailsLayout";

function DetailsPage() {

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
            "title": "Mortal Kombat",
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

  const [games] = useState(data[0].concat(data[1]));

  return (

    <DetailsLayout>
      <PaymentForm games={games} />
    </DetailsLayout>
  );
}

export default DetailsPage;
