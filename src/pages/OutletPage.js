import React, { useState } from "react";
import NavBar from "../components/NavBar";
import LandingPage from "./LandingPage";
import Footer from "../components/Footer";
import About from "./About";
import Services from "./Services";
import Gallery from "./Gallery";
import FaqAndPricing from "./FaqAndPricing";
import Contact from "./Contact";
import ProductsAndApplications from "./ProductsAndApplications";
import ProductsAndApplicationsPageTemplate from "./ProductsAndApplicationsPageTemplate";

const OutletPage = () => {
  const [page, setPage] = useState("home");

  const productsAndApplicationDetails = [
    {
      id: "activeWears",
      name: "Active Wears",
      description:
        "At Usha Fabs, we offer customized and personalized digital printing solution of active wear, with no minimum quantities. Highly versatile printing and unparalleled colours on any polyester fabrics as per your need and requirements. It gives freedom to your creativity for athletic sportswear printing, T-shirts printing, crop tops for yoga, classic capris and leggings printing etc. for sports, workouts, dance routines, or day-to-day style. All our services are inhouse, from printing to sublimation and final checking, which allows us to control all the entire production process and guarantee you the best quality possible. For any comments or feedback please feel free to get in touch.",
      applicationText:
        "We focus on Sublimation Digital Printing on any polyester fabrics:",
      applications: [
        "Jacquards",
        "Crepe",
        "Dupioni Silk",
        "Georgette",
        "Waffle",
        "Satin",
        "Poly-Knits",
        "Taffeta",
        "Micro Twill",
        "Etc",
      ],
      images: [
        "/gallery2/000001.jpeg",
        "/gallery2/000002.jpeg",
        "/gallery2/000003.jpeg",
        "/gallery2/000004.jpeg",
        "/gallery2/000005.jpeg",
        "/gallery2/000006.jpeg",
      ],
    },
    {
      id: "bags",
      name: "Bags",
      description:
        "At Usha Fabs, we offer customized and personalized digital printing solution of active wear, with no minimum quantities. Highly versatile printing and unparalleled colours on any polyester fabrics as per your need and requirements. It gives freedom to your creativity for athletic sportswear printing, T-shirts printing, crop tops for yoga, classic capris and leggings printing etc. for sports, workouts, dance routines, or day-to-day style. All our services are inhouse, from printing to sublimation and final checking, which allows us to control all the entire production process and guarantee you the best quality possible. For any comments or feedback please feel free to get in touch.",
      applicationText:
        "We focus on Sublimation Digital Printing on any polyester fabrics:",
      applications: [
        "Jacquards",
        "Crepe",
        "Dupioni Silk",
        "Georgette",
        "Waffle",
        "Satin",
        "Poly-Knits",
        "Taffeta",
        "Micro Twill",
        "Etc",
      ],
      images: [
        "/gallery2/000001.jpeg",
        "/gallery2/000002.jpeg",
        "/gallery2/000003.jpeg",
        "/gallery2/000004.jpeg",
        "/gallery2/000005.jpeg",
        "/gallery2/000006.jpeg",
      ],
    },
  ];

  return (
    <div className="overflow-y-auto overflow-x-hidden h-screen  z-[10]">
      <NavBar page={page} setPage={setPage} />
      {page == "home" && <LandingPage page={page} setPage={setPage}/>}
      {page == "about" && <About />}
      {page == "services" && <Services />}
      {page == "gallery" && <Gallery />}
      {page == "faq" && <FaqAndPricing />}
      {page == "contact" && <Contact />}
      {page == "productsAndApplications" && (
        <ProductsAndApplications page={page} setPage={setPage} />
      )}

      {page == productsAndApplicationDetails[0].id && (
        <ProductsAndApplicationsPageTemplate
          page={productsAndApplicationDetails[0].id}
          pageName={productsAndApplicationDetails[0].name}
          description={productsAndApplicationDetails[0].description}
          applicationText={productsAndApplicationDetails[0].applicationText}
          applications={productsAndApplicationDetails[0].applications}
          images={productsAndApplicationDetails[0].images}
        />
      )}

      {page == productsAndApplicationDetails[1].id && (
        <ProductsAndApplicationsPageTemplate
          page={productsAndApplicationDetails[1].id}
          pageName={productsAndApplicationDetails[1].name}
          description={productsAndApplicationDetails[1].description}
          applicationText={productsAndApplicationDetails[1].applicationText}
          applications={productsAndApplicationDetails[1].applications}
          images={productsAndApplicationDetails[1].images}
        />
      )}

      <Footer page={page} setPage={setPage} />
    </div>
  );
};

export default OutletPage;
