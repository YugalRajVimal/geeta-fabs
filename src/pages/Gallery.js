import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const galleryRef = useRef(null);

  // List of images
  const images = ["000001", "000002", "000003", "000004", "000005"];

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        const nextIndex = (prev + 1) % images.length; // Loop to the first image after the last
        return nextIndex;
      });
    }, 3000); // Change image every 3000 ms (3 seconds)

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  // Handle image click
  const handleImageClick = (index) => {
    setCurrentImage(index);
  };

  // Create an array of image indexes for mapping
  const imageIndexes = [
    (currentImage - 1 + images.length) % images.length, // Previous image index
    currentImage, // Current image index
    (currentImage + 1) % images.length, // Next image index
  ];

  return (
    <div className="-mt-[116px] h-full bg-white">
      <div className="pt-[116px] pb-10 h-full px-10 flex flex-col gap-8 justify-center items-center">
        <h1 className="text-center text-7xl italic font-serif">Gallery</h1>
        <div
          ref={galleryRef}
          className="h-[80%] flex justify-center items-center gap-2 snap-x snap-mandatory"
        >
          {imageIndexes.map((index, i) => {
            const direction = i === 0 ? -100 : i === 1 ? 0 : 100; // Adjust direction for prev, center, next images
            const opacityValue = i === 0 ? 0.5 : i === 1 ? 1 : 0.5; // Previous image has opacity 0.5, current 1, and next 0

            return (
              <motion.div
                key={index}
                className="h-full flex justify-center items-center px-10 shrink-0"
                whileTap={{ scale: 0.9 }}
                initial={{
                  opacity: opacityValue,
                  x: direction,
                  scale: 0.8,
                }}
                animate={{
                  opacity: currentImage === index ? 1 : opacityValue, // Smooth opacity transition
                  x: currentImage === index ? 0 : direction,
                  scale: currentImage === index ? 1.2 : 1,
                }}
                transition={{
                  opacity: { duration: 0.6, ease: "easeInOut" }, // Opacity transition
                  x: { duration: 0.8, ease: "easeInOut" }, // X-axis movement transition
                  scale: { duration: 0.8, ease: "easeInOut" }, // Scale transition
                }}
                onClick={() => handleImageClick(index)} // Handle image click
              >
                <img
                  src={`/gallery/${images[index]}.webp`}
                  alt={`Image ${index}`}
                  className="h-[80%] aspect-[1/1] object-cover"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
