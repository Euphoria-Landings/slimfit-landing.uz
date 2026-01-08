"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { OrderModal } from "@/widgets/order/ui/OrderModal";

const navLinks = [
  { name: "Asosiy", href: "#home" },
  { name: "Tarkib", href: "#ingredients" },
  { name: "Sinovlar", href: "#results" },
  { name: "Foyda", href: "#benefits" },
  { name: "FAQ", href: "#faq" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen || isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen, isModalOpen]);

  return (
    <>
      {/* 1. MOBILE MENU - HEADERDAN TASHQARIDA (Z-INDEX MUAMMOSINI YECHISH UCHUN) */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9999] lg:hidden">
            {/* Yashilsifat xira fon */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-green-950/60 backdrop-blur-md"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 h-full w-[85%] bg-white p-8 pt-32 flex flex-col shadow-[-20px_0_60px_rgba(0,0,0,0.3)]"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center bg-slate-100 rounded-full text-black"
              >
                <HiX size={30} />
              </button>

              <div className="mb-12 relative w-60 h-36">
                <Image
                  src="/logos.png"
                  alt="Logo"
                  fill
                  className="object-cover"
                />
              </div>

              <ul className="flex flex-col gap-8">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xl font-[1000] text-black uppercase tracking-tighter"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto pb-6">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="relative group overflow-hidden w-full bg-green-600 text-white py-6 rounded-2xl flex items-center justify-center text-xl font-[1000] uppercase tracking-widest shadow-2xl"
                >
                  <span className="z-10">Sotib olish</span>
                  <motion.div
                    animate={{ x: ["-200%", "200%"] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "linear",
                    }}
                    className="absolute top-0 h-full w-[60px] bg-white/30 skew-x-[-25deg] blur-lg"
                  />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. TOP DECORATION */}
      <div className="absolute -top-[80px] right-[5%] w-[90%] md:-top-[150px] md:right-[12%] md:w-[45%] h-[250px] md:h-[450px] pointer-events-none z-[1] overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/metrtop.png"
            alt="Deco"
            fill
            className="object-contain object-right-top scale-125"
            priority
          />
        </div>
      </div>

      {/* 3. ASOSIY HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
          scrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-8"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="relative">
            <div className="relative w-[180px] h-[70px] md:w-[250px] md:h-[80px]">
              <Image
                src="/logos.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[14px] font-black uppercase text-slate-800 hover:text-green-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative overflow-hidden bg-green-600 px-10 py-4 rounded-full text-[13px] font-black uppercase text-white shadow-xl active:scale-95"
            >
              <span className="relative z-10">Sotib olish</span>
              <motion.div
                animate={{ x: ["-150%", "150%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear",
                  repeatDelay: 1,
                }}
                className="absolute top-0 h-full w-[40px] bg-white/40 skew-x-[-20deg] blur-md"
              />
            </button>
          </nav>

          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden w-14 h-14 bg-slate-900 rounded-xl flex flex-col items-center justify-center gap-1.5 shadow-2xl border-2 border-green-500"
          >
            <span className="w-8 h-1.5 bg-green-500 rounded-full" />
            <span className="w-10 h-1.5 bg-white rounded-full" />
            <span className="w-6 h-1.5 bg-green-500 rounded-full self-end mr-2" />
          </button>
        </div>
      </header>

      {/* 4. ORDER MODAL (ENG TEPADA TURADI) */}
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
