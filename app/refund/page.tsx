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
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Refund Policy
        </h1>
        <p className="text-brand-gray text-sm mb-10">Last updated: June 2025</p>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">1. Our 30-Day Comfort Guarantee</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            At Progressive Tee, your satisfaction is everything. We stand behind every product we sell with our 30-Day Comfort Guarantee. If for any reason you are not completely satisfied with your purchase — whether it&apos;s a sizing issue, a change of preference, or a product defect — you may return your item within 30 days of the delivery date for a full refund or exchange. We want you to feel confident every time you shop with us.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">2. Eligibility for Returns</h2>
          <p className="text-brand-gray text-lg leading-relaxed mb-4">
            To be eligible for a return or refund, the following conditions must be met:
          </p>
          <ul className="list-disc list-inside space-y-2 text-brand-gray text-lg leading-relaxed">
            <li>The item must be returned within 30 days of the delivery date.</li>
            <li>Items must be unworn and in their original, unaltered condition. Trying them on briefly indoors on a clean, dry surface is acceptable.</li>
            <li>All original packaging, tags, lace bags, and inserts must be included.</li>
            <li>Items showing signs of outdoor use, heavy wear, alteration, or damage caused by the customer are not eligible for a refund.</li>
            <li>Sale items marked as &quot;final sale&quot; are not eligible for a return or exchange.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">3. How to Initiate a Return</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            To start a return, contact our customer support team at contact@progressivetee.com or call us on 09043963779 with your order number and a brief description of the reason for return. Our team will respond within 24 business hours with a Return Merchandise Authorisation (RMA) number and instructions on how to ship your item back. Please do not return items without first receiving an RMA number, as unreferenced returns may not be processed. Once approved, securely repackage your item and ship it to the address provided.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">4. Processing Your Refund</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Once we receive your returned item at our warehouse, our quality team will inspect it within 2–3 business days. If the return is approved, we will process a refund to your original payment method. Please allow 5–10 business days for the funds to appear in your account, depending on your bank or card issuer. We will send you an email confirmation once the refund has been initiated. Return shipping costs are the responsibility of the customer unless the item received was defective, damaged, or incorrect.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">5. Exchanges</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            If you would like to exchange your item for a different size or style, please indicate this when initiating your return. Exchanges are subject to product availability. If the item you wish to exchange for is unavailable, a full refund will be issued instead. We recommend exchanging early to ensure availability of your preferred replacement. For any questions or concerns regarding this policy, please do not hesitate to reach out to our team — we&apos;re always here to help.
          </p>
        </section>
      </motion.div>
    </main>
  );
}
