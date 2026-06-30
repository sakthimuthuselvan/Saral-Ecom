"use client";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    category: "Nutrition",
    title: "Why A2 Ghee is Superior to Regular Ghee",
    excerpt: "Discover the science behind A2 beta-casein protein and how it makes Desi cow ghee a far healthier choice for your family's daily nutrition.",
    date: "June 5, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1758522965224-7a69eedbad8a?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: 2,
    category: "Hair Care",
    title: "Cold Pressed Coconut Oil: The Ultimate Hair Mask",
    excerpt: "Learn the traditional Indian hair care ritual using cold pressed coconut oil — used for centuries to grow long, lustrous, frizz-free hair.",
    date: "May 28, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1730250567103-22b4cfaba1d5?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: 3,
    category: "Healthy Living",
    title: "5 Reasons to Switch to Organic Cooking Oils Today",
    excerpt: "Refined oils are stripping your food of nutrition. Here's why making the switch to cold-pressed, organic alternatives is one of the best decisions for your health.",
    date: "May 15, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1744358399532-9769248a6d58?w=600&h=400&fit=crop&auto=format",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-14 gap-4"
        >
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#D4A017", fontFamily: "'Lato', sans-serif" }}>
              Organic Living
            </span>
            <h2 className="mt-1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1a2e1a" }}>
              Latest From Our Blog
            </h2>
          </div>
          <button
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105"
            style={{ background: "#f0f9f0", color: "#2E7D32", fontFamily: "'Lato', sans-serif" }}
          >
            View All Posts <ArrowRight size={16} />
          </button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              style={{ border: "1px solid rgba(46,125,50,0.1)" }}
            >
              {/* Image */}
              <div className="h-52 overflow-hidden bg-green-50">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "#e8f5e9", color: "#2E7D32", fontFamily: "'Lato', sans-serif" }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs" style={{ color: "#9aaa9a", fontFamily: "'Lato', sans-serif" }}>
                    {post.readTime}
                  </span>
                </div>

                <h3 className="mb-2 leading-snug" style={{ fontFamily: "'Playfair Display', serif", color: "#1a2e1a", fontSize: "1.1rem" }}>
                  {post.title}
                </h3>

                <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: "'Lato', sans-serif", color: "#5a7a5a" }}>
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ fontFamily: "'Lato', sans-serif", color: "#9aaa9a" }}>{post.date}</span>
                  <span className="text-sm font-semibold flex items-center gap-1 transition-colors" style={{ color: "#2E7D32", fontFamily: "'Lato', sans-serif" }}>
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
