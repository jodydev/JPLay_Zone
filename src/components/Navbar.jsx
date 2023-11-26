import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-nav p-0 my-3 position-relative slide-in-blurred-top"
        id="headerNav"
      >
        <div className="container-fluid px-4 px-lg-0 py-3 py-lg-0">
          <div className="row my-row-sm">
            <div className="col-3">
              <Link to="/">
                <a className="navbar-brand d-block d-lg-none p-0 ">
                  <h1 className="text-dark fw-bold letter-spacing">JPlay</h1>
                </a>
              </Link>
            </div>
            <div className="col-3">
              <Link to="/">
                <a className="navbar-brand d-block d-lg-none p-0" href="#">
                  <img src="/assets/img/logo/logo1.png" height="35" />
                </a>
              </Link>
            </div>

            <div className="col-6 d-flex justify-content-end">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="col-3 "></div>

            <div className="col-6">
              <ul className="navbar-nav  d-flex justify-content-center my-2 ">
                <li className="nav-item">
                  <Link to="/">
                    <a
                      className="nav-link mx-5 active effect-underline "
                      aria-current="page"
                    >
                      Home
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link me-5 active effect-underline "
                    href="#products"
                  >
                    Giochi
                  </a>
                </li>
                <li className="nav-item d-none d-lg-block">
                  <Link to="/">
                    <a className="nav-link p-0 logo">
                      <img src="/assets/img/logo/logo1.png" width="70" />
                    </a>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle ms-5 active "
                    href="#patner"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Compatibilità
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#ps5">
                        PS5
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#xbox">
                        Xbox One X/S
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#nintendo">
                        Nintendo Switch
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link  mx-5 active effect-underline "
                    href="#footer"
                  >
                    Contatti
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-lg-4 my-lg-0 my-3">
              <div className="container-fluid d-flex justify-content-center align-items-center">
                <div className="row">
                  <div className="col-4 rombo d-flex justify-content-center align-items-center roll-in-right">
                    <Link to="/searchGame">
                      <i class="icon-hover fa-solid fa-lg fa-magnifying-glass icon"></i>
                    </Link>
                  </div>
                  <div className="col-4 rombo d-flex justify-content-center align-items-center roll-in-right">
                    <Link to="/login">
                      
                      <i class="icon-hover fa-solid fa-lg fa-circle-user icon"></i>
                    </Link>
                  </div>
                  <div className="col-4 rombo d-flex justify-content-center align-items-center roll-in-right">
                   
                    <Link to="/register">
                      <i class="icon-hover fa-solid fa-lg fa-right-to-bracket icon"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
