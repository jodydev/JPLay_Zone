import { createContext, useState, useContext, useEffect } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameData, setGameData] = useState([]);

  const [gamePs5, setGamePs5] = useState([]);
  const [gameXbox, setGameXbox] = useState([]);
  const [gameNintendo, setGameNintendo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://data-omega-five.vercel.app/data.json"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setGameData(data.games);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (Array.isArray(gameData)) {
      const ps5Games = gameData.filter((game) => game.platform === "PS5");
      const xboxGames = gameData.filter((game) => game.platform === "Xbox One");
      const nintendoGames = gameData.filter(
        (game) => game.platform === "Nintendo Switch"
      );

      setGamePs5(ps5Games);
      setGameXbox(xboxGames);
      setGameNintendo(nintendoGames);
    }
  }, [gameData]);

  return (
    <GameContext.Provider
      value={{ gameData, setGameData, gamePs5, gameXbox, gameNintendo }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
