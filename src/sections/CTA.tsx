"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function CTA() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        .font-dm  { font-family: 'DM Sans', sans-serif; }
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      <section
        className="font-dm relative overflow-hidden py-22 px-6 sm:px-10 md:px-12 lg:px-15 text-center"
        style={{
          background:
            "radial-gradient(ellipse at 60% 50%, #0d4a2f 0%, #071a10 55%, #030d08 100%)",
        }}
      >
        {/* subtle radial glow top-left */}
        <div
          className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #00bc7d 0%, transparent 70%)",
          }}
        />
        {/* subtle radial glow bottom-right */}
        <div
          className="pointer-events-none absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #00bc7d 0%, transparent 70%)",
          }}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="relative z-10 mx-auto max-w-3xl"
        >
          {/* tag */}
          <span className="text-[12px] min-[403px]:text-[13px] sm:text-[14px] font-jakarta font-[600] tracking-[1.5px] text-[#00bc7d] uppercase mb-2 block">
            Live Demo
          </span>

          {/* heading */}
          <h2 className="text-[30px] min-[347px]:text-[32px] min-[403px]:text-[38px] sm:text-[40px] md:text-[45px] font-bold leading-[1.15] text-[#fff] mb-1 font-Sans tracking-tight">
            See Live <span className="text-[#00bc7d]">CRM</span> in Action
          </h2>

          {/* subtext */}
          <p className="text-[12px] min-[403px]:text-[14px] sm:text-[16px] font-jakarta mx-auto mb-10 max-w-xl text-base leading-relaxed text-slate-400">
            Get a personalized walkthrough of how CRMbot.in works for your exact
            business.
          </p>

          {/* CTA button */}
          <Link
            href="#ContactForm"
            className="font-jakarta inline-flex items-center gap-2.5 rounded-full bg-[#00bc7d] px-6 sm:px-7 py-2.5 sm:py-3 text-sm font-bold text-white shadow-lg shadow-[#00bc7d]/25 transition-all hover:-translate-y-0.5 hover:bg-green-500 hover:shadow-[#00bc7d]/40"
          >
            {/* calendar icon */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
            </svg>
            Book Free Demo
          </Link>
        </motion.div>
      </section>
    </>
  );
}
