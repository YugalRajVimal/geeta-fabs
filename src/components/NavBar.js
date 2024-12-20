import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import gsap from "gsap";

const NavBar = (props) => {
  const { page, setPage } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const [animating, setAnimating] = useState(false); // To handle animation state

  const toggleMenu = async () => {
    document.body.classList.remove("overflow-hidden");

    // Animate the height collapse when the menu closes
    await gsap.to(".menu-container", {
      height: "0px",
      duration: 0.5,
      ease: "power2.in",
    });

    // Fade out the nav items before collapsing the menu
    gsap.to(".nav-link", {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.2,
    });

    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (pageName) => {
    setAnimating(true); // Start animation
    gsap.to(".nav-link", {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.3,
      onComplete: () => {
        setPage(pageName);
        toggleMenu(); // Close menu after animation completes
        setAnimating(false); // Reset animating state
      },
    });
  };

  const handleLargeScreenMenuItemClick = (pageName) => {
    setPage(pageName);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");

      // Animate the height of the menu container
      gsap.fromTo(
        ".menu-container",
        { height: 0 },
        { height: "100vh", duration: 0.5, ease: "power2.out" }
      );

      // Animate the nav items
      gsap.fromTo(
        ".nav-link",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 }
      );
    }
  }, [menuOpen]);

  return (
    <>
      <div className="relative h-[90px] bg-red-900 flex lg:flex-row flex-col justify-center lg:justify-between items-center text-white  w-full z-10 px-4 ">
        <div className="flex items-center gap-1">
          <IoMdMail />
          info@geetafabs.com
        </div>
        <div className="flex items-center gap-1">
          <FaLocationDot />
          Plot No-550, Udyog Vihar, Phase 5, Sector 19, Gurgaon
        </div>
      </div>
      <div className="relative h-[100px] shadow-md w-full z-10 px-4 lg:px-0">
        <div className=" w-full h-full flex  justify-between items-center z-[20]">
          {/* Logo */}
          <div className=" flex-1 flex justify-start lg:justify-center text-xl lg:text-left">
            <img src="/home/logo.png" className="h-[40px]" alt="Logo" />
          </div>

          <div className="w-[70%] hidden h-full  z-10 lg:flex flex-col items-center border-l-black border-y-0 border-r-0 border border-[0.2px]">
            <div className="flex justify-end item-center w-full pl-2">
              <span className="block flex items-center gap-1 pr-4 p-2">
                <IoIosCall />
                Phone No.+91 8595205465
              </span>
            </div>
            <div className="border border-black border-[0.2px] w-full"></div>
            <ul className="flex gap-3 items-center justify-evenly text-sm h-full w-full">
              <li
                onClick={() => handleLargeScreenMenuItemClick("home")}
                className={`cursor-pointer font-bold ${
                  page === "home" && "text-[#c02411]"
                }`}
              >
                Home
              </li>
              <li
                onClick={() => handleLargeScreenMenuItemClick("about")}
                className={`cursor-pointer font-bold ${
                  page === "about" && "text-[#c02411]"
                }`}
              >
                About Us
              </li>
              <li
                onClick={() => handleLargeScreenMenuItemClick("services")}
                className={`cursor-pointer font-bold ${
                  page === "services" && "text-[#c02411]"
                }`}
              >
                Services
              </li>
              <li
                onClick={() => handleLargeScreenMenuItemClick("gallery")}
                className={`cursor-pointer font-bold ${
                  page === "gallery" && "text-[#c02411]"
                }`}
              >
                Gallery
              </li>
              <li
                onClick={() => handleLargeScreenMenuItemClick("faq")}
                className={`cursor-pointer font-bold ${
                  page === "faq" && "text-[#c02411]"
                }`}
              >
                FAQ & Pricing
              </li>
              <li
                onClick={() => handleLargeScreenMenuItemClick("contact")}
                className={`cursor-pointer font-bold ${
                  page === "contact" && "text-[#c02411]"
                }`}
              >
                Contact Us
              </li>
            </ul>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="lg:hidden flex-1 text-right">
            <button className="focus:outline-none" onClick={toggleMenu}>
              {menuOpen ? (
                <IoClose
                  className="w-8 h-8"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMenuItemClick(page);
                  }}
                />
              ) : (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Nav Items for small screens */}
        {menuOpen && (
          <div className="menu-container absolute top-[100%] pb-[216px] pt-[100px] w-full bg-zinc-100 z-10 flex flex-col justify-center items-center">
            <ul className="flex flex-col gap-3 items-center justify-evenly text-sm h-full w-full">
              <li
                onClick={() => handleMenuItemClick("home")}
                className={`nav-link cursor-pointer font-bold ${
                  page === "home" && "text-[#c02411]"
                }`}
              >
                Home
              </li>
              <li
                onClick={() => handleMenuItemClick("about")}
                className={`nav-link cursor-pointer font-bold ${
                  page === "about" && "text-[#c02411]"
                }`}
              >
                About Us
              </li>
              <li
                onClick={() => handleMenuItemClick("services")}
                className={`nav-link cursor-pointer font-bold ${
                  page === "services" && "text-[#c02411]"
                }`}
              >
                Services
              </li>
              <li
                onClick={() => handleMenuItemClick("gallery")}
                className={`nav-link cursor-pointer font-bold ${
                  page === "gallery" && "text-[#c02411]"
                }`}
              >
                Gallery
              </li>
              <li
                onClick={() => handleMenuItemClick("faq")}
                className={`nav-link cursor-pointer font-bold ${
                  page === "faq" && "text-[#c02411]"
                }`}
              >
                FAQ & Pricing
              </li>
              <li
                onClick={() => handleMenuItemClick("contact")}
                className={`nav-link cursor-pointer font-bold ${
                  page === "contact" && "text-[#c02411]"
                }`}
              >
                Contact Us
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
