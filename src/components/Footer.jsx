function Footer() {
    return (
            <footer id="footer" className="text-center text-lg-start mt-5">
              
              <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom pt-5 mt-5">
        
                <div className="me-5 d-none text-dark d-lg-block">
                  <span>Rimani aggiornato su tutte le nuove offerte e promozioni seguendo i nostri social!</span>
                </div>
        
                <div>
                  <a href="#" className="me-4 text-reset">
                  <i class="fa-brands fa-lg fa-facebook"></i>
                  </a>
                  <a href="#" className="me-4 text-reset">
                  <i class="fa-brands fa-lg fa-instagram"></i>
                  </a>
                  <a href="#" className="me-4 text-reset">
                  <i class="fa-brands fa-lg fa-square-x-twitter"></i>
                  </a>
                  <a href="#" className="me-4 text-reset">
                  <i class="fa-brands fa-lg fa-linkedin"></i>
                  </a>
                  <a href="#" className="me-4 text-reset">
                  <i class="fa-brands fa-lg fa-square-github"></i>
                  </a>
                
                </div>
              </section>
        
              <section className="">
                <div className="container text-center text-md-start mt-5">
                  <div className="row mt-3">
        
                    <div className="col-md-3 col-lg-4 col-xl-3 d-flex justify-content-start align-items-center">
                        <img src="/src/assets/img/logo/logo1.png" width="150" alt="JPlay Zone Logo" />                      
                    </div>
        
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                      <h5 className="text-uppercase fw-bold mb-4 text-dark">
                        Prodotti
                      </h5>
                      <p>
                        <a href="#!" className="text-dark">PS5</a>
                      </p>
                      <p>
                        <a href="#!" className="text-dark">Xbox X/S</a>
                      </p>
                      <p>
                        <a href="#!" className="text-dark">Nintendo Ds</a>
                      </p>
                      <p>
                        <a href="#!" className="text-dark">Pc</a>
                      </p>
                    </div>
        
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                      <h5 className="text-uppercase fw-bold mb-4 text-dark">
                        Link Utili
                      </h5>
                      <p>
                        <a href="#!" className="text-dark">Prezzi</a>
                      </p>
                      <p>
                        <a href="#!" className="text-dark">Profilo</a>
                      </p>
                      <p>
                        <a href="#!" className="text-dark">I miei ordini</a>
                      </p>
                      <p>
                        <a href="#!" className="text-dark">Aiuto</a>
                      </p>
                    </div>
        
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                      <h5 className="text-uppercase mb-4 text-dark fw-bold">Contatti</h5>
                      <p className="text-dark">
                      <i class="fa-solid fa-house me-3" style={{color: "#000000",}}></i>
                      Bologna BO</p>
                      <p className="text-dark">
                        <i class="fa-regular fa-envelope me-3" style={{color: "#000000",}}></i>          
                        jodyossino.dev@gmail.com
                      </p>
                      <p className="text-dark">
                        <i class="fa-solid fa-phone me-3" style={{color: "#000000",}}></i> 
                      +39 333-6170035</p>
                    </div>
        
                  </div>
                </div>
              </section>
        
              <div className="text-center p-4 text-dark">
                © 2023 Copyright: <a href="https://jodydev.github.io/Portfolio-it/">Jody</a>
              </div>
            </footer>
    );
  }
  
  export default Footer;
  