"use client";
import { motion } from "motion/react";

export function OurStory() {
  return (
    <section id="story" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main farm image */}
            <div className="rounded-3xl overflow-hidden" style={{ height: "420px" }}>
              <img
                src="https://images.unsplash.com/photo-1650009250684-4abe741c82a6?w=700&h=840&fit=crop&auto=format"
                alt="Lush organic farm"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Founder image overlay */}
            <div
              className="absolute -bottom-6 -right-4 rounded-2xl overflow-hidden shadow-2xl"
              style={{ width: "160px", height: "190px", border: "4px solid white" }}
            >
              <img
                src="https://images.unsplash.com/photo-1609252285236-93406ce15b0d?w=320&h=380&fit=crop&auto=format"
                alt="Saral Organic founder"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative badge */}
            <div
              className="absolute -top-4 -left-4 rounded-2xl p-4 shadow-xl"
              style={{ background: "#2E7D32" }}
            >
              <div className="text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>8+</div>
              <div className="text-xs text-green-200" style={{ fontFamily: "'Lato', sans-serif" }}>Years of<br/>Organic Living</div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#D4A017", fontFamily: "'Lato', sans-serif" }}>
              Our Story
            </span>
            <h2 className="mt-2 mb-6" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1a2e1a" }}>
              Born From a Love of<br />
              <em>Pure, Simple Living</em>
            </h2>

            <div style={{ fontFamily: "'Lato', sans-serif", color: "#5a7a5a", lineHeight: "1.9" }}>
              <p className="mb-4">
                Saral Organic was founded in 2016 by <strong style={{ color: "#1a2e1a" }}>Rajan Mehta</strong>, a farmer's son who watched his family's traditional food wisdom slowly get replaced by chemical-laden supermarket products.
              </p>
              <p className="mb-4">
                Frustrated by the lack of truly pure alternatives, Rajan returned to his roots — literally. He partnered with organic coconut farmers in Kerala and Desi cow farmers in Haryana to revive age-old production methods that his grandparents once swore by.
              </p>
              <p className="mb-6">
                Today, Saral Organic brings these same traditional products — cold-pressed coconut oil and A2 Bilona ghee — directly to over 5,000 Indian families who choose purity over convenience.
              </p>
            </div>

            {/* Mission statement */}
            <div
              className="rounded-2xl p-5 mb-6"
              style={{ background: "#f0f9f0", borderLeft: "4px solid #2E7D32" }}
            >
              <p className="italic" style={{ fontFamily: "'Playfair Display', serif", color: "#2E7D32", fontSize: "1.05rem" }}>
                "Saral means simple. We believe the purest food is also the simplest — grown with love, made with tradition, delivered with honesty."
              </p>
              <span className="text-sm mt-2 block" style={{ fontFamily: "'Lato', sans-serif", color: "#5a7a5a" }}>
                — Rajan Mehta, Founder
              </span>
            </div>

            <button
              className="px-8 py-3.5 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg"
              style={{ background: "#2E7D32", color: "white", fontFamily: "'Lato', sans-serif" }}
            >
              Read Full Story →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
