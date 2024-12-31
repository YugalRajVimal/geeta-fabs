import React from "react";
import { GoArrowRight } from "react-icons/go";

const ProductsAndApplicationsPageTemplate = (props) => {
  const { pageName, description, applicationText, applications, images, banner } =
    props;

  return (
    <div className=" bg-gray-50 pb-10 font-mono">
        <div className="h-[150px]">
            <img src={banner} className="h-full w-full object-cover" />
        </div>
      <div className="py-4 text-center">
        <h1 className="text-4xl font-serif text-gray-900">{pageName}</h1>
      </div>

      <div className="flex gap-8 w-full justify-center px-6">
        {/* Left Section: Description */}
        <div className="w-[60%]  p-6 rounded-lg ">
          <div className="text-lg text-gray-700 border-l-[4px] border border-black border-y-0 border-r-0 pl-4 flex flex-col gap-4">{description}</div>
          {/* Images */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center items-center">
            {images && images?.map((img, index) => (
              <img key={index} src={img} alt={`Image ${index + 1}`} className="w-[200px] aspect-[1/1] object-cover rounded-lg" />
            ))}
          </div>
        </div>

        {/* Right Section: Applications */}
        <div className="w-[30%]  p-6 rounded-lg ">
          <h2 className="text-xl font-semibold text-gray-900">APPLICATIONS</h2>
          <hr className="my-4 border-gray-300" />
          <div className="text-md text-gray-600">{applicationText}</div>
          <ul className="mt-4">
            {applications?.map((apl, index) => (
              <li key={index} className="flex gap-2 items-center text-gray-700 mb-3">
                <GoArrowRight className="" />
                {apl}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductsAndApplicationsPageTemplate;
