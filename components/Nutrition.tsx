import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const Nutrition = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center p-20 bg-amber-100"
    >
      <h3 className="absoloute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="h-120 w-120"
      >
        <Image
          src="/info.png"
          alt="nutritional information"
          width={800}
          height={800}
        />
      </motion.div>
    </motion.div>
  );
};
