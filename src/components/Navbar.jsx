import { Link } from "react-router-dom";

function Navbar() {

  return (
          <header>
              <nav className="navbar navbar-expand-lg navbar-dark bg-nav p-0 my-3" id="headerNav">
                  <div className="container-fluid px-5 px-lg-0 py-3 py-lg-0">
                    <div className="row my-row-sm">

                      <div className="col-4">
                        <a className="navbar-brand d-block d-lg-none p-0 " href="#"><h1 className="text-dark fw-bold letter-spacing">JPlay</h1></a>
                      </div>
                      <div className="col-2">
                        <a className="navbar-brand d-block d-lg-none p-0" href="#"><img src="/assets/img/logo/logo1.png" height="35" /></a>
                      </div>

                      <div className="col-6 d-flex justify-content-end">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars"></i>
                        </button>
                      </div>
                      
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                      <div className="col-3 ">
                      
                      </div>

                      <div className="col-6">
                        <ul className="navbar-nav  d-flex justify-content-center my-2 ">
                        
                          <li className="nav-item">
                            <Link to="/">
                              <a className="nav-link mx-5 active effect-underline fs-5" aria-current="page" href="#">Home</a>
                            </Link>
                          </li>
                        
                          <li className="nav-item">
                            <a className="nav-link me-5 active effect-underline fs-5" href="#products">Giochi</a>
                          </li>
                          <li className="nav-item d-none d-lg-block">
                            <a className="nav-link p-0" href="#">
                              <img src="/assets/img/logo/logo1.png" width="70"  />
                            </a>
                          </li>
                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle ms-5 active fs-5" href="#patner" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Compatibilità
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                              <li><a className="dropdown-item" href="#ps5">PS5</a></li>
                              <li><a className="dropdown-item" href="#xbox">Xbox One X/S</a></li>
                              <li><a className="dropdown-item" href="#nintendo">Nintendo Switch</a></li>
                            </ul>
                          </li>
                          <li className="nav-item ">
                            <a className="nav-link  mx-5 active effect-underline fs-5" href="#footer">Contatti</a>
                          </li>
                     
                        </ul>
                      </div>

                      <div className="col-4">
                        <ul className="navbar-nav  d-flex justify-content-center my-2 ">
                          <li className="nav-item">
                            <Link to="/searchGame">
                              <a className="nav-link me-5 active "><i class="fa-solid fa-lg fa-magnifying-glass"></i></a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link me-5 active "><i class="fa-solid fa-lg fa-circle-user"></i></a>
                          </li>  
                          <li className="nav-item">
                            <a className="nav-link me-5 active "><i class="fa-solid fa-lg fa-right-to-bracket"></i></a>
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