"use client";

import { useState } from "react";

// ── types ────────────────────────────────────────────────────────────────────
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  whatsapp: string;
  businessType: string;
  phone: string;
  message: string;
}

const businessTypes = [
  "Textile / Fabric",
  "Real Estate",
  "CA / Finance",
  "Manufacturing",
  "E-Commerce",
  "Healthcare",
  "Education",
  "Other",
];

const contactLinks = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    label: "Email Us",
    value: "hello@crmbot.in",
    href: "mailto:hello@crmbot.in",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
      </svg>
    ),
    label: "Call Us",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.523 5.854L.057 23.215a.75.75 0 00.928.928l5.361-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.74-.518-5.293-1.423l-.378-.22-3.925 1.073 1.073-3.925-.22-.378A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/919876543210",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    label: "Location",
    value: "Surat, Gujarat",
    href: "https://maps.google.com",
  },
];

const offices = [
  {
    tag: "OFFICE 01",
    name: "Ikata Varachha",
    address:
      "A-403, 4th Floor, Memorial Raj-systems, Sector 12, Ikata Varachha, Surat, Gujarat – 395006",
    phone: "+91 98765 43210",
    mapLink: "https://maps.google.com",
  },
  {
    tag: "OFFICE 02",
    name: "Baroda Prestige",
    address:
      "201, Baroda Prestige, Remote Flyover, Gulej, Surat – 395010, India",
    phone: "+91 98765 43211",
    mapLink: "https://maps.google.com",
  },
];

