import CardGame from "./CardGame";
import { useGameContext } from "../../contexts/GameContext";

function NintendoSwitch() {
  const { gameNintendo } = useGameContext();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-4">
          <div className="container set-bg col-sx-nintendo rounded-4 transition shadow-lg w-75 my-5 py-3">
            <img src="/assets/img/nintendo/switch.png" className=" w-100 p-4" />
          </div>

          <div className="container set-bg col-sx-nintendo my-5 rounded-4 transition shadow-lg w-75">
            <img src="/assets/img/nintendo/logo.png" className=" w-100 p-4" />
          </div>
        </div>

        <div className="col-12 col-lg-8">
          
          <CardGame gameNintendo={gameNintendo} />

          <div className="row d-none d-lg-block">
            <div className="col-5 offset-6">
              <span className="d-flex justify-content-end text-decoration-underline fs-6 ">
                <a href="#" className="my-span">
                  <i className="fa-solid fa-share"></i> Scopri altro
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NintendoSwitch;
