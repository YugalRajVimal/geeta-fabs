import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const HomeCorousel = () => {
  const images = [
    "/home/gallery-06.jpg",
    "/home/Tropical-.webp",
    "/home/tropical-flower-pattern-vector-6331789.webp",
  ];
  const imageRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length, currentIndex]);

  useEffect(() => {
    if (imageRefs.current[currentIndex]) {
      gsap.to(imageRefs.current[currentIndex], {
        width: "100%",
        height: "90%",
        duration: 0.5,
      });
      images.forEach((_, index) => {
        if (index !== currentIndex) {
          gsap.to(imageRefs.current[index], {
            width: "120px",
            height: "90%",
            duration: 0.5,
          });
        }
      });
    }
  }, [currentIndex, images]);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex h-[110%] -mt-[116px] justify-center">
      <div id="carousel" className="w-full h-[100%] pt-[116px] p-8 relative">
        <div className="relative h-full w-full flex gap-8 items-center">
          {images.map((src, index) => (
            <div
              key={index}
              className={`h-[90%] ${
                index === currentIndex
                  ? "rounded-3xl w-full"
                  : "rounded-3xl w-[120px]"
              } overflow-hidden shadow-md shadow-black`}
              ref={(el) => (imageRefs.current[index] = el)}
              onClick={() => handleImageClick(index)}
            >
              <img src={src} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCorousel;
