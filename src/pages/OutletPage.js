import React, { useState } from "react";
import NavBar from "../components/NavBar";
import LandingPage from "./LandingPage";
import Footer from "../components/Footer";
import About from "./About";
import Services from "./Services";
import Gallery from "./Gallery";
import FaqAndPricing from "./FaqAndPricing";
import Contact from "./Contact";

const OutletPage = () => {
  const [page, setPage] = useState("home");

  return (
    <div className="overflow-y-auto overflow-x-hidden h-screen  z-[10]">
      <NavBar page={page} setPage={setPage}/>
      {page == "home" && <LandingPage />}
      {page == "about" && <About />}
      {page=="services" && <Services />}
      {page=="gallery" && <Gallery />}
      {page=="faq"&&<FaqAndPricing />}
      {page=="contact"&&<Contact />}

      <Footer />
    </div>
  );
};

export default OutletPage;
