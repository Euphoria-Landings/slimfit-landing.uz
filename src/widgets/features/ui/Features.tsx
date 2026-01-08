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

            {/* --- EKSTREMAL KATTA KAPSULALAR --- */}

            {/* Kapsula 1 (Tepada) */}
            <motion.div
              animate={{ y: [0, -30, 0], rotate: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-5 right-0 md:top-10 md:right-10 w-28 h-28 md:w-48 md:h-48 z-20 pointer-events-none"
            >
              <Image
                src="/capsula.png"
                alt="Capsule Large"
                fill
                className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.2)]"
              />
            </motion.div>

            {/* Kapsula 2 (O'rtada) */}
            <motion.div
              animate={{ x: [0, 20, 0], y: [0, 40, 0], rotate: [0, -20, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-1/2 -left-5 md:left-0 w-24 h-24 md:w-40 md:h-40 z-20 pointer-events-none"
            >
              <Image
                src="/capsula.png"
                alt="Capsule Medium"
                fill
                className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.2)]"
              />
            </motion.div>

            {/* Kapsula 3 (Pastda) */}
            <motion.div
              animate={{ y: [0, -25, 0], rotate: [10, 30, 10] }}
              transition={{
                repeat: Infinity,
                duration: 4.5,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute bottom-10 right-10 md:bottom-20 md:right-32 w-20 h-20 md:w-36 md:h-36 z-20 pointer-events-none"
            >
              <Image
                src="/capsula.png"
                alt="Capsule Small"
                fill
                className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.2)]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
