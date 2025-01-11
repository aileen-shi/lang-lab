import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

interface Slide {
  src: string;
  alt: string;
}

interface Props {
  images: Slide[];
}

const Carousel: React.FC<Props> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Go to previous slide
  const prev = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };

  // Go to next slide
  const next = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  };

  // Go to index
  const handleClick = (i: number) => {
    setCurrentIndex(i);
  };

  // Auto go to next slide after 3 seconds
  useEffect(() => {
    const intervalId = setInterval(next, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      {/* Slides */}
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="w-screen h-full object-cover brightness-50"
      ></img>

      {/* Previous and Next Arrows */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      {/* Current navigation */}
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-10">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => handleClick(i)}
              className={`
                transition-all w-5 h-5 bg-white rounded-full hover:cursor-pointer hover:bg-opacity-70
                ${currentIndex === i ? "p-2" : "bg-opacity-50"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
