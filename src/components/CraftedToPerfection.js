import React, { useEffect } from "react";
import gsap from "gsap";

const CraftedToPerfection = () => {
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
    <div className="py-10 flex items-center justify-evenly bg-white relative px-10">
      <div
        id="digitalPrintingHome"
        className="flex items-center justify-evenly w-full h-full"
      >
        {/* Image */}
        <div className="image-container w-[35%] h-[80%] overflow-hidden">
          <img
            src="/home/xyz.jpeg"
            alt="Digital Printing"
            className="h-full object-contain"
          />
        </div>

        {/* Text and Description */}
        <div className="text-container w-[50%] h-full flex flex-col justify-evenly px-4">
          <div>
            <h1 className="text-5xl italic">CRAFTED TO PERFECTION.</h1>
          </div>
          <div className="flex flex-col gap-2 pl-8 pt-4">
            <p>
              At Geeta Fabs, we believe innovation is the cornerstone of
              exceptional textile manufacturing. With a profound understanding
              of fabrics and cutting-edge techniques, we bring your creative
              ideas to life, ensuring the highest standards of quality and
              craftsmanship in every piece.
            </p>
            <p>
              Our commitment to custom fabric solutions ensures that we deliver
              precisely what our clients envision, from fashion to interiors and
              industrial applications. Utilizing advanced digital printing
              technology, we achieve vibrant, high-resolution prints that are
              both durable and captivating, with no limitations on design
              complexity.
            </p>
            <p>
              Sustainability lies at the heart of our operations. We prioritize
              eco-friendly practices, using Azo-free dyes, environmentally
              conscious inks, and sustainable processes that meet global
              standards. Every step of our production chain reflects our
              dedication to minimizing environmental impact while maintaining
              exceptional quality.
            </p>
            <p>
              At Geeta Fabs, we provide an end-to-end service, managing every
              aspect of textile manufacturing—from design and prototyping to
              final production. This seamless coordination ensures faster
              delivery and impeccable quality control, empowering our clients to
              focus on their vision while we handle the details.
            </p>
            <p>
              Our innovative approach opens the door to unlimited design
              possibilities, crafting unique textures, patterns, and finishes
              that make your products truly stand out. Driven by a passion for
              excellence, our research and development team constantly explores
              new techniques and sustainable materials to keep us ahead of
              industry trends.
            </p>
            <p>
              If you’re a brand or retailer seeking innovative, high-quality,
              and sustainable textile solutions, Geeta Fabs is your trusted
              partner. Based in Gurugram, we collaborate globally to deliver
              groundbreaking textiles that redefine market standards. Let us
              transform your ideas into reality and take your products to new
              heights.
            </p>
          </div>

          {/* PNGs
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CraftedToPerfection;
