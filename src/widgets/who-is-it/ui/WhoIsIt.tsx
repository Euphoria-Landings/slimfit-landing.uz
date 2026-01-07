"use client";

import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    id: 1,
    title: "fitgirl",
    desc: "Tana vaznini nazoratini xohlasa",
    icon: "🧘‍♀️", // Bu yerda SVG yoki rasm qo'yishing mumkin
  },
  {
    id: 2,
    title: "ovqat",
    desc: "Oqilona ovqatlanishga intilsa",
    icon: "🥗",
  },
  {
    id: 3,
    title: "modda",
    desc: "Modda almashinuvi sekin bo'lsa",
    icon: "🧬",
  },
  {
    id: 4,
    title: "vazn",
    desc: "Ortiqcha vazndan xalos bo'lmoqchi",
    icon: "🏃‍♂️",
  },
  {
    id: 5,
    title: "lazy",
    desc: "Kam harakatli hayot tarzini kechirsa",
    icon: "🛋️",
  },
];

export const WhoIsIt = () => {
  return (
    <section id="foydasi" className="w-full py-20 bg-white">
      <div className="max-w-[1100px] mx-auto w-[90%]">
        {/* TEKST QISMI */}
        <div className="space-y-6 mb-16">
          <p className="text-gray-600 font-medium text-sm md:text-base leading-relaxed">
            <span className="font-black text-black uppercase">
              Slimfit — Slimfit —
            </span>{" "}
            bu muvozanatli ovqatlanish va faol hayot tarzi doirasida olingan
            natijani mustahkamlashga yordam beradi. Mahsulot tarkibidagi tabiiy
            komponentlar yog&apos;larni parchalash jarayonini tezlashtiradi.
          </p>

          <h2 className="text-4xl md:text-5xl font-[900] text-gray-900 tracking-tighter">
            Slimfit kimga mos keladi?
          </h2>
        </div>

        {/* KARTOCHKALAR - 5 TALIK SET */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white border border-gray-100 rounded-[32px] p-6 flex flex-col items-center text-center hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-500 cursor-pointer h-full"
            >
              {/* Ikonka foni (Dovira shaklidagi) */}
              <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-brandGreen/10 transition-colors duration-500 shadow-inner">
                <span className="text-3xl">{item.icon}</span>
              </div>

              {/* Matnlar */}
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2 group-hover:text-brandGreen transition-colors">
                {item.title}
              </h4>
              <p className="text-[13px] font-bold text-gray-800 leading-tight">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* PASTDAGI TEKST VA TUGMA */}
        <div className="mt-16 space-y-10">
          <p className="text-gray-600 font-medium text-sm md:text-base leading-relaxed max-w-4xl">
            <span className="font-black text-black uppercase">
              Slimfit — Slimfit —
            </span>{" "}
            bu muvozanatli ovqatlanish va faol hayot tarzi doirasida olingan
            natijani mustahkamlashga yordam beradi. Mahsulot tarkibi dori
            vositasi emas, balki biologik faol qo&apos;shimcha hisoblanadi.
          </p>

          <p className="italic text-red-500 font-bold text-sm">
            Slimfit dori vositasi emas, parhez taomlariga qo&apos;shimcha
            hisoblanadi.
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="relative overflow-hidden bg-gradient-to-b from-[#FFD645] to-[#FFB800] px-12 py-5 rounded-full shadow-[0_8px_0_0_#D49A00] active:shadow-none active:translate-y-[8px] transition-all duration-100 group">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full animate-shimmer pointer-events-none" />
              <span className="relative z-10 text-xl font-black text-[#1A1A1A] uppercase tracking-wider">
                Ariza qoldirish
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
