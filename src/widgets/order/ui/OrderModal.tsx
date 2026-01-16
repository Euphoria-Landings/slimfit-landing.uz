"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import { Snackbar } from "@/components/ui/Snackbar";

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

  // Snackbar holati
  const [snackbar, setSnackbar] = useState({ isVisible: false, message: "" });

  const showNotice = (msg: string) => {
    setSnackbar({ isVisible: true, message: msg });
  };

  // 4 sekunddan keyin avtomatik yopish
  useEffect(() => {
    if (snackbar.isVisible) {
      const timer = setTimeout(() => {
        setSnackbar({ ...snackbar, isVisible: false });
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [snackbar.isVisible]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedName = value.charAt(0).toUpperCase() + value.slice(1);
    setFormData({ ...formData, name: formattedName });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, "");
    if (!input.startsWith("998")) input = "998" + input;
    input = input.substring(0, 12);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const digitsOnly = formData.phone.replace(/\D/g, "");

    if (digitsOnly.length !== 12) {
      showNotice("Raqamni to'liq kiriting!");
      return;
    }

    setLoading(true);

    const payload = {
      full_name: formData.name,
      phone_number: `+${digitsOnly}`,
      product_name: "Slimfit",
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/leads/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setStep(2);
      } else if (response.status === 429) {
        // --- 429 TOO MANY REQUESTS LOGIKASI ---
        showNotice(
          "Siz allaqachon ariza qoldirgansiz. Iltimos, 1 soatdan keyin qayta urinib ko'ring."
        );
      } else {
        throw new Error();
      }
    } catch (error) {
      showNotice("Xatolik yuz berdi! Server bilan bog'lanib bo'lmadi.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <Snackbar
        isVisible={snackbar.isVisible}
        message={snackbar.message}
        onClose={() => setSnackbar({ ...snackbar, isVisible: false })}
      />

      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          className="relative w-full max-w-md bg-white rounded-[40px] shadow-[0_32px_64px_rgba(0,0,0,0.2)] overflow-hidden"
        >
          <div className="p-8 md:p-10">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-slate-300 hover:text-black transition-colors"
            >
              <X size={28} />
            </button>

            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-[1000] uppercase text-black tracking-tighter">
                    Buyurtma
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                        Ismingiz
                      </label>
                      <input
                        required
                        className="w-full p-5 mt-1 bg-slate-50 border-2 border-transparent focus:border-yellow-400 rounded-3xl outline-none font-bold text-black transition-all"
                        value={formData.name}
                        onChange={handleNameChange}
                        placeholder="Masalan: Ali"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                        Telefon
                      </label>
                      <input
                        required
                        type="tel"
                        inputMode="numeric"
                        className="w-full p-5 mt-1 bg-slate-50 border-2 border-transparent focus:border-yellow-400 rounded-3xl outline-none font-bold text-black transition-all"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                      />
                    </div>
                  </div>

                  <button
                    disabled={loading}
                    className="w-full py-6 bg-yellow-400 hover:bg-yellow-500 text-black font-[1000] rounded-3xl uppercase transition-all shadow-xl shadow-yellow-200 flex justify-center active:scale-[0.98] disabled:opacity-50"
                  >
                    {loading ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      "Yuborish"
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={48} className="text-green-600" />
                  </div>
                  <h2 className="text-3xl font-[1000] uppercase text-black tracking-tighter">
                    Rahmat!
                  </h2>
                  <p className="text-slate-500 font-bold mt-3">
                    Operatorimiz tez orada siz bilan bog'lanadi.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-10 w-full py-5 bg-black text-white font-black rounded-2xl uppercase tracking-widest shadow-2xl"
                  >
                    Yopish
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </>
  );
};
