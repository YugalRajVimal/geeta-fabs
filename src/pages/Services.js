import React, { useEffect } from "react";
import gsap from "gsap";

const Services = () => {
  useEffect(() => {
    // Animations for the services section
    gsap.fromTo(
      ".service-item",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      ".service-image",
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.3,
        duration: 1,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className="-mt-[116px] bg-white">
      <div className="pt-[116px] px-10 flex flex-col gap-8 font-mono">
        <h1 className="text-center text-5xl  italic font-serif py-4 pt-4 service-item">Services</h1>

        <div className="h-[300px] flex relative service-item">
          <div className="w-1/2 h-full p-8 flex justify-center items-center text-5xl service-image">
            <div className="h-full w-full">
              <img
                src="/services/000001.webp"
                className="w-full h-full object-cover"
                alt="Cushion Covers"
              />
            </div>
          </div>
          <div className="w-[50%] h-full p-8 flex justify-center items-center text-5xl absolute right-10">
            Cushion Covers
          </div>
        </div>

        <div className="h-[300px] flex flex-row-reverse relative service-item">
          <div className="w-1/2 h-full p-8 flex justify-center items-center text-5xl service-image">
            <div className="h-full w-full">
              <img
                src="/services/000002.webp"
                className="w-full h-full object-cover"
                alt="Garment Manufacturing"
              />
            </div>
          </div>
          <div className="w-[50%] h-full p-8 flex justify-center items-center text-5xl absolute left-10">
            Garment Manufacturing
          </div>
        </div>

        <div className="h-[300px] flex relative service-item">
          <div className="w-1/2 h-full p-8 flex justify-center items-center text-5xl service-image">
            <div className="h-full w-full">
              <img
                src="/services/000003.webp"
                className="w-full h-full object-cover"
                alt="Home Furnishing"
              />
            </div>
          </div>
          <div className="w-[50%] h-full p-8 flex justify-center items-center text-5xl absolute right-10">
            Home Furnishing
          </div>
        </div>

        <div className="h-[300px] flex flex-row-reverse relative service-item">
          <div className="w-1/2 h-full p-8 flex justify-center items-center text-5xl service-image">
            <div className="h-full w-full">
              <img
                src="/services/000004.webp"
                className="w-full h-full object-cover"
                alt="Kaftaan"
              />
            </div>
          </div>
          <div className="w-[50%] h-full p-8 flex justify-center items-center text-5xl absolute left-10">
            Kaftaan
          </div>
        </div>

        <div className="h-[300px] flex relative service-item">
          <div className="w-1/2 h-full p-8 flex justify-center items-center text-5xl service-image">
            <div className="h-full w-full">
              <img
                src="/services/000005.webp"
                className="w-full h-full object-cover"
                alt="Tote Bags"
              />
            </div>
          </div>
          <div className="w-[50%] h-full p-8 flex justify-center items-center text-5xl absolute right-10">
            Tote Bags
          </div>
        </div>

        <div className="h-[300px] flex flex-row-reverse relative service-item">
          <div className="w-1/2 h-full p-8 flex justify-center items-center text-5xl service-image">
            <div className="h-full w-full">
              <img
                src="/services/000006.webp"
                className="w-full h-full object-cover"
                alt="Digital Printing"
              />
            </div>
          </div>
          <div className="w-[50%] h-full p-8 flex justify-center items-center text-5xl absolute left-10">
            Digital Printing
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
