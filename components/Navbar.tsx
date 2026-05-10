"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();
  const { currency, setCurrency } = useCurrency();

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-dark/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.svg"
            alt="Progressive Tee Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="font-display text-xl font-bold tracking-tight bg-linear-to-r from-brand-teal to-brand-teal/80 bg-clip-text text-transparent">
            PROGRESSIVE TEE
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-brand-gray hover:text-brand-teal transition-colors font-body text-sm tracking-widest uppercase"
            >
              {l.label}
            </Link>
          ))}

          {/* Currency Switcher */}
          <div className="flex items-center border border-white/10 rounded-full p-0.5">
            <button
              onClick={() => setCurrency("USD")}
              className={`px-2.5 py-1 text-xs font-bold rounded-full transition-colors ${
                currency === "USD"
                  ? "bg-brand-teal text-brand-dark"
                  : "text-brand-gray hover:text-white"
              }`}
            >
              $ USD
            </button>
            <button
              onClick={() => setCurrency("NGN")}
              className={`px-2.5 py-1 text-xs font-bold rounded-full transition-colors ${
                currency === "NGN"
                  ? "bg-brand-teal text-brand-dark"
                  : "text-brand-gray hover:text-white"
              }`}
            >
              ₦ NGN
            </button>
          </div>

          {/* Cart Icon */}
          <Link href="/cart" className="relative text-brand-gray hover:text-brand-teal transition-colors">
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-teal text-brand-dark text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          <Link
            href="/contact"
            className="bg-brand-teal text-brand-dark px-6 py-2.5 text-sm font-bold tracking-widest uppercase hover:bg-brand-teal-light transition-colors rounded-full"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          {/* Mobile Currency Switcher */}
          <div className="flex items-center border border-white/10 rounded-full p-0.5">
            <button
              onClick={() => setCurrency("USD")}
              className={`px-2 py-0.5 text-xs font-bold rounded-full transition-colors ${
                currency === "USD" ? "bg-brand-teal text-brand-dark" : "text-brand-gray"
              }`}
            >
              $
            </button>
            <button
              onClick={() => setCurrency("NGN")}
              className={`px-2 py-0.5 text-xs font-bold rounded-full transition-colors ${
                currency === "NGN" ? "bg-brand-teal text-brand-dark" : "text-brand-gray"
              }`}
            >
              ₦
            </button>
          </div>

          <Link href="/cart" className="relative text-brand-gray">
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-teal text-brand-dark text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="text-brand-gray"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-brand-dark border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-brand-gray hover:text-brand-teal transition-colors uppercase tracking-widest text-sm"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
