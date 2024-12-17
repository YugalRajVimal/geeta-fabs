import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import HomeCorousel from "../components/HomeCorousel";
import HomeDigitialPrintingPage from "../components/HomeDigitialPrintingPage";

const LandingPage = () => {
  return (
    <>
      <div className="flex h-[110%] -mt-[116px] justify-center">
        <HomeCorousel />
      </div>
      <div
        id="digitalPrintingHome"
        className="h-[100%] flex items-center justify-evenly bg-white relative px-10"
      >
        <HomeDigitialPrintingPage />
      </div>
      <div className="h-[100%] bg-white relative px-10 bg-[#8eb9e3]">
        <div className="w-[60%] h-full absolute top-0 left-0 z-10 px-10">
          <div className="w-full h-full flex flex-col justify-evenly ">
            <div className="flex flex-col gap-2 ">
              <h1 className="text-5xl bold italic">Garment Manufacturing</h1>
              <h5 className="text-lg bold">AS PER YOUR REQUIREMENTS.</h5>
              <div className="flex flex-col gap-2">
                <p>
                  From sketch to warehouse, clothing can only be made with
                  technical expertise and a strong sense of design.
                </p>
                <p>
                  Therefore you need to choose your clothing manufacturer
                  wisely.
                </p>
                <p>
                  If you are a brand or retailer that cares about value for
                  money Geeta Fabs is a full-service clothing manufacturer based
                  in Gurugram.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[40%] h-full absolute top-0 right-0 ">
          <img
            src="/home/tailoring.webp"
            className="h-full w-full object-cover "
          />
        </div>
      </div>
      <div className="bg-white p-16 flex justify-center items-center">
        <h1 className="text-4xl">Follow @geetafabs on Instagram</h1>
      </div>
      {/* Gallery */}
      <div className="bg-white px-10 flex flex-wrap justify-center gap-6 pb-10">
        <div className=" h-44 w-44 bg-zinc-100 ">
          <img
            src="/gallery/000001.webp"
            className="h-full w-full object-cover"
          />
        </div>
        <div className=" h-44 w-44 bg-zinc-100 ">
          <img
            src="/gallery/000002.webp"
            className="h-full w-full object-cover"
          />
        </div>
        <div className=" h-44 w-44 bg-zinc-100 ">
          <img
            src="/gallery/000003.webp"
            className="h-full w-full object-cover"
          />
        </div>
        <div className=" h-44 w-44 bg-zinc-100 ">
          <img
            src="/gallery/000004.webp"
            className="h-full w-full object-cover"
          />
        </div>
        <div className=" h-44 w-44 bg-zinc-100 ">
          <img
            src="/gallery/000005.webp"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;

// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// const LandingPage = () => {
//   const imageRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = useRef([]);

//   return (
//     <>
//       <div className="flex h-[110%] -mt-[116px] justify-center">
//         <div id="carousel" className="w-full h-[90%]  pt-[116px] p-8 relative">
//           <div className="relative h-full w-full flex gap-8  items-center">
//             <div className="h-[90%] rounded-full w-[120px] overflow-hidden shadow-md shadow-black">
//               <img src="/home/gallery-06.jpg" className="h-full w-full object-cover" />
//             </div>
//             <div className="h-[90%] rounded-full w-[120px] overflow-hidden shadow-md shadow-black">
//               <img src="/home/Tropical-.webp" className="h-full w-full object-cover" />
//             </div>
//             <div className="h-[90%] rounded-3xl w-full overflow-hidden shadow-md shadow-black">
//               <img src="/home/tropical-flower-pattern-vector-6331789.webp" className="h-full w-full object-cover" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="h-[110%] bg-white relative px-10">
//         <div className="w-[60%] h-[130%] ">
//           <img
//             src="/home/man-sitting.webp"
//             className="h-full w-full object-cover"
//           />
//         </div>
//         <div className="w-[50%] h-full absolute top-0 right-10">
//           <div className="w-full h-full flex flex-col justify-evenly ">
//             <div></div>
//             <div className="flex flex-col gap-2">
//               <h1 className="text-5xl bold italic">Digital Textile Printing</h1>
//               <h5 className="text-lg bold">YOUR DESIGN OVER YOUR FABRIC</h5>
//               <div className="flex flex-col gap-2">
//                 <p>
//                   We offer comprehensive and state of the art solutions in
//                   design, product development, manufacturing, quality control,
//                   logistics and delivery management.
//                 </p>
//                 <p>
//                   Geeta Fabs specialized in all kind of Garment manufacturing
//                   products like Kaftan, Jumpsuits, Scarfs and home furnishing
//                   products.
//                 </p>
//                 <p>
//                   Expert guidance on vendor selection, best suited to the
//                   customer’s product need with commitment to quality
//                   requirements, budget, size of the orders, technical and
//                   manufacturing capabilities.
//                 </p>
//                 <p>
//                   We have a systematic design process where we generate trend
//                   reports, research, make technical drawings, source the right
//                   fabrics and trims in order to create the ideal sample and
//                   present them to customers.
//                 </p>
//                 <p>
//                   Dedicated team for smooth administrative, logistics and
//                   delivery support.
//                 </p>
//               </div>
//             </div>
//             <div className="flex justify-between px-4 ">
//               <img src="/home/certification.webp" className="" />
//               <img src="/home/signature.webp" className="" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="h-[110%] bg-white relative px-10 bg-[#8eb9e3]">
//         <div className="w-[60%] h-full absolute top-0 left-0 z-10 px-10">
//           <div className="w-full h-full flex flex-col justify-evenly ">
//             <div className="flex flex-col gap-2 ">
//               <h1 className="text-5xl bold italic">Garment Manufacturing</h1>
//               <h5 className="text-lg bold">AS PER YOUR REQUIREMENTS.</h5>
//               <div className="flex flex-col gap-2">
//                 <p>
//                   From sketch to warehouse, clothing can only be made with
//                   technical expertise and a strong sense of design.
//                 </p>
//                 <p>
//                   Therefore you need to choose your clothing manufacturer
//                   wisely.
//                 </p>
//                 <p>
//                   If you are a brand or retailer that cares about value for
//                   money Geeta Fabs is a full-service clothing manufacturer based
//                   in Gurugram.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="w-[40%] h-full absolute top-0 right-5 ">
//           <img
//             src="/home/tailoring.webp"
//             className="h-full w-full object-cover "
//           />
//         </div>
//       </div>
//       <div className="bg-white p-16 flex justify-center items-center">
//         <h1 className="text-4xl">Follow @geetafabs on Instagram</h1>
//       </div>
//       {/* Gallery */}
//       <div className="bg-white px-10 flex flex-wrap justify-center gap-6 pb-10">
//         <div className=" h-44 w-44 bg-zinc-100 ">
//           <img
//             src="/gallery/000001.webp"
//             className="h-full w-full object-cover"
//           />
//         </div>
//         <div className=" h-44 w-44 bg-zinc-100 ">
//           <img
//             src="/gallery/000002.webp"
//             className="h-full w-full object-cover"
//           />
//         </div>
//         <div className=" h-44 w-44 bg-zinc-100 ">
//           <img
//             src="/gallery/000003.webp"
//             className="h-full w-full object-cover"
//           />
//         </div>
//         <div className=" h-44 w-44 bg-zinc-100 ">
//           <img
//             src="/gallery/000004.webp"
//             className="h-full w-full object-cover"
//           />
//         </div>
//         <div className=" h-44 w-44 bg-zinc-100 ">
//           <img
//             src="/gallery/000005.webp"
//             className="h-full w-full object-cover"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default LandingPage;

// // import React, { useEffect, useRef, useState } from "react";
// // import { gsap } from "gsap";
// // import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// // const LandingPage = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const imageRef = useRef(null);
// //   const images = useRef([]);

// //   useEffect(() => {
// //     if (imageRef.current) {
// //       images.current = imageRef.current.children;
// //       gsap.set(images.current, { xPercent: 100 });
// //       gsap.set(images.current[currentIndex], { xPercent: 0 });
// //     }
// //   }, [currentIndex]);

// //   const showNextImage = () => {
// //     gsap.to(images.current[currentIndex], {
// //       xPercent: -100,
// //       duration: 1,
// //       onComplete: () => {
// //         const nextIndex = (currentIndex + 1) % images.current.length;
// //         gsap.set(images.current[currentIndex], { xPercent: 100 });
// //         setCurrentIndex(nextIndex);
// //         gsap.to(images.current[nextIndex], {
// //           xPercent: 0,
// //           duration: 1,
// //         });
// //       },
// //     });
// //   };

// //   const showPrevImage = () => {
// //     gsap.to(images.current[currentIndex], {
// //       xPercent: 100,
// //       duration: 1,
// //       onComplete: () => {
// //         const prevIndex = (currentIndex - 1 + images.current.length) % images.current.length;
// //         gsap.set(images.current[currentIndex], { xPercent: -100 });
// //         setCurrentIndex(prevIndex);
// //         gsap.to(images.current[prevIndex], {
// //           xPercent: 0,
// //           duration: 1,
// //         });
// //       },
// //     });
// //   };

// //   useEffect(() => {
// //     const interval = setInterval(showNextImage, 2000);
// //     return () => clearInterval(interval);
// //   }, [currentIndex]);

// //   return (
// //     <>
// //       <div className="flex h-[110%] -mt-[116px]">
// //         <div className="w-full h-[90%] pt-[116px] p-8 relative">
// //           <div ref={imageRef} className="relative h-full w-full overflow-hidden">
// //             <img
// //               src="/home/gallery-06.jpg"
// //               className="h-full w-full object-cover absolute top-0 left-0"
// //               style={{ transform: "translateX(0%)" }}
// //             />
// //             <img
// //               src="/home/Tropical-.webp"
// //               className="h-full w-full object-cover absolute top-0 left-0"
// //               style={{ transform: "translateX(100%)" }}
// //             />
// //             <img
// //               src="/home/tropical-flower-pattern-vector-6331789.webp"
// //               className="h-full w-full object-cover absolute top-0 left-0"
// //               style={{ transform: "translateX(100%)" }}
// //             />
// //           </div>
// //           <div
// //             className="absolute left-0 top-1/2 transform -translate-y-1/2 text-5xl cursor-pointer"
// //             onClick={showPrevImage}
// //           >
// //             <IoIosArrowBack />
// //           </div>
// //           <div
// //             className="absolute right-0 top-1/2 transform -translate-y-1/2 text-5xl cursor-pointer"
// //             onClick={showNextImage}
// //           >
// //             <IoIosArrowForward />
// //           </div>
// //         </div>
// //       </div>
// //       <div className="h-[110%] bg-white relative px-10">
// //         <div className="w-[60%] h-full">
// //           <img
// //             src="/home/man-sitting.webp"
// //             className="h-full w-full object-cover"
// //           />
// //         </div>
// //         <div className="w-[50%] h-full absolute top-0 right-10">
// //           <div className="w-full h-full flex flex-col justify-evenly ">
// //             <div></div>
// //             <div className="flex flex-col gap-2">
// //               <h1 className="text-5xl bold italic">Digital Textile Printing</h1>
// //               <h5 className="text-lg bold">YOUR DESIGN OVER YOUR FABRIC</h5>
// //               <div className="flex flex-col gap-2">
// //                 <p>
// //                   We offer comprehensive and state of the art solutions in
// //                   design, product development, manufacturing, quality control,
// //                   logistics and delivery management.
// //                 </p>
// //                 <p>
// //                   Geeta Fabs specialized in all kind of Garment manufacturing
// //                   products like Kaftan, Jumpsuits, Scarfs and home furnishing
// //                   products.
// //                 </p>
// //                 <p>
// //                   Expert guidance on vendor selection, best suited to the
// //                   customer’s product need with commitment to quality
// //                   requirements, budget, size of the orders, technical and
// //                   manufacturing capabilities.
// //                 </p>
// //                 <p>
// //                   We have a systematic design process where we generate trend
// //                   reports, research, make technical drawings, source the right
// //                   fabrics and trims in order to create the ideal sample and
// //                   present them to customers.
// //                 </p>
// //                 <p>
// //                   Dedicated team for smooth administrative, logistics and
// //                   delivery support.
// //                 </p>
// //               </div>
// //             </div>
// //             <div className="flex justify-between px-4 ">
// //               <img src="/home/certification.webp" className="" />
// //               <img src="/home/signature.webp" className="" />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="h-[110%] bg-white relative px-10 bg-[#8eb9e3]">
// //         <div className="w-[60%] h-full absolute top-0 left-0 z-10 px-10">
// //           <div className="w-full h-full flex flex-col justify-evenly ">
// //             <div className="flex flex-col gap-2 ">
// //               <h1 className="text-5xl bold italic">Garment Manufacturing</h1>
// //               <h5 className="text-lg bold">AS PER YOUR REQUIREMENTS.</h5>
// //               <div className="flex flex-col gap-2">
// //                 <p>
// //                   From sketch to warehouse, clothing can only be made with
// //                   technical expertise and a strong sense of design.
// //                 </p>
// //                 <p>
// //                   Therefore you need to choose your clothing manufacturer
// //                   wisely.
// //                 </p>
// //                 <p>
// //                   If you are a brand or retailer that cares about value for
// //                   money Geeta Fabs is a full-service clothing manufacturer based
// //                   in Gurugram.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="w-[40%] h-full absolute top-0 right-5 ">
// //           <img
// //             src="/home/tailoring.webp"
// //             className="h-full w-full object-cover "
// //           />
// //         </div>
// //       </div>
// //       <div className="bg-white p-16 flex justify-center items-center">
// //         <h1 className="text-4xl">Follow @geetafabs on Instagram</h1>
// //       </div>
// //       {/* Gallery */}
// //       <div className="bg-white px-10 flex flex-wrap justify-center gap-6 pb-10">
// //         <div className=" h-44 w-44 bg-zinc-100 ">
// //           <img
// //             src="/gallery/000001.webp"
// //             className="h-full w-full object-cover"
// //           />
// //         </div>
// //         <div className=" h-44 w-44 bg-zinc-100 ">
// //           <img
// //             src="/gallery/000002.webp"
// //             className="h-full w-full object-cover"
// //           />
// //         </div>
// //         <div className=" h-44 w-44 bg-zinc-100 ">
// //           <img
// //             src="/gallery/000003.webp"
// //             className="h-full w-full object-cover"
// //           />
// //         </div>
// //         <div className=" h-44 w-44 bg-zinc-100 ">
// //           <img
// //             src="/gallery/000004.webp"
// //             className="h-full w-full object-cover"
// //           />
// //         </div>
// //         <div className=" h-44 w-44 bg-zinc-100 ">
// //           <img
// //             src="/gallery/000005.webp"
// //             className="h-full w-full object-cover"
// //           />
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default LandingPage;
