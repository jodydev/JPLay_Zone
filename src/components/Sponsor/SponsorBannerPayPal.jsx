function SponsorBannerPayPal() {
  return (
    <section className="p-0 p-lg-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 transition d-none d-lg-block">
            <div className="container rounded-5 w-100 shadow-lg d-flex justify-content-center slide-in-left transition">
              <img
                src="https://www.ajonoas.it/wp-content/uploads/2021/01/PayPal-Logo.png"
                height="170"
                alt="PayPal"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 d-none d-lg-block">
            <div className="container slide-in-right transition">
              <img
                src="/assets/img/sponsor/paypal-info.png"
                height="170"
                className="rounded-5 w-100 shadow-lg transition"
                alt="PayPal Info"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SponsorBannerPayPal;
