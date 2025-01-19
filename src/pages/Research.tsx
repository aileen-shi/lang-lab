import Navbar from "../components/Navbar";
import ImageBanner from "../components/ImageBanner";
import TextBanner from "../components/TextBanner";
import ResearchSections from "../components/ResearchSections";
import Footer from "../components/Footer";
import AuditoryNerve from "../assets/images/AuditoryNerve.jpg";
import "./styles.scss";

const Research = () => {
  return (
    <div>
      <Navbar />
      <ImageBanner src={AuditoryNerve} alt="Auditory nerve" height="h-96" />
      <TextBanner text="Research" />
      <ResearchSections />
      <Footer />
    </div>
  );
};

export default Research;
