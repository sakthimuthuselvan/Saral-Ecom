"use client";
import { motion } from "motion/react";
import { ShieldCheck, Leaf, Cog, Truck } from "lucide-react";

const trustCards = [
  {
    icon: <Leaf size={32} />,
    title: "100% Natural",
    desc: "No preservatives, no additives, no artificial colours. Pure as nature intended.",
    color: "#2E7D32",
    bg: "#f0f9f0",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Farm Fresh",
    desc: "Sourced directly from certified organic farms. Freshness guaranteed.",
    color: "#D4A017",
    bg: "#fdf8ec",
  },
  {
    icon: <Cog size={32} />,
    title: "Traditional Processing",
    desc: "Cold pressed and wood-churned using age-old Indian methods.",
    color: "#2E7D32",
    bg: "#f0f9f0",
  },
  {
    icon: <Truck size={32} />,
    title: "Fast Delivery",
    desc: "Delivered to your doorstep across India within 3-5 working days.",
    color: "#D4A017",
    bg: "#fdf8ec",
  },
];

export function TrustSection() {
  return (
    <section className="py-16 px-4" style={{ background: "#f8fdf8" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#D4A017", fontFamily: "'Lato', sans-serif" }}>
            Why Trust Us
          </span>
          <h2 className="mt-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: "#1a2e1a" }}>
            Our Promise to You
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {trustCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{ background: card.bg }}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: card.color + "18", color: card.color }}>
                {card.icon}
              </div>
              <h3 className="font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#1a2e1a", fontSize: "1rem" }}>
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ fontFamily: "'Lato', sans-serif", color: "#5a7a5a" }}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
