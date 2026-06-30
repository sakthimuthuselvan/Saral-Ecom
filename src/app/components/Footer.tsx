"use client";
import { Leaf } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210";

const quickLinks = ["Home", "Products", "Benefits", "Our Story", "Reviews", "Blog", "Contact"];
const hrefs: Record<string, string> = {
  Home: "#home", Products: "#products", Benefits: "#benefits",
  "Our Story": "#story", Reviews: "#reviews", Blog: "#blog", Contact: "#contact",
};

const socials = [
  { name: "Instagram", href: "#", icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )},
  { name: "Facebook", href: "#", icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )},
  { name: "YouTube", href: "#", icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
    </svg>
  )},
  { name: "WhatsApp", href: `https://wa.me/${WHATSAPP_NUMBER}`, icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.121 1.534 5.859L.057 23.386a.5.5 0 00.612.612l5.578-1.504A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.98 0-3.82-.538-5.4-1.472l-.387-.232-4.016 1.082 1.1-4.02-.254-.414A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  )},
];

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#0f1f0f" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "#2E7D32" }}>
                <Leaf size={20} className="text-white" />
              </div>
              <div>
                <span className="block text-lg font-bold leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: "#a5d6a7" }}>Saral</span>
                <span className="block text-xs tracking-widest uppercase leading-tight" style={{ color: "#D4A017", fontFamily: "'Lato', sans-serif" }}>Organic</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-green-300 mb-5" style={{ fontFamily: "'Lato', sans-serif" }}>
              Bringing pure, traditional, organic goodness from Indian farms directly to your home. 100% natural. 100% honest.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: "rgba(46,125,50,0.3)", color: "#a5d6a7" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#a5d6a7" }}>About Us</h4>
            <p className="text-sm leading-relaxed text-green-400" style={{ fontFamily: "'Lato', sans-serif" }}>
              Founded in 2016, Saral Organic is on a mission to make authentic, traditional organic products accessible to every Indian family. We source directly from certified organic farms and use zero chemicals in our process.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#a5d6a7" }}>Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(hrefs[link])}
                    className="text-sm text-green-400 hover:text-white transition-colors"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#a5d6a7" }}>Contact Info</h4>
            <div className="flex flex-col gap-3 text-sm text-green-400" style={{ fontFamily: "'Lato', sans-serif" }}>
              <div>
                <div className="text-green-300 font-semibold mb-0.5">WhatsApp / Phone</div>
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </div>
              <div>
                <div className="text-green-300 font-semibold mb-0.5">Email</div>
                <a href="mailto:hello@saralorganic.in" className="hover:text-white transition-colors">hello@saralorganic.in</a>
              </div>
              <div>
                <div className="text-green-300 font-semibold mb-0.5">Address</div>
                <span>42, Green Valley, Sector 18<br />Gurgaon, Haryana — 122015</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(46,125,50,0.2)" }} className="px-4 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-green-600" style={{ fontFamily: "'Lato', sans-serif" }}>
            © 2026 Saral Organic Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-green-600" style={{ fontFamily: "'Lato', sans-serif" }}>
            Made with 🌿 in India
          </p>
        </div>
      </div>
    </footer>
  );
}
