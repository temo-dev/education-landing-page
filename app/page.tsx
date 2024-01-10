import { FeaturesCards } from "../components/FeaturesCards/FeaturesCards";
import { HeaderMegaMenu } from "../components/HeaderMegaMenu/HeaderMegaMenu";
import { HeroContentLeft } from "../components/HeroContentLeft/HeroContentLeft";
import { HeroImageBackground } from "../components/HeroImageBackground/HeroImageBackground";
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
