// import React, { useEffect, useRef, useState } from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import gsap from "gsap";

// const HomeCarousel = () => {
//   const images = [
//     "/home/gallery-06.jpg",
//     "/home/Tropical-.webp",
//     "/home/tropical-flower-pattern-vector-6331789.webp",
//     "/home/000001.jpeg",
//     "/home/000002.jpeg",
//     "/home/000003.jpeg",
//   ];
//   const imageText = [
//     {
//       main: "ENDLESS COLOR POSSIBILITIES",
//       aside: "Your designs in any shade, hue, or tone you envision!",
//     },
//     {
//       main: "VIBRANT COLORS, UNLIMITED CREATIONS",
//       aside: "We print your vision in every color imaginable!",
//     },
//     {
//       main: "INFINITE COLOR RANGE",
//       aside:
//         "Let us bring your artwork to life in the perfect colors and tones!",
//     },
//     {
//       main: "UNMATCHED COLOR VARIETY",
//       aside:
//         "From bold to subtle, we print your designs in every color possible!",
//     },
//     {
//       main: "COLOR WITHOUT LIMITS",
//       aside:
//         "Print your designs with the most vibrant colors and deepest tones!",
//     },
//     {
//       main: "CREATIVE FREEDOM IN EVERY SHADE",
//       aside: "We can print your design in any color, tone, or gradient!",
//     }
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slideRefs = useRef([]);

//   const slideTo = (direction) => {
//     const nextSlide =
//       direction === "next"
//         ? (currentSlide + 1) % images.length
//         : (currentSlide - 1 + images.length) % images.length;

//     const tl = gsap.timeline({
//       onComplete: () => {
//         setCurrentSlide(nextSlide);
//         slideRefs.current[nextSlide].style.zIndex = 1;
//         slideRefs.current[currentSlide].style.zIndex = 0;
//         gsap.set(slideRefs.current[currentSlide], {
//           x: direction === "next" ? "100%" : "-100%",
//         });
//         gsap.set(slideRefs.current[nextSlide], { x: "0%" });
//       },
//     });

//     tl.to(
//       slideRefs.current[currentSlide],
//       { x: direction === "next" ? "-100%" : "100%", duration: 1 },
//       0
//     ).to(slideRefs.current[nextSlide], { x: "0%", duration: 1 }, 0);
//   };

//   const nextImage = () => {
//     slideTo("next");
//   };

//   const prevImage = () => {
//     slideTo("prev");
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextImage();
//     }, 4000);

//     return () => clearInterval(timer);
//   }, [currentSlide]);

//   return (
//     <div className="flex h-full w-full justify-center -mt-24">
//       <div id="carousel" className="relative w-full h-full p-8 pt-32">
//         <div className="relative flex items-center gap-8 h-full">
//           <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-md shadow-black flex items-center">
//             {images.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 ref={(el) => (slideRefs.current[index] = el)}
//                 className={`h-full w-full object-cover absolute ${
//                   index === currentSlide ? "z-10" : "z-0"
//                 }`}
//                 style={{
//                   transform:
//                     index === currentSlide
//                       ? "translateX(0%)"
//                       : "translateX(100%)",
//                 }}
//               />
//             ))}
//             <div
//               className="absolute z-[20] left-5 top-1/2 transform -translate-y-1/2 text-3xl cursor-pointer"
//               onClick={prevImage}
//             >
//               <IoIosArrowBack />
//             </div>
//             <div
//               className="absolute z-[20] right-5 top-1/2 transform -translate-y-1/2 text-3xl cursor-pointer"
//               onClick={nextImage}
//             >
//               <IoIosArrowForward />
//             </div>
//             <div
//               id="imageText"
//               className="absolute top-[50%] left-[30%] h-[150px] w-[500px] bg-zinc-100 -translate-x-1/2 -translate-y-1/2 z-[20]"
//             >
//               {/* Image Text  */}
//               <h2>ENDLESS COLOR POSSIBILITIES </h2>
//               <p>Your designs in any shade, hue, or tone you envision!</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeCarousel;


