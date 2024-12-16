import React from "react";

const LandingPage = () => {
  return (
    <>
      <div className="flex h-[110%] -mt-[116px]">
        <div className="w-1/2 h-full"></div>
        <div className="w-1/2 h-full ">
          <img
            src="/home/gallery-06.jpg"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="h-[110%] bg-white relative px-10">
        <div className="w-[60%] h-full">
          <img
            src="/home/man-sitting.webp"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-[50%] h-full absolute top-0 right-10">
          <div className="w-full h-full flex flex-col justify-evenly ">
            <div></div>
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl bold italic">Digital Textile Printing</h1>
              <h5 className="text-lg bold">YOUR DESIGN OVER YOUR FABRIC</h5>
              <div className="flex flex-col gap-2">
                <p>
                  We offer comprehensive and state of the art solutions in
                  design, product development, manufacturing, quality control,
                  logistics and delivery management.
                </p>

                <p>
                  Geeta Fabs specialized in all kind of Garment manufacturing
                  products like Kaftan, Jumpsuits, Scarfs and home furnishing
                  products.
                </p>

                <p>
                  Expert guidance on vendor selection,best suited to the
                  customer’s product need with commitment to quality
                  requirements, budget,size of the orders, technical and
                  manufacturing capabilities.
                </p>

                <p>
                  We have a systematic design process where we generate trend
                  reports, research, make technical drawings, source the right
                  fabrics and trims in order to create the ideal sample and
                  present them to customers.
                </p>

                <p>
                  Dedicated team for smooth administrative, logistics and
                  delivery support.
                </p>
              </div>
            </div>
            <div className="flex justify-between px-4 ">
              <img src="/home/certification.webp" className="" />
              <img src="/home/signature.webp" className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[110%] bg-white relative px-10 bg-[#8eb9e3]">
        <div className="w-[60%] h-full absolute top-0 left-0 z-10 px-10">
          <div className="w-full h-full flex flex-col justify-evenly ">
            <div className="flex flex-col gap-2 ">
              <h1 className="text-5xl bold italic">Garment Manufacturing</h1>
              <h5 className="text-lg bold">AS PER YOUR REQUIREMENTS.</h5>
              <div className="flex flex-col gap-2">
                <p>
                  From sketch to warehouse, clothing can only be made with
                  technical expertise and a strong sense of design.
                </p>

                <p>
                  Therefore you need to choose your clothing manufacturer
                  wisely.
                </p>

                <p>
                  If you are a brand or retailer that cares about value for
                  money Geeta Fabs is a full-service clothing manufacturer based
                  in Gurugram.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[40%] h-full absolute top-0 right-5 ">
          <img
            src="/home/tailoring.webp"
            className="h-full w-full object-cover "
          />
        </div>
      </div>
      <div className="bg-white p-16 flex justify-center items-center">
        <h1 className="text-4xl">Follow @geetafabs on Instagram</h1>
      </div>
      {/* Gallery  */}
      <div className="bg-white px-10 flex flex-wrap justify-center gap-6 pb-10">
        <div className=" h-44 w-44 bg-zinc-100 ">
          <img
            src="/gallery/000001.webp"
            className="h-full w-full object-cover"
          />
        </div>
        <div className=" h-44 w-44 bg-zinc-100 ">
          <img
            src="/gallery/000002.webp"
            className="h-full w-full object-cover"
          />
        </div>
        <div className=" h-44 w-44 bg-zinc-100 ">
          <img
            src="/gallery/000003.webp"
            className="h-full w-full object-cover"
          />
        </div>
        <div className=" h-44 w-44 bg-zinc-100 ">
          <img
            src="/gallery/000004.webp"
            className="h-full w-full object-cover"
          />
        </div>
        <div className=" h-44 w-44 bg-zinc-100 ">
          <img
            src="/gallery/000005.webp"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      
    </>
  );
};

export default LandingPage;
