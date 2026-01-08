"use client";
import React from "react";
import { motion } from "framer-motion";

export const StickyFooter = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed bottom-0 left-0 w-full z-[150] pointer-events-auto"
    >
      {/* FAQAT 1-QAVAT: KULRANG OGOHLANTIRISH LENTASI */}
      <div className="bg-[#E5E5E5]/90 backdrop-blur-sm py-3 md:py-4 border-t border-slate-300 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
        <div className="container mx-auto px-4">
          <p className="text-[12px] md:text-[16px] lg:text-[20px] font-black text-[#777777] uppercase tracking-[0.15em] text-center">
            BFQ - DORI VOSITASI HISOBLANMAYDI
          </p>
        </div>
      </div>
    </motion.div>
  );
};
