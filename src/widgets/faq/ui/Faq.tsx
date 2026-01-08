"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    id: 1,
    question: "Slimfit tez vazn yo'qotish vositasimi?",
    answer:
      "Slimfit — bu mo'jizaviy dori emas, balki sog'lom hayot tarziga yordamchi vositadir. U modda almashinuvini yaxshilash va ishtahani jilovlash orqali tabiiy va xavfsiz vazn kamaytirishga yordam beradi. Natija organizmning individual xususiyatlariga bog'liq.",
  },
  {
    id: 2,
    question: "Slimfitni parhez yoki sport bilan almashtirish mumkinmi?",
    answer:
      "Slimfit oziq-ovqat o'rnini bosa olmaydi. Eng yaxshi natijaga erishish uchun uni muvozanatli ovqatlanish va muntazam jismoniy faollik bilan birga qo'llash tavsiya etiladi.",
  },
  {
    id: 3,
    question: "Slimfitning tarkibi xavfsizmi?",
    answer:
      "Ha, mahsulot 100% tabiiy o'simlik ekstraktlaridan tayyorlangan. Unda kimyoviy qo'shimchalar mavjud emas, shuning uchun u organizm uchun xavfsiz hisoblanadi.",
  },
  {
    id: 4,
    question: "Kuniga necha marta qabul qilish kerak?",
    answer:
      "Kuniga 2 mahal, ovqatlanishdan 30 daqiqa oldin bir stakan suv bilan qabul qilish tavsiya etiladi. Kurs davomiyligi odatda 30 kun.",
  },
  {
    id: 5,
    question: "Slimfitni emizikli ayollar ichsa bo'ladimi?",
    answer:
      "Homiladorlik va laktatsiya davrida mahsulotni qo'llashdan oldin shifokor bilan maslahatlashish zarur. Odatda bu davrda ehtiyot bo'lish tavsiya etiladi.",
  },
];

export const Faq = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-2  bg-white" id="faq">
      <div className="container mx-auto px-4 max-w-[900px]">
        {/* SARLAVHA */}
        <h2 className="text-[32px] md:text-[48px] font-[1000] text-slate-900 mb-10 tracking-tighter">
          Ko‘p beriladigan savollar
        </h2>

        {/* ACCORDION RO'YXATI */}
        <div className="flex flex-col border-t border-slate-900">
          {faqData.map((item) => (
            <div key={item.id} className="border-b border-slate-900">
              <button
                onClick={() => toggleFaq(item.id)}
                className="w-full py-6 flex items-center justify-between text-left group transition-all"
              >
                <span className="text-[16px] md:text-[22px] font-bold text-slate-900 uppercase tracking-tight">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openId === item.id ? 180 : 0 }}
                  className="flex items-center justify-center ml-4"
                >
                  {/* Yashil uchburchak o'q (Rasmdagidek) */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="#22C55E"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 text-[15px] md:text-[18px] text-slate-600 font-medium leading-relaxed max-w-[800px]">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
