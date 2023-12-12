import { Link } from "react-router-dom";

function RouteNotFound() {
  return (
    <div className="container-fluid bg-danger my-error-container">
      <div className="row d-flex justify-content-center">
        <div className="col-12 d-flex justify-content-center position-relative ">
          <img
            src="/public/assets/mariotriste.png"
            className="mario-triste d-none d-lg-block"
          />
          <h1 className="error-404 text-center ">Pagina non trovata!</h1>
          <span className="error-404-span">
            {" "}
            Clicca sul naso di Mario per tornare in HomePage
          </span>

          <Link className="button-backhome" to="/" />
        </div>
      </div>
    </div>
  );
}

export default RouteNotFound;
