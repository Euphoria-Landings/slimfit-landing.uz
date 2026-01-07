"use client";

import React from "react";
import { Leaf, Clock, Ban } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="w-full relative overflow-hidden flex flex-col md:block">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 flex flex-col">
        <div className="h-[55%] md:h-[65%] w-full bg-[#F4F9F4]"></div>
        <div className="h-[45%] md:h-[35%] w-full bg-gradient-to-r from-[#64B075] via-[#74C386] to-[#64B075]"></div>
      </div>

      <div className="max-w-[1100px] mx-auto w-[90%] relative z-10 grid grid-cols-1 md:grid-cols-2">
        {/* MATNLAR QISMI */}
        <div className="flex flex-col justify-center pt-10 md:pt-20 md:pb-16 order-2 md:order-1">
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-[52px] font-[900] text-brandGreen leading-[1.1] tracking-tight">
              Slimfit —{" "}
              <span className="relative inline-block">
                vazn nazoratini
                <span className="absolute bottom-1 left-0 w-full h-[3px] bg-blue-400"></span>
              </span>{" "}
              oqilona yondashuvi
            </h1>

            <p className="text-gray-800 text-sm md:text-xl font-medium tracking-tight">
              Arizangizni qoldiring va 100% chegirma oling!
            </p>

            {/* BUTTON WITH SHIMMER LIGHT EFFECT */}
            <div className="pt-2 md:pt-4 flex justify-center md:justify-start">
              <button className="relative overflow-hidden bg-gradient-to-b from-[#FFD645] to-[#FFB800] px-8 md:px-12 py-4 md:py-6 rounded-2xl shadow-[0_8px_0_0_#D49A00] active:shadow-none active:translate-y-[8px] transition-all duration-100 group">
                {/* Light Effect Line */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full animate-shimmer pointer-events-none z-10"></div>

                <span className="relative z-0 text-xl md:text-2xl font-[900] text-[#1A1A1A] uppercase tracking-wider">
                  Ariza qoldirish
                </span>
              </button>
            </div>
          </div>

          {/* IKONKALAR */}
          <div className="grid grid-cols-3 gap-2 mt-8 md:mt-20">
            {[
              { icon: Leaf, text: "tabiiy\nkomponentlar" },
              { icon: Clock, text: "kurs bo'yicha qabul\nqilishga mos" },
              { icon: Ban, text: "dori vositasi\nemas" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center space-y-2"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white border-[1.5px] border-black flex items-center justify-center shadow-md">
                  <item.icon className="w-5 h-5 md:w-7 md:h-7 text-black stroke-[2.5]" />
                </div>
                <p className="text-[8px] md:text-[10px] font-black text-black uppercase leading-tight whitespace-pre-line">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* MODEL QIZ - Mobileda matnga tegib turadi */}
        <div className="relative z-[10000] flex items-end justify-center md:justify-end h-[300px] md:h-[600px] order-1 md:order-2">
          <div className="relative w-full h-full">
            <Image
              src="/girls.png"
              fill
              className="object-contain object-bottom scale-110 md:scale-100"
              alt="Slimfit model"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
