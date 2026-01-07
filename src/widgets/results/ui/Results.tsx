"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const resultsData = [
  {
    id: 1,
    image: "/result1.png", // Rasmlaringni public papkasiga shu nomda qo'y
    weight: "-20 kg",
    duration: "2 oylik natija",
  },
  {
    id: 2,
    image: "/result2.png",
    weight: "-32 kg",
    duration: "4 oylik natija",
  },
  {
    id: 3,
    image: "/result3.png",
    weight: "-25 kg",
    duration: "2 oylik natija",
  },
];

export const Results = () => {
  return (
    <section id="natijalar" className="w-full py-20 bg-white">
      <div className="max-w-[1100px] mx-auto w-[90%]">
        {/* SARLAVHA */}
        <h2 className="text-3xl md:text-[40px] font-[900] text-gray-800 mb-12 tracking-tight">
          Avvalgi va keyingi suratlar + sharhlar
        </h2>

        {/* NATIJALAR GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {resultsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col relative group"
            >
              {/* RASM KONTEYNERI */}
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-lg shadow-md">
                {/* Bu yerda 1x1 Before/After rasm turadi */}
                <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 italic text-sm">
                  [Before/After Image {item.id}]
                  {/* <Image src={item.image} fill className="object-cover" alt="result" /> */}
                </div>
              </div>

              {/* YASHIL NATIJA BLOKI (Linear Gradient) */}
              <div className="w-full bg-gradient-to-r from-[#9CFF9C] to-[#5BA35B] py-4 flex flex-col items-center justify-center text-center">
                <span className="text-3xl md:text-4xl font-[900] text-[#1A1A1A] leading-none">
                  {item.weight}
                </span>
                <span className="text-xs md:text-sm font-bold text-[#1A1A1A]/80 uppercase mt-1 tracking-wider">
                  {item.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
