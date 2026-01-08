"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const resultsData = [
  {
    image: "/sharx1.png", // Rasm yo'lini o'rnating
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
    <section className="py-2 bg-slate-50 overflow-hidden" id="results">
      <div className="container mx-auto px-4">
        {/* SARLAVHA */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] md:text-[50px] font-[1000] text-slate-900 uppercase tracking-tighter leading-tight"
          >
            Avvalgi va keyingi <br className="md:hidden" /> suratlar + sharhlar
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            className="h-2 bg-green-500 mx-auto mt-6 rounded-full"
          />
        </div>

        {/* NATIJALAR SETKASI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {resultsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 group"
            >
              {/* Rasm konteyneri */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={`Slimfit natija ${item.weight}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Pastki yashil natija bloki */}
              <div className="bg-gradient-to-r from-[#97FF97] via-[#74E374] to-[#56A265] py-8 px-6 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="space-y-1"
                >
                  <h4 className="text-[42px] md:text-[52px] font-[1000] text-slate-900 leading-none">
                    {item.weight}
                  </h4>
                  <p className="text-[14px] md:text-[16px] font-black text-slate-900/80 uppercase tracking-widest">
                    {item.duration}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* QO'SHIMCHA ISHONCH MATNI */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center text-slate-500 font-bold text-sm md:text-base max-w-2xl mx-auto italic"
        >
          *Natijalar individual xususiyatlarga bog'liq bo'lib, muvozanatli
          ovqatlanish bilan birga erishilgan.
        </motion.p>
      </div>
    </section>
  );
};
