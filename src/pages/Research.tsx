import Navbar from "../components/Navbar";
import ImageBanner from "../components/ImageBanner";
import TextBanner from "../components/TextBanner";
import Footer from "../components/Footer";
import AuditoryNerve from "../assets/images/AuditoryNerve.jpg";

const Research = () => {
  return (
    <div>
      <Navbar />
      <ImageBanner
        src={AuditoryNerve}
        alt="Auditory nerve"
        classname="position-top-center"
      />
      <TextBanner text="Research" />
      <Footer />
    </div>
  );
};

export default Research;
