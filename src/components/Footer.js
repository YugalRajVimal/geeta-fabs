// import React from "react";
// import { LiaShippingFastSolid } from "react-icons/lia";
// import { CiHeadphones } from "react-icons/ci";
// import { FaRegMoneyBillAlt } from "react-icons/fa";
// import { IoCallOutline } from "react-icons/io5";
// import { IoMailOutline } from "react-icons/io5";
// import { IoLocationOutline } from "react-icons/io5";
// import { FaLocationDot } from "react-icons/fa6";

// const Footer = () => {
//   return (
//     <>
//       {/* Footer */}
//       <div className="bg-gray-100 text-gray-800 px-[5vw] py-10 flex flex-col lg:flex-row justify-evenly">
//         <div className="mb-6 lg:mb-0 w-full lg:w-auto border-r-[1px] flex justify-center items-center px-4">
//           <ul className=" whitespace-nowrap flex lg:flex-col flex-wrap justify-center items-center gap-2">
//             <li className="hover:text-gray-500 cursor-pointer">Home</li>
//             <span className={`lg:hidden`}>|</span>
//             <li className="hover:text-gray-500 cursor-pointer">About</li>
//             <span className={`lg:hidden`}>|</span>

//             <li className="hover:text-gray-500 cursor-pointer">Services</li>
//             <span className={`lg:hidden`}>|</span>

//             <li className="hover:text-gray-500 cursor-pointer">Gallery</li>
//             <span className={`lg:hidden`}>|</span>

//             <li className="hover:text-gray-500 cursor-pointer">
//               FAQ & PRICING
//             </li>
//             <span className={`lg:hidden`}>|</span>

//             <li className="hover:text-gray-500 cursor-pointer">CONTACT</li>
//           </ul>
//         </div>
//         <div className="mb-6 lg:mb-0 w-full lg:w-auto pl-2 whitespace-nowrap px-4">
//           <h1 className="text-2xl font-bold mb-2">Hours</h1>
//           <ul className="space-y-2">
//             <li>Weekdays 8:00 - 20:00</li>
//             <li>Saturday 9:00 - 16:00</li>
//             <li>Sunday Closed</li>
//             <li>Holidays 10:00 - 14:00</li>
//           </ul>
//         </div>
//         <div className="mb-6 lg:mb-0 w-full lg:w-auto px-4">
//           <h1 className="text-2xl font-bold mb-2">Details</h1>
//           <ul className="space-y-2">
//             <li>Worldwide Shipping</li>
//             <li>
//               Dedicated team for smooth administrative, logistics, and delivery
//               support.
//             </li>
//             <li>100% Moneyback Guarantee</li>
//           </ul>
//         </div>
//         <div className="mb-6 lg:mb-0 w-full lg:w-auto px-4">
//           <h1 className="text-2xl font-bold mb-2">Geeta Labs</h1>
//           <ul className="space-y-2 whitespace-nowrap">
//             <li className="flex gap-2 items-center">
//               <IoCallOutline className="text-lg" /> 0-859-520-5465
//             </li>
//             <li className="flex gap-2 items-center">
//               <IoMailOutline className="text-lg" />
//               info@geetafabs.com
//             </li>
//             <li className="flex gap-2 items-center">
//               <FaLocationDot className="text-lg" />
//               76-D, Phase IV, Sector 18, Gurgaon
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="flex h-20 bg-gray-200 text-gray-800 justify-center items-center">
//         © Copyright 2020 Geeta Fabs All Rights Reserved
//       </div>
//     </>
//   );
// };

// export default Footer;


import React from "react";
import { IoCallOutline, IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { CiHeadphones } from "react-icons/ci";
import { FaRegMoneyBillAlt } from "react-icons/fa";

const Footer = ({ setPage }) => {
  const handleNavigation = (page) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Contact */}
      <div className="bg-[#222222] text-white p-10 ">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
          <ul>
            <li className="flex gap-2 items-center">
              <IoCallOutline />
              <a href="tel:+1234567890">+123 456 7890</a>
            </li>
            <li className="flex gap-2 items-center">
              <IoMailOutline />
              <a href="mailto:info@geetalabs.com">info@geetalabs.com</a>
            </li>
            <li className="flex gap-2 items-center">
              <IoLocationOutline />
              <span>123 Main St, City, Country</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Icons */}
      <div className="bg-white text-gray-800 p-10 flex flex-col lg:flex-row justify-evenly items-start">
        <div className="flex items-center mb-6 lg:mb-0 lg:w-1/3">
          <LiaShippingFastSolid className="text-3xl text-[#c02411]" />
          <div className="pl-4">
            <h1 className="text-xl font-bold">Worldwide Shipping</h1>
            <p>Delivery to over 200 countries</p>
          </div>
        </div>
        <div className="flex items-center mb-6 lg:mb-0 lg:w-1/3">
          <CiHeadphones className="text-3xl text-[#c02411]" />
          <div className="pl-4">
            <h1 className="text-xl font-bold">24/7 Customer Support</h1>
            <p>Always ready to help</p>
          </div>
        </div>
        <div className="flex items-center mb-6 lg:mb-0 lg:w-1/3">
          <FaRegMoneyBillAlt className="text-3xl text-[#c02411]" />
          <div className="pl-4">
            <h1 className="text-xl font-bold">100% Moneyback</h1>
            <p>Guaranteed refund policy</p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="bg-[#222222] text-white p-10">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-4">Quick Links</h1>
          <ul className="flex justify-evenly items-start">
            <li className="mb-2 lg:mb-0">
              <button onClick={() => handleNavigation("home")} className="hover:underline">
                Home
              </button>
            </li>
            <li className="mb-2 lg:mb-0">
              <button onClick={() => handleNavigation("about")} className="hover:underline">
                About
              </button>
            </li>
            <li className="mb-2 lg:mb-0">
              <button onClick={() => handleNavigation("services")} className="hover:underline">
                Services
              </button>
            </li>
            <li className="mb-2 lg:mb-0">
              <button onClick={() => handleNavigation("gallery")} className="hover:underline">
                Gallery
              </button>
            </li>
            <li className="mb-2 lg:mb-0">
              <button onClick={() => handleNavigation("faq")} className="hover:underline">
                FAQ
              </button>
            </li>
            <li className="mb-2 lg:mb-0">
              <button onClick={() => handleNavigation("contact")} className="hover:underline">
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
