"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ingredientList = [
  { name: "yalpiz bargi", src: "/yalpiz.png", angle: 0 },
  { name: "dala o'ti", src: "/dala-oti-1.png", angle: 60 },
  { name: "dala o'ti", src: "/dala-oti-2.png", angle: 120 },
  { name: "zanjabil ildizi", src: "/zanjabil.png", angle: 180 },
  { name: "rovoch ildizi", src: "/rovoch.png", angle: 240 },
  { name: "makkajo'xori popugi", src: "/makkajoxori.png", angle: 300 },
];

export const Ingredients = () => {
  const [radius, setRadius] = useState(400);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) {
        setRadius(140);
      } else if (window.innerWidth < 768) {
        setRadius(180);
      } else if (window.innerWidth < 1024) {
        setRadius(280);
      } else {
        setRadius(400);
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <section className="relative  py-2  bg-[#F9F9F9] overflow-hidden flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[1000] text-slate-900 mb-8 sm:mb-10 lg:mb-0 uppercase tracking-tighter z-50 relative"
        >
          Tarkibi
        </motion.h2>

        <div className="relative flex items-center justify-center min-h-[500px] sm:min-h-[600px] md:min-h-[800px] lg:min-h-[1000px]">
          {/* MARKAZIY CAPSULA */}
          <div className="relative z-10 w-25 h-25 sm:w-48 sm:h-48 md:w-50 md:h-50 lg:w-60 lg:h-60 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#AAFDA5] rounded-full scale-125 shadow-inner" />
            <div className="relative w-32 h-16 sm:w-36 sm:h-18 md:w-52 md:h-26 lg:w-100 lg:h-50 z-20">
              <Image
                src="/slimfit.png"
                alt="Slimfit Capsule"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* STATIK ORBITA */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {ingredientList.map((item, idx) => (
              <div
                key={idx}
                className="absolute flex items-center justify-center"
                style={{
                  transform: `rotate(${item.angle}deg) translateY(-${radius}px)`,
                }}
              >
                {/* STATIK: Rasm va matn doimo tikka turadi */}
                <div
                  className="flex flex-col items-center pointer-events-auto"
                  style={{
                    transform: `rotate(-${item.angle}deg)`,
                  }}
                >
                  {/* INGREDIENT RASMI */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-40 md:h-40 lg:w-64 lg:h-64">
                    <Image
                      src={item.src}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />

                    {/* Markazga yo'nalgan chiziq */}
                    <div
                      className="absolute top-[85%] left-1/2 w-[1.5px] bg-slate-200 -translate-x-1/2 -z-10 shadow-sm"
                      style={{ height: `${radius / 2.5}px` }}
                    />
                  </div>

                  {/* MATN */}
                  <span className="mt-2 sm:mt-3 md:mt-4 lg:mt-6 text-[10px] sm:text-[10px] md:text-lg lg:text-[15px] font-[1000] text-slate-900 uppercase text-center whitespace-nowrap bg-white/40 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 rounded-full">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
