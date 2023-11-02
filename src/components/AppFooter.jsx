function AppFooter (){
    return(
        <footer className="text-center text-lg-start bg-dark text-muted">

                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                    <div className="me-5 d-none text-light d-lg-block">
                    <span>Rimani aggionato su tutte le nuove offerte e promozioni seguendo i nostri social</span>
                    </div>
                
                    <div>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-facebook-f" style="color: white;"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-twitter" style="color: white;"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-google" style="color: white;"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-instagram" style="color: white;"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-linkedin" style="color: white;"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-github" style="color: white;"></i>
                    </a>
                    </div>

                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">

                    <div className="row mt-3">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        
                        <h6 className="text-uppercase text-light fw-bold mb-4 fs-4"> <img src="./img/logo/pad-ps5-logo.svg" />
                            JPlay Zone
                        </h6>
                        <div className="container">
                            <p className="text-light">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, distinctio?
                            </p>
                        </div>
                        
                        </div>
                    
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        
                        <h6 className="text-uppercase fw-bold mb-4 text-light">
                            Products
                        </h6>
                        <p>
                            <a href="#!" className="text-light">PS5</a>
                        </p>
                        <p>
                            <a href="#!" className="text-light">Xbox X/S</a>
                        </p>
                        <p>
                            <a href="#!" className="text-light">Nintendo Ds</a>
                        </p>
                        <p>
                            <a href="#!" className="text-light">Pc</a>
                        </p>
                        </div>
                    

                    
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    
                        <h6 className="text-uppercase fw-bold mb-4 text-light">
                            Link Utili
                        </h6>
                        <p>
                            <a href="#!" className="text-light">Prezzi</a>
                        </p>
                        <p>
                            <a href="#!" className=" text-light">Profilo</a>
                        </p>
                        <p>
                            <a href="#!" className="text-light">I miei ordini</a>
                        </p>
                        <p>
                            <a href="#!" className="text-light">Aiuto</a>
                        </p>
                        </div>
                    
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        
                        <h6 className="text-uppercase fw-bold mb-4 text-light">Contatti</h6>
                        <p className="text-light"><i className="fas fa-home me-3"></i> Bologna (BO)</p>
                        <p className="text-light">
                            <i className="fas fa-envelope me-3"></i>
                            jodyossino.dev@gmail.com
                        </p>
                        <p className="text-light"><i className="fas fa-phone me-3"></i> +39 333-6170035</p>
                        </div>

                    </div>
                
                    </div>
                </section>
                

                <div className="text-center p-4 text-light">
                    © 202e Copyright:
                    <a className="text-reset fw-bold text-light" href="https://mdbootstrap.com/">JPlayZone.it</a>
                </div>

</footer>
    )
}

export default AppFooter