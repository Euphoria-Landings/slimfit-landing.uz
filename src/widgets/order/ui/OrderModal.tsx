"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export const OrderModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "+998 " });

  // 1. Ismni formatlash (Birinchi harf katta)
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedName = value.charAt(0).toUpperCase() + value.slice(1);
    setFormData({ ...formData, name: formattedName });
  };

  // 2. Telefon raqami formati: +998 99 999 99 99
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, ""); // Faqat raqamlar
    if (!input.startsWith("998")) input = "998" + input;
    input = input.substring(0, 12); // Max 12 raqam

    let result = "+998 ";
    if (input.length > 3) {
      const parts = [
        input.substring(3, 5),
        input.substring(5, 8),
        input.substring(8, 10),
        input.substring(10, 12),
      ].filter(Boolean);
      result += parts.join(" ");
    }
    setFormData({ ...formData, phone: result });
  };

  const progress = (formData.phone.replace(/\s/g, "").length / 13) * 100;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.phone.length < 17) {
      toast.error("Raqamni to'liq kiriting!", { position: "bottom-right" });
      return;
    }
    setLoading(true);
    // Simulyatsiya (Backendga tayyor data boradi)
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      toast.success("Muvaffaqiyatli qabul qilindi!", {
        position: "bottom-right",
      });
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-md">
      <Toaster />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-full max-w-md bg-white rounded-[30px] shadow-2xl overflow-hidden"
      >
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100">
          <motion.div
            animate={{ width: `${progress}%` }}
            className="h-full bg-yellow-400"
          />
        </div>

        <div className="p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-black transition-colors"
          >
            <X size={24} />
          </button>

          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <h2 className="text-2xl font-[1000] uppercase text-black">
                  Buyurtma berish
                </h2>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase ml-1">
                    Ismingiz
                  </label>
                  <input
                    required
                    className="w-full p-4 mt-1 bg-slate-50 border-2 border-transparent focus:border-yellow-400 rounded-2xl outline-none font-bold text-black"
                    value={formData.name}
                    onChange={handleNameChange}
                    placeholder="Masalan: Ali"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase ml-1">
                    Telefon
                  </label>
                  <input
                    required
                    className="w-full p-4 mt-1 bg-slate-50 border-2 border-transparent focus:border-yellow-400 rounded-2xl outline-none font-bold text-black"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                  />
                </div>
                <button
                  disabled={loading}
                  className="w-full py-5 bg-yellow-400 hover:bg-yellow-500 text-black font-[1000] rounded-2xl uppercase transition-all shadow-lg shadow-yellow-100 flex justify-center"
                >
                  {loading ? <Loader2 className="animate-spin" /> : "Yuborish"}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-6"
              >
                <CheckCircle2
                  size={64}
                  className="mx-auto text-green-500 mb-4"
                />
                <h2 className="text-2xl font-black uppercase text-black">
                  Rahmat!
                </h2>
                <p className="text-slate-500 font-bold mt-2">
                  Tez orada siz bilan bog'lanamiz.
                </p>
                <button
                  onClick={onClose}
                  className="mt-8 w-full py-4 bg-black text-white font-bold rounded-xl uppercase"
                >
                  Yopish
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
