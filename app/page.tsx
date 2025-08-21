import CallToActionSection from "./screens/CallToActionSection/CallToActionSection";
import CategorySection from "./screens/CategorySection/CategorySection";
import ContactUsSection from "./screens/ContactUsSection/ContactUsSection";
import FaqSection from "./screens/FaqSection/FaqSection";
import FeaturesOverviewSection from "./screens/FeaturesOverviewSection/FeaturesOverviewSection";
import FeaturesSection from "./screens/FeaturesSection/FeaturesSection";
import FooterSection from "./screens/FooterSection/FooterSection";
import HeroSection from "./screens/HeroSection/HeroSection";
import Marquee from "./screens/Marquee/Marquee";
import TestimonialsSection from "./screens/TestimonialsSection/TestimonialsSection";



export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-[#09090f]">
          <div id=" ">
          <HeroSection/>
          </div>
          <Marquee/>
          <FeaturesOverviewSection/>
          <div id="about"> 
          <FeaturesSection/>
          </div>
            <div id="team">
            <CategorySection/>
            </div>
                  <div id="blog">
                  <TestimonialsSection/>
                  </div>
              <div id="pricing">
              <FaqSection/>
              </div>
            <div id="contact">
            <ContactUsSection/>
            </div>
          <CallToActionSection/>
          <FooterSection/>
    </div>
  );
}
