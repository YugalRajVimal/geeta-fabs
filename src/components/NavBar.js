import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
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
    } else {
      // document.body.classList.remove("overflow-hidden");
      // // Animate the height collapse when the menu closes
      // gsap.to(".menu-container", {
      //   height: "0px",
      //   duration: 0.5,
      //   ease: "power2.in",
      // });
      // // Fade out the nav items before collapsing the menu
      // gsap.to(".nav-link", {
      //   y: 20,
      //   opacity: 0,
      //   stagger: 0.1,
      //   duration: 0.3,
      // });
    }
  }, [menuOpen]);

  return (
    <div className="relative w-full z-10">
      <div className="p-4 w-full flex shadow-md justify-between items-center z-[20]">
        {/* Logo */}
        <div className="flex-1 flex justify-start text-xl lg:text-left">
          <img src="/home/logo.png" className="h-[40px]" alt="Logo" />
        </div>

        <div className="font-serif text-xl">
          <h1>Geeta Fabs | Digital Textile Printing & Garment Manufacturing</h1>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="flex-1 text-right">
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
              className={`nav-link cursor-pointer ${
                page === "home" && "text-[#c02411]"
              }`}
            >
              Home
            </li>
            <li
              onClick={() => handleMenuItemClick("about")}
              className={`nav-link cursor-pointer ${
                page === "about" && "text-[#c02411]"
              }`}
            >
              About
            </li>
            <li
              onClick={() => handleMenuItemClick("services")}
              className={`nav-link cursor-pointer ${
                page === "services" && "text-[#c02411]"
              }`}
            >
              Services
            </li>
            <li
              onClick={() => handleMenuItemClick("gallery")}
              className={`nav-link cursor-pointer ${
                page === "gallery" && "text-[#c02411]"
              }`}
            >
              Gallery
            </li>
            <li
              onClick={() => handleMenuItemClick("faq")}
              className={`nav-link cursor-pointer ${
                page === "faq" && "text-[#c02411]"
              }`}
            >
              FAQ & Pricing
            </li>
            <li
              onClick={() => handleMenuItemClick("contact")}
              className={`nav-link cursor-pointer ${
                page === "contact" && "text-[#c02411]"
              }`}
            >
              Contact
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
