import React from "react";
import { motion, Variants } from "framer-motion";

const Integration = () => {
  const tools = [
    { name: "WhatsApp Business", icon: "💚" },
    { name: "Google Sheets", icon: "📊" },
    { name: "Gmail", icon: "📧" },
    { name: "Shopify", icon: "🛒" },
    { name: "WooCommerce", icon: "📦" },
    { name: "Tally", icon: "📋" },
    { name: "Zapier", icon: "🔗" },
    { name: "Facebook Ads", icon: "📱" },
    { name: "Any Website", icon: "🌐" },
  ];

  // ─── Animation Variants ───
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 15 },
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
    <section
      className=" py-20 px-6 sm:px-10 md:px-12 lg:px-15 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 60% 50%, #0d4a2f 0%, #071a10 55%, #030d08 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-14 flex flex-col items-center text-center"
          id="features"
        >
          <span className="text-[12px] min-[403px]:text-[13px] sm:text-[14px] font-jakarta font-[600] tracking-[1.5px] text-[#00bc7d] uppercase mb-2 block ">
            Connects with your stack
          </span>
          <h2 className="text-[30px] min-[347px]:text-[32px] min-[403px]:text-[38px] sm:text-[40px] md:text-[45px] font-bold leading-[1.15] text-[#ffff] mb-1 font-Sans tracking-tight">
            Works with Tools You Already Use
          </h2>
          <p className="text-[12px] min-[403px]:text-[14px] sm:text-[16px] text-[#bec3cd] max-w-[520px] leading-relaxed font-jakarta">
            Seamlessly connect CRMbot with your existing business software
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-x-4 gap-y-5 max-w-[1100px] mx-auto"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#f0fdf4",
                borderColor: "#22c55e",
              }}
              className="flex items-center gap-3 bg-white border border-gray-100 rounded-full px-5 py-2.5 shadow-sm hover:border-green-300 transition-all"
            >
              <span className="text-lg">{tool.icon}</span>
              <span className="text-[#111827] font-jakarta font-semibold text-[14px] whitespace-nowrap">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Integration;
