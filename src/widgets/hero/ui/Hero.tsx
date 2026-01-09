"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { OrderModal } from "@/widgets/order/ui/OrderModal"; // Yo'lni tekshiring

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-[#F1F9F1]">
      {/* 1. SARIQ LENTA (z-0) */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/bottom.png"
          alt="Slimfit design decoration"
          fill
          className="object-contain object-right-top opacity-70 scale-110 lg:scale-100"
          priority
        />
      </div>

      {/* 2. ASOSIY GRADIENTLI FON */}
      <div className="absolute bottom-0 left-0 w-full h-[25%] md:h-[35%] bg-[#56A265] z-0" />
      <div className="absolute bottom-[25%] md:bottom-[35%] left-0 w-full h-32 bg-gradient-to-t from-[#56A265] to-transparent z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:items-center">
          {/* MATNLI QISM */}
          <div className="pb-16 lg:pb-0 lg:py-40 relative z-20">
            <motion.h1
              className="text-[32px] md:text-6xl lg:text-[68px] font-black text-slate-900 leading-[1.05] mb-4 text-center lg:text-left lg:max-w-[120%]"
            >
              Slimfit — vazn nazoratini <br className="hidden lg:block" />{" "}
              oqilona yondashuvi
            </motion.h1>

            <motion.p
              className="text-base md:text-xl text-slate-800 font-medium mb-8 text-center lg:text-left"
            >
              Arizangizni qoldiring va 100% chegirma oling!
            </motion.p>

            {/* TUGMA QISMI */}
            <div className="flex justify-center lg:justify-start">
              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center px-10 py-4 md:px-14 md:py-6 bg-gradient-to-b from-[#FFD840] to-[#F2B600] rounded-2xl shadow-[0_15px_35px_rgba(242,182,0,0.4)] transition-all overflow-hidden"
              >
                <span className="relative z-10 text-xl md:text-3xl font-black text-slate-900 tracking-tight uppercase">
                  Ariza qoldirish
                </span>

                {/* AVTOMATIK YALTIROQ EFFEKT (Har 2 soniyada) */}
                <motion.div
                  animate={{ left: ["-100%", "200%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1,
                  }}
                  className="absolute inset-0 w-24 opacity-50 bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-25deg] z-0"
                />
              </motion.button>
            </div>

            {/* AFZALLIKLAR */}
            <div className="mt-12 grid grid-cols-3 gap-2 md:gap-6 border-t border-slate-900/10 pt-8 relative z-30">
              {[
                { icon: "/health.png", label: "tabiiy komponentlar" },
                { icon: "/watch.png", label: "kurs bo'yicha qabulga mos" },
                { icon: "/not-fla.png", label: "dori vositasi emas" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center gap-2"
                >
                  <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border-2 border-slate-900 bg-white/20 backdrop-blur-md flex items-center justify-center p-2.5 md:p-4 shadow-lg">
                    <div className="relative w-full h-full">
                      <Image
                        src={item.icon}
                        alt={item.label}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <span className="text-[10px] md:text-[12px] font-extrabold text-slate-900 uppercase leading-tight tracking-tighter">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RASMLI QISM */}
          <div className="relative h-[450px] md:h-[650px] lg:h-[850px] flex items-end justify-center pt-24 lg:pt-0 z-10">
            <motion.div
              className="relative w-full h-full"
            >
              <Image
                src="/girls.png"
                alt="Slimfit result girl"
                fill
                className="object-contain object-bottom drop-shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* MODAL OYNA */}
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
