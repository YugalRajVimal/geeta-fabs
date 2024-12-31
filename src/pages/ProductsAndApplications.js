import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const ProductsAndApplications = (props) => {
  const { setPage } = props;
  const cardRefs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      const image = imageRefs.current[index];
      card.addEventListener("mouseenter", () => {
        gsap.to(image, { scale: 0.95, duration: 0.3 });
        gsap.to(card.querySelector("#cardText"), {
          backgroundColor: "#7f152f",
          duration: 0.3,
          color: "white",
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(image, { scale: 1, duration: 0.3 });
        gsap.to(card.querySelector("#cardText"), {
          backgroundColor: "transparent",
          duration: 0.3,
          color: "black",
        });
      });
    });
  }, []);

  const ProductsAndApplicationPageDetail = [
    {
      image: "/home/gallery-06.jpg",
      id: "bags",
      name: "Bags",
    },
    {
      image: "/home/gallery-06.jpg",
      id: "activeWears",
      name: "Active Wears",
    },
  ];

  const handlePageChange = (pageName) => {
    console.log(pageName);
    setPage(pageName);
  };

  return (
    <div className="flex justify-center items-center flex-col gap-2 py-10 font-mono">
      <div className="flex justify-center items-center flex-col gap-2">
        <h1 className="text-4xl px-10 text-center font-serif">
          PRODUCTS / APPLICATIONS OF DIGITAL PRINTING
        </h1>
        <div className="w-[200px] border-black border h-[2px]"></div>
        <p className="px-28">
          Explore the high-end fashion applications Usha Fabs provides. Superior
          colour-matching, expanded colour spectrum, photo-realism, discharge
          ink combined with excellent hand-feel. Tour the different application
          worlds and find your best Usha Fabs match
        </p>
      </div>
      <div className="flex gap-4 justify-evenly items-center w-full flex-wrap py-10 xl:px-60 lg:px-20">
        {ProductsAndApplicationPageDetail.map((detail, index) => (
          <div
            key={index}
            onClick={() => handlePageChange(detail.id)}
            className="w-[320px] aspect-[1/1] flex flex-col justify-center items-center shadow-lg"
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div className="h-[85%] aspect-[1/1] overflow-hidden">
              <img
                src={detail.image}
                className="object-cover h-full w-full"
                ref={(el) => (imageRefs.current[index] = el)}
              />
            </div>
            <div
              id="cardText"
              className="h-[15%] w-full flex justify-center items-center text-lg text-center font-mono"
            >
              {detail.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsAndApplications;
