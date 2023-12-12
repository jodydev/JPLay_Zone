function NintendoSwitchBanner() {
  return (
    <>
      <section id="nintendo" className="pt-4 pt-lg-5 mt-5">
        <div className="container-fluid p-0 bg-danger my-5 my-nintendo-container">
          <div className="container">
            <div className="row bg-danger my-row">
              <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
                <img
                  className="img-responsive d-none d-lg-block mb-5"
                  src="//www.nintendo.it/games/oms/nintendo_switch/common/commonbottom/img-nso-logo.png"
                  alt="Nintendo Switch Online Logo"
                />
              </div>

              <div className="col-12 col-lg-4 position-relative">
                <img
                  className="img-responsive position-absolute nintendo-img"
                  src="//www.nintendo.it/games/oms/nintendo_switch/common/commonbottom/img-nso.png"
                  alt="Nintendo Switch Online Image"
                />
              </div>

              <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center d-none d-lg-block">
                <div className="container my-padding">
                  <div className="row">
                    <div className="col-12 ">
                      <h3 className="text-light fw-bold">
                        Nintendo Switch Online
                      </h3>
                      <p className="text-light fw-bold">
                        Arricchisci la tua esperienza di gioco con il servizio
                        con iscrizione a pagamento Nintendo Switch Online!
                      </p>
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

export default NintendoSwitchBanner;
