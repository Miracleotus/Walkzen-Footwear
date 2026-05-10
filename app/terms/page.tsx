"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-10 leading-tight">
          Terms and Conditions
        </h1>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">Agreement of Use</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Welcome to Progressive Tee. By accessing our website and purchasing our products, you agree to be bound by these Terms and Conditions. All digital content, imagery, and logos are the intellectual property of Progressive Tee and may not be used without explicit permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">Purchasing and Pricing</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            We reserve the right to modify product prices, discontinue items, or cancel orders at our discretion (for example, in the event of a pricing error or suspected fraud). We strive to display product colors as accurately as possible, but we cannot guarantee that your device&apos;s display will perfectly reflect the physical product.
          </p>
        </section>
      </motion.div>
    </main>
  );
}
