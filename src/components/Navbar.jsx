import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { PiUserPlusBold } from "react-icons/pi";
import { PiUserDuotone } from "react-icons/pi";
import { CgLogOut } from "react-icons/cg";
import AppContext from "../contexts/AppContext";
import useAuth from "../hooks/useAuth";
import supabase from "../supabase/client";

function Navbar() {
  const [profile, setProfile] = useState(null);
  const location = useLocation();
  const updateUser = location.state?.updatedProfile || {};

  const { session } = useContext(AppContext);

  const { signOut } = useAuth();

  // Funzione per eseguire il logout
  const handleLogout = () => {
    signOut();
  };

  // Effetto per ottenere il profilo dell'utente attualmente autenticato
  useEffect(() => {
    let ignore = false;
    async function getProfile() {
      const { user } = session;

      const { data, error } = await supabase
        .from("profiles")
        .select(`*`)
        .eq("id", user.id)
        .single();

      if (!ignore) {
        if (error) {
          // Log degli errori nel recupero del profilo
          console.warn(error);
        } else if (data) {
          // Imposta il profilo recuperato nello stato
          setProfile(data);
        }
      }
    }

    // Chiama la funzione per recuperare il profilo
    getProfile();

    return () => {
      // Imposta ignore a true per evitare di aggiornare lo stato dopo la disattivazione dell'effetto
      ignore = true;
    };
  }, [session]);

  return (
    <header>
      <nav
        className={
          "navbar navbar-expand-lg navbar-dark bg-nav p-0 my-3 position-relative slide-in-blurred-top navbar-clicked"
        }
        id="headerNav"
      >
        <div className="container-fluid px-lg-0 py-3 py-lg-0 mb-4 nav-container">
          <div className="row my-row-sm">
            <div className="col-4 d-flex justify-content-start align-items-center">
              <Link to="/" className="navbar-brand d-block d-lg-none p-0 ">
                <h1 className="text-dark fw-bold letter-spacing">JPlay</h1>
              </Link>
            </div>

            <div className="col-2 d-flex justify-content-end align-items-center ">
              <Link to="/" className="navbar-brand d-block d-lg-none p-0 me-5">
                <img src="/assets/img/logo/logo1.png" height="33" />
              </Link>
            </div>

            <div className="col-6 d-flex justify-content-end align-items-center d-block d-lg-none">
              {!session ? (
                <>
                  <Link to="/searchGame" className="fs-5 text-dark">
                    <FiSearch
                      style={{
                        marginRight: "8px",
                        marginBottom: "3px",
                      }}
                    />
                  </Link>
                  <Link to="/login" className="fs-5 text-dark">
                    <PiUserDuotone
                      style={{
                        marginRight: "8px",
                        marginBottom: "3px",
                      }}
                    />
                  </Link>

                  <Link to="/register" className="fs-5 text-dark">
                    <PiUserPlusBold
                      style={{
                        marginRight: "8px",
                        marginBottom: "3px",
                      }}
                    />
                  </Link>

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
                </>
              ) : (
                <div className="container ms-3">
                  <div className="row">
                    <div className="col-3">
                      <Link to="/account">
                        <img
                          src={profile && profile.avatar_url}
                          className="user-avatar-navbar"
                        />
                      </Link>
                    </div>

                    <div className="col-3">
                      <button onClick={handleLogout} className="btn-logout-sm">
                        <CgLogOut className="logout-btn" id="logout" />
                      </button>
                    </div>

                    <div className="col-3">
                      <Link to="/searchGame" className="fs-5 text-dark">
                        <FiSearch
                          style={{
                            marginRight: "8px",
                            marginBottom: "3px",
                          }}
                        />
                      </Link>
                    </div>
                    <div className="col-3">
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
                </div>
              )}
            </div>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="col-4 d-flex justify-content-start align-items-center px-5 d-none d-lg-block">
              <Link to="/searchGame" className="fs-5 text-dark">
                <FiSearch
                  style={{
                    marginRight: "8px",
                    marginBottom: "3px",
                  }}
                />
                Cerca il tuo gioco preferito..
              </Link>
            </div>

            <div className="col-4">
              <ul className="navbar-nav d-flex justify-content-center my-2 ">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link mx-5 active effect-underline "
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/allGames"
                    className="nav-link me-5 active effect-underline"
                  >
                    Giochi
                  </Link>
                </li>
                <li className="nav-item d-none d-lg-block">
                  <Link to="/" className="nav-link p-0 logo">
                    <img src="/assets/img/logo/logo1.png" width="70" />
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

            <div className="col-4 col-lg-4 my-lg-0 my-3">
              <div className="container-fluid d-flex justify-content-center align-items-center ms-4 ms-lg-5">
                {!session ? (
                  <div className="row">
                    <div className="col-2 d-none d-lg-block"></div>
                    <div className="col-4 d-none d-lg-block d-flex justify-content-center align-items-center">
                      <Link to="/login">
                        <button className="btn btn-danger px-3 py-2 fw-bold text-nowrap">
                          <PiUserDuotone
                            style={{
                              marginRight: "5px",
                            }}
                          />
                          Accedi
                        </button>
                      </Link>
                    </div>
                    <div className="col-6 d-none d-lg-block d-flex justify-content-center align-items-center ps-4">
                      <Link to="/register">
                        <button className="btn btn-dark text-nowrap px-3 py-2 fw-bold">
                          <PiUserPlusBold
                            style={{
                              marginRight: "5px",
                            }}
                          />
                          Registrati
                        </button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="col-12 col-lg-6 d-flex justify-content-end align-items-center px-0 px-lg-3 py-0 py-lg-2">
                    <Link to="/account" className="d-none d-lg-block">
                      <img
                        src={profile && profile.avatar_url}
                        className="d-flex justify-content-center align-items-center user-avatar-navbar"
                      />
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="btn btn-dark ms-3 d-none d-lg-block"
                    >
                      <Link to="/" className="text-light fs-6 fw-normal ">
                        <CgLogOut id="logout" />
                        Logout
                      </Link>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