import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import gsap from "gsap";

const HomeCarousel = () => {
  const images = [
    "/home/gallery-06.jpg",
    "/home/Tropical-.webp",
    "/home/tropical-flower-pattern-vector-6331789.webp",
    "/home/000001.jpeg",
    "/home/000002.jpeg",
    "/home/000003.jpeg",
  ];

  const imageText = [
    {
      main: "ENDLESS COLOR POSSIBILITIES",
      aside: "Your designs in any shade, hue, or tone you envision!",
    },
    {
      main: "VIBRANT COLORS, UNLIMITED CREATIONS",
      aside: "We print your vision in every color imaginable!",
    },
    {
      main: "INFINITE COLOR RANGE",
      aside:
        "Let us bring your artwork to life in the perfect colors and tones!",
    },
    {
      main: "UNMATCHED COLOR VARIETY",
      aside:
        "From bold to subtle, we print your designs in every color possible!",
    },
    {
      main: "COLOR WITHOUT LIMITS",
      aside:
        "Print your designs with the most vibrant colors and deepest tones!",
    },
    {
      main: "CREATIVE FREEDOM IN EVERY SHADE",
      aside: "We can print your design in any color, tone, or gradient!",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRefs = useRef([]);
  const textRefs = useRef([]);

  const slideTo = (direction) => {
    const nextSlide =
      direction === "next"
        ? (currentSlide + 1) % images.length
        : (currentSlide - 1 + images.length) % images.length;

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentSlide(nextSlide);
        slideRefs.current[nextSlide].style.zIndex = 1;
        slideRefs.current[currentSlide].style.zIndex = 0;
        gsap.set(slideRefs.current[currentSlide], {
          x: direction === "next" ? "100%" : "-100%",
        });
        gsap.set(slideRefs.current[nextSlide], { x: "0%" });
        // Add animation for text to move from bottom to top
        gsap.fromTo(
          "#imageText",
          { opacity: 0, y: 50 }, // Start from the bottom (y: 50)
          { opacity: 1, y: 0, duration: 1 } // Animate to normal position
        );
      },
    });

    tl.to(
      slideRefs.current[currentSlide],
      { x: direction === "next" ? "-100%" : "100%", duration: 1 },
      0
    ).to(slideRefs.current[nextSlide], { x: "0%", duration: 1 }, 0);
  };

  const nextImage = () => {
    slideTo("next");
  };

  const prevImage = () => {
    slideTo("prev");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 4000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="flex h-full w-full justify-center -mt-24">
      <div id="carousel" className="relative w-full h-full p-8 pt-32">
        <div className="relative flex items-center gap-8 h-full">
          <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-md shadow-black flex items-center">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                ref={(el) => (slideRefs.current[index] = el)}
                className={`h-full w-full object-cover absolute ${
                  index === currentSlide ? "z-10" : "z-0"
                }`}
                style={{
                  transform:
                    index === currentSlide
                      ? "translateX(0%)"
                      : "translateX(100%)",
                }}
              />
            ))}
            <div
              className="absolute z-[20] left-5 top-1/2 transform -translate-y-1/2 text-3xl cursor-pointer"
              onClick={prevImage}
            >
              <IoIosArrowBack />
            </div>
            <div
              className="absolute z-[20] right-5 top-1/2 transform -translate-y-1/2 text-3xl cursor-pointer"
              onClick={nextImage}
            >
              <IoIosArrowForward />
            </div>
            <div
              id="imageText"
              className="absolute bottom-8 z-[20] w-full md:w-auto left-0  md:left-8 bg-opacity-70 bg-black text-white py-2 px-6 rounded-lg shadow-lg"
              ref={(el) => (textRefs.current[currentSlide] = el)}
            >
              <h2 className="text-3xl font-bold mb-2">
                {imageText[currentSlide].main}
              </h2>
              <p className="text-lg">{imageText[currentSlide].aside}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;


