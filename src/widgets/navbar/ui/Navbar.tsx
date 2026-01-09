"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
      {/* 1. MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[9999] lg:hidden transition-all duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Orqa fon (Overlay) */}
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Panel (O'ngdan kirib kelish) */}
        <div
          className={`absolute top-0 right-0 h-full w-[80%] max-w-[400px] bg-white p-8 pt-24 flex flex-col shadow-2xl transform transition-transform duration-200 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-black active:scale-90 transition-transform"
          >
            <HiX size={28} />
          </button>

          <div className="mb-10 relative w-full h-16">
            <Image
              src="/logos.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>

          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-black text-slate-900 uppercase tracking-tighter hover:text-green-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pb-10">
            <button
              onClick={() => {
                setIsOpen(false);
                setIsModalOpen(true);
              }}
              className="w-full bg-green-600 text-white py-5 rounded-2xl text-xl font-black uppercase tracking-widest active:bg-green-700 transition-colors"
            >
              Sotib olish
            </button>
          </div>
        </div>
      </div>

      {/* HEADER VA QOLGAN QISMLAR O'ZGARISHLARSIZ */}
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="relative z-10">
            <div className="relative w-[140px] h-[50px] md:w-[200px] md:h-[60px]">
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
                    className="text-sm font-bold uppercase text-slate-800 hover:text-green-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-green-600 px-8 py-3 rounded-full text-sm font-black uppercase text-white hover:bg-green-700 transition-colors shadow-lg"
            >
              Sotib olish
            </button>
          </nav>

          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden w-12 h-12 bg-slate-900 rounded-xl flex flex-col items-center justify-center gap-1.5 border-2 border-green-500 active:scale-95 transition-transform"
          >
            <span className="w-6 h-1 bg-green-500 rounded-full" />
            <span className="w-8 h-1 bg-white rounded-full" />
            <span className="w-5 h-1 bg-green-500 rounded-full" />
          </button>
        </div>
      </header>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
