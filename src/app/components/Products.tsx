"use client";
import { motion } from "motion/react";
import { Check } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210";

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.121 1.534 5.859L.057 23.386a.5.5 0 00.612.612l5.578-1.504A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.98 0-3.82-.538-5.4-1.472l-.387-.232-4.016 1.082 1.1-4.02-.254-.414A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

const products = [
  {
    id: "coconut-oil",
    name: "Cold Pressed Coconut Oil",
    tagline: "Wood-pressed. Unrefined. Pure.",
    desc: "Extracted from fresh, mature coconuts using traditional cold pressing — no heat, no chemicals. Rich in medium-chain fatty acids for total wellness.",
    price: "₹349",
    unit: "/ 500ml",
    image: "https://images.unsplash.com/photo-1771690633777-55ba534e5cb7?w=600&h=700&fit=crop&auto=format",
    badge: "Best Seller",
    badgeColor: "#2E7D32",
    benefits: ["Pure Cold Pressed", "No Chemicals", "Rich in MCT", "Multipurpose Use"],
    whatsappMsg: "Hi! I'd like to order Cold Pressed Coconut Oil from Saral Organic.",
  },
  {
    id: "a2-ghee",
    name: "A2 Cow Ghee",
    tagline: "Bilona method. Golden richness.",
    desc: "Made from A2 milk of indigenous Desi cows using the traditional Bilona churning method. Dense with nutrients, rich in CLA and butyrate.",
    price: "₹899",
    unit: "/ 500ml",
    image: "https://images.unsplash.com/photo-1758522965224-7a69eedbad8a?w=600&h=700&fit=crop&auto=format",
    badge: "Premium",
    badgeColor: "#D4A017",
    benefits: ["Bilona Method", "A2 Desi Milk", "Rich Nutrition", "Traditional Taste"],
    whatsappMsg: "Hi! I'd like to order A2 Cow Ghee from Saral Organic.",
  },
];

export function Products() {
  return (
    <section id="products" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#D4A017", fontFamily: "'Lato', sans-serif" }}>
            Our Products
          </span>
          <h2 className="mt-2 mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1a2e1a" }}>
            Handcrafted Organic Goodness
          </h2>
          <p className="max-w-xl mx-auto" style={{ fontFamily: "'Lato', sans-serif", color: "#5a7a5a", fontSize: "1rem" }}>
            Each product is made with love, tradition, and the finest natural ingredients — nothing more, nothing less.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
              style={{ border: "1px solid rgba(46,125,50,0.12)" }}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden bg-green-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)" }} />
                <span
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-bold tracking-wide"
                  style={{ background: product.badgeColor, fontFamily: "'Lato', sans-serif" }}
                >
                  {product.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1" style={{ background: "white" }}>
                <span className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#D4A017", fontFamily: "'Lato', sans-serif" }}>
                  {product.tagline}
                </span>
                <h3 className="mb-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "#1a2e1a" }}>
                  {product.name}
                </h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ fontFamily: "'Lato', sans-serif", color: "#5a7a5a" }}>
                  {product.desc}
                </p>

                {/* Benefits */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {product.benefits.map((b) => (
                    <div key={b} className="flex items-center gap-1.5">
                      <Check size={14} style={{ color: "#2E7D32", flexShrink: 0 }} />
                      <span className="text-xs" style={{ fontFamily: "'Lato', sans-serif", color: "#1a2e1a" }}>{b}</span>
                    </div>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="mt-auto">
                  <div className="flex items-baseline gap-1 mb-4">
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#2E7D32" }}>
                      {product.price}
                    </span>
                    <span style={{ fontFamily: "'Lato', sans-serif", color: "#5a7a5a", fontSize: "0.9rem" }}>{product.unit}</span>
                  </div>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(product.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl text-white font-semibold transition-all hover:scale-[1.02] hover:shadow-lg text-sm"
                    style={{ background: "#25D366", fontFamily: "'Lato', sans-serif" }}
                  >
                    <WhatsAppIcon />
                    Order on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
