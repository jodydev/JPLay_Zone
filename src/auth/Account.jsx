import { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import getProfileImg from "../utils/getProfileImg";
import AppContext from "../contexts/AppContext";
import supabase from "../supabase/client";

function Account() {
  const location = useLocation();
  const updateUser = location.state?.updatedProfile || {};
  const { session } = useContext(AppContext);
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    async function getProfile() {
      setLoading(true);
      const { user } = session;

      const { data, error } = await supabase
        .from("profiles")
        .select(`*`)
        .eq("id", user.id)
        .single();

      if (!ignore) {
        if (error) {
          console.warn(error);
        } else if (data) {
          setProfile(data);
        }
      }

      setLoading(false);
    }

    getProfile();

    return () => {
      ignore = true;
    };
  }, [session]);

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
    </>
  );
}

export default Account;
