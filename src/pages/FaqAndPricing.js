// import React, { useState } from "react";
// import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
// import QuestionForm from "../components/QuestionForm";

// const FaqAndPricing = () => {
//   const [polysterOpen, setPolysterOpen] = useState(false);
//   const [cottonOpen, setCottonOpen] = useState(false);
//   const [faqOpen, setFaqOpen] = useState({});

//   const togglePolyster = () => setPolysterOpen(!polysterOpen);
//   const toggleCotton = () => setCottonOpen(!cottonOpen);
//   const toggleFaq = (index) => {
//     setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
//   };

//   const faqs = [
//     {
//       question: "What is design requirement?",
//       answer: (
//         <p>
//           Design Requirements:
//           <ol>
//             <li>1. 150 dpi to 300 dpi</li>
//             <li>2. PSD, JPG, PNG</li>
//           </ol>
//           <br />
//           Format You can send me design to info@geetafabs.com
//         </p>
//       ),
//     },
//     {
//       question: "Do you work globally?",
//       answer:
//         "Yes, we have an international service team that helps us to treat foreign buyers.",
//     },
//     {
//       question: "Estimated Delivery Time?",
//       answer: "Approx 5-7 days after approval of design.",
//     },
//     {
//       question: "What is your minimum order quantity?",
//       answer: "",
//     },
//     {
//       question: "Do you offer fabric along with your digital printing?",
//       answer: "Yes, we do as per your requirement.",
//     },
//   ];

//   return (
//     <div className="min-h-screen -mt-[116px] bg-gradient-to-r from-blue-50 to-blue-100 py-10">
//       <div className="container mx-auto px-6 md:px-12 lg:px-24 pt-[116px]">
//         <div className="flex flex-col lg:flex-row lg:gap-16">
//           <div className="w-full lg:w-1/2">
//             <h1 className="text-4xl md:text-5xl  text-blue-900 mb-8 font-serif">Pricing</h1>
//             <div className="space-y-4">
//               <div className="shadow-lg rounded-lg">
//                 <div
//                   className="flex justify-between items-center border p-4 bg-[#9b7dff] cursor-pointer"
//                   onClick={togglePolyster}
//                 >
//                   <h1 className="font-semibold text-lg">Polyester</h1>
//                   {polysterOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
//                 </div>
//                 {polysterOpen && (
//                   <ul className="pl-4 py-2 bg-white border-b rounded-b-lg">
//                     <li>1-10 Meter = ₹ 300/Meter</li>
//                     <li>11-50 Meter = ₹ 250/Meter</li>
//                     <li>51-100 Meter = ₹200/Meter</li>
//                     <li>101+ Meter = ₹150/Meter</li>
//                   </ul>
//                 )}
//               </div>
//               <div className="shadow-lg rounded-lg">
//                 <div
//                   className="flex justify-between items-center border p-4 bg-[#9b7dff] cursor-pointer"
//                   onClick={toggleCotton}
//                 >
//                   <h1 className="font-semibold text-lg">Cotton</h1>
//                   {cottonOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
//                 </div>
//                 {cottonOpen && (
//                   <ul className="pl-4 py-2 bg-white border-b rounded-b-lg">
//                     <li>1-10 Meter = ₹ 350/Meter</li>
//                     <li>11-50 Meter = ₹ 300/Meter</li>
//                     <li>51-100 Meter = ₹250/Meter</li>
//                     <li>101+ Meter = ₹200/Meter</li>
//                   </ul>
//                 )}
//               </div>
//             </div>
//             <h1 className="text-4xl md:text-5xl  text-blue-900 mt-10 mb-8 font-serif">General FAQ's</h1>
//             <div className="space-y-4">
//               {faqs.map((faq, index) => (
//                 <div key={index} className="shadow-lg rounded-lg">
//                   <div
//                     className="flex justify-between items-center border p-4 bg-[#9b7dff] cursor-pointer"
//                     onClick={() => toggleFaq(index)}
//                   >
//                     <h1 className="font-semibold text-lg">{faq.question}</h1>
//                     {faqOpen[index] ? <IoIosArrowDown /> : <IoIosArrowForward />}
//                   </div>
//                   {faqOpen[index] && (
//                     <div className="pl-4 py-2 bg-white border-b rounded-b-lg">
//                       {faq.answer}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex flex-col justify-center">
//             <h1 className="text-4xl md:text-5xl italic text-blue-900 mt-10 mb-8 font-serif">Ask Any Question</h1>
//             <QuestionForm />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FaqAndPricing;

import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { gsap } from "gsap";
import QuestionForm from "../components/QuestionForm";

