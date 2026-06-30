"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MSG = encodeURIComponent("Hi! I'd like to order from Saral Organic.");

const WhatsAppIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.121 1.534 5.859L.057 23.386a.5.5 0 00.612.612l5.578-1.504A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.98 0-3.82-.538-5.4-1.472l-.387-.232-4.016 1.082 1.1-4.02-.254-.414A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

export function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 400);
    window.addEventListener("scroll", handler);
    // Show tooltip after a delay
    const t = setTimeout(() => setShowTooltip(true), 3000);
    return () => {
      window.removeEventListener("scroll", handler);
      clearTimeout(t);
    };
  }, []);

  if (!scrolled) return null;

  return (
    <>
      {/* Floating button (desktop + mobile) */}
      <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3 hidden sm:flex">
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 20 }}
              className="relative bg-white rounded-2xl shadow-xl px-4 py-3 max-w-[200px]"
              style={{ border: "1px solid rgba(37,211,102,0.3)" }}
            >
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center"
              >
                <X size={10} color="#666" />
              </button>
              <p className="text-xs" style={{ fontFamily: "'Lato', sans-serif", color: "#1a2e1a" }}>
                👋 Order now on WhatsApp!
              </p>
              <p className="text-xs mt-0.5" style={{ color: "#5a7a5a" }}>Fast & easy ordering</p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
          style={{ background: "#25D366" }}
          aria-label="Order on WhatsApp"
          onClick={() => setShowTooltip(false)}
        >
          <WhatsAppIcon size={32} />
          {/* Pulse ring */}
          <span className="absolute w-16 h-16 rounded-full animate-ping opacity-30" style={{ background: "#25D366" }} />
        </motion.a>
      </div>

      {/* Sticky bottom bar (mobile only) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pt-3" style={{ background: "linear-gradient(to top, white 70%, transparent)" }}>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl text-white font-semibold text-base shadow-2xl"
          style={{ background: "#25D366", fontFamily: "'Lato', sans-serif" }}
        >
          <WhatsAppIcon size={22} />
          Order on WhatsApp
        </a>
      </div>
    </>
  );
}
