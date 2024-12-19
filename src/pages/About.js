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

        <h1 className="about-heading  text-center text-5xl italic text-black mb-4 pt-4 font-serif">
          About Us
        </h1>

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
              <h1 className="text-4xl font-mono ">Welcome to Geeta Fabs</h1>
              <p className="text-lg ">ABOUT OUR COMPANY</p>
              <div className="flex flex-col gap-4 pt-6 pl-4 text-justify">
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
          <div className="pr-[72px] pl-[88px] bg-white flex flex-col gap-4 pb-8 ">
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
          <div className="px-[72px] bg-white flex flex-col gap-4 pb-8">
            <h1 className="text-2xl font-bold ">
              Our State-of-the-Art Infrastructure
            </h1>
            <div className="pl-4 text-justify">
              <p>
                At Geeta Fabs, we take pride in our modern infrastructure,
                powered by a team of highly skilled technicians and designers.
                Their expertise enables us to consistently deliver
                premium-quality prints within remarkably short timeframes. Our
                advanced ink sublimation printing technology ensures flawless
                image transfers directly onto polyester-based media or fabrics,
                using specially coated paper subjected to precise heat and
                pressure conditions.
              </p>
              <p>
                Equipped with the latest high-speed, imported multi-head Allwin
                Printer machines, our facility boasts an impressive production
                capacity of up to 2,000 meters per day. This robust setup allows
                us to handle high-volume orders while maintaining exceptional
                quality standards. Our process is rooted in precision-driven
                measurements and cutting-edge manufacturing techniques, ensuring
                the finest details are captured in every print.
              </p>
              <p>
                To align with global quality and environmental benchmarks, we
                exclusively use eco-friendly, Azo-free, non-harmful Korean inks.
                These inks are not only safe for the environment but also
                deliver unmatched color vibrancy and durability, conforming to
                international quality control standards.
              </p>
              <p>
                What truly sets Geeta Fabs apart is our unwavering commitment to
                excellence. Every digital print we produce is crafted with
                outstanding quality, sophisticated finishing, and competitive
                pricing. Whether you require customized designs or bulk orders,
                Geeta Fabs is your trusted partner for delivering superior
                results that exceed expectations.
              </p>
            </div>
          </div>
          <div className="px-[72px] bg-white flex flex-col gap-4 pb-8">
            <h1 className="text-2xl font-bold ">Why Choose Us?</h1>
            <p className="pl-4 text-justify">
              At Geeta Fabs, we are leaders in digital printing, textile and
              graphic design, product development, and production. Our mission
              is to deliver unparalleled quality, innovation, and customer
              satisfaction, making us your trusted partner for all your printing
              needs.
            </p>

            <ul className="list-disc pl-5 flex flex-col gap-2 text-justify">
              <li>
                <span className="font-bold">
                  Personalized Design Collaboration
                </span>
                : Whether you choose to collaborate with our skilled design team
                to create a custom design or provide your own, we ensure your
                vision is translated into reality with unmatched precision.
              </li>
              <li>
                <span className="font-bold">
                  Advanced Printing on Polyester Fabrics
                </span>
                : We specialize in digital technologies that deliver the highest
                quality prints on a wide variety of polyester fabrics,
                maximizing efficiency and reducing turnaround times.
              </li>
              <li>
                <span className="font-bold">Unlimited Color Combinations</span>:
                Through the CMYK process, colors are mixed directly on the
                fabric, providing infinite tones and combinations for unique and
                vibrant designs.
              </li>
              <li>
                <span className="font-bold">No Screen Engraving Required</span>:
                Our on-demand printing technology eliminates the need for screen
                engraving, offering flexibility with no limitations on repeat
                sizes or design complexity.
              </li>
              <li>
                <span className="font-bold">High-Definition Resolution</span>:
                Printing at 300 DPI and above, we ensure every detail of your
                design is rendered with exceptional clarity, making it ideal for
                high-definition photos and intricate patterns.
              </li>
              <li>
                <span className="font-bold">Low Minimum Order Quantities</span>:
                Whether you need a single custom piece or a bolk order, our
                services cater to all requirements, making customization easy
                and accessible for everyone.
              </li>
              <li>
                <span className="font-bold">Durable, Long-Lasting Prints</span>:
                Our unique process embeds the design beneath the surface of the
                fabric, ensuring it won’t fade, wash, or rub off, guaranteeing
                durability and quality.
              </li>
              <li>
                <span className="font-bold">Eco-Friendly Practices</span>: With
                no effluents to treat and zero water consumption, our processes
                are environmentally sustainable, aligning with global green
                practices.
              </li>
              <li>
                <span className="font-bold">State-of-the-Art Machinery</span>:
                Our advanced imported machines, including multi-head Allwin
                Printers, ensure precision, speed, and reliability, meeting the
                demands of large-scale production effortlessly.
              </li>
              <li>
                <span className="font-bold">Quick Turnaround Times</span>: With
                a daily production capacity of up to 2,000 meters, we deliver
                your orders promptly without compromising on quality.
              </li>
              <li>
                <span className="font-bold">Highly Customizable Options</span>:
                From intricate designs to unique color palettes, we provide
                endless customization options to meet your specific needs.
              </li>
              <li>
                <span className="font-bold">Cost-Effective Solutions</span>: We
                offer competitive pricing without compromising on quality,
                ensuring our clients receive the best value for their
                investment.
              </li>
              <li>
                <span className="font-bold">Global Quality Standards</span>: We
                use Azo-free, eco-friendly Korean inks that meet international
                quality certifications, ensuring vibrant and safe prints.
              </li>
              <li>
                <span className="font-bold">Expert Consultation Services</span>:
                Our team of experts is always available to provide guidance on
                design ideas, fabric selection, and technical details, ensuring
                you make the best choices for your project.
              </li>
              <li>
                <span className="font-bold">Innovation-Driven Approach</span>:
                At Geeta Fabs, we are constantly upgrading our processes and
                technologies to stay ahead of industry trends and deliver
                cutting-edge solutions to our clients.
              </li>
              <li>
                <span className="font-bold">Dedicated Customer Support</span>:
                From the initial consultation to final delivery, our team
                ensures a smooth and hassle-free experience, addressing your
                queries and requirements promptly.
              </li>
            </ul>
            <p>
              By choosing Geeta Fabs, you’re not just opting for a
              service—you’re partnering with a company that values quality,
              creativity, and sustainability, ensuring your designs make a
              lasting impression.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
