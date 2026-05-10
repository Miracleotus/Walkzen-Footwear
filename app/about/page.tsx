"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-10 leading-tight">
          Our Story
        </h1>
        <p className="text-brand-gray text-lg leading-relaxed mb-8">
          Progressive Tee was born from a simple realization: the modern world demands constant motion, yet most footwear isn&apos;t built to keep up comfortably. We grew tired of choosing between products that looked great but fell short, and products that felt great but lacked style. So, we set out to engineer the perfect balance.
        </p>

        <h2 className="font-display text-3xl font-bold mt-12 mb-6 text-brand-teal">Our Mission</h2>
        <p className="text-brand-gray text-lg leading-relaxed mb-12">
          To empower people to move through their days with confidence, comfort, and zero distractions. We are dedicated to creating high-quality, ethically produced collections that support your physical well-being while elevating your personal style.
        </p>

        <h2 className="font-display text-3xl font-bold mb-6 text-brand-teal">The Art of Craftsmanship</h2>
        <p className="text-brand-gray text-lg leading-relaxed mb-12">
          True comfort is not an accident; it is a science. Our design team works alongside specialists to ensure every product provides optimal support and style. From Lagos to the world, Progressive Tee is crafted to be your reliable foundation.
        </p>
      </motion.div>
    </main>
  );
}
