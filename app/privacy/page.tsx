"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-10 leading-tight">
          Privacy Policy
        </h1>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">Privacy and Data Protection</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            At Progressive Tee, your privacy is a priority. We collect personal information—such as your name, shipping address, email, and payment details—strictly to process your orders and provide a seamless shopping experience. We utilize secure, encrypted payment gateways and do not store your credit card information on our servers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">Information Sharing</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            We will never sell, rent, or distribute your personal data to unauthorized third parties. By using the Progressive Tee website, you consent to the collection and use of your information as described in this policy.
          </p>
        </section>
      </motion.div>
    </main>
  );
}
