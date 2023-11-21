import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useParams } from "react-router-dom";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function CustomizedBreadcrumbs({ games }) {
  const { id } = useParams(); // Estraiamo l'id dal parametro dell'URL
  console.log("ID:", id);
  // Concatena tutti gli array all'interno di 'games' in un unico array

  const selectedGame = games.find((game) => game.id == id);
  console.log("Gioco selezionato:", selectedGame);

  return (
    <div className="container slide-in-blurred-left">
      <div className="my-3" role="presentation" onClick={handleClick}>
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
