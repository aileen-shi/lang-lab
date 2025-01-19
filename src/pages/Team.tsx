import Navbar from "../components/Navbar";
import ImageBanner from "../components/ImageBanner";
import TextBanner from "../components/TextBanner";
import Footer from "../components/Footer";
import GroupLabPhoto from "../assets/images/GroupLabPhoto.jpg";

const Team = () => {
  return (
    <div>
      <Navbar />
      <ImageBanner
        src={GroupLabPhoto}
        alt="Lang lab group photo of researchers"
        height=""
      />
      <TextBanner text="Lead Researcher" />
      <Footer />
    </div>
  );
};
export default Team;
