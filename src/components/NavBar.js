import React, { useState } from "react";
import { RiShareForwardLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const NavBar = (props) => {
  const { page, setPage } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="h-[116px] flex justify-center items-center p-8 w-full">
      <div className="p-4 bg-zinc-100 w-full flex justify-between items-center z-[20]">
        {/* Logo */}
        <div className="flex-1 flex justify-start text-xl lg:text-left">
          <img src="/home/logo.png" className="h-[30px]" alt="Logo" />
        </div>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden flex-1 text-right">
          <button className="focus:outline-none" onClick={toggleMenu}>
            {menuOpen ? (
              <IoClose className="w-6 h-6" />
            ) : (
              <svg
                className="w-6 h-6"
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

        {/* Nav Items for larger screens */}
        <div className="hidden lg:flex flex-2 uppercase lg:flex-row gap-3 items-center justify-center text-sm">
          <ul className="flex gap-3">
            <li
              onClick={() => setPage("home")}
              className={`${page === "home" && "text-[#c02411]"}`}
            >
              Home
            </li>
            <li
              onClick={() => setPage("about")}
              className={`${page === "about" && "text-[#c02411]"}`}
            >
              About
            </li>
            <li
              onClick={() => setPage("services")}
              className={`${page === "services" && "text-[#c02411]"}`}
            >
              Services
            </li>
            <li
              onClick={() => setPage("gallery")}
              className={`${page === "gallery" && "text-[#c02411]"}`}
            >
              Gallery
            </li>
            <li
              onClick={() => setPage("faq")}
              className={`${page === "faq" && "text-[#c02411]"}`}
            >
              FAQ & Pricing
            </li>
            <li
              onClick={() => setPage("contact")}
              className={`${page === "contact" && "text-[#c02411]"}`}
            >
              Contact
            </li>
          </ul>
        </div>

        {/* Share */}
        <div className="flex-1 flex justify-end text-right hidden lg:block">
          <span className="flex justify-end text-xl">
            <a href="https://geetafabs.com">
              <RiShareForwardLine />
            </a>
          </span>
        </div>
      </div>

      {/* Nav Items for small screens */}
      {menuOpen && (
        <div className="absolute top-[116px] left-0 w-full bg-zinc-100 z-10 p-4 lg:hidden">
          <ul className="flex flex-col gap-3 items-center justify-center text-sm">
            <li
              onClick={() => {
                setPage("home");
                setMenuOpen(false);
              }}
              className={`${page === "home" && "text-[#c02411]"}`}
            >
              Home
            </li>
            <li
              onClick={() => {
                setPage("about");
                setMenuOpen(false);
              }}
              className={`${page === "about" && "text-[#c02411]"}`}
            >
              About
            </li>
            <li
              onClick={() => {
                setPage("services");
                setMenuOpen(false);
              }}
              className={`${page === "services" && "text-[#c02411]"}`}
            >
              Services
            </li>
            <li
              onClick={() => {
                setPage("gallery");
                setMenuOpen(false);
              }}
              className={`${page === "gallery" && "text-[#c02411]"}`}
            >
              Gallery
            </li>
            <li
              onClick={() => {
                setPage("faq");
                setMenuOpen(false);
              }}
              className={`${page === "faq" && "text-[#c02411]"}`}
            >
              FAQ & Pricing
            </li>
            <li
              onClick={() => {
                setPage("contact");
                setMenuOpen(false);
              }}
              className={`${page === "contact" && "text-[#c02411]"}`}
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
