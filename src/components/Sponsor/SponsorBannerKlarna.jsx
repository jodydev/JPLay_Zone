import { Link } from "react-router-dom";

function SponsorBannerKlarna() {
  return (
    <section className="p-0 p-lg-3">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <Link to="https://www.klarna.com/it/paga-in-3-rate/">
              <div className="container slide-in-left d-none d-lg-block">
                <img
                  src="/assets/img/sponsor/klarna.avif"
                  height="170"
                  className="rounded-5 w-100 shadow-lg transition"
                  alt="Klarna"
                />
              </div>
            </Link>
          </div>
          <div className="col-12 col-md-6 d-none d-lg-block">
            <Link to="https://www.klarna.com/it/paga-in-3-rate/">
              <div className="container slide-in-right ">
                <img
                  src="/assets/img/sponsor/klarna-info.webp"
                  height="170"
                  className="rounded-5 w-100 shadow-lg transition"
                  alt="Klarna Info"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SponsorBannerKlarna;
