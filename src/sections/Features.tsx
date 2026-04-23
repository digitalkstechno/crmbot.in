"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";

// ── feature data ──────────────────────────────────────────────────────────────
const data = [
  {
    title: "Live Dashboard",
    desc: "Real-time view of leads, campaigns, conversion rates & team performance in one place.",
    icon: "📊",
    stat: "Live Updates",
    cards: [
      {
        icon: "🏠",
        label: "Away Message Automation",
        desc: "Automatically replies to customers when agents are unavailable or offline.",
      },
      {
        icon: "🔔",
        label: "Push Notifications",
        desc: "Instantly notify users about updates, messages, or campaign statuses.",
      },
      {
        icon: "📅",
        label: "Schedule Campaign",
        desc: "Plan and schedule message campaigns for a future date and time.",
      },
    ],
  },
  {
    title: "Campaign Management",
    desc: "Send bulk WhatsApp messages with rich media, schedule campaigns & track delivery.",
    icon: "📣",
    stat: "Bulk Sending",
    cards: [
      {
        icon: "📤",
        label: "Bulk WhatsApp Broadcast",
        desc: "Send thousands of messages instantly with high delivery rates.",
      },
      {
        icon: "📅",
        label: "Schedule Campaigns",
        desc: "Plan and schedule message campaigns for a future date and time.",
      },
      {
        icon: "📥",
        label: "Import and Broadcast",
        desc: "Import contact lists and immediately broadcast messages to all imported contacts.",
      },
    ],
  },
  {
    title: "Lead Management",
    desc: "Capture, assign, track & follow up on leads from multiple channels automatically.",
    icon: "🎯",
    stat: "Auto Assign",
    cards: [
      {
        icon: "🎯",
        label: "Auto Lead Capture",
        desc: "Automatically capture leads from WhatsApp, web forms and other channels.",
      },
      {
        icon: "🔄",
        label: "Smart Auto-Assign",
        desc: "Instantly assign leads to the right team member based on rules.",
      },
      {
        icon: "📌",
        label: "Follow-up Reminders",
        desc: "Set smart reminders so no lead ever falls through the cracks.",
      },
    ],
  },
  {
    title: "WhatsApp Automation",
    desc: "Auto-reply, drip sequences, chatbot flows & instant lead response powered by Meta API.",
    icon: "🤖",
    // stat: "Meta API",
    cards: [
      {
        icon: "🤖",
        label: "Chatbot Flows",
        desc: "Build no-code chatbot flows that handle queries 24/7 automatically.",
      },
      {
        icon: "💬",
        label: "Auto Reply",
        desc: "Instantly reply to incoming messages with smart trigger-based responses.",
      },
      {
        icon: "⏱️",
        label: "Drip Sequences",
        desc: "Send timed follow-up message sequences to nurture leads automatically.",
      },
    ],
  },
  {
    title: "Templates",
    desc: "Pre-approved WhatsApp message templates for every stage of the customer journey.",
    icon: "📄",
    stat: "Pre-approved",
    cards: [
      {
        icon: "✅",
        label: "Pre-approved Templates",
        desc: "Use Meta-verified templates that get delivered without any issues.",
      },
      {
        icon: "📄",
        label: "60+ Ready Templates",
        desc: "Choose from a library of templates for sales, support and marketing.",
      },
      {
        icon: "✏️",
        label: "Custom Templates",
        desc: "Create your own branded templates for any stage of the journey.",
      },
    ],
  },
  {
    title: "Reports & Analytics",
    desc: "Detailed reports on open rates, response time, revenue & team-level insights.",
    icon: "📈",
    stat: "Deep Insights",
    cards: [
      {
        icon: "📊",
        label: "Campaign Reports",
        desc: "Track open rates, clicks and delivery for every campaign you send.",
      },
      {
        icon: "💰",
        label: "Revenue Tracking",
        desc: "Connect deals to conversations and track revenue generated via WhatsApp.",
      },
      {
        icon: "🕐",
        label: "Response Time Analysis",
        desc: "Measure how fast your team responds and identify bottlenecks.",
      },
    ],
  },
];

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

