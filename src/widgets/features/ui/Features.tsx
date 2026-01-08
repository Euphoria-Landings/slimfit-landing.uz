"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const mainFeatures = [
  "moddalar almashinuvini saqlashga yordam beradi.",
  "ratsion doirasida ishtahani nazorat qilishga yordam beradi.",
  "umumiy holatni qo'llab-quvvatlaydi",
  "muvozanatli ovqatlanishni to'ldiradi",
  "tarkibida tabiiy kelib chiqishga ega komponentlar mavjud",
];

export const Features = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-white   "
      id="benefits"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          {/* CHAP TOMON: MATNLAR */}
          <div className="w-full lg:w-1/2 space-y-6 z-10">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[36px] md:text-[52px] font-[1000] text-slate-900 leading-[1.1] uppercase tracking-tighter"
            >
              Asosiy <br className="hidden md:block" /> xususiyatlari
            </motion.h2>

            <div className="space-y-3 md:space-y-4">
              {mainFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="bg-gradient-to-r from-[#97FF97] via-[#97FF97] to-transparent py-4 px-6 md:py-5 md:px-8 rounded-2xl border-l-[6px] md:border-l-[10px] border-green-500 shadow-sm transition-transform group-hover:translate-x-2">
                    <p className="text-slate-900 text-[15px] md:text-xl font-[1000] leading-tight first-letter:uppercase">
                      {feature}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* O'NG TOMON: ASOSIY RASM VA KATTA KAPSULALAR */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center mt-10 lg:mt-0">
            {/* Asosiy rasm (Ayol) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative w-full aspect-square md:h-[700px] z-0"
            >
              <Image
                src="/features.png"
                alt="Slimfit benefits"
                fill
                className="object-contain object-bottom lg:object-right"
                priority
              />
            </motion.div>

           
          </div>
        </div>
      </div>
    </section>
  );
};
