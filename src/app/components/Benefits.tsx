"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const tabs = ["Coconut Oil", "A2 Ghee"] as const;
type Tab = typeof tabs[number];

const benefitsData: Record<Tab, { icon: string; title: string; desc: string }[]> = {
  "Coconut Oil": [
    { icon: "💆", title: "Hair Care", desc: "Deep conditions hair, reduces frizz, promotes growth and adds natural shine. The ultimate hair nourishment." },
    { icon: "✨", title: "Skin Care", desc: "Natural moisturiser that soothes, hydrates and protects skin. Suitable for all skin types including sensitive." },
    { icon: "🍳", title: "Cooking", desc: "High smoke point makes it ideal for frying, sautéing and baking. Adds a subtle, pleasant coconut aroma." },
    { icon: "🌿", title: "Daily Wellness", desc: "Oil pulling, metabolism boost and immune support — a true superfood for whole-body wellness." },
  ],
  "A2 Ghee": [
    { icon: "🫃", title: "Better Digestion", desc: "Rich in butyrate that feeds gut microbiome, reduces inflammation and supports healthy digestive function." },
    { icon: "🥗", title: "Rich Nutrition", desc: "Packed with fat-soluble vitamins A, D, E & K plus CLA and omega fatty acids for complete nourishment." },
    { icon: "🍛", title: "Traditional Taste", desc: "The authentic nutty, caramel-like flavour of Bilona ghee that elevates every dish to a new level." },
    { icon: "⚡", title: "Natural Energy", desc: "MCTs provide clean, sustained energy without the crash. Ideal pre-workout and for ketogenic diets." },
  ],
};

export function Benefits() {
  const [active, setActive] = useState<Tab>("Coconut Oil");

  return (
    <section id="benefits" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#D4A017", fontFamily: "'Lato', sans-serif" }}>
            Health Benefits
          </span>
          <h2 className="mt-2 mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1a2e1a" }}>
            Nature's Gift For Your Health
          </h2>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="flex rounded-full p-1" style={{ background: "#f0f9f0", border: "1px solid rgba(46,125,50,0.15)" }}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  background: active === tab ? "#2E7D32" : "transparent",
                  color: active === tab ? "white" : "#5a7a5a",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Benefits grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefitsData[active].map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1"
                style={{ background: "#f8fdf8", border: "1px solid rgba(46,125,50,0.1)" }}
              >
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#1a2e1a", fontSize: "1.1rem" }}>
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "'Lato', sans-serif", color: "#5a7a5a" }}>
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
