import Navbar from "../components/Navbar";
import ImageBanner from "../components/ImageBanner";
import TextBanner from "../components/TextBanner";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import GroupLabPhoto from "../assets/images/GroupLabPhoto.jpg";
import Hainan from "../assets/images/Members/Hainan.jpg";
import Profiles from "../types/profilesData";
import ProfileCard from "../types/profileCard";

const Team = () => {
  const Lead: ProfileCard[] = [
    {
      image: Hainan,
      name: "Hainan Lang",
      background: "Professor\nDepartment of Pathology & Laboratory Medicine",
      about: "",
    },
  ];
  return (
    <div>
      <Navbar />
      <ImageBanner
        src={GroupLabPhoto}
        alt="Lang lab group photo of researchers"
        height=""
      />
      <TextBanner text="Lead Researcher" />
      <Profile data={Lead} />
      <TextBanner text="Lab Members" />
      <Profile data={Profiles} />
      <Footer />
    </div>
  );
};
export default Team;
