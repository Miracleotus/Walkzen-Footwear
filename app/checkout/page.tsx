"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { CreditCard, Lock, CheckCircle } from "lucide-react";
import Link from "next/link";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
};

function formatCardNumber(value: string) {
  return value.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
}

function formatExpiry(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length >= 3) return digits.slice(0, 2) + "/" + digits.slice(2);
  return digits;
}

export default function CheckoutPage() {
  const { cart, clearCart, totalPrice } = useCart();
  const { formatPrice } = useCurrency();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", city: "", state: "", postalCode: "",
    cardName: "", cardNumber: "", expiry: "", cvv: "",
  });

  const shipping = 15;
  const total = totalPrice + shipping;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    if (name === "cardNumber") {
      setForm((prev) => ({ ...prev, cardNumber: formatCardNumber(value) }));
    } else if (name === "expiry") {
      setForm((prev) => ({ ...prev, expiry: formatExpiry(value) }));
    } else if (name === "cvv") {
      setForm((prev) => ({ ...prev, cvv: value.replace(/\D/g, "").slice(0, 4) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    clearCart();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (cart.length === 0 && !submitted) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-20 pt-32 text-center">
        <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-white/50 mb-8">Add items to your cart before checking out.</p>
        <Link href="/shop" className="bg-brand-teal text-brand-dark font-semibold px-6 py-3 rounded-full hover:bg-brand-teal-light transition">
          Browse Products
        </Link>
      </main>
    );
  }

  if (submitted) {
    return (
      <main className="max-w-2xl mx-auto px-4 py-20 pt-32 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle size={64} className="text-brand-teal" />
        </div>
        <h1 className="font-display text-4xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-brand-gray text-lg mb-4">
          Thank you for your purchase. A confirmation email has been sent to <strong className="text-white">{form.email}</strong>.
        </p>
        <p className="text-brand-gray mb-10">
          Your order is being processed and will be dispatched within 1–2 business days. You will receive a tracking number once your order ships.
        </p>
        <Link href="/shop" className="bg-brand-teal text-brand-dark font-semibold px-8 py-3 rounded-full hover:bg-brand-teal-light transition">
          Continue Shopping
        </Link>
      </main>
    );
  }

  const inputClass = "bg-white/5 border border-white/10 rounded-lg px-4 py-3 w-full text-white placeholder-white/30 focus:outline-none focus:border-brand-teal transition-colors text-sm";
  const labelClass = "block text-xs text-brand-gray uppercase tracking-widest font-semibold mb-1.5";

  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-4 font-body">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-10">Checkout</h1>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">

          {/* Left: Shipping + Payment */}
          <div className="lg:col-span-2 space-y-8">

            {/* Shipping Information */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="font-display text-2xl font-bold mb-6">Shipping Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>First Name</label>
                  <input required name="firstName" value={form.firstName} onChange={handleChange} placeholder="John" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Last Name</label>
                  <input required name="lastName" value={form.lastName} onChange={handleChange} placeholder="Doe" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Email Address</label>
                  <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input required name="phone" value={form.phone} onChange={handleChange} placeholder="08012345678" className={inputClass} />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass}>Street Address</label>
                  <input required name="address" value={form.address} onChange={handleChange} placeholder="6 Moses Iguodala Street" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>City</label>
                  <input required name="city" value={form.city} onChange={handleChange} placeholder="Lagos" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>State</label>
                  <input required name="state" value={form.state} onChange={handleChange} placeholder="Lagos State" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Postal Code</label>
                  <input name="postalCode" value={form.postalCode} onChange={handleChange} placeholder="100001" className={inputClass} />
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-2xl font-bold">Payment Details</h2>
                <div className="flex items-center gap-1.5 text-brand-gray text-xs">
                  <Lock size={14} className="text-brand-teal" />
                  <span>SSL Secured</span>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <CreditCard size={22} className="text-brand-teal" />
                <span className="text-sm text-brand-gray">We accept all major credit and debit cards</span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className={labelClass}>Name on Card</label>
                  <input required name="cardName" value={form.cardName} onChange={handleChange} placeholder="John Doe" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Card Number</label>
                  <div className="relative">
                    <input
                      required
                      name="cardNumber"
                      value={form.cardNumber}
                      onChange={handleChange}
                      placeholder="1234 5678 9012 3456"
                      className={inputClass + " pr-12"}
                      inputMode="numeric"
                    />
                    <CreditCard size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Expiry Date</label>
                    <input
                      required
                      name="expiry"
                      value={form.expiry}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      className={inputClass}
                      inputMode="numeric"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>CVV</label>
                    <input
                      required
                      name="cvv"
                      value={form.cvv}
                      onChange={handleChange}
                      placeholder="123"
                      className={inputClass}
                      inputMode="numeric"
                      type="password"
                    />
                  </div>
                </div>
              </div>

              <p className="text-white/30 text-xs mt-4 flex items-start gap-2">
                <Lock size={12} className="shrink-0 mt-0.5" />
                Your payment information is encrypted and secure. We never store your full card details on our servers.
              </p>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sticky top-28">
              <h2 className="font-display text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate">{item.name}</p>
                      <p className="text-xs text-white/40">Qty: {item.quantity} · {item.sku}</p>
                    </div>
                    <span className="text-sm font-bold text-brand-teal shrink-0">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-4 space-y-3">
                <div className="flex justify-between text-sm text-white/60">
                  <span>Subtotal</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-sm text-white/60">
                  <span>Shipping</span>
                  <span>{formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t border-white/10 pt-3">
                  <span>Total</span>
                  <span className="text-brand-teal">{formatPrice(total)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-brand-teal text-brand-dark py-4 font-bold uppercase tracking-widest text-sm rounded-full hover:bg-brand-teal-light transition flex items-center justify-center gap-2"
              >
                <Lock size={16} />
                Place Order
              </button>

              <p className="text-center text-white/30 text-xs mt-4">
                By placing your order you agree to our{" "}
                <Link href="/terms" className="underline hover:text-white/60 transition">Terms</Link>{" "}
                and{" "}
                <Link href="/privacy" className="underline hover:text-white/60 transition">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
