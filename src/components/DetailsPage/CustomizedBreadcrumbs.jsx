import { useParams } from "react-router-dom";
import { useGameContext } from "../../contexts/GameContext";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event) {
  event.preventDefault();
}

export default function CustomizedBreadcrumbs() {
  const { gameData } = useGameContext();

  const { id } = useParams();

  const selectedGame = gameData.find((game) => game.id == id);

  return (
    <div className="container slide-in-blurred-left">
      <div className="my-0 my-lg-3 " role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            to="/"
            className="fw-bold"
          >
            <img src={selectedGame.svg} className="svg" />
            {selectedGame.platform}
          </Link>
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            className="fw-bold"
          >
            <img src="/assets/img/pad-svg.png" className="svg" />
            {selectedGame.title}
          </Typography>
        </Breadcrumbs>
      </div>
    </div>
  );
}
