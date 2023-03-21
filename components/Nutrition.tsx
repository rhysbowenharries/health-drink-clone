import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const Nutrition = () => {
  return (
    <div className="bg-amber-100 pb-20">
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1.5 }}
        className="flex flex-col relative text-center sm:text-left sm:flex-row bg-amber-100 pt-10 "
      >
        <div className="mx-auto pt-7 pl-5">
          <h3 className="text-black text-4xl md:text-4xl font-extrabold ">
            Nutrition info
          </h3>
          <p className="text-gray-700 font-sans text-lg">
            Ctrl - The Energy Shake
          </p>
        </div>

        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Image
            src="/info.png"
            alt="nutritional information"
            width={600}
            height={800}
          />
        </motion.div>
      </motion.div>
      <div className="flex justify-center text-center mb-11">
        <button className="p-1 w-24 rounded-md bg-white max-w-lg">
          Order now
        </button>
      </div>
    </div>
  );
};
