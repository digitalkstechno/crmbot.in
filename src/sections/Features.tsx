"use client";

import { useState } from "react";

// ── feature data ──────────────────────────────────────────────────────────────
const features = [
  {
    num: "01",
    title: "Live Dashboard",
    desc: "Real-time view of leads, campaigns, conversion rates & team performance in one place.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <path d="M14 17.5h7M17.5 14v7" />
      </svg>
    ),
    accent: "#00bc7d",
    light: "#e6faf3",
  },
  {
    num: "02",
    title: "Campaign Management",
    desc: "Send bulk WhatsApp messages with rich media, schedule campaigns & track delivery.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22l-4-9-9-4 20-7z" />
      </svg>
    ),
    accent: "#00bc7d",
    light: "#e6faf3",
  },
  {
    num: "03",
    title: "Lead Management",
    desc: "Capture, assign, track & follow up on leads from multiple channels automatically.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20c0-3.314 2.686-6 6-6s6 2.686 6 6" />
        <path d="M19 8l2 2-2 2M16 10h5" />
      </svg>
    ),
    accent: "#00bc7d",
    light: "#e6faf3",
  },
  {
    num: "04",
    title: "WhatsApp Automation",
    desc: "Auto-reply, drip sequences, chatbot flows & instant lead response powered by Meta API.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M22 2L12 12" />
        <path d="M17 2h5v5" />
      </svg>
    ),
    accent: "#00bc7d",
    light: "#e6faf3",
  },
  {
    num: "05",
    title: "Templates",
    desc: "Pre-approved WhatsApp message templates for every stage of the customer journey.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    accent: "#00bc7d",
    light: "#e6faf3",
  },
  {
    num: "06",
    title: "Reports & Analytics",
    desc: "Detailed reports on open rates, response time, revenue & team-level insights.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    accent: "#00bc7d",
    light: "#e6faf3",
  },
];

// ── card ──────────────────────────────────────────────────────────────────────
function FeatureCard({
  num,
  title,
  desc,
  icon,
  index,
}: {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group bg-[#f8fffe] relative overflow-hidden rounded-3xl border border-slate-100 
        transition-all duration-300 hover:-translate-y-2 hover:border-[#00bc7d]/30 shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        hover:shadow-3xl hover:shadow-[#00bc7d]/10 cursor-pointer"
      style={{
        animationDelay: `${index * 80}ms`,
      }}
    >
      {/* ── gradient corner fill on hover ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-3xl"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 100% 0%, #e6faf3 0%, transparent 70%)",
        }}
      />

      {/* ── large number ── */}
      <span
        className="pointer-events-none absolute right-5 top-4 font-sans-dm select-none text-[4rem]
          font-extrabold leading-none transition-colors duration-300"
        style={{
          color: hovered ? "#00bc7d20" : "#f1f5f9",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {num}
      </span>

      {/* ── content ── */}
      <div className="relative z-10 flex flex-col gap-4 p-7">

        {/* top row: icon + pill */}
        <div className="flex items-start justify-between">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-2xl transition-all
              duration-300 group-hover:scale-110"
            style={{
              background: hovered ? "#00bc7d" : "#e6faf3",
              color: hovered ? "#ffffff" : "#00bc7d",
            }}
          >
            {icon}
          </div>

          
        </div>

        {/* title */}
        <h3
          className="text-xl font-bold leading-snug text-slate-900 transition-colors duration-300
            group-hover:text-slate-900"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {title}
        </h3>

        {/* desc */}
        <p
          className="text-sm leading-relaxed text-slate-500"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {desc}
        </p>

       

      </div>

      {/* ── bottom accent line ── */}
      <div
        className="absolute bottom-0 left-0 h-[3px] rounded-b-3xl transition-all duration-500"
        style={{
          width: hovered ? "100%" : "0%",
          background: "linear-gradient(90deg, #00bc7d, #00e09a)",
        }}
      />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
export default function Features() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
      `}</style>

      <section className="bg-[#ffff] py-24 px-6 sm:px-10 md:px-12 lg:px-15">
        <div className="mx-auto max-w-6xl">

          {/* ── header ── */}

          <div className="mb-14 flex flex-col items-center text-center" id="features">
            <span className="text-[12px] min-[403px]:text-[13px] sm:text-[14px] font-jakarta font-[600] tracking-[1.5px] text-[#00bc7d] uppercase mb-2 block ">
              Platform Features
            </span>
            <h2 className="text-[29px] min-[347px]:text-[31px] min-[403px]:text-[37px] sm:text-[39px] md:text-[43px] font-bold leading-[1.15] text-[#1a1a1a] mb-1 font-Sans tracking-tight">
              Everything You Need to <br />Convert & Retain
            </h2>
            <p className="text-[12px] min-[403px]:text-[14px] sm:text-[16px] text-[#6b7280] max-w-[520px] leading-relaxed font-jakarta">
              A complete growth stack — from first contact to closed deal, all powered by WhatsApp.
            </p>
          </div>

          {/* ── grid ── */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <FeatureCard key={f.num} index={i} {...f} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
