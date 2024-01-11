import { FeaturesCards } from "../components/FeaturesCards";
import { HeaderMegaMenu } from "../components/HeaderMegaMenu";
import { HeroContentLeft } from "../components/HeroContentLeft";
import { HeroImageBackground } from "../components/HeroImageBackground";
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
