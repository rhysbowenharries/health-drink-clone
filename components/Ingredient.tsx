import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
  backgroundColor: string;
  imageIndex: string;
  header: string;
  subHeader: string;
};

export function Ingredient({
  directionLeft,
  backgroundColor,
  imageIndex,
  header,
  subHeader,
}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={` object-cover filter group-hover:grayscale transition duration-300 ease-in-out ${backgroundColor} p-14`}
      >
        <Image
          src={`/ingredients/${imageIndex}.png`}
          alt="Fruit bowl"
          width={400}
          height={400}
        />
      </motion.div>
      <div className="h-full w-full absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white z-0">
        <div className="flex flex-col items-center justify-center h-full">
          <h3 className="text-3xl font-bold text-black opacity-100">
            {header}
          </h3>
          <p className="text-xl font-bold text-black opacity-100">
            {subHeader}
          </p>
        </div>
      </div>
    </div>
  );
}
