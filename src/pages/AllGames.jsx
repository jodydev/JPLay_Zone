import { useGameContext } from "../contexts/GameContext";
import AllCardGame from "../components/Product/AllCardGame";

function AllGames() {
  const { gameData } = useGameContext();

  return (
    <div className="container py-5 ">
      <h1 className="fw-bold">Tutti i giochi</h1>
      <div className="container">
        <AllCardGame />
      </div>
    </div>
  );
}

export default AllGames;
