"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const Onboarding = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description:
        "We understand your business, industry, and automation goals in a 30-minute call.",
    },
    {
      number: "02",
      title: "CRM Setup",
      description:
        "We configure your custom CRM, WhatsApp number & automation flows within 48 hours.",
    },
    {
      number: "03",
      title: "Team Training",
      description:
        "Live walkthrough with your team so everyone is comfortable before launch day.",
    },
    {
      number: "04",
      title: "Go Live 🚀",
      description:
        "Launch your first campaign and start converting leads through WhatsApp instantly.",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div suppressHydrationWarning>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        .font-Sans { font-family: 'DM Sans', sans-serif } 
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
      `,
        }}
      />
      <section className="bg-[#eff9f2] py-20 px-6 sm:px-10 md:px-12 lg:px-15 min-h-screen flex flex-col justify-center">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 flex flex-col items-center text-center"
          >
            {/* Subheading */}
            <span className="text-[12px] min-[403px]:text-[13px] sm:text-[14px] font-jakarta font-[600] tracking-[1.5px] text-[#00bc7d] uppercase mb-2 block">
              Simple Onboarding
            </span>
            <h2 className="text-[30px] min-[347px]:text-[32px] min-[403px]:text-[38px] sm:text-[40px] md:text-[45px] font-bold leading-[1.15] text-[#1a1a1a] mb-1 font-Sans tracking-tight">
              Up & Running in 4 Steps
            </h2>
            <p className="text-[12px] min-[403px]:text-[14px] sm:text-[16px] text-[#6b7280] max-w-[520px] leading-relaxed font-jakarta">
              From signup to your first automated campaign in under a week
            </p>
          </motion.div>

          {/* Steps Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative grid grid-cols-1 md:grid-cols-4 gap-5"
          >
            {/* Connecting Line (Desktop Only) */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ originX: 0 }}
              className="hidden md:block absolute top-8 left-[12%] right-[12%] h-[2px] bg-[#86efac] -z-0" 
            />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative z-10 flex flex-col items-center"
              >
                {/* Circle Number */}
                <div className="w-16 h-16 rounded-full border-2 border-[#22c55e] bg-white flex items-center justify-center mb-3 shadow-sm">
                  <span className="text-[#22c55e] text-2xl font-bold">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[#111827] text-lg font-[500] mb-2">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-[#6b7280] text-center leading-relaxed md:text-[14px] lg:text-[15px] md:text-base px-4">
                  {step.description}
                </p>
                        </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Onboarding;
