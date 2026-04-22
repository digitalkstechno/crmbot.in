"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
} from "lucide-react";

// ─── Animation Variants ───
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

export default function Industries() {
  const industries = [
    {
      icon: "🧵",
      tag: "Textile CRM",
      desc: "Manage fabric orders, buyer follow-ups & seasonal campaigns with ease.",
    },
    {
      icon: "🏗️",
      tag: "Builder CRM",
      desc: "Track site visits, booking pipelines & send automated updates to homebuyers.",
    },
    {
      icon: "⚖️",
      tag: "CA CRM",
      desc: "Automate client reminders, document collection & tax deadline alerts.",
    },
    {
      icon: "🏭",
      tag: "Manufacturer CRM",
      desc: "Retain your B2B customers, manage bulk orders & send bulk follow-up messages easily.",
    },
    {
      icon: "🛒",
      tag: "Seller CRM",
      desc: "Boost sales with WhatsApp catalogs, order tracking & abandoned cart recovery.",
    },
    {
      icon: "🤝",
      tag: "Custom CRM",
      desc: "Not listed? We build fully custom CRM solutions for your unique workflow.",
    },
  ];

  return (
    <div suppressHydrationWarning  className="relative">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        .font-Sans { font-family: 'DM Sans', sans-serif } 
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
      `,
        }}
      />

      <section
        className="py-24 px-6 sm:px-10 md:px-12 lg:px-15 bg-[#f9fafb] border-y border-slate-200"
        id="industries"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-14 flex flex-col items-center text-center"
          >
            <span className="text-[12px] min-[403px]:text-[13px] sm:text-[14px] font-jakarta font-[600] tracking-[1.5px] text-[#00bc7d] uppercase mb-2 block ">
              Industries We Serve
            </span>
            <h2 className="text-[30px] min-[347px]:text-[32px] min-[403px]:text-[38px] sm:text-[40px] md:text-[45px] font-bold leading-[1.15] text-[#1a1a1a] mb-1  font-Sans tracking-tight">
              CRM Built for {" "}
              <span className="text-[#00bc7d]">Your Business</span>
            </h2>
              
            <p className="text-[12px] min-[403px]:text-[14px] sm:text-[16px] text-[#6b7280] max-w-[520px] leading-relaxed font-jakarta">
              Specialised CRM solutions tailored for each sector with
              industry-specific workflows.
            </p>
          </motion.div>

          {/* Industry Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {industries.map((item, index) => (
              <div key={index} className="group relative">
                <div className="h-full p-8 bg-white border border-slate-200 rounded-[24px] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-black/5 group-hover:border-[#22c55e] cursor-default flex flex-col justify-between">
                  <div>
                    {/* Icon Container */}
                    <div className="w-14 h-14 bg-[#f3f4f6] text-slate-600 text-3xl rounded-[16px] flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#dcfce7] group-hover:text-[#00bc7d]">
                      {item.icon}
                    </div>

                    {/* Tag and Title */}
                    <div className="mb-3">
                      <span className="text-[12px] font-bold text-[#00bc7d] uppercase tracking-wider font-jakarta block mb-1">
                        {item.tag}
                      </span>
                    </div>

                    <p className="text-[14px] text-[#6b7280] leading-[1.6] font-jakarta mb-3">
                      {item.desc}
                    </p>
                  </div>

                  {/* Static Explore Text */}
                  <div className="flex items-center gap-2 text-[14px] font-bold text-[#00bc7d] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 font-jakarta">
                    Explore Solutions <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
