import React from "react";

const Services = () => {
  return (
    <div className="-mt-[116px] bg-white">
      <div className="pt-[116px] px-10 flex flex-col gap-8">
        <h1 className="text-center text-7xl bold italic">Services</h1>
        <div className="h-[300px] flex relative">
          <div className="w-1/2 h-full p-8 flex justify-center items-center text-7xl ">
            <div className="h-full w-full">
              <img
                src="/services/000001.webp"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-[70%] h-full p-8 flex justify-center items-center text-7xl absolute right-10">
            Cushion Covers
          </div>
        </div>
        <div className="h-[300px] flex flex-row-reverse relative">
          <div className="w-1/2  h-full p-8 flex justify-center items-center text-7xl ">
            <div className="h-full w-full">
              <img
                src="/services/000002.webp"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-[70%] h-full p-8 flex justify-center items-center text-7xl absolute left-10">
            Garment Manufacturing
          </div>
        </div>
        <div className="h-[300px] flex relative">
          <div className="w-1/2 h-full p-8 flex justify-center items-center text-7xl ">
            <div className="h-full w-full">
              <img
                src="/services/000003.webp"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-[70%] h-full p-8 flex justify-center items-center text-7xl absolute right-10">
            Home Furnishing
          </div>
        </div>
        <div className="h-[300px] flex flex-row-reverse relative">
          <div className="w-1/2 h-full p-8 flex justify-center items-center text-7xl ">
            <div className="h-full w-full">
              <img
                src="/services/000004.webp"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-[70%] h-full p-8 flex justify-center items-center text-7xl absolute left-10">
            Kaftaan
          </div>
        </div>
        <div className="h-[300px] flex relative">
          <div className="w-1/2 h-full p-8 flex justify-center items-center text-7xl ">
            <div className="h-full w-full">
              <img
                src="/services/000005.webp"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-[70%] h-full p-8 flex justify-center items-center text-7xl absolute right-10">
            Tote Bags
          </div>
        </div>
        <div className="h-[300px] flex flex-row-reverse relative">
          <div className="w-1/2 h-full p-8 flex justify-center items-center text-7xl ">
            <div className="h-full w-full">
              <img
                src="/services/000006.webp"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-[70%] h-full p-8 flex justify-center items-center text-7xl absolute left-10">
            Digital Printing
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
