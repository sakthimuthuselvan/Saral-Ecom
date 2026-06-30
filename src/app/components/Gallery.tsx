"use client";
import { motion } from "motion/react";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1771690633777-55ba534e5cb7?w=600&h=400&fit=crop&auto=format",
    alt: "Fresh organic coconuts on palm tree",
    label: "Coconut Farm",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1776240955087-f4a6d4cb0750?w=400&h=400&fit=crop&auto=format",
    alt: "Cows grazing on organic farm",
    label: "Desi Cow Farm",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1757801333068-d52a3e448cde?w=400&h=400&fit=crop&auto=format",
    alt: "Natural oil bottles",
    label: "Pure Cold Pressed Oil",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1758522965224-7a69eedbad8a?w=400&h=400&fit=crop&auto=format",
    alt: "Golden ghee",
    label: "Golden A2 Ghee",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1778035121163-536c99d155be?w=600&h=400&fit=crop&auto=format",
    alt: "Organic product packaging",
    label: "Eco Packaging",
    span: "col-span-2",
  },
];

export function Gallery() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#D4A017", fontFamily: "'Lato', sans-serif" }}>
            Farm to Home
          </span>
          <h2 className="mt-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1a2e1a" }}>
            Organic Farm Gallery
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-4" style={{ gridAutoRows: "200px" }}>
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${item.span} ${i === 1 || i === 2 || i === 3 ? "row-span-1" : "row-span-1"}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "rgba(46,125,50,0.6)" }} />
              <div className="absolute inset-0 flex items-end p-4">
                <span
                  className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-300"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