// ── input component ───────────────────────────────────────────────────────────
function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
}: {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="font-jakarta text-xs font-semibold text-slate-600">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="font-jakarta rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm
          text-slate-800 placeholder:text-slate-400 outline-none transition-all
          focus:border-[#00bc7d] focus:bg-white focus:ring-2 focus:ring-[#00bc7d]/15"
      />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
export default function ContactUs() {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    whatsapp: "",
    businessType: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof FormData) => (val: string) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        .font-sans-dm  { font-family: 'DM Sans', sans-serif; }
        .font-jakarta  { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      {/* ── VISIT OUR OFFICES ───────────────────────────────────────────────── */}
      <section
        className="font-sans-dm bg-[#f8fffe] py-20 px-6 sm:px-10 md:px-12 lg:px-15"
        id="contact"
      >
        <div className="mx-auto max-w-6xl">
          {/* header */}
          <div className="mb-14 flex flex-col items-center text-center">
            <span className="text-[12px] min-[403px]:text-[13px] sm:text-[14px] font-jakarta font-[600] tracking-[1.5px] text-[#00bc7d] uppercase mb-2 block">
              Get In Touch
            </span>
            <h2 className="text-[30px] min-[347px]:text-[32px] min-[403px]:text-[38px] sm:text-[40px] md:text-[45px] font-bold leading-[1.15] text-[#1a1a1a] mb-1 font-Sans tracking-tight">
              Visit Our Offices
            </h2>
            <p className="text-[12px] min-[403px]:text-[14px] sm:text-[16px] text-[#6b7280] max-w-[520px] leading-relaxed font-jakarta">
              Two locations in Surat &amp; Baroda — ready to serve you
            </p>
          </div>

          {/* offices grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 relative">
            <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-px bg-slate-200" />
            {offices.map((office) => (
              <div
                key={office.name}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-[#00bc7d]/40 hover:shadow-lg hover:shadow-[#00bc7d]/10"
              >
                {/* top accent bar */}
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#00bc7d] to-[#00e09a] rounded-t-2xl" />

                {/* tag */}
                <span className="font-jakarta mb-4 inline-block rounded-full bg-[#00bc7d]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#00bc7d]">
                  {office.tag}
                </span>

                <h3 className="font-sans-dm mb-2 text-xl font-bold text-slate-900">
                  {office.name}
                </h3>
                <p className="font-jakarta text-sm leading-relaxed text-slate-500 mb-5">
                  {office.address}
                </p>

                <div className="flex flex-col min-[350px]:flex-row items-left min-[350px]:items-center  justify-between gap-2 mt-2">
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="font-jakarta inline-flex items-center gap-2 text-sm font-semibold text-[#00bc7d] hover:text-[#009d69] transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                    </svg>
                    {office.phone}
                  </a>

                  <a
                    href={office.mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="font-jakarta w-fit inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 transition-all hover:border-[#00bc7d] hover:text-[#00bc7d]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-3.5 w-3.5"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    View Map
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT + FORM ──────────────────────────────────────────────────── */}
      <section className="font-sans-dm bg-white py-10 px-6 sm:px-10 md:px-12 lg:px-15">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            
            <div className="flex flex-col text-center md:text-left w-full">
              <span className="text-[12px] min-[403px]:text-[13px] sm:text-[14px] font-jakarta mb-1 inline-block font-bold uppercase tracking-[2px] text-[#00bc7d]">
                Send a Message
              </span>
              <h2 className="text-[30px] min-[347px]:text-[32px] min-[403px]:text-[38px] sm:text-[40px] md:text-[40px] font-sans-dm mb-1 font-bold leading-tight text-slate-900 ">
                Let&apos;s Start a<br />
                <span className="text-[#00bc7d]">Conversation</span>
              </h2>
              <p className="text-[12px] min-[403px]:text-[14px] sm:text-[16px] font-jakarta mb-10 max-w-md leading-relaxed text-slate-500 mx-auto md:mx-0 text-center md:text-left">
                Have a question or want to see how CRMbot can help your
                business? Our team will reach out within 24 hours.
              </p>

              {/* contact items */}
              <div className="flex flex-col gap-4">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 transition-all hover:border-[#00bc7d]/40 hover:bg-[#00bc7d]/5 hover:shadow-sm"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#00bc7d]/10 text-[#00bc7d] transition-colors group-hover:bg-[#00bc7d] group-hover:text-white">
                      {item.icon}
                    </span>
                    <div>
                      <p className="font-jakarta text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        {item.label}
                      </p>
                      <p className="font-jakarta mt-0.5 text-sm font-semibold text-slate-800">
                        {item.value}
                      </p>
                    </div>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="ml-auto h-4 w-4 text-slate-300 transition-colors group-hover:text-[#00bc7d]"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

         
            <div className="rounded-3xl border border-slate-100 p-8 shadow-sm">
              <div className="mb-6">
                <h3 className="font-sans-dm text-2xl font-bold text-slate-900">
                  Book a Free Demo
                </h3>
                <p className="font-jakarta mt-1.5 text-sm text-slate-500">
                  Fill the form — we&apos;ll set up your personalised
                  walkthrough.
                </p>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#00bc7d]/15 text-3xl">
                    ✅
                  </span>
                  <h4 className="font-sans-dm text-xl font-bold text-slate-900">
                    Message Sent!
                  </h4>
                  <p className="font-jakarta text-sm text-slate-500">
                    We&apos;ll reach out within 24 hours on WhatsApp.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* name row */}
                  <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-4">
                    <Input
                      label="First Name"
                      placeholder="Ramesh"
                      value={form.firstName}
                      onChange={set("firstName")}
                    />
                    <Input
                      label="Last Name"
                      placeholder="Kothari"
                      value={form.lastName}
                      onChange={set("lastName")}
                    />
                  </div>

                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="ramesh@business.com"
                    value={form.email}
                    onChange={set("email")}
                  />

                  <Input
                    label="WhatsApp Number"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.whatsapp}
                    onChange={set("whatsapp")}
                  />

                  {/* business type select */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-jakarta text-xs font-semibold text-slate-600">
                      Business Type
                    </label>
                    <select
                      value={form.businessType}
                      onChange={(e) => set("businessType")(e.target.value)}
                      className="font-jakarta rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm
                        text-slate-800 outline-none transition-all appearance-none
                        focus:border-[#00bc7d] focus:bg-white focus:ring-2 focus:ring-[#00bc7d]/15"
                    >
                      <option value="">— Select Industry —</option>
                      {businessTypes.map((bt) => (
                        <option key={bt} value={bt}>
                          {bt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-jakarta text-xs font-semibold text-slate-600">
                      Message{" "}
                      <span className="text-slate-400 font-normal">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your business needs..."
                      value={form.message}
                      onChange={(e) => set("message")(e.target.value)}
                      className="font-jakarta resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3
                        text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all
                        focus:border-[#00bc7d] focus:bg-white focus:ring-2 focus:ring-[#00bc7d]/15"
                    />
                  </div>

                  {/* submit */}
                  <button
                    type="submit"
                    className="font-jakarta mt-1 w-full rounded-2xl bg-[#00bc7d] py-2.5 text-sm font-bold
                      text-white shadow-lg shadow-[#00bc7d]/30 transition-all
                      hover:-translate-y-0.5 hover:bg-[#009d69] hover:shadow-[#00bc7d]/40
                      active:translate-y-0"
                  >
                    Send Message →
                  </button>

                  <p className="font-jakarta text-center text-[11px] text-slate-400">
                    We reply within 24 hours · No spam, ever
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
