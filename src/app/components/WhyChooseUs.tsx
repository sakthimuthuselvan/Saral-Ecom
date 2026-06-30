"use client";
import { motion } from "motion/react";
import { Users, FlaskConical, Award, IndianRupee, Sprout, Heart } from "lucide-react";

const reasons = [
  { icon: <Users size={28} />, title: "Direct From Farmers", desc: "We partner directly with organic farmers, cutting out middlemen to ensure fair prices and fresh produce." },
  { icon: <FlaskConical size={28} />, title: "No Chemicals", desc: "Zero pesticides, zero preservatives, zero artificial additives. Pure goodness in every drop." },
  { icon: <Award size={28} />, title: "Premium Quality", desc: "Every batch is quality-checked to meet the highest standards of purity and nutrition." },
  { icon: <IndianRupee size={28} />, title: "Honest Pricing", desc: "No hidden costs, no inflated margins. Premium quality at fair and transparent prices." },
  { icon: <Sprout size={28} />, title: "Traditional Methods", desc: "Cold pressing and Bilona churning — ancient methods proven over centuries for maximum nutrition." },
  { icon: <Heart size={28} />, title: "Healthy Living", desc: "Every product is crafted to support your health journey — naturally, holistically, truly." },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 px-4" style={{ background: "#f0f9f0" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#D4A017", fontFamily: "'Lato', sans-serif" }}>
            Why Saral Organic
          </span>
          <h2 className="mt-2 mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1a2e1a" }}>
            The Saral Difference
          </h2>
          <p className="max-w-xl mx-auto" style={{ fontFamily: "'Lato', sans-serif", color: "#5a7a5a" }}>
            We believe in honest, simple, organic living. Here's what makes us different from the rest.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              style={{ border: "1px solid rgba(46,125,50,0.1)" }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors"
                style={{ background: "#e8f5e9", color: "#2E7D32" }}
              >
                {r.icon}
              </div>
              <h3 className="mb-2 font-bold" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", color: "#1a2e1a" }}>
                {r.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ fontFamily: "'Lato', sans-serif", color: "#5a7a5a" }}>
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
