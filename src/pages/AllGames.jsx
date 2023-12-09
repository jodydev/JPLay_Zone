import { useGameContext } from "../contexts/GameContext";

function AllGames() {
  const { gameData } = useGameContext();

  console.log(gameData);

  <div className="container">
    <h1>Tutti i giochi</h1>
    {gameData.map((game) => (
      <div key={game.id}>
        <h2>{game.title}</h2>
        <img src={game.img}/>
      </div>
    ))}
  </div>;
}

export default AllGames;
