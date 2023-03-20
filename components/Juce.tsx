import Image from "next/image";
import React from "react";
type Props = {};

export default function Juce({}: Props) {
  return (
    <div className="md:py-24 h-screen relative flex flex-col md:items-center md:justify-center text-center overflow-hidden bg-orange-200">
      <h1 className="text-8xl md:text-[290px] uppercase text-black font-extrabold tracking-[5px] mt-20 md:m-0 md:pb-36 ">
        CTRL
      </h1>
      <Image
        // loader={myLoader}
        src="/oj.png"
        alt="Oj in a bottle"
        width={500}
        height={800}
        className="mx-auto md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:pb-36 flex justify-center"
      />
      <p className="text-black font-extrabold">The Energy Shake</p>
      <p className="flex px-10 justify-center">
        Almond milk, beetroot, vanilla pods, maca powder, cacao and sea salt.
      </p>
      <p className="text-black font-extrabold">330ml / £4.50</p>
    </div>
  );
}
