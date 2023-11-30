function Account() {
  return (
    <>
      <section id="user" className="vh-200">
        <div className="container h-100 w-100 p-5 mt-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-12 mb-lg-0">
              <div className="card mb- w-100 rounded-4 shadow-lg">
                <div className="row g-0">
                  <div className="col-md-4 text-center text-white col-black">
                    <div className="circle">
                      <img
                        src="/assets/jody-avatar.png"
                        className="img-fluid avatar-img"
                        
                      />
                    </div>

                    <div className="text-description mt-3">
                      <h2 class="fs-2">Benvenuto,</h2>
                      <h3 class="fs-3 fw-bold"> Jody</h3>
                    </div>

                    <button
                      id="button-edit"
                      className="my-2 text-light btn-danger btn"
                    >
                      Modifica i tuoi dati <i className="far fa-edit fa-lg"></i>
                    </button>
                  </div>
                  <div className="col-md-8">
                    <div className=" p-4">
                      <h6 className="fs-1 fw-bold">
                        Informazioni<span>.</span>
                      </h6>

                      <hr className="mt-0 mb-4" />

                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted">mfaifla</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Telefono</h6>
                          <p className="text-muted">+39 53453</p>
                        </div>
                      </div>

                      <hr className="mt-0 mb-4" />

                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Città</h6>
                          <p className="text-muted">fgsedfgs</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Indirizzo</h6>
                          <p className="text-muted">fgsdfgs</p>
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
