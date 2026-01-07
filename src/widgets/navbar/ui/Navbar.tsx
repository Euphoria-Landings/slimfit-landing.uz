"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Tarkibi", href: "#tarkibi" },
    { name: "Foydasi", href: "#foydasi" },
    { name: "Natijalar", href: "#natijalar" },
  ];

  return (
    <nav className="w-full bg-[#F4F9F4] sticky top-0 z-50">
      {/* Lentalar uchun alohida konteyner - asosiy navni qirqib qo'ymaydi */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute left-[45%] top-[30px] w-[300px] md:w-[600px] h-[200px] md:h-[400px] rotate-[-15deg]">
          <Image src="/bottom.png" alt="tape" fill className="object-contain" />
        </div>
        <div className="absolute right-[10%] md:right-[40%] top-[-80px] md:top-[-180px] w-[350px] md:w-[700px] h-[250px] md:h-[500px] rotate-[10deg]">
          <Image
            src="/metrtop.png"
            alt="tape"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto w-[90%] h-20 flex justify-between items-center relative z-20">
        {/* LOGO */}
        <div className="relative h-10 w-32 md:h-14 md:w-40 flex items-center">
          <Image
            src="/logo.png"
            alt="Slimfit Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-black text-gray-800 uppercase tracking-widest hover:text-brandGreen transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* BUTTON & BURGER */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-brandGreen text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest shadow-[0_5px_0_0_#1e5a36] hover:shadow-[0_2px_0_0_#1e5a36] hover:translate-y-[3px] active:translate-y-[5px] active:shadow-none transition-all duration-150">
            Buyurtma berish
          </button>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-brandGreen hover:bg-white/50 rounded-full transition-colors"
          >
            <Menu size={32} strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* MOBILE SIDE MODAL */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60] md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 150 }}
              className="fixed top-0 right-0 h-full w-[85%] bg-[#F4F9F4] z-[70] shadow-2xl p-10 flex flex-col md:hidden"
            >
              <div className="flex justify-between items-center mb-16">
                <div className="relative h-8 w-24">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <button
                  onClick={toggleMenu}
                  className="p-2 bg-white rounded-full shadow-md text-gray-800"
                >
                  <X size={24} strokeWidth={3} />
                </button>
              </div>

              <div className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={toggleMenu}
                    className="text-3xl font-[900] text-gray-900 uppercase tracking-tighter hover:text-brandGreen transition-colors flex items-center justify-between group"
                  >
                    {link.name}
                    <div className="h-1 w-0 bg-brandGreen transition-all group-hover:w-10" />
                  </a>
                ))}
              </div>

              <div className="mt-auto">
                <button className="w-full bg-brandGreen text-white py-6 rounded-2xl text-xl font-black uppercase shadow-[0_8px_0_0_#1e5a36] active:shadow-none active:translate-y-[8px] transition-all">
                  Buyurtma berish
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
