// components/ui/Snackbar.tsx
import { motion, AnimatePresence } from "framer-motion";
import { X, AlertCircle } from "lucide-react";

export const Snackbar = ({
  message,
  isVisible,
  onClose,
}: {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          // Kirib kelish animatsiyasi
          initial={{ opacity: 0, x: 100, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          // Chiqib ketish animatsiyasi
          exit={{
            opacity: 0,
            x: 100,
            transition: { duration: 0.8, ease: "easeIn" },
          }}
          // Umumiy kirish vaqti va silliqligi
          transition={{
            duration: 1,
            ease: "easeOut",
            type: "tween", // "spring" o'rniga "tween" ishlatilsa yanada sekin va silliq bo'ladi
          }}
          className="fixed bottom-2 right-6 z-[2000] flex items-center gap-4 bg-slate-900 text-white px-7 py-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 min-w-[320px]"
        >
          <div className="bg-red-500/20 p-2.5 rounded-xl">
            <AlertCircle className="text-red-500" size={22} />
          </div>

          <div className="flex flex-col">
            <p className="font-bold text-[15px] leading-tight text-white">
              {message}
            </p>
          </div>

          <button
            onClick={onClose}
            className="ml-auto p-1 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
          >
            <X size={20} />
          </button>

          {/* Progress bar pastda */}
          <motion.div
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 4, ease: "linear" }}
            className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
