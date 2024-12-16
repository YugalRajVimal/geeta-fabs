import React from "react";

const About = () => {
  return (
    <div className="w-full -mt-[116px] bg-white">
      <div className="pt-[116px] h-full ">
        <div className="h-36 relative">
          <img
            src="/about/machine.jpg"
            className="h-full w-full object-cover"
          />
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl text-white italic">
            About Us
          </h1>
        </div>
        <div className="">
          <div className="flex px-10">
            <div className="w-[60%] p-8 flex flex-col justify-end">
              <h1 className="text-5xl bold italic">Welcome to Geeta Fabs</h1>
              <p className="text-lg">ABOUT OUR COMPANY</p>
              <div className="flex flex-col gap-4 pt-6">
                <p>
                  Geeta Fabs is Delhi NCR based a large format digital fabric
                  printing studio & garment manufacturing hub, that supplies
                  digital printed fabric and standard quality garments.
                </p>
                <p>
                  We focus on digitally printing your designs onto our tested
                  and approved fabrics.
                </p>
                <p>
                  We always use the latest digital technology for different
                  types of fabrics printing and custom colour matching done by
                  our well-experienced Designers team. Geeta Fabs specialised in
                  all kind of natural & synthetic fabric printing like cotton
                  fabric, linen fabric, silk fabric, satin fabric, Poly Crepe,
                  Georgette, Poly Satin, Poly Silk, Scuba & Poly Lycra & Garment
                  manufacturing like Kaftan, Jumpsuits, Scarfs and home
                  furnishing products.
                </p>
              </div>
            </div>
            <div className="w-[40%] flex justify-center items-center">
              <img
                src="/about/logo512.png"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <div className="px-[72px] bg-white flex flex-col gap-4">
            <p>
              We have latest technology textile printing machines to process
              high resolution printing results of fabric surpassing 1000 meters
              of fabric every day. We are always ready for bulk orders and
              provides high quality digital printing with time bound delivery to
              our clients.{" "}
            </p>
            <p>
              Expert guidance on vendor selection, best suited to the customer’s
              product need with commitment to quality requirements, budget, size
              of the orders, technical and manufacturing capabilities.
            </p>
            <p>
              We offer comprehensive and state of the art solutions in design,
              product development, manufacturing, quality control, logistics and
              delivery management.
            </p>
            <p>
              Geeta Fabs specialised in all kind of Garment manufacturing
              products like Kaftan, Jumpsuits, Scarfs and home furnishing
              products.
            </p>
            <p>
              Expert guidance on vendor selection, best suited to the customer’s
              product need with commitment to quality requirements, budget, size
              of the orders, technical and manufacturing capabilities.
            </p>
            <p>
              We have a systematic design process where we generate trend
              reports, research, make technical drawings, source the right
              fabrics and trims in order to create the ideal sample and present
              them to customers.
            </p>
            <p>
              Dedicated team for smooth administrative, logistics and delivery
              support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
