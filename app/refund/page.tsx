"use client";

import { motion } from "framer-motion";

export default function RefundPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-10 leading-tight">
          Refund Policy
        </h1>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">30-Day Comfort Guarantee (Returns &amp; Exchanges)</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            We want you to be entirely satisfied with your Progressive Tee purchase. If the fit isn&apos;t perfect, we accept returns and exchanges within 30 days of the delivery date. To be eligible for a full refund, items must be unworn (except for trying them on indoors on a clean surface), in their original condition, and returned in the original Progressive Tee packaging.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">Processing Refunds</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Once we receive and inspect your return at our warehouse, we will initiate a refund to your original payment method. Please allow 5-10 business days for the funds to reflect in your account. Return shipping costs are the responsibility of the customer unless the item received was defective.
          </p>
        </section>
      </motion.div>
    </main>
  );
}
