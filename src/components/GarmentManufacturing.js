import React from 'react';
import { motion } from 'framer-motion';

const GarmentManufacturing = () => {
  return (
    <div className="h-[100%] bg-white relative px-10 bg-[#8eb9e3]">
      <div className="w-[60%] h-full absolute top-0 left-0 z-10 px-10">
        <motion.div
          className="w-full h-full flex flex-col justify-evenly"
          initial={{ opacity: 0, x: -100 }} // Initial position off-screen
          whileInView={{ opacity: 1, x: 0 }} // Move into position when in view
          viewport={{ once: true }} // Trigger animation only once when in view
          transition={{ duration: 1, ease: 'easeOut' }} // Add smooth transition
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl italic">Garment Manufacturing</h1>
            <h5 className="text-lg pl-2">AS PER YOUR REQUIREMENTS.</h5>
            <div className="flex flex-col gap-2 text-justify pl-4">
              <p>
                From sketch to warehouse, clothing can only be made with
                technical expertise and a strong sense of design.
              </p>
              <p>
                Therefore you need to choose your clothing manufacturer wisely.
              </p>
              <p>
                If you are a brand or retailer that cares about value for
                money, Geeta Fabs is a full-service clothing manufacturer based
                in Gurugram.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="w-[40%] h-full absolute top-0 right-0">
        <motion.img
          src="/home/tailoring.webp"
          className="h-full w-full object-cover"
          initial={{ opacity: 0, x: 100 }} // Initial position off-screen (right)
          whileInView={{ opacity: 1, x: 0 }} // Move into position when in view
          viewport={{ once: true }} // Trigger animation only once when in view
          transition={{ duration: 1, ease: 'easeOut' }} // Add smooth transition
        />
      </div>
    </div>
  );
};

export default GarmentManufacturing;
