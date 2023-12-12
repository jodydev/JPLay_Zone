import { createContext, useState, useContext, useEffect } from "react";

// Creazione del contesto per i dati relativi ai giochi
const GameContext = createContext();

// Provider del contesto per i dati relativi ai giochi
export const GameProvider = ({ children }) => {
  // Stati per memorizzare i dati relativi ai giochi
  const [gameData, setGameData] = useState([]);
  const [gamePs5, setGamePs5] = useState([]);
  const [gameXbox, setGameXbox] = useState([]);
  const [gameNintendo, setGameNintendo] = useState([]);

  // Effetto per recuperare i dati relativi ai giochi da una fonte esterna
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

  // Effetto per filtrare i giochi per piattaforma una volta che i dati sono stati ottenuti
  useEffect(() => {
    if (Array.isArray(gameData)) {
      const ps5Games = gameData.filter((game) => game.platform === "PS5");
      const xboxGames = gameData.filter((game) => game.platform === "Xbox One");
      const nintendoGames = gameData.filter(
        (game) => game.platform === "Nintendo Switch"
      );

      // Imposta gli stati dei giochi filtrati per piattaforma
      setGamePs5(ps5Games);
      setGameXbox(xboxGames);
      setGameNintendo(nintendoGames);
    }
  }, [gameData]);

  // Fornisce i dati relativi ai giochi attraverso il contesto
  return (
    <GameContext.Provider
      value={{ gameData, setGameData, gamePs5, gameXbox, gameNintendo }}
    >
      {children}
    </GameContext.Provider>
  );
};

// Hook per utilizzare i dati relativi ai giochi dal contesto
export const useGameContext = () => useContext(GameContext);
