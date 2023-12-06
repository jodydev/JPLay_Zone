import { Link } from "react-router-dom";

function CarouselHero() {
  return (
    <section id="carousel" className="p-0 p-lg-2">
      <div className="container-fluid px-3 px-lg-5  my-3">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide slide-in-elliptic-top-fwd rounded-4  "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner rounded-4 ">
            <div className="carousel-item active ">
              <Link to="details/1">
                <img
                  src="/assets/img/carousel/spider-man.jpeg"
                  className="d-block w-100 rounded-4 "
                  alt="..."
                />
              </Link>
            </div>

            <div className="carousel-item">
              <Link to="details/4">
                <img
                  src="/assets/img/carousel/assassins-creed.png"
                  className="d-block w-100 rounded-4 "
                  alt="..."
                />
              </Link>
            </div>

            <div className="carousel-item">
              <Link to="details/5">
                <img
                  src="/assets/img/carousel/fc24.jpeg"
                  className="d-block w-100 rounded-4 "
                  alt="..."
                />
              </Link>
            </div>

            <div className="carousel-item">
              <Link to="details/15">
                <img
                  src="/assets/img/carousel/ufc.png"
                  className="d-block w-100 rounded-4 "
                  alt="..."
                />
              </Link>
            </div>

            <div className="carousel-item position-relative">
              <Link to="details/11">
                <img
                  src="/assets/img/carousel/cod.jpeg"
                  className="d-block w-100 rounded-4 "
                  alt="..."
                />
              </Link>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default CarouselHero;
