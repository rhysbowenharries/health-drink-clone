import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsCommand } from "react-icons/bs";
import { BiBasket } from "react-icons/bi";

type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <div className="justify-center p-5 pt-10 flex bg-orange-200">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <div className="flex space-x-8 sm:space-x-8 md:space-x-16 items-center z-20 m-0">
            <Link href="#juice">
              <button>Juice</button>
            </Link>
            <Link href="#blurb">
              <button>Blurb</button>
            </Link>
            <Link href="#juice">
              <div className="flex-row text-4xl items-center hidden md:flex">
                <BsCommand />
                <button>CPJ</button>
              </div>
            </Link>
            <Link href="#properties">
              <button>Properties</button>
            </Link>
            <Link href="#nutrition">
              <button>Nutrition</button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{
            y: -100,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="absolute px-5 top-24 sm:top18 flex z-20 justify-end lg:items-center lg:right-0 lg:top-11 "
        >
          <div className="flex items-center">
            <button className="mr-2 w-24 p-1 bg-white rounded-md">
              SIGN UP
            </button>
            <BiBasket />
          </div>
        </motion.div>
      </div>
    </>
  );
}