const FaqAndPricing = () => {
  const [polysterOpen, setPolysterOpen] = useState(false);
  const [cottonOpen, setCottonOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState({});
  
  // Refs for dropdowns
  const polyRef = useRef(null);
  const cottonRef = useRef(null);
  const faqRefs = useRef([]);

  const togglePolyster = () => {
    setPolysterOpen((prev) => !prev);
  };

  const toggleCotton = () => {
    setCottonOpen((prev) => !prev);
  };

  const toggleFaq = (index) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const faqs = [
    {
      question: "What is design requirement?",
      answer: (
        <p>
          Design Requirements:
          <ol>
            <li>1. 150 dpi to 300 dpi</li>
            <li>2. PSD, JPG, PNG</li>
          </ol>
          <br />
          Format You can send me design to info@geetafabs.com
        </p>
      ),
    },
    {
      question: "Do you work globally?",
      answer:
        "Yes, we have an international service team that helps us to treat foreign buyers.",
    },
    {
      question: "Estimated Delivery Time?",
      answer: "Approx 5-7 days after approval of design.",
    },
    {
      question: "What is your minimum order quantity?",
      answer: "",
    },
    {
      question: "Do you offer fabric along with your digital printing?",
      answer: "Yes, we do as per your requirement.",
    },
  ];

  // Animation effect for opening/closing dropdowns
  useEffect(() => {
    // Animate FAQ opening and closing
    faqs.forEach((_, index) => {
      const faqElement = faqRefs.current[index];
      if (faqOpen[index]) {
        gsap.to(faqElement, { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out" });
      } else {
        gsap.to(faqElement, { height: 0, opacity: 0, duration: 0.3, ease: "power2.inOut" });
      }
    });

    // Animate Polyester dropdown opening/closing
    if (polysterOpen) {
      gsap.to(polyRef.current, { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out" });
    } else {
      gsap.to(polyRef.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.inOut" });
    }

    // Animate Cotton dropdown opening/closing
    if (cottonOpen) {
      gsap.to(cottonRef.current, { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out" });
    } else {
      gsap.to(cottonRef.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.inOut" });
    }
  }, [polysterOpen, cottonOpen, faqOpen]);

  return (
    <div className="min-h-screen -mt-[116px] bg-gradient-to-r from-blue-50 to-blue-100 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 pt-[116px]">
        <div className="flex flex-col lg:flex-row lg:gap-16">
          {/* Left Section */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl md:text-5xl text-blue-900 mb-8 font-serif">Pricing</h1>
            <div className="space-y-4 pricing-section">
              <div className="shadow-lg rounded-lg">
                <div
                  className="flex justify-between items-center border p-4 bg-[#9b7dff] cursor-pointer"
                  onClick={togglePolyster}
                >
                  <h1 className="font-semibold text-lg">Polyester</h1>
                  {polysterOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
                </div>
                <div
                  ref={polyRef}
                  className="pl-4 py-2 bg-white border-b rounded-b-lg overflow-hidden"
                >
                  {polysterOpen && (
                    <ul>
                      <li>1-10 Meter = ₹ 300/Meter</li>
                      <li>11-50 Meter = ₹ 250/Meter</li>
                      <li>51-100 Meter = ₹200/Meter</li>
                      <li>101+ Meter = ₹150/Meter</li>
                    </ul>
                  )}
                </div>
              </div>

              <div className="shadow-lg rounded-lg">
                <div
                  className="flex justify-between items-center border p-4 bg-[#9b7dff] cursor-pointer"
                  onClick={toggleCotton}
                >
                  <h1 className="font-semibold text-lg">Cotton</h1>
                  {cottonOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
                </div>
                <div
                  ref={cottonRef}
                  className="pl-4 py-2 bg-white border-b rounded-b-lg overflow-hidden"
                >
                  {cottonOpen && (
                    <ul>
                      <li>1-10 Meter = ₹ 350/Meter</li>
                      <li>11-50 Meter = ₹ 300/Meter</li>
                      <li>51-100 Meter = ₹250/Meter</li>
                      <li>101+ Meter = ₹200/Meter</li>
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* FAQs Section */}
            <h1 className="text-4xl md:text-5xl text-blue-900 mt-10 mb-8 font-serif faq-section">
              General FAQ's
            </h1>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="shadow-lg rounded-lg">
                  <div
                    className="flex justify-between items-center border p-4 bg-[#9b7dff] cursor-pointer"
                    onClick={() => toggleFaq(index)}
                  >
                    <h1 className="font-semibold text-lg">{faq.question}</h1>
                    {faqOpen[index] ? <IoIosArrowDown /> : <IoIosArrowForward />}
                  </div>
                  <div
                    ref={(el) => (faqRefs.current[index] = el)}
                    className="pl-4 py-2 bg-white border-b rounded-b-lg overflow-hidden"
                  >
                    {faqOpen[index] && <div>{faq.answer}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex flex-col justify-center faq-section">
            <h1 className="text-4xl md:text-5xl italic text-blue-900 mt-10 mb-8 font-serif">Ask Any Question</h1>
            <QuestionForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqAndPricing;
