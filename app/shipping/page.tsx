"use client";

import { motion } from "framer-motion";

export default function ShippingPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Shipping Policy
        </h1>
        <p className="text-brand-gray text-sm mb-10">Last updated: June 2025</p>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">1. Order Processing</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            At Progressive Tee, we work diligently to ensure every order is carefully packed and dispatched as quickly as possible. All standard orders are processed and handed to our logistics partner within 1–2 business days of payment confirmation. Business days are Monday through Friday, excluding Nigerian public holidays. Orders placed after 3:00 PM (WAT) on a Friday, or over the weekend, will begin processing the following Monday. You will receive an email notification once your order has been dispatched.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">2. Shipping Options & Delivery Times</h2>
          <p className="text-brand-gray text-lg leading-relaxed mb-4">
            We offer the following shipping options at checkout:
          </p>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-1">Standard Shipping</h3>
              <p className="text-brand-gray">Estimated delivery in 3–5 business days within Lagos and other major Nigerian cities. Availability and timelines may vary for more remote locations.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-1">Expedited Shipping</h3>
              <p className="text-brand-gray">Estimated delivery in 1–2 business days. Available for selected areas. Additional fee applies and is calculated at checkout based on your delivery address.</p>
            </div>
          </div>
          <p className="text-brand-gray text-lg leading-relaxed mt-4">
            Please note that delivery estimates are provided by our logistics partners and are not guaranteed. Progressive Tee is not responsible for delays caused by circumstances beyond our control, including bad weather, logistics network disruptions, or customs processing.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">3. Order Tracking</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Once your order has been dispatched, you will receive a shipping confirmation email containing a tracking number and a link to the carrier&apos;s tracking portal. You can use this to monitor your order&apos;s journey in real time. If you do not receive a tracking email within 3 business days of placing your order, please check your spam or junk folder, or contact us at contact@progressivetee.com and we will investigate promptly.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">4. Shipping Fees</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Shipping fees are calculated dynamically at checkout based on your delivery location and chosen shipping method. We periodically offer free standard shipping promotions, which will be automatically applied at checkout when applicable. All applicable shipping charges will be clearly displayed before you confirm your purchase — there are no hidden fees.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">5. Failed Deliveries & Incorrect Addresses</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            It is the customer&apos;s responsibility to provide a complete and accurate delivery address at checkout. Progressive Tee cannot be held liable for parcels lost or delayed due to incorrect or incomplete address information. If a delivery attempt fails due to the customer not being available, the carrier will typically leave a notification card. Please follow the carrier&apos;s instructions to arrange redelivery or collection. If a parcel is returned to us due to failed delivery, we will contact you to arrange reshipment. Additional shipping charges may apply. For any shipping enquiries, please contact our team at 09043963779.
          </p>
        </section>
      </motion.div>
    </main>
  );
}
