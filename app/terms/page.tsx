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
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Terms and Conditions
        </h1>
        <p className="text-brand-gray text-sm mb-10">Last updated: June 2025</p>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">1. Acceptance of Terms</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Welcome to Progressive Tee. By accessing or using our website and purchasing our products, you confirm that you are at least 18 years of age and agree to be legally bound by these Terms and Conditions in full. If you do not agree to any part of these terms, you must not use our website or services. We reserve the right to update or modify these terms at any time without prior notice, and your continued use of the site following any changes constitutes your acceptance of the revised terms.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">2. Intellectual Property</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            All content published on the Progressive Tee website — including but not limited to text, product descriptions, photographs, graphics, logos, icons, and software — is the exclusive intellectual property of Progressive Tee and is protected under applicable copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, transmit, reuse, re-download, repost, or otherwise use any of this content for commercial or public purposes without our express written permission. Unauthorised use of our intellectual property may give rise to a claim for damages and could constitute a criminal offence.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">3. Purchasing and Pricing</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            All prices displayed on our website are shown in USD by default and may also be viewed in NGN using our currency converter. Prices are subject to change without notice. We reserve the right to modify product availability, discontinue items, or cancel orders at our discretion — for example, in the event of a pricing error, stock discrepancy, or suspected fraudulent activity. In such cases, we will notify you promptly and issue a full refund if payment has already been taken. We strive to display accurate product colours and descriptions, but we cannot guarantee that your screen will exactly replicate the physical product.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">4. Order Confirmation & Contract</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Once you submit an order, you will receive an automated email confirming receipt of your order. This confirmation does not constitute acceptance of your order. A binding contract between you and Progressive Tee is only formed once we send a separate dispatch confirmation email confirming that your items have been shipped. Progressive Tee reserves the right to refuse or cancel any order at any stage of the process for any lawful reason, including but not limited to payment failure, inaccurate product information, or identified fraud risk.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">5. User Conduct</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            When using our website, you agree not to engage in any conduct that is unlawful, harmful, threatening, abusive, or otherwise objectionable. You must not attempt to gain unauthorised access to our systems, interfere with website performance, or introduce malicious code. Progressive Tee reserves the right to suspend or terminate access to any user who violates these conditions.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">6. Limitation of Liability</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            To the fullest extent permitted by law, Progressive Tee shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of — or inability to use — our website or products. Our total liability for any claim arising out of or relating to these terms shall not exceed the amount paid by you for the relevant product. If you have questions about these terms, please contact us at contact@progressivetee.com or call 09043963779.
          </p>
        </section>
      </motion.div>
    </main>
  );
}
