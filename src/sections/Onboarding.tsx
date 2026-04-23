"use client";
import React, { useRef } from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";

const Onboarding = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });
  // const maxProgress = useRef(0);

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

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

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div suppressHydrationWarning className="relative">
      <style
        dangerouslySetInnerHTML={{
          __html: `
              .font-Sans { font-family: 'DM Sans', sans-serif } 
              .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }`,
        }}
      />
      <section
        ref={sectionRef}
        className="bg-[#eff9f2] py-20 px-6 sm:px-10 md:px-12 lg:px-15 flex flex-col justify-center"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-14 flex flex-col items-center text-center"
          >
            <span className="text-[12px] min-[403px]:text-[13px] sm:text-[14px] font-jakarta font-[600] tracking-[1.5px] text-[#00bc7d] uppercase mb-2 block ">
              Simple Onboarding
            </span>
            <h2 className="text-[29px] min-[347px]:text-[31px] min-[403px]:text-[37px] sm:text-[39px] md:text-[43px] font-bold leading-[1.15] text-[#1a1a1a] mb-1 font-Sans tracking-tight">
              Up & Running in <span className="text-[#00bc7d]">4 Steps</span>
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
            {/* Connecting Line */}
            <motion.div
              style={{ scaleX: lineScale, originX: 0 }}
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
                <h3 className="text-[#111827] font-Sans text-lg font-[500] mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#6b7280] font-jakarta text-center leading-relaxed md:text-[14px] lg:text-[15px] md:text-base px-4">
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
