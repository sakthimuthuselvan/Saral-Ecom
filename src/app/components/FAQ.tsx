"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is the coconut oil truly cold pressed?",
    a: "Yes, absolutely. Our coconut oil is extracted at temperatures below 40°C using traditional wooden presses (cold pressing). This process preserves all the natural nutrients, enzymes, and antioxidants. No heat, no chemicals, no solvents — ever.",
  },
  {
    q: "Is the ghee made from pure A2 milk?",
    a: "Our ghee is made exclusively from A2 milk sourced from indigenous Desi breeds — primarily Gir and Sahiwal cows. These cows produce the coveted A2 beta-casein protein. We use the traditional Bilona method: milk → curd → hand-churned butter → slow-simmered ghee.",
  },
  {
    q: "How do I place an order?",
    a: "Simply click the 'Order on WhatsApp' button on this page, or save our number +91 98765 43210. Send us a message with your product name, quantity, and delivery address. We'll confirm availability and share payment details. It's that simple!",
  },
  {
    q: "How many days does delivery take?",
    a: "We typically deliver within 3–5 business days across India. Metro cities like Mumbai, Delhi, Bangalore, Chennai, Hyderabad usually receive orders in 2–3 days. Remote locations may take up to 7 days. You'll receive a tracking update once shipped.",
  },
  {
    q: "Do you deliver across India?",
    a: "Yes! We deliver pan-India through trusted courier partners including Delhivery, Blue Dart and India Post. Shipping charges may apply for orders below ₹999. Free delivery on all orders above ₹999.",
  },
  {
    q: "What is your return or replacement policy?",
    a: "We stand behind the quality of every product. If you receive a damaged or incorrect order, simply send us a photo on WhatsApp within 48 hours of delivery. We will arrange a free replacement or full refund, no questions asked.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 px-4" style={{ background: "#f8fdf8" }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#D4A017", fontFamily: "'Lato', sans-serif" }}>
            Got Questions?
          </span>
          <h2 className="mt-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1a2e1a" }}>
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(46,125,50,0.12)" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span
                  className="font-semibold pr-4"
                  style={{ fontFamily: "'Lato', sans-serif", color: "#1a2e1a", fontSize: "0.95rem" }}
                >
                  {faq.q}
                </span>
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: open === i ? "#2E7D32" : "#f0f9f0", color: open === i ? "white" : "#2E7D32" }}
                >
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-6 pb-5 text-sm leading-relaxed"
                      style={{ fontFamily: "'Lato', sans-serif", color: "#5a7a5a", borderTop: "1px solid rgba(46,125,50,0.08)" }}
                    >
                      <div className="pt-4">{faq.a}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
