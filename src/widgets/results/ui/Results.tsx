"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const resultsData = [
  {
    image: "/sharx1.png",
    weight: "-20 kg",
    duration: "2 oylik natija",
  },
  {
    image: "/sharx2.png",
    weight: "-32 kg",
    duration: "4 oylik natija",
  },
  {
    image: "/sharx3.png",
    weight: "-25 kg",
    duration: "2 oylik natija",
  },
];

export const Results = () => {
  return (
    <section
      className="py-12 md:py-24 bg-slate-50 overflow-hidden"
      id="results"
    >
      <div className="container mx-auto px-0 md:px-4">
        {/* SARLAVHA */}
        <div className="text-center mb-12 md:mb-20 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[26px] md:text-[52px] font-[1000] text-slate-900 uppercase tracking-tighter leading-tight"
          >
            Natijalar va sharhlar
          </motion.h2>
          <div className="w-16 md:w-24 h-1.5 bg-green-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* NATIJALAR GRIDI */}
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6 md:gap-10">
          {resultsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              // Mobil: w-[65%] (biroz kattalashtirildi), Desktop: max-w-[360px]
              // Ikkala holatda ham burchaklar o'tkir (rounded-none)
              className="w-[65%] md:w-full md:max-w-[360px] bg-white rounded-none overflow-hidden shadow-2xl border border-slate-100 group"
            >
              {/* Rasm konteyneri */}
              <div className="relative aspect-[3/4] md:aspect-square w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={`Slimfit natija ${item.weight}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Pastki natija bloki */}
              <div className="bg-gradient-to-br from-green-500 via-green-600 to-green-700 py-5 md:py-8 px-4 text-center">
                <div className="space-y-1">
                  <h4 className="text-[32px] md:text-[56px] font-[1000] text-white leading-none tracking-tighter">
                    {item.weight}
                  </h4>
                  <p className="text-[10px] md:text-[14px] font-black text-white/90 uppercase tracking-[0.2em]">
                    {item.duration}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* QO'SHIMCHA MATN */}
        <p className="mt-12 md:mt-20 text-center text-slate-400 font-bold text-[10px] md:text-[13px] max-w-2xl mx-auto italic px-8 opacity-70">
          *Natijalar individual xususiyatlarga bog'liq bo'lib, muvozanatli
          ovqatlanish bilan erishilgan.
        </p>
      </div>
    </section>
  );
};
