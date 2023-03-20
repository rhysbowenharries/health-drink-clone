import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
type Props = {};

export default function Blurb({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1.5 }}
      className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-20 justify-evenly mx-auto items-center p-20 bg-rose-400"
    >
      <div className="relative">
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative mb-20 md:mb-0 object-cover w-96 h-96 xl:w-[500px] xl:h-[600px]"
        >
          <h1 className="text-8xl  uppercase text-white font-extrabold tracking-[5px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            TAKE CTRL
          </h1>
          <Image
            // loader={myLoader}
            src="/fruit.png"
            alt="Fruit bowl"
            width={800}
            height={800}
          />
        </motion.div>
      </div>
      <div className="space-y-10 px-0 md:px-10 text-left	max-w-md">
        <p className="text-base ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum omnis
          ratione obcaecati id, alias inventore nisi deleniti commodi eum,
          explicabo aperiam architecto ab assumenda, odio impedit recusandae
          quas laudantium officia. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Perferendis voluptatum eos illum voluptatibus
        </p>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum omnis
          ratione obcaecati id, alias inventore nisi deleniti commodi eum,
          explicabo aperiam architecto ab assumenda, odio impedit recusandae
          quas laudantium officia. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Perferendis voluptatum eos illum voluptatibus
        </p>
      </div>
    </motion.div>
  );
}
