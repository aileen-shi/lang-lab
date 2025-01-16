import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import HeroText from "../components/HeroText";
import Footer from "../components/Footer";
import slide1 from "../assets/images/Slide1.png";
import slide2 from "../assets/images/Slide2.png";
import slide3 from "../assets/images/Slide3.png";
import slide4 from "../assets/images/Slide4.png";

const Home = () => {
  const images = [
    {
      src: slide1,
      alt: "description",
    },
    {
      src: slide2,
      alt: "description",
    },
    {
      src: slide3,
      alt: "description",
    },
    {
      src: slide4,
      alt: "description",
    },
  ];
  return (
    <div>
      <Navbar />
      <Carousel images={images} />
      <HeroText />
      <Footer />
    </div>
  );
};

export default Home;
