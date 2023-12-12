import { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import AppContext from "../contexts/AppContext";
import supabase from "../supabase/client";

function Account() {
  const location = useLocation();
  const updateUser = location.state?.updatedProfile || {};
  const { session } = useContext(AppContext);
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [comments, setComments] = useState([]);
  
  // Esegui l'effetto al cambio di sessione, ottenendo e impostando il profilo dell'utente
  useEffect(() => {
    let ignore = false;

    // Funzione per ottenere il profilo dell'utente attuale
    async function getProfile() {
      setLoading(true);
      const { user } = session;

      // Ottieni i dati del profilo dall'API di Supabase
      const { data, error } = await supabase
        .from("profiles")
        .select(`*`)
        .eq("id", user.id)
        .single();

      if (!ignore) {
        if (error) {
          console.warn(error);
        } else if (data) {
          // Imposta lo stato del profilo con i dati ottenuti
          setProfile(data);
        }
      }

      setLoading(false);
    }

    getProfile();

    // Ritorna una funzione per indicare l'ignorare il set di stato dopo la disconnessione dell'effetto
    return () => {
      ignore = true;
    };
  }, [session]);

  // Esegui l'effetto per ottenere i preferiti dell'utente
  useEffect(() => {
    const getFav = async () => {
      const { data, error } = await supabase
        .from("favorites")
        .select("*")
        .eq("profile_id", session.user.id);
      if (error) {
        // Gestisci l'errore in caso di fallimento della richiesta
        alert(error.message);
      } else {
        // Imposta lo stato dei preferiti con i dati ottenuti
        setFavorites(data);
        console.log(data);
      }
    };
    getFav();
  }, []);

  // Esegui l'effetto per ottenere i commenti dell'utente
  useEffect(() => {
    const getComments = async () => {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("profile_id", session.user.id);
      if (error) {
        // Gestisci l'errore in caso di fallimento della richiesta
        alert(error.message);
      } else {
        // Imposta lo stato dei commenti con i dati ottenuti
        setComments(data);
        console.log(data);
      }
    };
    getComments();
  }, []);

  return (
    <>
      <section id="user" className="vh-200">
        {profile && (
          <div className="container h-100 w-100 p-3 p-lg-5 mt-3 mt-lg-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-lg-12 mb-lg-0">
                <div className="card mb- w-100 rounded-4 shadow-lg">
                  <div className="row g-0">
                    <div className="col-md-4 text-center text-white col-black">
                      <div className="circle d-flex justify-content-center align-items-center">
                        <img
                          src={profile && profile.avatar_url}
                          className="d-flex justify-content-center align-items-center user-avatar"
                        />
                      </div>

                      <div className="text-description my-2">
                        <h2 className="fs-1 fw-bold">Bentornato,</h2>
                        <h3 className="fs-3 fw-bold text-danger">
                          {profile.username || updateUser.username}
                        </h3>
                      </div>

                      <Link to="/setting">
                        <button
                          id="button-edit"
                          className="my-3 mb-5 text-light btn-danger btn"
                        >
                          Modifica i tuoi dati{" "}
                          <i className="far fa-edit fa-lg"></i>
                        </button>
                      </Link>
                    </div>
                    <div className="col-md-8">
                      <div className="p-4">
                        <h6 className="fs-1 fw-bold">
                          Informazioni<span>.</span>
                        </h6>

                        <hr className="mt-0 mb-4" />

                        <div className="row pt-1">
                          <div className="col-12 col-lg-6 mb-3">
                            <label>Nome</label>

                            <p className="text-muted fw-bold">
                              {profile.first_name || updateUser.first_name}
                            </p>
                          </div>
                          <div className="col-12 col-lg-6 mb-3">
                            <label>Cognome</label>
                            <p className="text-muted fw-bold">
                              {profile.last_name || updateUser.last_name}
                            </p>
                          </div>
                        </div>

                        <hr className="mt-0 mb-4" />

                        <div className="row pt-1">
                          <div className="col-12 col-lg-6 mb-3">
                            <label>Email</label>
                            <p className="text-muted fw-bold">
                              {session.user.email}
                            </p>
                          </div>
                          <div className="col-12 col-lg-6 mb-3">
                            <label>Telefono</label>
                            <p className="text-muted fw-bold">
                              {profile.telephone || updateUser.telephone}
                            </p>
                          </div>
                        </div>

                        <hr className="mt-0 mb-4" />

                        <div className="row pt-1">
                          <div className="col-12 col-lg-6 mb-3">
                            <label>Città</label>
                            <p className="text-muted fw-bold">
                              {profile.city || updateUser.city}
                            </p>
                          </div>
                          <div className="col-12 col-lg-6 mb-3">
                            <label>Indirizzo</label>
                            <p className="text-muted fw-bold">
                              {profile.address || updateUser.address}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <section id="user" className="vh-200">
        <div className="container h-100 w-100 p-3 p-lg-5 mt-3 mt-lg-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-12 mb-lg-0">
              <div className="card mb- w-100 rounded-4 shadow-lg">
                <div className="row g-0">
                  <div className="col-md-12">
                    <div className="p-4">
                      <h6 className="fs-1 fw-bold">
                        I tuoi giochi preferiti<span>.</span>
                      </h6>
                      <hr className="mt-0 mb-2 mt-3" />
                      <div className="row pt-1">
                        <div className="col-4 col-lg-4 mb-3">
                          <label className="fs-5 account-font">
                            Nome del gioco
                          </label>
                        </div>
                        <div className="col-4 col-lg-4 mb-3">
                          <label className="fs-5 account-font">
                            Categoria del gioco
                          </label>
                        </div>
                        <div className="col-4 col-lg-4 mb-3">
                          <label className="fs-5 account-font">
                            Piattaforma del gioco
                          </label>
                        </div>
                      </div>
                      {favorites &&
                        favorites.map((favGame) => (
                          <div key={favGame.id} className="row pt-1">
                            <div className="col-4 col-lg-4">
                              <p className="text-muted fw-bold">
                                {favGame.game_name}{" "}
                              </p>
                            </div>

                            <div className="col-4 col-lg-4">
                              <p className="text-muted fw-bold">
                                {favGame.game_category}{" "}
                              </p>
                            </div>

                            <div className="col-4 col-lg-4">
                              <p className="text-muted fw-bold">
                                {favGame.game_platform}{" "}
                              </p>
                            </div>
                            <hr className="mt-0 mb-4" />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="user" className="vh-200">
        <div className="container h-100 w-100 p-3 p-lg-5 mt-3 mt-lg-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-12 mb-lg-0">
              <div className="card mb- w-100 rounded-4 shadow-lg">
                <div className="row g-0">
                  <div className="col-md-12">
                    <div className="p-4">
                      <h6 className="fs-1 fw-bold">
                        Le tue recenzioni<span>.</span>
                      </h6>
                      <hr className="mt-0 mb-2 mt-3" />
                      <div className="row pt-1">
                        <div className="col-12 col-lg-3 mb-3 d-none d-lg-block">
                          <label className="fs-5 ">Nome del gioco</label>
                        </div>
                        <div className="col-12 col-lg-3 mb-3 d-none d-lg-block">
                          <label className="fs-5 ">Categoria del gioco</label>
                        </div>
                        <div className="col-6 col-lg-3 mb-3">
                          <label className="fs-5 account-font te">
                            Titolo recenzione
                          </label>
                        </div>
                        <div className="col-6 col-lg-3 mb-3">
                          <label className="fs-5 account-font text-nowrap">
                            Contenuto recenzione
                          </label>
                        </div>
                      </div>

                      {comments &&
                        comments.map((comment) => (
                          <div key={comment.id} className="row pt-1">
                            <div className="col-12 col-lg-3 d-none d-lg-block">
                              <p className="text-muted fw-bold">
                                {comment.game_name}{" "}
                              </p>
                            </div>

                            <div className="col-12 col-lg-3 d-none d-lg-block">
                              <p className="text-muted fw-bold">
                                {comment.game_category}{" "}
                              </p>
                            </div>

                            <div className="col-6 col-lg-3">
                              <p className="text-muted fw-bold">
                                {comment.comment_title}{" "}
                              </p>
                            </div>

                            <div className="col-6 col-lg-3">
                              <p className="text-muted fw-bold">
                                {comment.comment_content}{" "}
                              </p>
                            </div>
                            <hr className="mt-0 mb-4" />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Account;
