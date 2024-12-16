import React from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <div className="-mt-[116px] h-full bg-white">
      <div className="pt-[116px] pb-10 h-full px-10 flex flex-col gap-8">
        <h1 className="text-center text-7xl bold italic">Gallery</h1>
        <div className="h-full flex gap-4 overflow-x-auto">
          {["000001", "000002", "000003", "000004", "000005"].map((img, index) => (
            <motion.div
              key={index}
              className="h-full flex items-center px-10 shrink-0"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <img
                src={`/gallery/${img}.webp`}
                className="h-[80%] aspect-[1/1] object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
