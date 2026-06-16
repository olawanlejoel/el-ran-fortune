import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const ACCOUNT_DETAILS = {
  bank: "FCMB",
  name: "El-RAN TRANSFORMATIONAL RENDEVOUS Ltd",
  number: "1043687073",
};

const AMOUNT = 20000;
const WHATSAPP_NUMBER = "2348032388802";

export default function PurposeAcademy() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const { fullName, email, phone, gender, message } = formData;
    const text = encodeURIComponent(
      `*Purpose Academy Cohort 2 Registration*\n\n` +
      `*Full Name:* ${fullName}\n` +
      `*Email:* ${email}\n` +
      `*Phone:* ${phone}\n` +
      `*Gender:* ${gender}\n` +
      `*Message:* ${message}\n\n` +
      `---\n` +
      `I have paid ₦${AMOUNT.toLocaleString()} to ${ACCOUNT_DETAILS.bank} (${ACCOUNT_DETAILS.name}) - ${ACCOUNT_DETAILS.number}. Kindly find the proof of payment attached.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <>
      <Head>
        <title>Purpose Academy Cohort 2 | EL-RAN Transformational Rendezvous</title>
        <meta name="description" content="Register for Purpose Academy Cohort 2 — a transformative program for purpose-driven living." />
        <meta property="og:title" content="Purpose Academy Cohort 2 | EL-RAN Transformational Rendezvous" />
        <meta property="og:description" content="Register now for Purpose Academy Cohort 2." />
        <meta property="og:image" content="/images/Purpose%20Academy%20(1).png" />
      </Head>

      <main className="w-full min-h-screen bg-[#FCFAFF] pt-28 pb-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">

          {/* Flyer */}
          <div className="w-full max-w-[600px] mx-auto mb-12 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/Purpose Academy (1).png"
              alt="Purpose Academy Cohort 2 Flyer"
              width={0}
              height={0}
              sizes="(max-width: 600px) 100vw, 600px"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              priority
            />
          </div>

          {/* Registration Form Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg max-w-[800px] mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-secondary font-bricolage mb-2">
              Register for Purpose Academy
            </h1>
            <p className="text-secondary/60 text-sm mb-8">
              Cohort 2 — Fill the form below, make payment, and send your proof via WhatsApp.
            </p>

            <form onSubmit={handleWhatsApp} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-secondary mb-2">Full Name *</label>
                  <input type="text" id="fullName" value={formData.fullName} onChange={handleChange} required
                    className="w-full bg-[#FAFAFA] px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all text-secondary" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-secondary mb-2">Email Address *</label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} required
                    className="w-full bg-[#FAFAFA] px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all text-secondary" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-secondary mb-2">Phone Number *</label>
                  <input type="tel" id="phone" value={formData.phone} onChange={handleChange} required
                    className="w-full bg-[#FAFAFA] px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all text-secondary" />
                </div>
                <div>
                  <label htmlFor="gender" className="block text-sm font-semibold text-secondary mb-2">Gender *</label>
                  <div className="relative">
                    <select id="gender" value={formData.gender} onChange={handleChange} required
                      className="w-full bg-[#FAFAFA] px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all text-secondary [appearance:none] [-webkit-appearance:none]">
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/50 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-secondary mb-2">Message / Questions (Optional)</label>
                <textarea id="message" rows={3} value={formData.message} onChange={handleChange}
                  className="w-full bg-[#FAFAFA] px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all text-secondary resize-none" />
              </div>
            </form>

            {/* Payment Details */}
            <div className="mt-10 p-6 md:p-8 bg-[#F9F5FF] rounded-2xl border border-[#E2C7DE]">
              <h2 className="text-xl font-bold text-secondary font-bricolage mb-4">Payment Details</h2>
              <div className="space-y-3 text-secondary/80 text-base">
                <p><span className="font-semibold text-secondary">Amount:</span> ₦{AMOUNT.toLocaleString()}</p>
                <p><span className="font-semibold text-secondary">Bank:</span> {ACCOUNT_DETAILS.bank}</p>
                <p><span className="font-semibold text-secondary">Account Name:</span> {ACCOUNT_DETAILS.name}</p>
                <p><span className="font-semibold text-secondary">Account Number:</span> <span className="text-primary font-bold text-lg tracking-wider">{ACCOUNT_DETAILS.number}</span></p>
              </div>
            </div>

            {/* WhatsApp Submit Button */}
            <button
              onClick={handleWhatsApp}
              className="mt-6 w-full py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-2xl font-bold text-base transition-all shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-3"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Send Registration & Proof via WhatsApp
            </button>

            <p className="text-xs text-secondary/50 text-center mt-4">
              After payment, click the button above to send your details and proof of payment via WhatsApp.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
