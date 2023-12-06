import { Link, useLocation } from "react-router-dom";
import Avatar from "../components/Avatar";
import useProfile from "../hooks/useProfile";

function Account() {
  const location = useLocation();
  const updateUser = location.state?.updatedProfile || {};

  const { profile } = useProfile();

  console.log(updateUser);

  console.log(profile);

  return (
    <>
      <section id="user" className="vh-200">
        <div className="container h-100 w-100 p-5 mt-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-12 mb-lg-0">
              <div className="card mb- w-100 rounded-4 shadow-lg">
                <div className="row g-0">
                  <div className="col-md-4 text-center text-white col-black">
                    <Avatar url={updateUser.avatar_url || profile.avatar_url} />

                    <div className="text-description">
                      <h2 class="fs-2">Bentornato,</h2>
                      <h3 class="fs-4 fw-bold text-danger">
                        {updateUser.username || profile.username}
                      </h3>
                    </div>

                    <Link to="/setting">
                      <button
                        id="button-edit"
                        className="my-5 mb-5 text-light btn-danger btn"
                      >
                        Modifica i tuoi dati{" "}
                        <i className="far fa-edit fa-lg"></i>
                      </button>
                    </Link>
                  </div>
                  <div className="col-md-8">
                    <div className=" p-4">
                      <h6 className="fs-1 fw-bold">
                        Informazioni<span>.</span>
                      </h6>

                      <hr className="mt-0 mb-4" />

                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <label>Nome</label>

                          <p className="text-muted fw-bold">
                            {updateUser.first_name || profile.first_name}
                          </p>
                        </div>
                        <div className="col-6 mb-3">
                          <label>Cognome</label>
                          <p className="text-muted fw-bold">
                            {updateUser.last_name || profile.last_name}
                          </p>
                        </div>
                      </div>

                      <hr className="mt-0 mb-4" />

                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <label>Email</label>
                          <p className="text-muted fw-bold">{profile.email}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <label>Telefono</label>
                          <p className="text-muted fw-bold">
                            {updateUser.telephone || profile.telephone}
                          </p>
                        </div>
                      </div>

                      <hr className="mt-0 mb-4" />

                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <label>Città</label>
                          <p className="text-muted fw-bold">
                            {updateUser.city || profile.city}
                          </p>
                        </div>
                        <div className="col-6 mb-3">
                          <label>Indirizzo</label>
                          <p className="text-muted fw-bold">
                            {updateUser.address || profile.address}
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
      </section>
    </>
  );
}

export default Account;
