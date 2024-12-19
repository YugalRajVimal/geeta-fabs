import React, { useEffect } from "react";
import gsap from "gsap";

const HomeDigitialPrintingPage = () => {
  useEffect(() => {
    // Create an IntersectionObserver to detect when the #digitalPrintingHome div is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Check if the element is in the viewport
          if (entry.isIntersecting) {
            // Animate the image from left to right
            gsap.fromTo(
              ".image-container img",
              { x: "-100%", opacity: 0 }, // Initial state: off-screen left, hidden
              {
                x: "0%", // Final state: at the original position
                opacity: 1, // Fade in
                duration: 1.5,
                ease: "power3.out",
              }
            );

            // Animate the text and PNG images from right to left
            gsap.fromTo(
              ".text-container, .certificates-container",
              { x: "100%", opacity: 0 }, // Initial state: off-screen right, hidden
              {
                x: "0%", // Final state: at the original position
                opacity: 1, // Fade in
                duration: 1.5,
                ease: "power3.out",
                stagger: 0.2, // Add stagger effect for the text and PNGs
              }
            );

            // Once the animation runs, disconnect the observer to avoid it running multiple times
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is in view
      }
    );

    // Start observing the #digitalPrintingHome div
    const target = document.querySelector("#digitalPrintingHome");
    if (target) observer.observe(target);

    // Cleanup observer when the component unmounts
    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <div
      className="h-[100%] flex items-center justify-evenly bg-white relative px-10"
    >
      <div
        id="digitalPrintingHome"
        className="flex items-center justify-evenly w-full h-full"
      >
        {/* Image */}
        <div className="image-container w-[35%] h-[80%] overflow-hidden">
          <img
            src="/home/abc.avif"
            alt="Digital Printing"
            className="h-full object-contain"
          />
        </div>

        {/* Text and Description */}
        <div className="text-container w-[50%] h-full flex flex-col justify-evenly px-4">
          <div>
            <h1 className="text-5xl italic pb-4">
              Digital Textile Printing
            </h1>
            <h5 className="text-lg">YOUR DESIGN OVER YOUR FABRIC</h5>
          </div>
          <div className="flex flex-col gap-2 pl-4 text-justify">
            <p>
              We offer comprehensive and state of the art solutions in design,
              product development, manufacturing, quality control, logistics,
              and delivery management.
            </p>
            <p>
              Geeta Fabs specializes in all kinds of Garment manufacturing
              products like Kaftan, Jumpsuits, Scarfs, and home furnishing
              products.
            </p>
            <p>
              Expert guidance on vendor selection, best suited to the customer’s
              product need with a commitment to quality requirements, budget,
              size of the orders, technical and manufacturing capabilities.
            </p>
            <p>
              We have a systematic design process where we generate trend
              reports, research, make technical drawings, source the right
              fabrics and trims in order to create the ideal sample and present
              them to customers.
            </p>
            <p>
              Dedicated team for smooth administrative, logistics, and delivery
              support.
            </p>
          </div>

          {/* PNGs */}
          <div className="certificates-container flex justify-between px-4">
            <img
              src="/home/certification.webp"
              alt="Certification"
              className="transition-all"
            />
            <img
              src="/home/signature.webp"
              alt="Signature"
              className="transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDigitialPrintingPage;
