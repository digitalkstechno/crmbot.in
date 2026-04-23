"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const Comparison = () => {
  const withoutCRM = [
    {
      icon: "👤",
      title: "Leads get lost",
      desc: "No proper tracking of inquiries and leads.",
    },
    {
      icon: "✉️",
      title: "Manual follow-ups",
      desc: "Time-consuming and easy to forget.",
    },
    {
      icon: "📊",
      title: "No real-time insights",
      desc: "Decisions are made without data.",
    },
    {
      icon: "⏰",
      title: "Slow response time",
      desc: "Leads lose interest while you respond late.",
    },
    {
      icon: "📉",
      title: "Low conversion rate",
      desc: "Opportunities are missed, revenue is lost.",
    },
  ];

  const withCRM = [
    {
      icon: "👤",
      title: "Auto lead capture",
      desc: "Every lead is captured and organized.",
    },
    {
      icon: "📨",
      title: "Instant follow-ups",
      desc: "Automated follow-ups at the right time.",
    },
    {
      icon: "📈",
      title: "Real-time tracking",
      desc: "Know your business with live insights.",
    },
    {
      icon: "⚡",
      title: "Faster response",
      desc: "Respond instantly and convert more leads.",
    },
    {
      icon: "📈",
      title: "Higher conversion rate",
      desc: "Close more deals and grow your revenue.",
    },
  ];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const itemVariantsRight: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .font-Sans { font-family: 'DM Sans', sans-serif }
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
      `,
        }}
      />
      <section className="bg-white py-18 px-6 sm:px-10 md:px-12 lg:px-15 font-jakarta">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-14 flex flex-col items-center text-center"
          >
            <span className="text-[12px] min-[403px]:text-[13px] sm:text-[14px] font-jakarta font-[600] tracking-[1.5px] text-[#00bc7d] uppercase mb-2 block ">
              Why Choose CRMbot.in
            </span>
            <h2 className="text-[29px] min-[347px]:text-[31px] min-[403px]:text-[37px] sm:text-[39px] md:text-[43px] font-bold leading-[1.15] text-[#1a1a1a] mb-1 font-Sans tracking-tight">
              From Chaos to <span className="text-[#00bc7d]">Clarity</span>
            </h2>
            <p className="text-[12px] min-[403px]:text-[14px] sm:text-[16px] text-[#6b7280] max-w-[520px] leading-relaxed font-jakarta">
              See the difference a smart CRM makes for your business.
            </p>
          </motion.div>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 lg:gap-6 items-stretch">
            {/* Without CRM */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="bg-[#fff5f5] border border-red-100 rounded-2xl p-3 min-[350px]:p-6"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-red-500 text-sm font-bold">✕</span>
                </div>
                <div>
                  <h3 className="text-[#1a1a1a] font-bold text-[16px] font-Sans">
                    Without CRM
                  </h3>
                  <p className="text-[#9ca3af] text-[12px] font-jakarta h-6">
                    Things are messy and unorganized
                  </p>
                </div>
              </div>

              {/* Items */}
              <div className="flex flex-col gap-3">
                {withoutCRM.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white border border-red-50 rounded-xl px-4 py-3 flex items-start gap-3"
                  >
                    <span className="text-[18px] mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-[#1a1a1a] font-[600] text-[13px] font-Sans">
                        {item.title}
                      </p>
                      <p className="text-[#9ca3af] text-[12px] font-jakarta">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden md:flex items-center justify-center self-center"
            >
              <div className="w-10 h-10 rounded-full bg-[#e6faf3] border border-[#00bc7d] flex items-center justify-center">
                <span className="text-[#00bc7d] text-lg pb-1">→</span>
              </div>
            </motion.div>

            {/* With CRMbot */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="bg-[#f0fdf4] border border-green-100 rounded-2xl p-3 min-[350px]:p-6"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-[#00bc7d] flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-[#1a1a1a] font-bold text-[16px] font-Sans">
                    With <span className="text-[#00bc7d]">CRMbot.in</span>
                  </h3>
                  <p className="text-[#9ca3af] text-[12px] font-jakarta h-6">
                    Everything is organized and automated
                  </p>
                </div>
              </div>

              {/* Items */}
              <div className="flex flex-col gap-3">
                {withCRM.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariantsRight}
                    className="bg-white border border-green-50 rounded-xl px-4 py-3 flex items-start gap-3"
                  >
                    <span className="text-[18px] mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-[#1a1a1a] font-[600] text-[13px] font-Sans">
                        {item.title}
                      </p>
                      <p className="text-[#9ca3af] text-[12px] font-jakarta">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Comparison;
