"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { OrderModal } from "@/widgets/order/ui/OrderModal"; // Yo'lni loyihangizga qarab tekshiring

const features = [
  {
    image: "/nok.png",
    text: "Tana vaznini nazorat qilishni xohlasa",
  },
  {
    image: "/anor.png",
    text: "Ongli ovqatlanishga intilsa",
  },
  {
    image: "/modda.png",
    text: "Modda almashinuvini qo'llab-quvvatlashni xohlasa",
  },
  {
    image: "/plantatsiya.png",
    text: "O'z farovonligiga e'tibor bersa",
  },
  {
    image: "/laptop.png",
    text: "Kam harakatli hayot tarzi kechirsa",
  },
];

export const WhoIsIt = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="results">
      <div className="container mx-auto px-4 relative z-10">
        {/* SARLAVHA */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[36px] md:text-[56px] font-[1000] text-slate-900 leading-tight uppercase tracking-tighter"
          >
            Slimfit kimga <br className="hidden md:block" /> mos keladi?
          </motion.h2>
          <div className="w-24 h-2 bg-green-600 mt-6 rounded-full" />
        </div>

        {/* IKONKALAR GRIDI */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-10 mb-24">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center"
            >
              <div className="relative w-full aspect-square max-w-[180px] rounded-full overflow-hidden mb-6 border-[6px] border-slate-100 group-hover:border-green-500 transition-all duration-500 shadow-xl">
                <Image
                  src={item.image}
                  alt={item.text}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <p className="text-center text-[14px] md:text-[16px] font-black text-slate-900 leading-tight uppercase tracking-tight">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* INFO BLOK */}
        <div className="max-w-5xl mx-auto border-y-2 border-slate-900/5 py-12 mb-20">
          <div className="space-y-6 text-center">
            <p className="text-[16px] md:text-[20px] text-slate-900 font-extrabold leading-relaxed">
              <span className="text-green-600">Slimfit —</span> bu muvazanatli
              ovqatlanish va faol hayot tarzi doirasida tana vaznini nazorat
              qilishni qo'llab-quvvatlash uchun ishlab chiqilgan oziq-ovqatga
              biologik faol qo'shimcha.
            </p>
            <p className="text-[14px] md:text-[16px] text-slate-900 font-bold opacity-70 italic">
              Slimfit dori vositasi emas va semirishni davolash uchun
              mo'ljallanmagan.
            </p>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="flex flex-col items-center space-y-10">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[22px] md:text-[34px] font-black text-slate-900 text-center uppercase tracking-tight"
          >
            Arizangizni qoldiring va{" "}
            <span className="text-green-600">100% chegirma</span> oling!
          </motion.h3>

          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden px-12 py-6 md:px-24 md:py-8 bg-[#FFD840] rounded-2xl shadow-2xl transition-all border-b-8 border-[#D4A017]"
          >
            <span className="relative z-10 text-[24px] md:text-[42px] font-[1000] text-slate-900 uppercase tracking-tighter">
              Ariza qoldirish
            </span>

            {/* AVTOMATIK YALTIROQ EFFEKT (Har 2 soniyada) */}
            <motion.div
              animate={{
                left: ["-100%", "200%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
                repeatDelay: 0.5,
              }}
              className="absolute inset-y-0 w-[100px] bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-[-25deg] z-0"
            />
          </motion.button>
        </div>
      </div>

      
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* FON BEZAGI */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 -z-0" />
    </section>
  );
};
