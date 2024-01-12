import { FeaturesCards } from "../components/home/FeaturesCards";
import { HeaderMegaMenu } from "../components/home/HeaderMegaMenu";
import { HeroContentLeft } from "../components/home/HeroContentLeft";
import { HeroImageBackground } from "../components/home/HeroImageBackground";
export default function HomePage() {
  return (
    <div>
      <HeaderMegaMenu />
      <HeroContentLeft />
      <FeaturesCards />
      <HeroImageBackground />
    </div>
  );
}
