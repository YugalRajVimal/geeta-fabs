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
//     "/home/000003.jpeg"
//   ];
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [nextSlide, setNextSlide] = useState(1);
//   const currentSlideRef = useRef(null);
//   const nextSlideRef = useRef(null);

//   const slideTo = (direction) => {
//     const tl = gsap.timeline({
//       onComplete: () => {
//         setCurrentSlide(nextSlide);
//         gsap.set(currentSlideRef.current, { x: "0%" });
//         gsap.set(nextSlideRef.current, { x: direction === "next" ? "100%" : "-100%" });
//       },
//     });

//     tl.to(currentSlideRef.current, { x: direction === "next" ? "-100%" : "100%", duration: 1 }, 0)
//       .to(nextSlideRef.current, { x: "0%", duration: 1 }, 0);
//   };

//   const nextImage = () => {
//     setNextSlide((currentSlide + 1) % images.length);
//     slideTo("next");
//   };

//   const prevImage = () => {
//     setNextSlide((currentSlide - 1 + images.length) % images.length);
//     slideTo("prev");
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextImage();
//     }, 4000);

//     return () => clearInterval(timer);
//   }, [currentSlide]);

//   useEffect(() => {
//     // Ensure next slide is set correctly before starting the animation
//     if (nextSlide === (currentSlide + 1) % images.length) {
//       slideTo("next");
//     } else if (nextSlide === (currentSlide - 1 + images.length) % images.length) {
//       slideTo("prev");
//     }
//   }, [nextSlide]);

//   return (
//     <div className="flex h-full w-full justify-center -mt-24">
//       <div id="carousel" className="relative w-full h-full p-8 pt-32">
//         <div className="relative flex items-center gap-8 h-full">
//           <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-md shadow-black flex items-center">
//             <div className="absolute w-full h-full">
//               <img
//                 src={images[currentSlide]}
//                 ref={currentSlideRef}
//                 className="h-full w-full object-cover absolute"
//               />
//               <img
//                 src={images[nextSlide]}
//                 ref={nextSlideRef}
//                 className="h-full w-full object-cover absolute"
//                 style={{ transform: "translateX(100%)" }}
//               />
//             </div>
//             <div
//               className="absolute left-5 top-1/2 transform -translate-y-1/2 text-3xl cursor-pointer"
//               onClick={prevImage}
//             >
//               <IoIosArrowBack />
//             </div>
//             <div
//               className="absolute right-5 top-1/2 transform -translate-y-1/2 text-3xl cursor-pointer"
//               onClick={nextImage}
//             >
//               <IoIosArrowForward />
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRefs = useRef([]);

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
        gsap.set(slideRefs.current[currentSlide], { x: direction === "next" ? "100%" : "-100%" });
        gsap.set(slideRefs.current[nextSlide], { x: "0%" });
      },
    });

    tl.to(slideRefs.current[currentSlide], { x: direction === "next" ? "-100%" : "100%", duration: 1 }, 0)
      .to(slideRefs.current[nextSlide], { x: "0%", duration: 1 }, 0);
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
                className={`h-full w-full object-cover absolute ${index === currentSlide ? "z-10" : "z-0"}`}
                style={{ transform: index === currentSlide ? "translateX(0%)" : "translateX(100%)" }}
              />
            ))}
            <div
              className="absolute z-[40] left-5 top-1/2 transform -translate-y-1/2 text-3xl cursor-pointer"
              onClick={prevImage}
            >
              <IoIosArrowBack />
            </div>
            <div
              className="absolute z-[40] right-5 top-1/2 transform -translate-y-1/2 text-3xl cursor-pointer"
              onClick={nextImage}
            >
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
