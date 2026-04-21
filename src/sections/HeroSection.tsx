"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// ─── data ──────────────────────────────────────────────────────────────────
const barData = [45, 62, 53, 80, 58, 70, 42];

const leads = [
  {
    initials: "RK",
    name: "Ramesh Kothari",
    phone: "+91 98765 43210",
    status: "New",
    color: "bg-emerald-600",
  },
  {
    initials: "PJ",
    name: "Priya Jain",
    phone: "+91 87654 32109",
    status: "Hot",
    color: "bg-orange-500",
  },
  {
    initials: "AK",
    name: "Arjun Kumar",
    phone: "+91 76543 21098",
    status: "Closed",
    color: "bg-sky-500",
  },
];

const tickerItems = [
  "CA CRM",
  "Textile CRM",
  "Builder CRM",
  "Manufacturer CRM",
  "WhatsApp Automation",
  "Lead Management",
];

const duplicatedItems = [
  ...tickerItems,
  ...tickerItems,
  ...tickerItems,
  ...tickerItems,
  ...tickerItems,
  ...tickerItems,
];

const statusColor: Record<string, string> = {
  New: "text-emerald-600 bg-emerald-50",
  Hot: "text-orange-500 bg-orange-50",
  Closed: "text-slate-500 bg-slate-100",
};

const avatarColors = ["#25d366", "#16a34a", "#059669", "#0d9488"];

