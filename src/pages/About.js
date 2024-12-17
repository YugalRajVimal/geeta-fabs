import React, { useEffect } from "react";
import gsap from "gsap";

const About = () => {
  useEffect(() => {
    // GSAP animation for the heading and content when the page loads
    gsap.fromTo(
      ".about-heading",
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
    
    gsap.fromTo(
      ".about-content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return (
    <div className="w-full -mt-[116px] bg-white">
      <div className="pt-[116px] h-full">
        {/* Heading Section */}
        <div className="h-36 relative">
          <h1 className="about-heading absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-serif text-black italic">
            About Us
          </h1>
        </div>
        
        {/* Content Section */}
        <div className="about-content">
          <div className="flex px-10">
            {/* Image Section */}
            <div className="w-[40%] p-8 flex justify-center items-center">
              <img
                src="/about/logo512.png"
                className="h-full w-full object-contain"
                alt="Geeta Fabs Logo"
              />
            </div>

            {/* Text Section */}
            <div className="w-[60%] p-8 flex flex-col justify-center">
              <h1 className="text-5xl font-bold italic">Welcome to Geeta Fabs</h1>
              <p className="text-lg font-bold">ABOUT OUR COMPANY</p>
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
                  our well-experienced Designers team. Geeta Fabs specialises in
                  all kinds of natural & synthetic fabric printing like cotton
                  fabric, linen fabric, silk fabric, satin fabric, Poly Crepe,
                  Georgette, Poly Satin, Poly Silk, Scuba & Poly Lycra & Garment
                  manufacturing like Kaftan, Jumpsuits, Scarfs and home
                  furnishing products.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="px-[72px] bg-white flex flex-col gap-4 pb-8">
            <p>
              We have latest technology textile printing machines to process
              high resolution printing results of fabric surpassing 1000 meters
              of fabric every day. We are always ready for bulk orders and
              provide high quality digital printing with time-bound delivery to
              our clients. 
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
              Geeta Fabs specialised in all kinds of Garment manufacturing
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
