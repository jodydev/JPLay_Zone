import { Link } from "react-router-dom";

function Navbar() {

  return (
          <header>
              <nav className="navbar navbar-expand-lg navbar-dark bg-nav p-0 m-0" id="headerNav">
                  <div className="container-fluid p-0">
                    <a className="navbar-brand d-block d-lg-none p-0" href="#">
                      <img src="/assets/img/logo/logo1.png" height="80" />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">

                      <div className="col-12">
                        <ul className="navbar-nav  d-flex justify-content-center my-2 ">
                        
                          <li className="nav-item">
                            <Link to="/">
                              <a className="nav-link mx-5 active effect-underline" aria-current="page" href="#">Home</a>
                            </Link>
                          </li>
                        
                          <li className="nav-item">
                            <a className="nav-link me-5 active effect-underline" href="#products">Giochi</a>
                          </li>
                          <li className="nav-item d-none d-lg-block">
                            <a className="nav-link p-0" href="#">
                              <img src="/assets/img/logo/logo1.png" width="70"  />
                            </a>
                          </li>
                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle ms-5 active " href="#patner" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Compatibilità
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                              <li><a className="dropdown-item" href="#ps5">PS5</a></li>
                              <li><a className="dropdown-item" href="#xbox">Xbox One X/S</a></li>
                              <li><a className="dropdown-item" href="#nintendo">Nintendo Switch</a></li>
                            </ul>
                          </li>
                          <li className="nav-item ">
                            <a className="nav-link  mx-5 active effect-underline" href="#footer">Contatti</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>
              </nav>
          </header>
  )
}

export default Navbar