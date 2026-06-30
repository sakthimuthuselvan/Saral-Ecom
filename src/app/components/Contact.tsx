"use client";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MSG = encodeURIComponent("Hi! I have a question about Saral Organic products.");

const contactItems = [
  {
    icon: <MessageCircle size={24} />,
    title: "WhatsApp",
    value: "+91 98765 43210",
    sub: "Available 9 AM – 8 PM daily",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`,
    color: "#25D366",
    bg: "#e8fdf0",
  },
  {
    icon: <Phone size={24} />,
    title: "Phone",
    value: "+91 98765 43210",
    sub: "Mon – Sat, 10 AM – 6 PM",
    href: "tel:+919876543210",
    color: "#2E7D32",
    bg: "#e8f5e9",
  },
  {
    icon: <Mail size={24} />,
    title: "Email",
    value: "hello@saralorganic.in",
    sub: "We reply within 24 hours",
    href: "mailto:hello@saralorganic.in",
    color: "#D4A017",
    bg: "#fdf8ec",
  },
  {
    icon: <MapPin size={24} />,
    title: "Address",
    value: "Saral Organic Pvt. Ltd.",
    sub: "42, Green Valley, Sector 18\nGurgaon, Haryana — 122015",
    href: "#",
    color: "#2E7D32",
    bg: "#e8f5e9",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4" style={{ background: "#f0f9f0" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#D4A017", fontFamily: "'Lato', sans-serif" }}>
            Get in Touch
          </span>
          <h2 className="mt-2 mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1a2e1a" }}>
            We'd Love to Hear From You
          </h2>
          <p className="max-w-xl mx-auto" style={{ fontFamily: "'Lato', sans-serif", color: "#5a7a5a" }}>
            Have a question about our products? Want to place a bulk order? Or just want to say hello? Reach out on WhatsApp for the fastest response.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactItems.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
              style={{ border: "1px solid rgba(46,125,50,0.1)" }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ background: item.bg, color: item.color }}
              >
                {item.icon}
              </div>
              <div className="font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "#1a2e1a", fontSize: "1rem" }}>
                {item.title}
              </div>
              <div className="font-semibold text-sm mb-1" style={{ fontFamily: "'Lato', sans-serif", color: item.color }}>
                {item.value}
              </div>
              <div className="text-xs whitespace-pre-line" style={{ fontFamily: "'Lato', sans-serif", color: "#9aaa9a" }}>
                {item.sub}
              </div>
            </motion.a>
          ))}
        </div>

        {/* WhatsApp CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-3xl p-8 md:p-12 text-center text-white"
          style={{ background: "linear-gradient(135deg, #2E7D32 0%, #1a5e1d 100%)" }}
        >
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.4rem, 3vw, 2rem)" }} className="mb-3">
            Ready to Order?
          </h3>
          <p className="mb-6 text-green-200" style={{ fontFamily: "'Lato', sans-serif" }}>
            Click the button below and we'll get your pure organic products to you in 3–5 days.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to place an order with Saral Organic.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-105 hover:shadow-2xl"
            style={{ background: "#25D366", color: "white", fontFamily: "'Lato', sans-serif" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.121 1.534 5.859L.057 23.386a.5.5 0 00.612.612l5.578-1.504A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.98 0-3.82-.538-5.4-1.472l-.387-.232-4.016 1.082 1.1-4.02-.254-.414A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Order Now on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
