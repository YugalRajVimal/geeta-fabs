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
      images: [
        "/ProductsAndApplications/DigitalPrintingBags/000002.jpeg",
        "/ProductsAndApplications/DigitalPrintingBags/000003.jpeg",
        "/ProductsAndApplications/DigitalPrintingBags/000004.jpeg",
      ],
      banner: "/ProductsAndApplications/DigitalPrintingBags/000001.jpeg",
    },
    {
      id: "beachWear",
      name: "Beach Wear",
      description: (
        <>
          <p>
            At Geeta Fabs, we specialize in providing customized and
            personalized digital printing solutions with no minimum order
            requirements. Our advanced printing techniques ensure vibrant and
            unparalleled colors on polyester fabrics tailored to your specific
            needs and requirements. Whether you're designing for personal use,
            promotional merchandise, or a product line, we make it easy to bring
            your creative ideas to life.
          </p>
          <p>
            All our services are handled entirely in-house, from initial
            printing to sublimation and thorough final quality checks. This
            complete control over the production process allows us to ensure
            consistent results and guarantee the best quality possible. Our
            streamlined processes and dedication to craftsmanship ensure that
            every product meets the highest standards of durability and visual
            appeal.
          </p>
          <p>
            Whether you’re looking to create unique designs, explore new ideas,
            or enhance your brand identity, Geeta Fabs is your trusted partner
            for high-quality digital printing. We’re here to turn your
            imagination into reality with reliable, efficient, and top-notch
            services.
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
      images: ["/ProductsAndApplications/BeachWear/000001.jpeg"],
      banner: "/ProductsAndApplications/BeachWear/000001.jpeg",
    },
    {
      id: "fabricPrinting",
      name: "Fabric Printing",
      description: (
        <>
          <p>
            At Geeta Fabs, we specialize in fabric banner and flag printing that
            can be fully customized and personalized to meet your specific
            needs. Our banners are crafted from soft, textured materials that
            not only look beautiful when displayed but are also highly durable
            for extended use. These fabric banners are ideal for a wide range of
            indoor events such as trade shows, in-store displays, birthdays,
            gatherings, and much more.
          </p>
          <p>
            Our advanced printing techniques ensure vibrant, unparalleled colors
            on polyester fabrics, providing exceptional quality and versatility.
            Whether you require intricate designs or bold statements, our
            printing solutions bring your vision to life with precision and
            clarity. All our services are managed entirely in-house, from
            printing and sublimation to final quality checks. This allows us to
            maintain complete control over the production process and
            consistently deliver products of the highest standards.
          </p>
          <p>
            Perfect for both personal and professional use, our fabric banners
            combine elegance with durability, ensuring they make a lasting
            impression. At Geeta Fabs, we are committed to turning your creative
            ideas into high-quality banners that stand out. Get in touch with us
            today for exceptional service and results.
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
        "/ProductsAndApplications/FabricPrinting/000002.jpeg",
        "/ProductsAndApplications/FabricPrinting/000001.webp",
      ],
      banner: "/ProductsAndApplications/FabricPrinting/000002.jpeg",
    },
    {
      id: "fashionGarments",
      name: "Fashion Garments",
      description: (
        <>
          <p>
            At Geeta Fabs, we offer customized and personalized digital printing
            solutions with no minimum order requirements. Our highly versatile
            printing techniques ensure vibrant and unparalleled colors on any
            polyester fabric to meet your unique needs and requirements.
            Leveraging our expertise in digital printing, we proudly provide an
            exceptional range of Designer Digital Printed Fabrics, perfect for
            dresses, kaftans, tops, and more.
          </p>
          <p>
            All our services are handled entirely in-house, from printing and
            sublimation to final quality checks. This integrated approach allows
            us to maintain complete control over the production process and
            deliver consistent, high-quality results every time. Whether you’re
            creating bespoke fashion pieces or sourcing materials for a new
            collection, Geeta Fabs guarantees unparalleled craftsmanship and
            attention to detail.
          </p>
          <p>
            Let Geeta Fabs bring your creative ideas to life with our top-notch
            digital printing services. For any queries or feedback, feel free to
            get in touch with us today.
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
      images: [ "/ProductsAndApplications/FashionGarments/000001.webp"],
      banner:  "/ProductsAndApplications/FashionGarments/000001.webp",
    },
    {
      id: "homeFurnishing",
      name: "Home Furnishing",
      description: (
        <>
          <p>
            At Geeta Fabs, we offer customized and personalized digital printing
            solutions with no minimum order requirements. Our highly versatile
            printing techniques ensure vibrant and unparalleled colors on any
            polyester fabric to meet your unique needs and requirements.
            Leveraging our expertise in digital printing, we proudly provide an
            exceptional range of Designer Digital Printed Fabrics, perfect for
            dresses, kaftans, tops, and more.
          </p>
          <p>
            All our services are handled entirely in-house, from printing and
            sublimation to final quality checks. This integrated approach allows
            us to maintain complete control over the production process and
            deliver consistent, high-quality results every time. Whether you’re
            creating bespoke fashion pieces or sourcing materials for a new
            collection, Geeta Fabs guarantees unparalleled craftsmanship and
            attention to detail.
          </p>
          <p>
            Let Geeta Fabs bring your creative ideas to life with our top-notch
            digital printing services. For any queries or feedback, feel free to
            get in touch with us today.
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
        "/ProductsAndApplications/HomeFurnishing/000001.webp",
        "/ProductsAndApplications/HomeFurnishing/000002.webp",
        "/ProductsAndApplications/HomeFurnishing/000003.webp",
      ],
      banner: "/ProductsAndApplications/HomeFurnishing/000001.webp",
    },
    {
      id: "rollToRollPrinting",
      name: "Roll To Roll Printing",
      description: (
        <>
          <p>
            At Geeta Fabs, we offer customized and personalized digital
            roll-to-roll printing solutions with a maximum width of 70 inches on
            any required polyester fabric. Our seamless design patterns enable
            printing at any length without difficulty, making it an ideal
            solution for a variety of creative and commercial applications.
          </p>
          <p>
            Our highly versatile printing techniques ensure vibrant and
            unparalleled colors on polyester fabrics, tailored to meet your
            unique needs and requirements. With all services managed entirely
            in-house, from printing and sublimation to final quality checks, we
            maintain complete control over the entire production process. This
            allows us to guarantee consistent, high-quality results every time.
          </p>
          <p>
            Whether you need fabrics for fashion, interiors, or promotional
            purposes, Geeta Fabs delivers exceptional craftsmanship and
            attention to detail. Let us transform your ideas into stunning
            designs with our cutting-edge digital roll-to-roll printing
            technology. For any queries or feedback, feel free to get in touch
            with us today.
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
        "/ProductsAndApplications/RollToRoll/000001.jpeg",
        "/ProductsAndApplications/RollToRoll/000002.webp",
        "/ProductsAndApplications/RollToRoll/000003.webp",
      ],
      banner: "/ProductsAndApplications/RollToRoll/000001.jpeg",
    },
    {
      id: "sareesAndSuits",
      name: "Sarees / Suits",
      description: (
        <>
          <p>
            At Geeta Fabs, we specialize in customized and personalized digital
            printing on sarees and suits, with no minimum order requirements.
            Our digital printed dupattas add a vibrant touch to any outfit,
            elevating your look for every occasion. With highly versatile
            printing techniques and unmatched color vibrancy, we create stunning
            designs on polyester fabrics, perfect for digital floral printed
            sarees or contemporary designer suits suitable for daily wear,
            parties, and traditional events.
          </p>
          <p>
            All our services are managed entirely in-house, from printing and
            sublimation to thorough quality checks. This integrated approach
            allows us to maintain complete control over the production process,
            ensuring consistently high-quality results. At Geeta Fabs, we are
            dedicated to turning your creative ideas into beautifully crafted
            sarees, suits, and dupattas that stand out.
          </p>
          <p>
            For any comments or feedback, please feel free to get in touch with
            us.
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
        "/ProductsAndApplications/SuitsAndSarees/000001.webp",
        "/ProductsAndApplications/SuitsAndSarees/000002.webp",
      ],
      banner: "/ProductsAndApplications/SuitsAndSarees/000001.webp",
    },
    {
      id: "scarfs",
      name: "Scarfs",
      description: (
        <>
          <p>
            At Geeta Fabs, we offer customized and personalized digital printing
            on scarves, stoles, pocket squares, and more, with no minimum order
            requirements. Our advanced and versatile printing techniques ensure
            vibrant and unparalleled colors on any polyester fabric, making it
            easy to translate your artwork onto stylish accessories. Whether
            you're looking to create a unique product line or elevate your
            brand, our design labs make the process seamless and efficient.
          </p>
          <p>
            All our services are handled entirely in-house, from printing and
            sublimation to meticulous quality checks. This hands-on approach
            enables us to maintain full control over the production process,
            guaranteeing exceptional quality every time. At Geeta Fabs, we are
            committed to transforming your creative visions into beautifully
            crafted scarves, stoles, and pocket squares that make a statement.
          </p>
          <p>
            For any comments or feedback, please feel free to get in touch with
            us.
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
        "/ProductsAndApplications/Scarfs/000001.webp",
        "/ProductsAndApplications/Scarfs/000002.webp",
      ],
      banner: "/ProductsAndApplications/Scarfs/000001.webp",
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

      {page == productsAndApplicationDetails[2].id && (
        <ProductsAndApplicationsPageTemplate
          page={productsAndApplicationDetails[2].id}
          pageName={productsAndApplicationDetails[2].name}
          description={productsAndApplicationDetails[2].description}
          applicationText={productsAndApplicationDetails[2].applicationText}
          applications={productsAndApplicationDetails[2].applications}
          images={productsAndApplicationDetails[2].images}
          banner={productsAndApplicationDetails[2].banner}
        />
      )}
      {page == productsAndApplicationDetails[3].id && (
        <ProductsAndApplicationsPageTemplate
          page={productsAndApplicationDetails[3].id}
          pageName={productsAndApplicationDetails[3].name}
          description={productsAndApplicationDetails[3].description}
          applicationText={productsAndApplicationDetails[3].applicationText}
          applications={productsAndApplicationDetails[3].applications}
          images={productsAndApplicationDetails[3].images}
          banner={productsAndApplicationDetails[3].banner}
        />
      )}

      {page == productsAndApplicationDetails[4].id && (
        <ProductsAndApplicationsPageTemplate
          page={productsAndApplicationDetails[4].id}
          pageName={productsAndApplicationDetails[4].name}
          description={productsAndApplicationDetails[4].description}
          applicationText={productsAndApplicationDetails[4].applicationText}
          applications={productsAndApplicationDetails[4].applications}
          images={productsAndApplicationDetails[4].images}
          banner={productsAndApplicationDetails[4].banner}
        />
      )}
      {page == productsAndApplicationDetails[5].id && (
        <ProductsAndApplicationsPageTemplate
          page={productsAndApplicationDetails[5].id}
          pageName={productsAndApplicationDetails[5].name}
          description={productsAndApplicationDetails[5].description}
          applicationText={productsAndApplicationDetails[5].applicationText}
          applications={productsAndApplicationDetails[5].applications}
          images={productsAndApplicationDetails[5].images}
          banner={productsAndApplicationDetails[5].banner}
        />
      )}
      {page == productsAndApplicationDetails[6].id && (
        <ProductsAndApplicationsPageTemplate
          page={productsAndApplicationDetails[6].id}
          pageName={productsAndApplicationDetails[6].name}
          description={productsAndApplicationDetails[6].description}
          applicationText={productsAndApplicationDetails[6].applicationText}
          applications={productsAndApplicationDetails[6].applications}
          images={productsAndApplicationDetails[6].images}
          banner={productsAndApplicationDetails[6].banner}
        />
      )}
      {page == productsAndApplicationDetails[7].id && (
        <ProductsAndApplicationsPageTemplate
          page={productsAndApplicationDetails[7].id}
          pageName={productsAndApplicationDetails[7].name}
          description={productsAndApplicationDetails[7].description}
          applicationText={productsAndApplicationDetails[7].applicationText}
          applications={productsAndApplicationDetails[7].applications}
          images={productsAndApplicationDetails[7].images}
          banner={productsAndApplicationDetails[7].banner}
        />
      )}
      {page == productsAndApplicationDetails[8].id && (
        <ProductsAndApplicationsPageTemplate
          page={productsAndApplicationDetails[8].id}
          pageName={productsAndApplicationDetails[8].name}
          description={productsAndApplicationDetails[8].description}
          applicationText={productsAndApplicationDetails[8].applicationText}
          applications={productsAndApplicationDetails[8].applications}
          images={productsAndApplicationDetails[8].images}
          banner={productsAndApplicationDetails[8].banner}
        />
      )}

      <Footer page={page} setPage={setPage} />
    </div>
  );
};

export default OutletPage;
