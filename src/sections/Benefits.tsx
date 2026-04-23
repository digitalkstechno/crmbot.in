"use client";

import { motion, Variants } from "framer-motion";

const benefits = [
  {
    icon: "📊",
    title: "Increased Efficiency",
    desc: "Automate repetitive tasks like follow-ups and replies — your team focuses on closing deals.",
    titleAbove: false,
  },
  {
    icon: "🤝",
    title: "Customer Engagement",
    desc: "Send personalized WhatsApp messages that feel human — build relationships at scale.",
    titleAbove: true,
  },
  {
    icon: "📲",
    title: "Direct Reach",
    desc: "98% open rate on WhatsApp — your messages are always seen, unlike emails.",
    titleAbove: false,
  },
  {
    icon: "💰",
    title: "Cost & Time Savings",
    desc: "One CRMbot replaces multiple tools — save hours daily and reduce operational costs.",
    titleAbove: true,
  },
];

const Benefits = () => {
  // SVG dimensions
  const W = 1000;
  const H = 320;
  const midY = 150; 
  const r = 38;
  const arcR = 46;
  const gap = 40;
  const xs = [220, 400, 600, 790];

  let d = `M 30 ${midY}`;
  benefits.forEach((item, i) => {
    const cx = xs[i];
    const sweep = item.titleAbove ? 0 : 1;
    d += ` L ${cx - arcR} ${midY}`;
    d += ` A ${arcR} ${arcR} 0 0 ${sweep} ${cx + arcR} ${midY}`;
  });
  d += ` L ${W - 30} ${midY}`;

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white py-20 px-4 sm:px-10" id="Benefits">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-14 flex flex-col items-center text-center"
        >
          <span className="text-[12px] min-[403px]:text-[13px] sm:text-[14px] font-jakarta font-[600] tracking-[1.5px] text-[#00bc7d] uppercase mb-2 block ">
            Increase Sales
          </span>
          <h2 className="text-[29px] min-[347px]:text-[31px] min-[403px]:text-[37px] sm:text-[39px] md:text-[43px] font-bold leading-[1.15] text-[#1a1a1a] mb-1 font-Sans tracking-tight">
            Benefits of Using<br />
            <span className="text-[#00bc7d]">WhatsApp CRM Software</span>
          </h2>
          <p className="text-[12px] min-[403px]:text-[14px] sm:text-[16px] text-[#6b7280] max-w-[520px] leading-relaxed font-jakarta">
            Convert more leads with fast Responses and smart Automation
          </p>
        </motion.div>

        {/* ── Desktop: Full SVG Timeline ── */}
        <div className="hidden md:block w-full overflow-hidden">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="w-full"
            style={{ height: "auto", overflow: "visible" }}
          >
            {/* Gray base path */}
            <path d={d} fill="none" stroke="#d1d5db" strokeWidth="1.8" />

            {/* Animated green path */}
            <motion.path
              d={d}
              fill="none"
              stroke="#22c55e"
              strokeWidth="1.8"
              strokeDasharray="3000"
              strokeDashoffset={3000}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
            />

            {/* Left black dot */}
            <circle cx="30" cy={midY} r="7" fill="#374151" />
            {/* Right black dot */}
            <circle cx={W - 30} cy={midY} r="7" fill="#374151" />

            {/* Circles + labels inside SVG */}
            {benefits.map((item, i) => {
              const cx = xs[i];
              const cy = item.titleAbove ? midY - r + gap : midY + r - gap;
              let titleY, descY;

              if (item.titleAbove) {
                titleY = cy - r - 27;
                descY = cy - r - 90;
              } else {
                titleY = cy + r + 10;
                descY = cy + r + 33;
              }

              return (
                <motion.g
                  key={i}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.18 + 0.6 }}
                  style={{ transformOrigin: `${cx}px ${cy}px` }}
                >
                  <circle cx={cx} cy={cy} r={r} fill="#8ad8a2" />

                  {/* Icon */}
                  <foreignObject
                    x={cx - r + 8}
                    y={cy - r + 8}
                    width={(r - 8) * 2}
                    height={(r - 8) * 2}
                  >
                    <div className="flex items-center justify-center w-full h-full text-[26px]">
                      {item.icon}
                    </div>
                  </foreignObject>

                  {/* Title */}
                  <foreignObject x={cx - 80} y={titleY} width="160" height="40">
                    <div className="text-center text-[13px] font-bold text-gray-900 leading-tight">
                      {item.title}
                    </div>
                  </foreignObject>

                  {/* Description */}
                  <foreignObject x={cx - 85} y={descY} width="170" height="80">
                    <div className="text-center text-[11px] text-gray-500 leading-relaxed px-2">
                      {item.desc}
                    </div>
                  </foreignObject>
                </motion.g>
              );
            })}
          </svg>
        </div>

        {/* ── Mobile: Vertical Timeline ── */}
        <div className="md:hidden relative pl-12">
          <div className="absolute left-[20px] top-2 bottom-2 w-[1.5px] bg-gray-200" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="absolute left-[20px] top-2 bottom-2 w-[1.5px] bg-green-400 origin-top"
          />
          <div className="space-y-10">
            {benefits.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex items-start pl-3"
              >
                <div className="absolute -left-12 w-[44px] h-[44px] rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <div className="w-[100%] h-[45px] rounded-full bg-[#8ad8a2] flex items-center justify-center text-lg">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-[14px] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-[12px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
