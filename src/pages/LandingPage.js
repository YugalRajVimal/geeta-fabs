// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import HomeCorousel from "../components/HomeCorousel";
// import HomeDigitialPrintingPage from "../components/HomeDigitialPrintingPage";
// import GarmentManufacturing from "../components/GarmentManufacturing";
// import { motion } from "framer-motion";
// import CraftedToPerfection from "../components/CraftedToPerfection";

// const LandingPage = () => {
//   return (
//     <>
//       <HomeCorousel />

//       <HomeDigitialPrintingPage />

//       <GarmentManufacturing />
//       <CraftedToPerfection />
//       {/* Follow Geeta Fabs  */}
//       {/* <motion.div
//         className="bg-white p-16 flex justify-center items-center"
//         initial={{ opacity: 0, y: 50 }} // Initial state
//         whileInView={{ opacity: 1, y: 0 }} // Animation when in view
//         viewport={{ once: true }} // Trigger once when in view
//         transition={{ duration: 1, ease: 'easeOut' }} // Smooth transition
//       >
//         <h1 className="text-4xl">Follow @geetafabs on Instagram</h1>
//       </motion.div> */}

//       {/* Gallery Section */}
//       {/* <motion.div
//         className="bg-white px-10 flex flex-wrap justify-center gap-6 pb-10"
//         initial={{ opacity: 0, y: 100 }} // Initial state
//         whileInView={{ opacity: 1, y: 0 }} // Animation when in view
//         viewport={{ once: true }} // Trigger once when in view
//         transition={{ duration: 1, ease: 'easeOut' }} // Smooth transition
//       >
//         <div className="h-44 w-44 bg-zinc-100">
//           <img
//             src="/gallery/000001.webp"
//             className="h-full w-full object-cover"
//           />
//         </div>
//         <div className="h-44 w-44 bg-zinc-100">
//           <img
//             src="/gallery/000002.webp"
//             className="h-full w-full object-cover"
//           />
//         </div>
//         <div className="h-44 w-44 bg-zinc-100">
//           <img
//             src="/gallery/000003.webp"
//             className="h-full w-full object-cover"
//           />
//         </div>
//         <div className="h-44 w-44 bg-zinc-100">
//           <img
//             src="/gallery/000004.webp"
//             className="h-full w-full object-cover"
//           />
//         </div>
//         <div className="h-44 w-44 bg-zinc-100">
//           <img
//             src="/gallery/000005.webp"
//             className="h-full w-full object-cover"
//           />
//         </div>
//       </motion.div>  */}

//       {/* Products And Applications  */}
//       <div className="flex justify-center items-center flex-col gap-2 ">
//         <div className="flex justify-center items-center flex-col gap-2">
//           <h1 className="text-4xl px-10 text-center">
//             PRODUCTS / APPLICATIONS OF DIGITAL PRINTING
//           </h1>
//           <div className="w-[200px] border-black border h-[2px]"></div>
//           <p className="px-28">
//             Explore the high-end fashion applications Usha Fabs provides.
//             Superior colour-matching, expanded colour spectrum, photo-realism,
//             discharge ink combined with excellent hand-feel. Tour the different
//             application worlds and find your best Usha Fabs match
//           </p>
//         </div>
//         <div className="flex gap-4 justify-evenly items-center w-full flex-wrap py-10 xl:px-60 lg:px-20 ">
//           <div className="w-[320px] aspect-[1/1] flex flex-col justify-center items-center shadow-lg">
//             <div className="h-[85%] aspect-[1/1] ">
//               <img src="/home/gallery-06.jpg" className="object-cover h-full w-full" />
//             </div>
//             <div className="h-[15%] flex justify-center items-center">
//               <span className="text-lg font-mono">Hello World</span>
//             </div>
//           </div>
//           <div className="w-[320px] aspect-[1/1] flex flex-col justify-center items-center shadow-lg">
//             <div className="h-[85%] aspect-[1/1] ">
//               <img src="/home/gallery-06.jpg" className="object-cover h-full w-full" />
//             </div>
//             <div className="h-[15%] flex justify-center items-center">
//               <span className="text-lg font-mono">Hello World</span>
//             </div>
//           </div>
//           <div className="w-[320px] aspect-[1/1] flex flex-col justify-center items-center shadow-lg">
//             <div className="h-[85%] aspect-[1/1] ">
//               <img src="/home/gallery-06.jpg" className="object-cover h-full w-full" />
//             </div>
//             <div className="h-[15%] flex justify-center items-center">
//               <span className="text-lg font-mono">Hello World</span>
//             </div>
//           </div>
//           <div className="w-[320px] aspect-[1/1] flex flex-col justify-center items-center shadow-lg">
//             <div className="h-[85%] aspect-[1/1] ">
//               <img src="/home/gallery-06.jpg" className="object-cover h-full w-full" />
//             </div>
//             <div className="h-[15%] flex justify-center items-center">
//               <span className="text-lg font-mono">Hello World</span>
//             </div>
//           </div>
//           <div className="w-[320px] aspect-[1/1] flex flex-col justify-center items-center shadow-lg">
//             <div className="h-[85%] aspect-[1/1] ">
//               <img src="/home/gallery-06.jpg" className="object-cover h-full w-full" />
//             </div>
//             <div className="h-[15%] flex justify-center items-center">
//               <span className="text-lg font-mono">Hello World</span>
//             </div>
//           </div>
//           <div className="w-[320px] aspect-[1/1] flex flex-col justify-center items-center shadow-lg">
//             <div className="h-[85%] aspect-[1/1] ">
//               <img src="/home/gallery-06.jpg" className="object-cover h-full w-full" />
//             </div>
//             <div className="h-[15%] flex justify-center items-center">
//               <span className="text-lg font-mono">Hello World</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LandingPage;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HomeCorousel from "../components/HomeCorousel";
import HomeDigitialPrintingPage from "../components/HomeDigitialPrintingPage";
import GarmentManufacturing from "../components/GarmentManufacturing";
import CraftedToPerfection from "../components/CraftedToPerfection";
import ProductsAndApplications from "./ProductsAndApplications";

const LandingPage = (props) => {
  const { page, setPage } = props;
  return (
    <>
      <HomeCorousel />
      <HomeDigitialPrintingPage />
      <GarmentManufacturing />
      <CraftedToPerfection />
      <ProductsAndApplications page={page} setPage={setPage} />
    </>
  );
};

export default LandingPage;
