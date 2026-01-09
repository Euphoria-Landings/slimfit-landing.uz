"use client";
import React from "react";
import Image from "next/image";

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
      className="relative w-full overflow-hidden bg-white py-10 md:py-20"
      id="benefits"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          {/* CHAP TOMON: MATNLAR (Animatsiyalarsiz va Kulrang dizayn) */}
          <div className="w-full lg:w-1/2 space-y-6 z-10">
            <h2 className="text-[36px] md:text-[52px] font-[1000] text-slate-900 leading-[1.1] uppercase tracking-tighter">
              Asosiy <br className="hidden md:block" /> xususiyatlari
            </h2>

            <div className="space-y-3 md:space-y-4">
              {mainFeatures.map((feature, idx) => (
                <div key={idx} className="relative group">
                  {/* Yashil rang o'rniga Linear Kulrang gradyent va to'q kulrang border */}
                  <div className="bg-gradient-to-r from-gray-100 via-gray-50 to-transparent py-4 px-6 md:py-5 md:px-8 rounded-2xl border-l-[6px] md:border-l-[10px] border-gray-400 shadow-sm transition-transform hover:translate-x-2">
                    <p className="text-slate-900 text-[15px] md:text-xl font-[1000] leading-tight first-letter:uppercase">
                      {feature}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* O'NG TOMON: ASOSIY RASM */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center mt-10 lg:mt-0">
            <div className="relative w-full aspect-square md:h-[700px]">
              <Image
                src="/features.png"
                alt="Slimfit benefits"
                fill
                className="object-contain object-bottom lg:object-right"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
