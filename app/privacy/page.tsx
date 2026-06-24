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
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Privacy Policy
        </h1>
        <p className="text-brand-gray text-sm mb-10">Last updated: June 2025</p>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">1. Introduction</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            At Progressive Tee, we are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and make purchases from us. Please read this policy carefully. If you disagree with its terms, please discontinue use of our site. We reserve the right to make changes to this policy at any time, and we encourage you to review it periodically to stay informed.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">2. Information We Collect</h2>
          <p className="text-brand-gray text-lg leading-relaxed mb-4">
            We collect personal information that you voluntarily provide to us when you place an order, register on our website, or contact our customer support team. The categories of information we may collect include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-brand-gray text-lg leading-relaxed">
            <li><strong className="text-white">Contact Information:</strong> Your full name, email address, phone number, and physical shipping address.</li>
            <li><strong className="text-white">Payment Details:</strong> Billing address and credit or debit card information, which is processed securely through our encrypted payment gateway. We do not store full card numbers on our servers.</li>
            <li><strong className="text-white">Order History:</strong> Records of products you have purchased, returned, or inquired about.</li>
            <li><strong className="text-white">Device & Usage Data:</strong> IP address, browser type, operating system, and pages visited — collected automatically via cookies and analytics tools to improve your browsing experience.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">3. How We Use Your Information</h2>
          <p className="text-brand-gray text-lg leading-relaxed mb-4">
            The information we collect is used exclusively to operate and improve our business. Specifically, we use your data to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-brand-gray text-lg leading-relaxed">
            <li>Process and fulfil your orders, including arranging delivery and sending order confirmations.</li>
            <li>Handle payment transactions securely through our third-party payment processor.</li>
            <li>Respond to your customer service enquiries, returns, and refund requests.</li>
            <li>Send you transactional emails, such as shipping notifications and receipts.</li>
            <li>Improve website functionality, product offerings, and the overall shopping experience.</li>
            <li>Comply with legal and regulatory obligations where required.</li>
          </ul>
          <p className="text-brand-gray text-lg leading-relaxed mt-4">
            We will only send you marketing communications if you have explicitly opted in to receive them. You may opt out at any time by contacting us or clicking the unsubscribe link in any marketing email.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">4. Information Sharing & Disclosure</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            We do not sell, rent, trade, or otherwise transfer your personally identifiable information to outside parties for their marketing purposes. We may share your information with trusted third-party service providers — such as payment processors, shipping carriers, and analytics platforms — solely to assist us in operating our website and conducting our business. These providers are contractually obligated to keep your information confidential and use it only for the purposes for which it was disclosed. We may also disclose your information if required by law, regulation, or a valid governmental request.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">5. Data Security</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            We implement industry-standard security measures, including SSL/TLS encryption, to protect your personal information during transmission. All payment data is handled through PCI-DSS compliant payment gateways. While we take every reasonable precaution, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security. If you believe your data has been compromised, please contact us immediately at contact@progressivetee.com.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">6. Your Rights</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            You have the right to access, correct, or request deletion of the personal data we hold about you. To exercise any of these rights, please contact us at contact@progressivetee.com or call us at 09043963779. We will respond to your request within a reasonable timeframe. By using the Progressive Tee website, you acknowledge and consent to the data practices described in this policy.
          </p>
        </section>
      </motion.div>
    </main>
  );
}
