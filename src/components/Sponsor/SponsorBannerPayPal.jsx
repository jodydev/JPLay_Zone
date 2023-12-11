import { Link } from "react-router-dom";

function SponsorBannerPayPal() {
  return (
    <section className="p-0 p-lg-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 transition d-none d-lg-block">
            <Link to="https://www.paypal.com/it/webapps/mpp/paga-in-3-rate">
              <div className="container rounded-5 w-100 shadow-lg d-flex justify-content-center slide-in-left transition">
                <img
                  src="https://www.ajonoas.it/wp-content/uploads/2021/01/PayPal-Logo.png"
                  height="170"
                  alt="PayPal"
                />
              </div>
            </Link>
          </div>
          <div className="col-12 col-md-6 d-none d-lg-block">
            <Link to="https://www.paypal.com/it/webapps/mpp/paga-in-3-rate">
              <div className="container slide-in-right transition">
                <img
                  src="/assets/img/sponsor/paypal-info.png"
                  height="170"
                  className="rounded-5 w-100 shadow-lg transition"
                  alt="PayPal Info"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SponsorBannerPayPal;
