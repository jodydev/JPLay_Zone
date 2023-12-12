import CarouselHero from "../components/HomePage/CarouselHero";
import Ps5Products from "../components/Product/Ps5Products";
import LogoShowCase from "../components/HomePage/LogoShowCase";
import SponsorBannerKlarna from "../components/Sponsor/SponsorBannerKlarna";
import XboxProducts from "../components/Product/XboxProducts";
import SponsorBannerPayPal from "../components/Sponsor/SponsorBannerPayPal";
import NintendoProducts from "../components/Product/NintendoProducts";

function HomePage() {
  return (
    <>
      <CarouselHero />
      <LogoShowCase />
      <Ps5Products />
      <SponsorBannerKlarna />
      <XboxProducts />
      <SponsorBannerPayPal />
      <NintendoProducts />
    </>
  );
}

export default HomePage;
