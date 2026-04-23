import React from "react";
import { motion, Variants } from "framer-motion";

const Portfolio = () => {
  const projects = [
    {
      title: "Shreeji Developers CRM",
      desc: "Lead pipeline + site visit automation for 3 projects",
      tags: ["Builder CRM", "WhatsApp"],
      bgColor: "bg-[#e8fdf1]", // Greenish
      icon: "🏗️",
    },
    {
      title: "Kothari Fabrics CRM",
      desc: "Seasonal campaigns to 10,000+ buyer contacts",
      tags: ["Textile CRM", "Campaigns"],
      bgColor: "bg-[#fff7ed]", // Orangish
      icon: "🧵",
    },
    {
      title: "Mehta & Co. CA CRM",
      desc: "Document collection & deadline reminders automated",
      tags: ["CA CRM", "Automation"],
      bgColor: "bg-[#eff6ff]", // Bluish
      icon: "📊",
    },
    {
      title: "Patel Industries CRM",
      desc: "Dealer network management & B2B communication",
      tags: ["Manufacturer CRM"],
      bgColor: "bg-[#fdf2f8]", // Pinkish
      icon: "🏭",
    },
    {
      title: "ShopEasy WhatsApp Store",
      desc: "WhatsApp catalog + order tracking for online seller",
      tags: ["Seller CRM", "Catalog"],
      bgColor: "bg-[#ecfeff]", // Cyan
      icon: "🛒",
    },
    {
      title: "Agarwal Group Multi-CRM",
      desc: "Unified CRM across 4 verticals with custom reporting",
      tags: ["Custom CRM", "Reports"],
      bgColor: "bg-[#f5f3ff]", // Purplish
      icon: "📈",
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

  return (
    <section
      className="bg-white py-18 px-6 sm:px-10 md:px-12 lg:px-15 font-jakarta"
      id="portfolio"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-14 flex flex-col items-center text-center"
        >
          <span className="text-[12px] min-[403px]:text-[13px] sm:text-[14px] font-jakarta font-[600] tracking-[1.5px] text-[#00bc7d] uppercase mb-2 block ">
            Our Work
          </span>
          <h2 className="text-[30px] min-[347px]:text-[32px] min-[403px]:text-[38px] sm:text-[40px] md:text-[45px] font-bold leading-[1.15] text-[#1a1a1a] mb-1 font-Sans tracking-tight">
            Real Project {" "}
            <span className="text-[#00bc7d]">Real Result</span>
          </h2>
          <p className="text-[12px] min-[403px]:text-[14px] sm:text-[16px] text-[#6b7280] max-w-[520px] leading-relaxed font-jakarta">
            A complete growth stack — from first contact to closed deal, all
            powered by WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Top Colored Section */}
              <div
                className={`${project.bgColor} h-[220px] flex items-center justify-center relative transition-all duration-500`}
              >
                <span className="text-5xl group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </span>

                {/* View Case Study Overlay */}
                <div className="absolute inset-0 bg-[#c5efd4] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <button className="text-black font-bold text-lg flex items-center gap-2">
                    → View Case Study
                  </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 lg:p-8">
                {/* Tags */}
                <div className="flex flex-row min-[768px]:flex-col min-[841px]:flex-row items-start gap-2 mb-4">
                  {project.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="bg-[#f0fdf4] text-[#22c55e] px-3 py-1 rounded-full text-[12px] font-bold border border-green-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Desc */}
                <h3 className="text-[#111827] text-[20px] font-bold mb-2 font-Sans">
                  {project.title}
                </h3>
                <p className="text-[#6b7280] text-[14px] leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
