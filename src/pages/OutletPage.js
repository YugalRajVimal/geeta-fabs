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
      description: (
        <>
          <p>
            At Geeta Fabs, we are dedicated to providing customized and
            personalized digital printing solutions for activewear, with no
            minimum order requirements. Our versatile printing techniques ensure
            vibrant and long-lasting colors on any polyester fabric, allowing
            you to bring your unique creative ideas to life. Whether it’s
            athletic sportswear, T-shirts, yoga crop tops, classic capris, or
            leggings for sports, workouts, dance routines, or casual style,
            we’ve got you covered. From printing to sublimation and rigorous
            quality checks, all our services are handled in-house to maintain
            complete control over the production process and ensure unmatched
            quality.
          </p>
          <p>
            Our commitment to excellence is at the core of everything we do. We
            understand that activewear is more than just clothing—it’s an
            extension of personal expression and performance. That’s why we use
            state-of-the-art printing technology to deliver high-quality,
            durable designs that resist fading, cracking, or peeling over time.
            This advanced technology allows us to achieve remarkable detail and
            precision, ensuring every piece of activewear is as visually
            stunning as it is functional. Whether you’re an individual looking
            to create custom designs or a brand aiming to produce distinctive
            merchandise, our team is ready to help you bring your vision to
            life.
          </p>
          <p>
            At Geeta Fabs, we cater to diverse customer needs, offering
            unparalleled flexibility in both small and bulk orders. Our no
            minimum order policy makes it easy for startups, small businesses,
            and individual creators to explore their creativity without worrying
            about large upfront costs. For larger businesses and established
            brands, our streamlined processes and robust infrastructure ensure
            we can handle bulk orders efficiently while maintaining the highest
            standards of quality. Regardless of order size, every client
            benefits from our personalized approach and unwavering attention to
            detail.
          </p>
          <p>
            Activewear demands fabrics and prints that perform under pressure.
            Our solutions are designed to meet the rigorous demands of active
            lifestyles, ensuring that your designs stay vibrant and intact
            through intense workouts, long runs, or dance routines. We
            specialize in sublimation printing, a technique that seamlessly
            integrates colors into polyester fabrics, resulting in prints that
            are not only visually striking but also highly durable. This process
            ensures that designs do not fade or peel, even after multiple
            washes, making our activewear perfect for long-term use.
          </p>
          <p>
            Our offerings go beyond just printing. We pride ourselves on being a
            one-stop solution for all your activewear customization needs. From
            initial design consultation to the final quality check, every step
            of the process is meticulously managed by our in-house team. This
            vertical integration allows us to maintain strict quality control
            and deliver consistent results that exceed customer expectations.
            Our rigorous quality checks ensure that every piece leaving our
            facility meets the highest industry standards, giving you confidence
            in the durability and performance of your products.
          </p>
          <p>
            Creativity is at the heart of our business, and we strive to empower
            our clients to express their individuality through their designs.
            Whether it’s a bold pattern for a yoga crop top, a minimalist logo
            for a classic T-shirt, or intricate artwork for a pair of leggings,
            we provide the tools and expertise to bring your ideas to life. Our
            design team works closely with you to ensure your vision is
            accurately translated into wearable art. With our wide range of
            customization options, you can create activewear that perfectly
            reflects your brand identity or personal style.
          </p>
          <p>
            Timely delivery is another hallmark of our services. We understand
            the importance of meeting deadlines, especially for businesses
            operating in competitive markets. Our efficient production processes
            and dedicated logistics team ensure that your orders are completed
            and delivered on time, every time. This reliability has earned us
            the trust of a growing clientele who value both quality and
            punctuality in their activewear suppliers.
          </p>
          <p>
            At Geeta Fabs, we take pride in our ability to transform your vision
            into exceptional, wear-resistant activewear that performs as great
            as it looks. Whether you’re designing for sports enthusiasts,
            fitness lovers, or everyday comfort, our expertise and dedication
            ensure that your products stand out in both style and functionality.
            Trust us to deliver activewear solutions that exceed your
            expectations and set you apart in the market. With Geeta Fabs, the
            possibilities for creative and high-performance activewear are truly
            limitless.
          </p>
        </>
      ),
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
        "/ProductsAndApplications/ActiveWears/000001.webp",
        "/ProductsAndApplications/ActiveWears/000002.webp",
      ],
      banner: "/banner.webp",
    },
    {
      id: "digitalPrintingBags",
      name: "Digital Printing Bags",
      description: (
        <>
          <p>
            At Geeta Fabs, we specialize in providing customized and
            personalized digital printing solutions for a wide range of bags,
            from simple designs to fashionable urban styles. With no minimum
            order requirements, we make it easy for individuals, small
            businesses, and larger brands to bring their creative ideas to life.
            Whether you need basic tote bags or high-end customizable fashion
            bags, our services are designed to meet your unique needs.
          </p>
          <p>
            Our highly versatile printing techniques ensure vibrant,
            unparalleled colors and durable results on polycanvas or any
            polyester fabric of your choice. With our innovative double-print
            process, your tote or bag can be fully customized both inside and
            out, offering endless creative possibilities. From intricate
            patterns to bold logos, your designs can take center stage, making
            each bag a perfect blend of function and style.
          </p>
          <p>
            At Geeta Fabs, all our services are handled in-house—from initial
            printing to sublimation and rigorous final quality checks. This
            complete control over the production process allows us to guarantee
            exceptional quality in every product we deliver. By managing each
            step internally, we ensure consistency, reliability, and precision
            that you can trust.
          </p>
          <p>
            Whether you’re creating a personalized gift, launching a custom bag
            collection, or designing promotional merchandise for your brand, our
            team is here to assist you every step of the way. We take pride in
            offering solutions that match your vision while ensuring timely
            delivery and outstanding craftsmanship. Let Geeta Fabs transform
            your imagination into high-quality, durable, and stylish bags that
            make a statement.
          </p>
        </>
      ),
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
      images: [],
      banner: "/banner.webp",
    },
  ];

  return (
    <div className="overflow-y-auto overflow-x-hidden h-screen  z-[10]">
      <NavBar page={page} setPage={setPage} />
      {page == "home" && <LandingPage page={page} setPage={setPage} />}
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
          banner={productsAndApplicationDetails[0].banner}
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
          banner={productsAndApplicationDetails[1].banner}
        />
      )}

      <Footer page={page} setPage={setPage} />
    </div>
  );
};

export default OutletPage;
