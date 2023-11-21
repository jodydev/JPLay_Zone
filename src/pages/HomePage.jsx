import CarouselHero from "../components/HomePage/CarouselHero";
import Ps5Products from "../components/Product/Ps5Products";
import LogoShowCase from "../components/HomePage/LogoShowCase";
import SponsorBannerKlarna from "../components/Sponsor/SponsorBannerKlarna";
import XboxProducts from "../components/Product/XboxProducts";
import SponsorBannerPayPal from "../components/Sponsor/SponsorBannerPayPal";
import NintendoProducts from "../components/Product/NintendoProducts";

function HomePage({ gamePs5, gameXbox, gameNintendo }) {
  return (
    <>
      <CarouselHero />
      <LogoShowCase />
      <Ps5Products gamePs5={gamePs5} />
      <SponsorBannerKlarna />
      <XboxProducts gameXbox={gameXbox} />
      <SponsorBannerPayPal />
      <NintendoProducts gameNintendo={gameNintendo} />
    </>
  );
}

export default HomePage;
