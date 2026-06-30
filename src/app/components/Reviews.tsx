"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    text: "I've been using Saral's coconut oil for 6 months now and my hair has completely transformed. No more frizz, no dryness — just thick, shiny hair. The oil is so pure you can smell the difference the moment you open the bottle.",
    product: "Cold Pressed Coconut Oil",
    avatar: "https://images.unsplash.com/photo-1776440553775-75fc7e32abf7?w=100&h=100&fit=crop&auto=format",
  },
  {
    id: 2,
    name: "Amit Patel",
    location: "Ahmedabad",
    rating: 5,
    text: "The A2 ghee is absolutely divine! I can taste the difference from regular ghee immediately. My digestion has improved so much. Worth every rupee — and the WhatsApp ordering is so convenient!",
    product: "A2 Cow Ghee",
    avatar: "https://images.unsplash.com/photo-1609252285236-93406ce15b0d?w=100&h=100&fit=crop&auto=format",
  },
  {
    id: 3,
    name: "Sunita Reddy",
    location: "Bangalore",
    rating: 5,
    text: "Finally found a brand that doesn't compromise! The coconut oil is exactly as described — cold pressed, chemical free. I use it for cooking, skin care and hair. One product, a hundred uses.",
    product: "Cold Pressed Coconut Oil",
    avatar: "https://images.unsplash.com/photo-1713078582993-fdd86b1a2c1f?w=100&h=100&fit=crop&auto=format",
  },
  {
    id: 4,
    name: "Rohit Verma",
    location: "Mumbai",
    rating: 5,
    text: "My mother has been making ghee with A2 milk all her life. Saral Organic's ghee tastes exactly like hers! The aroma, the texture — everything is spot on. My family is now a loyal customer.",
    product: "A2 Cow Ghee",
    avatar: "https://images.unsplash.com/photo-1632414237690-7713a79fe9d3?w=100&h=100&fit=crop&auto=format",
  },
  {
    id: 5,
    name: "Meera Krishnan",
    location: "Chennai",
    rating: 5,
    text: "I ordered through WhatsApp and the experience was seamless. Product arrived well-packed, fresh and exactly as described. The coconut oil is liquid gold — unrefined and pure. Will keep ordering!",
    product: "Cold Pressed Coconut Oil",
    avatar: "https://images.unsplash.com/photo-1776440553775-75fc7e32abf7?w=100&h=100&fit=crop&auto=format",
  },
];

export function Reviews() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  const visible = [
    reviews[current % reviews.length],
    reviews[(current + 1) % reviews.length],
    reviews[(current + 2) % reviews.length],
  ];

  return (
    <section id="reviews" className="py-20 px-4" style={{ background: "#fdf8ec" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#D4A017", fontFamily: "'Lato', sans-serif" }}>
            Customer Love
          </span>
          <h2 className="mt-2 mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1a2e1a" }}>
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-1">
            {[1,2,3,4,5].map((s) => <Star key={s} size={20} fill="#D4A017" color="#D4A017" />)}
            <span className="ml-2 font-bold" style={{ color: "#D4A017", fontFamily: "'Playfair Display', serif" }}>4.9</span>
            <span className="text-sm ml-1" style={{ color: "#5a7a5a", fontFamily: "'Lato', sans-serif" }}>from 5,000+ reviews</span>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {visible.map((review, i) => (
            <motion.div
              key={review.id + "-" + i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              style={{ border: "1px solid rgba(212,160,23,0.15)" }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, si) => (
                  <Star key={si} size={16} fill="#D4A017" color="#D4A017" />
                ))}
              </div>

              <p className="text-sm leading-relaxed mb-5 italic" style={{ fontFamily: "'Lato', sans-serif", color: "#4a5a4a" }}>
                "{review.text}"
              </p>

              <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-sm" style={{ fontFamily: "'Playfair Display', serif", color: "#1a2e1a" }}>{review.name}</div>
                  <div className="text-xs" style={{ fontFamily: "'Lato', sans-serif", color: "#D4A017" }}>{review.location} • {review.product}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ background: "white", border: "2px solid #2E7D32", color: "#2E7D32" }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ background: "#2E7D32", color: "white" }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
