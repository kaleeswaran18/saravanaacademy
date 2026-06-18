import Navbar from "../Navbar/Navbar";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import AboutSection from "../components/AboutSection/AboutSection";
import ImpactStats from "../components/ImpactStats/ImpactStats";
import EducationPrograms from "../components/EducationPrograms/EducationPrograms";
import EducationCareer from "../components/EducationCareer/EducationCareer";
import MedicalEvents from "../components/MedicalEvents/MedicalEvents";
import CommunityWelfare from "../components/CommunityWelfare/CommunityWelfare";
import SuccessStories from "../components/SuccessStories/SuccessStories";
import VolunteerSection from "../components/VolunteerSection/VolunteerSection";
import CategoryTabs from "../components/CategoryTabs/CategoryTabs";
import UpcomingActivities from "../components/UpcomingActivities/UpcomingActivities";
import FAQSection from "../components/FAQSection/FAQSection";
import FinalCTA from "../components/FinalCTA/FinalCTA";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <AboutSection />
       <EducationCareer />
       <SuccessStories />
      <ImpactStats />
      <EducationPrograms />
     
      {/* <MedicalEvents /> */}
      {/* <CommunityWelfare /> */}
     
      {/* <VolunteerSection /> */}
      <CategoryTabs />
      <UpcomingActivities />
      {/* <FAQSection /> */}
      {/* <FinalCTA /> */}
      <Footer />
    </>
  );
}

export default Home;