// ─── counter hook ──────────────────────────────────────────────────────────
function useCounter(target: number, duration = 1600) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const step = target / (duration / 16);
    let cur = 0;
    const timer = setInterval(() => {
      cur = Math.min(cur + step, target);
      setVal(Math.floor(cur));
      if (cur >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return val;
}

// ─── stat type ─────────────────────────────────────────────────────────────
interface StatItem {
  label: string;
  value: number;
  format: (n: number) => string;
}

// ─── floating badge ────────────────────────────────────────────────────────
function FloatBadge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`absolute z-20 flex items-center gap-2 rounded-2xl border border-white/60
        bg-white px-4 py-2.5 shadow-xl shadow-black/10 text-sm font-semibold
        text-slate-800 backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
export default function HeroSection() {
  const activeLeads = useCounter(347);
  const msgSent = useCounter(2400);
  const openRate = useCounter(91);

  const stats: StatItem[] = [
    { label: "Active Leads", value: activeLeads, format: (n) => String(n) },
    {
      label: "Messages Sent",
      value: msgSent,
      format: (n) => (n / 1000).toFixed(1) + "k",
    },
    { label: "Open Rate", value: openRate, format: (n) => n + "%" },
  ];

  return (
    <>
      {/* ── global keyframes: only valid way in Next.js App Router ── */}
      <style>{`
       @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

        @keyframes floatY  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes floatY2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)}  }
        @keyframes shimmer { 0%{background-position:-400px 0} 100%{background-position:400px 0} }

        .float-1 { animation: floatY  4s ease-in-out infinite; }
        .float-2 { animation: floatY2 4s ease-in-out infinite 1.8s; }
        .bar-active {
          background: linear-gradient(90deg,#bbf7d0 25%,#4ade80 50%,#bbf7d0 75%);
          background-size: 400px 100%;
          animation: shimmer 2.5s linear infinite;
        }
        .font-Sans { font-family: 'DM Sans', sans-serif } 
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      {/* ── section ── */}
      <section className="font-jakarta relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f0fdf4] via-white to-white">
        {/* bg blobs */}
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 py-15 sm:py-20 lg:grid-cols-2 lg:gap-20 px-6 sm:px-10 md:px-12 lg:px-15 lg:py-20">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* top badge */}
            <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-1.5 text-[10px] sm:text-[12px] font-bold uppercase tracking-widest text-emerald-700 shadow-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Meta Official WhatsApp API Partner
            </span>

            {/* headline */}
            <h1 className="font-Sans mr:3 mb-6 font-extrabold leading-[1.08] text-slate-900 text-[28px] min-[347px]:text-[33px] min-[403px]:text-[38px] min-[460px]:text-[44px] sm:text-[50px] lg:text-[43px] min-[1047px]:text-[45px] xl:text-[48px]">
              WhatsApp CRM for
              <br />
              <span className="text-emerald-500">Every Business</span>
            </h1>

            {/* subtitle */}
            <p className="mb-6 max-w-[500px] text-[13px] min-[403px]:text-[14px] sm:text-[15px] md:text-md min-[1171px]:text-lg leading-relaxed text-slate-500">
              Automate leads, campaigns &amp; grow with Meta Official WhatsApp
              API. Built for Indian businesses — from textile to real estate.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 justify-center min-[377px]:justify-start items-center min-[377px]:items-start">
              <a
                href="#"
                className=" inline-flex items-center justify-center gap-2.5 rounded-2xl bg-emerald-500 px-0 min-[377px]:px-5 sm:px-6 py-2 sm:py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-300/50 transition-all hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-emerald-400/50 max-[377px]:w-full"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                Book Demo
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-0 min-[377px]:px-5 sm:px-6 py-2 sm:py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700 max-[377px]:w-full"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
                  <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                </svg>
                View Portfolio
              </a>
            </div>

            {/* trust avatars */}

            {/* ── STATS SECTION  ── */}
            <div className="mt-5 grid grid-cols-1 min-[377px]:grid-cols-3 gap-4 border-t border-slate-100 pt-5">
              {/* Happy Clients Box */}
              <div
                className="flex flex-col items-center min-[377px]:items-start p-5 rounded-2xl bg-white 
                  border border-slate-100 shadow-sm transition-all 
                  hover:shadow-md hover:border-emerald-100 group"
              >
                <span className="text-[24px] sm:text-[25px] font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  200+
                </span>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                  Happy Clients
                </span>
              </div>

              {/* Years Exp. Box */}
              <div
                className="flex flex-col items-center min-[377px]:items-start p-5 rounded-2xl bg-white 
                  border border-slate-100 shadow-sm transition-all 
                  hover:shadow-md hover:border-emerald-100 group"
              >
                <span className="text-[24px] sm:text-[25px] font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  8+
                </span>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                  Years Exp.
                </span>
              </div>

              {/* Industries Box */}
              <div
                className="flex flex-col items-center min-[377px]:items-start p-5 rounded-2xl bg-white 
                  border border-slate-100 shadow-sm transition-all 
                  hover:shadow-md hover:border-emerald-100 group"
              >
                <span className="text-[24px] sm:text-[25px] font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  5+
                </span>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                  Industries
                </span>
              </div>
            </div>
          </div>

          {/* ── RIGHT – Dashboard Mockup ── */}
          <div className="relative flex justify-center lg:justify-end">
            {/* floating top badge */}
            <FloatBadge className="float-1 -top-4 lg:-top-3 -left-2 sm:left-[5%] md:left-[12%]  min-[909px]:left-[18%] lg:-left-10 text-[11px] sm:text-xs">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[10px] text-white">
                ✓
              </span>
              Lead Captured
            </FloatBadge>

            {/* floating bottom badge */}
            <FloatBadge className="float-2 -bottom-4 -right-1 sm:right-[1%] md:right-[17%] lg:-right-10 text-[11px] sm:text-xs">
              🚀 Campaign Sent to 2,400
            </FloatBadge>

            {/* dashboard card */}
            <div className="w-full max-w-[480px] overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl shadow-emerald-100/60">
              {/* mac-style title bar */}
              <div className="flex items-center justify-between border-b border-slate-800  bg-slate-900 px-5 py-3.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-semibold tracking-wide text-slate-300">
                  CRMbot Dashboard
                </span>
              </div>

              <div className="p-5">
                {/* stat chips */}
                <div className="mb-5 grid grid-cols-3 gap-3">
                  {stats.map(({ label, value, format }) => (
                    <div
                      key={label}
                      className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-center"
                    >
                      <p className="font-Sans text-lg font-bold text-emerald-500">
                        {format(value)}
                      </p>
                      <p className="mt-0.5 text-[10px] font-medium text-slate-400">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* bar chart */}
                <div className="mb-5">
                  <p className="mb-3 text-xs font-semibold text-slate-500">
                    Leads This Week
                  </p>
                  <div className="flex h-16 items-end gap-2">
                    {barData.map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 overflow-hidden rounded-md"
                        style={{ height: `${h}%` }}
                      >
                        <div
                          className={`h-full w-full rounded-md ${i === 3 ? "bar-active" : "bg-emerald-100"}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* lead rows */}
                <div className="space-y-2.5">
                  {leads.map((lead) => (
                    <div
                      key={lead.name}
                      className="flex items-center justify-between rounded-xl border border-slate-100 bg-white px-3.5 py-2.5 transition-colors hover:border-emerald-200 hover:bg-emerald-50/40"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white ${lead.color}`}
                        >
                          {lead.initials}
                        </span>
                        <div>
                          <p className="text-xs font-semibold text-slate-800">
                            {lead.name}
                          </p>
                          <p className="text-[10px] text-slate-400">
                            {lead.phone}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${statusColor[lead.status]}`}
                      >
                        {lead.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full bg-[#00bc7d] py-2 overflow-hidden flex items-center">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap gap-12 w-max"
        >
          {duplicatedItems.map((item, i) => (
            <span
              key={i}
              className="text-white text-[12px] font-bold flex items-center gap-3"
            >
              <span className="opacity-50 text-sm">✦</span>
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </>
  );
}
