import CardGame from "./CardGame";
import { useGameContext } from "../../contexts/GameContext";

function Ps5Products() {
  const { gamePs5 } = useGameContext();

  return (
    <div id="ps5" className="container-fluid py-0 py-lg-3 ">
      <div className="row p-0 m-0">
        <span className="text-center ">
          <img src="/assets/img/ps5/logo-ps5.png" width="200" />
        </span>

        <div className="col-lg-3 col-md-12 p-5 ">
          <div className="container rounded-4 set-bg col-sx-ps5 slide-in-blurred-left shadow-lg">
            <img src="/assets/img/ps5/ps5.png" className=" w-100 " />
          </div>

          <div className="container rounded-4 set-bg col-sx-ps5 slide-in-blurred-left my-5 shadow-lg">
            <img
              src="/assets/img/ps5/info-ps5.png"
              className=" w-100 rounded-4 "
            />
          </div>
        </div>

        <div className="col-lg-6 p-0 col-md-12 ">
          <div className="container-fluid w-100 h-100 my-5">
            <div className="row">
              <span className="text-start text-decoration-none fw-bold fs-3 ms-3">
                Più venduti
              </span>

              <CardGame gamePs5={gamePs5} />

              <div className="offset-9">
                <span className="text-end me-5 d-none d-lg-block">
                  <a href="#" className="details">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22.703"
                      height="21.928"
                    >
                      <path d="M1.056 21.928c0-6.531 5.661-9.034 10.018-9.375V18.1L22.7 9.044 11.073 0v4.836a10.5 10.5 0 0 0-7.344 3.352C-.618 12.946-.008 21 .076 21.928z" />
                    </svg>{" "}
                    Scopri di più{" "}
                  </a>
                </span>
              </div>

              <span className="text-end text-decoration-underline pe-5 fs-6 d-none d-lg-block">
                <a href="#" className="my-span">
                  <i className="fa-solid fa-share"></i> Scopri altro
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-12 p-5">
          <div className="container ">
            <img
              src="/assets/img/ps5/ps-store.jpeg"
              className=" w-100 rounded-4 my-4 mb-lg-5 shadow-lg slide-in-blurred-right"
            />
            <img
              src="/assets/img/ps5/ps-plus.webp"
              className=" w-100 rounded-4 my-4 my-lg-5 shadow-lg slide-in-blurred-right"
            />
            <img
              src="/assets/img/ps5/ps-plus-3.webp"
              className=" w-100 rounded-4 my-4 my-lg-5 shadow-lg slide-in-blurred-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ps5Products;