export default function Features() {
  const [active, setActive] = useState(0);
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
              .font-Sans { font-family: 'DM Sans', sans-serif } 
              .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }`,
        }}
      />

      <section className="bg-[#ffff] py-20 px-6 sm:px-10 md:px-12 lg:px-15"  id="features">
        <div className="mx-auto max-w-6xl">
          {/* ── header ── */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-14 flex flex-col items-center text-center"
          >
            <span className="text-[12px] min-[403px]:text-[13px] sm:text-[14px] font-jakarta font-[600] tracking-[1.5px] text-[#00bc7d] uppercase mb-2 block ">
              Platform Features
            </span>
            <h2 className="text-[29px] min-[347px]:text-[31px] min-[403px]:text-[37px] sm:text-[39px] md:text-[43px] font-bold leading-[1.15] text-[#1a1a1a] mb-1 font-Sans tracking-tight">
              Everything You Need to <br />
              <span className="text-[#00bc7d]">Convert & Retain</span>
            </h2>
            <p className="text-[12px] min-[403px]:text-[14px] sm:text-[16px] text-[#6b7280] max-w-[520px] leading-relaxed font-jakarta">
              A complete growth stack — from first contact to closed deal, all
              powered by WhatsApp.
            </p>
          </motion.div>

          {/* ── grid ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-[25%_75%] gap-x-10 items-start"
          >
            {/* LEFT — Feature List */}
            <div className="w-[100%] order-1 lg:order-1">
              <div className="flex flex-row justify-center align-center flex-wrap gap-3 lg:hidden mb-6">
                {data.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    title={item.title}
                    className={`w-12 h-12 flex justify-center items-center rounded-2xl flex text-2xl border transition-all duration-200
                    ${
                      active === i
                        ? "bg-green-600 border-green-600 shadow-lg shadow-green-200 scale-110"
                        : "bg-gray-50 border-gray-100 hover:bg-white hover:border-green-200"
                    }`}
                  >
                    {item.icon}
                  </button>
                ))}
              </div>

              <div className="hidden lg:flex flex-col gap-3">
                {data.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`group ] text-left px-4 md:px-5 py-4 rounded-2xl transition-all duration-300 flex items-center gap-4 border
                    ${
                      active === i
                        ? "bg-white border-green-200 shadow-xl shadow-green-100/50 scale-[1.02]"
                        : "bg-gray-50/50 border-transparent hover:bg-white hover:border-green-100"
                    }`}
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0 font-Sans">
                      <span className="text-xl flex-shrink-0">{item.icon}</span>
                      <span
                        className={`font-semibold text-sm md:text-[15px] truncate transition-colors
                      ${active === i ? "text-gray-900" : "text-gray-500 group-hover:text-gray-800"}`}
                      >
                        {item.title}
                      </span>
                    </div>
                    <div
                      className={`w-1.5 h-8 rounded-full flex-shrink-0 transition-all
                    ${active === i ? "bg-green-500" : "bg-transparent"}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT — 3 Cards */}
            <div className="lg:sticky lg:top-28 order-1 lg:order-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Feature header */}
                  <div className="w-15 h-15 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center text-3xl border border-green-100 shadow-inner flex-shrink-0">
                    {data[active].icon}
                  </div>
                  <div className="mb-2 flex items-center gap-3">
                    <div>
                      <h3 className="text-lg pt-2 font-bold text-gray-900 leading-tight font-Sans">
                        {data[active].title}
                      </h3>
                      <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-5 font-jakarta">
                        {data[active].desc}
                      </p>
                    </div>
                  </div>

                  {/* 3 Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-5 w-full lg:w-[97%]">
                    {data[active].cards.map((card, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.07 }}
                        className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-green-100 transition-all duration-200 p-4"
                      >
                        {/* Top row: icon + badge */}
                        <div className="flex items-start justify-between mb-3 ">
                          <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center text-lg border border-green-100">
                            {card.icon}
                          </div>
                        </div>
                        {/* Title */}
                        <p className="text-base font-bold text-gray-800 leading-snug mb-1.5 font-Sans">
                          {card.label}
                        </p>
                        {/* Description */}
                        <p className="text-[13px] text-gray-400 leading-relaxed font-jakarta">
                          {card.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
