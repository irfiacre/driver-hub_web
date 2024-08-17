import Footer from "@/src/components/landingPage/Footer";
import FourthSection from "@/src/components/landingPage/FourthSection";
import SecondSection from "@/src/components/landingPage/SecondSection";
import ThirdSection from "@/src/components/landingPage/ThirdSection";
import TopSection from "@/src/components/landingPage/TopSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Driver Hub",
  description:
    "Drive Hub is a specialized software solution designed to streamline the driver recruitment and onboarding process for YEGO, addressing the unique needs of the transportation industry in Rwanda. The platform focuses on efficiently recruiting qualified drivers, conducting necessary background checks, and facilitating comprehensive training programs to ensure a safe and reliable transportation service.",
};
const LandingPage = () => {
  return (
    <div className="bg-backgroundColor">
      <TopSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
