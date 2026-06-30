"use client";
import { motion } from "motion/react";

const steps = [
  {
    emoji: "🌱",
    title: "Farm",
    desc: "Organically grown coconuts & Desi cow milk sourced from certified farms",
    color: "#2E7D32",
  },
  {
    emoji: "⚙️",
    title: "Production",
    desc: "Traditional cold-pressing & Bilona churning — no heat, no chemicals",
    color: "#388E3C",
  },
  {
    emoji: "📦",
    title: "Packaging",
    desc: "Hygienically sealed in eco-friendly, food-grade containers",
    color: "#D4A017",
  },
  {
    emoji: "🚚",
    title: "Delivery",
    desc: "Pan-India delivery straight to your door in 3–5 business days",
    color: "#B8860B",
  },
];

export function FarmJourney() {
  return (
    <section className="py-20 px-4 overflow-hidden" style={{ background: "#1a2e1a" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#D4A017", fontFamily: "'Lato', sans-serif" }}>
            Our Process
          </span>
          <h2 className="mt-2 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Farm to Your Home
          </h2>
          <p className="mt-3 text-green-300 max-w-xl mx-auto" style={{ fontFamily: "'Lato', sans-serif" }}>
            From the moment of harvest to the moment it reaches you — every step is pure, transparent, and traditional.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5" style={{ background: "linear-gradient(to right, #2E7D32, #D4A017)" }} />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                {/* Circle */}
                <div
                  className="relative w-28 h-28 rounded-full flex flex-col items-center justify-center mb-5 z-10"
                  style={{
                    background: `radial-gradient(circle, ${step.color}30 0%, ${step.color}15 100%)`,
                    border: `2px solid ${step.color}`,
                  }}
                >
                  <span className="text-4xl">{step.emoji}</span>
                  <span
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: step.color, fontFamily: "'Lato', sans-serif" }}
                  >
                    {i + 1}
                  </span>
                </div>

                <h3 className="font-bold mb-2 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-green-300" style={{ fontFamily: "'Lato', sans-serif" }}>
                  {step.desc}
                </p>

                {/* Arrow on mobile */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden mt-4 text-green-500 text-xl">↓</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
