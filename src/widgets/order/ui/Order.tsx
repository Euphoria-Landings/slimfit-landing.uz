"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { OrderModal } from "./OrderModal";

export const Order = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-white border-t border-slate-100" id="order">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-black font-[1000] text-lg md:text-2xl mb-8 uppercase tracking-tight"
        >
          Arizangizni qoldiring va 100% chegirma oling!
        </motion.p>

        <motion.button
          onClick={() => setIsModalOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative px-12 py-5 md:px-20 md:py-7 rounded-[20px] shadow-[0_20px_50px_rgba(255,193,7,0.3)] overflow-hidden group mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFD62B] via-[#FFC107] to-[#FFA000]" />
          <motion.div
            animate={{ left: ["-100%", "200%"] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
            className="absolute inset-0 w-20 opacity-50 bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-25deg]"
          />
          <span className="relative z-10 text-black text-2xl md:text-4xl font-[1000] uppercase tracking-tighter">
            Ariza qoldirish
          </span>
        </motion.button>

        <div className="max-w-4xl space-y-6">
          <div className="space-y-1">
            <h3 className="text-black font-[1000] text-lg md:text-2xl leading-tight uppercase">
              SLIMFIT - OVQATGA QO‘SHILADIGAN BIOLOGIK FAOL QO‘SHIMCHA.
            </h3>
            <h3 className="text-black font-[1000] text-lg md:text-2xl leading-tight uppercase">
              DORI VOSITASI EMAS.
            </h3>
          </div>
          <p className="text-black/60 font-bold text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
            Saytdagi ma’lumotlar ma’lumotnoma xarakteriga ega va tibbiy maslahat
            hisoblanmaydi.
          </p>
        </div>
      </div>

      {/* MODAL OYNA */}
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
