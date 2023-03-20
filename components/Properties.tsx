import React from "react";
import { motion } from "framer-motion";
import { Ingredient } from "./Ingredient";

type Props = {};

export default function Properties({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1.5 }}
      viewport={{ once: true }}
      className="relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <Ingredient
          backgroundColor="bg-amber-600"
          imageIndex="1"
          header="Stamina"
          subHeader="in a beet"
        />
        <Ingredient
          backgroundColor="bg-amber-100"
          imageIndex="2"
          header="Manage weight"
          subHeader="with alomnd milk"
          directionLeft
        />
        <Ingredient
          backgroundColor="bg-pink-300"
          imageIndex="3"
          header="Antioxident"
          subHeader="boost with cacao"
        />
        <Ingredient
          backgroundColor="bg-yellow-700 "
          imageIndex="4"
          header="Metabolise"
          subHeader="with vanilla pods"
          directionLeft
        />
        <Ingredient
          backgroundColor="bg-amber-700"
          imageIndex="5"
          header="Boost energy"
          subHeader="with maca"
        />
        <Ingredient
          backgroundColor="bg-violet-300"
          imageIndex="6"
          header="Alkalise"
          subHeader="with sea salt"
          directionLeft
        />
      </div>
    </motion.div>
  );
}
