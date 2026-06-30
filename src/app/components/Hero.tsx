"use client";
import { motion } from "motion/react";

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MSG = encodeURIComponent("Hi! I'd like to order from Saral Organic.");

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.121 1.534 5.859L.057 23.386a.5.5 0 00.612.612l5.578-1.504A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.98 0-3.82-.538-5.4-1.472l-.387-.232-4.016 1.082 1.1-4.02-.254-.414A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

export function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1744358399532-9769248a6d58?w=1600&h=900&fit=crop&auto=format"
          alt="Lush organic farm with palm trees"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(46,125,50,0.88) 0%, rgba(26,46,26,0.75) 60%, rgba(212,160,23,0.3) 100%)" }} />
      </div>

      {/* Decorative leaf shapes */}
      <div className="absolute top-20 right-0 w-64 h-64 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 10 Q190 100 100 190 Q10 100 100 10Z" fill="white"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left: Text content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ background: "rgba(212,160,23,0.25)", color: "#f5d78a", border: "1px solid rgba(212,160,23,0.5)", fontFamily: "'Lato', sans-serif" }}
            >
              🌿 100% Natural • Chemical Free
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", lineHeight: "1.15", fontWeight: 700 }}
          >
            Pure Organic Goodness
            <span style={{ color: "#f5d78a", display: "block" }}>From Nature</span>
            To Your Home
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-green-100 mb-8 max-w-lg"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", lineHeight: "1.7" }}
          >
            100% Natural • Chemical Free • Farm Fresh • Traditionally Made
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-7 py-4 rounded-full text-white font-semibold transition-all hover:scale-105 hover:shadow-2xl text-base"
              style={{ background: "#25D366", fontFamily: "'Lato', sans-serif" }}
            >
              <WhatsAppIcon />
              Order on WhatsApp
            </a>
            <button
              onClick={() => scrollTo("#products")}
              className="flex items-center gap-2 px-7 py-4 rounded-full font-semibold transition-all hover:scale-105 text-base"
              style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "2px solid rgba(255,255,255,0.6)", backdropFilter: "blur(8px)", fontFamily: "'Lato', sans-serif" }}
            >
              View Products →
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex gap-8 mt-12"
          >
            {[
              { num: "5000+", label: "Happy Customers" },
              { num: "100%", label: "Pure & Natural" },
              { num: "Pan India", label: "Delivery" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif", color: "#f5d78a" }}>{s.num}</div>
                <div className="text-xs text-green-200 mt-0.5" style={{ fontFamily: "'Lato', sans-serif" }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Product images */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative">
            {/* Main product image - coconut oil */}
            <div
              className="rounded-3xl overflow-hidden shadow-2xl"
              style={{ width: "280px", height: "340px", border: "3px solid rgba(255,255,255,0.3)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1771690633777-55ba534e5cb7?w=560&h=680&fit=crop&auto=format"
                alt="Fresh organic coconuts"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-3xl" style={{ background: "linear-gradient(to top, rgba(46,125,50,0.5) 0%, transparent 60%)" }} />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="block text-white text-sm font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>Cold Pressed Coconut Oil</span>
                <span className="text-green-200 text-xs" style={{ fontFamily: "'Lato', sans-serif" }}>From our organic farm</span>
              </div>
            </div>

            {/* Secondary image - ghee */}
            <div
              className="absolute -bottom-6 -right-10 rounded-2xl overflow-hidden shadow-xl"
              style={{ width: "170px", height: "200px", border: "3px solid rgba(212,160,23,0.5)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1758522965224-7a69eedbad8a?w=340&h=400&fit=crop&auto=format"
                alt="Pure A2 Cow Ghee golden"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(to top, rgba(212,160,23,0.6) 0%, transparent 60%)" }} />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="block text-white text-xs font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>A2 Cow Ghee</span>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -top-4 -left-4 rounded-2xl px-4 py-3 shadow-xl"
              style={{ background: "white" }}
            >
              <div className="text-xs font-bold" style={{ color: "#2E7D32", fontFamily: "'Lato', sans-serif" }}>⭐ 4.9/5 Rating</div>
              <div className="text-xs" style={{ color: "#5a7a5a" }}>5000+ Reviews</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Lato', sans-serif" }}>Scroll</span>
        <div className="w-px h-8 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
}
