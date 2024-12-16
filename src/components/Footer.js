import React from "react";

const Footer = () => {
  return (
    <>
      {/* Footer  */}
      <div className="h-2/5 bg-white px-[10vw] flex justify-evenly pt-24">
        <div className="w-[15vw]">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>FAQ & PRICING</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="w-[15vw]">
          <h1 className="text-2xl bold">Hours</h1>
          <ul>
            <li>Weekdays 8:00 - 20:00 </li>
            <li>Saturday 9:00 - 16:00 </li>
            <li>Sunday Closed</li>
            <li>Holidays 10:00 - 14:00</li>
          </ul>
        </div>
        <div className="w-[15vw]">
          <h1 className="text-2xl bold">Details</h1>
          <ul>
            <li>Worldwide Shipping </li>
            <li>
              Dedicated team for smooth administrative,logistics and delivery
              support.{" "}
            </li>
            <li>100% Moneyback Guarantee</li>
          </ul>
        </div>
        <div className="w-[15vw]">
          <h1 className="text-2xl bold">Geeta Labs</h1>
          <ul>
            <li>0-859-520-5465 </li>
            <li>info@geetafabs.com </li>
            <li>76-D, Phase IV, Sector 18, Gurgaon</li>
          </ul>
        </div>
      </div>
      <div className="flex h-20 bg-white justify-center items-center">
        © Copyright 2020 Geeta Fabs All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
