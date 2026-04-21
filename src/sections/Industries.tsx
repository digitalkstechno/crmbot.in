"use client";

import React from "react";
import {
  Scissors,
  Building2,
  Calculator,
  Factory,
  ShoppingBag,
  Settings,
  ArrowRight,
} from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: <Scissors className="w-6 h-6" />,
      tag: "Textile",
      desc: "Manage leads, follow-ups & dispatch messages to fabric & apparel wholesalers automatically.",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      tag: "Real Estate",
      desc: "Track property enquiries & send automated updates to customers across all project stages.",
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      tag: "Finance",
      desc: "Automate client reminders, document collection & compliance follow-ups for CA firms.",
    },
    {
      icon: <Factory className="w-6 h-6" />,
      tag: "SME",
      desc: "Retain your B2B customers, manage bulk orders & send bulk follow-up messages easily.",
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      tag: "Retail",
      desc: "Sales reps can view their assigned pipeline, track stage changes & close deals faster.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      tag: "Custom",
      desc: "Tell us your process & we'll build a custom CRM solution around your unique workflow.",
    },
  ];

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

      <section className="py-24 px-6 sm:px-10 md:px-12 lg:px-15 bg-[#f9fafb] border-y border-slate-200" id="industries">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-14 flex flex-col items-center text-center">
            <span className="text-[12px] min-[403px]:text-[13px] sm:text-[14px] font-jakarta font-[600] tracking-[1.5px] text-[#00bc7d] uppercase mb-2 block ">
              Industries We Serve
            </span>
            <h2 className="text-[30px] min-[347px]:text-[32px] min-[403px]:text-[38px] sm:text-[40px] md:text-[45px] font-bold leading-[1.15] text-[#1a1a1a] mb-1 font-Sans tracking-tight">
              CRM Built for Your Business
            </h2>
            <p className="text-[12px] min-[403px]:text-[14px] sm:text-[16px] text-[#6b7280] max-w-[520px] leading-relaxed font-jakarta">
              Specialised CRM solutions tailored for each sector with
              industry-specific workflows.
            </p>
          </div>

          {/* Industry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((item, index) => (
              <div key={index} className="group relative">
                <div className="h-full p-8 bg-white border border-slate-200 rounded-[24px] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-black/5 group-hover:border-[#22c55e] cursor-default flex flex-col justify-between">
                  <div>
                    {/* Icon Container */}
                    <div className="w-12 h-12 bg-[#f3f4f6] text-slate-600 rounded-[16px] flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#dcfce7] group-hover:text-[#00bc7d]">
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
          </div>
        </div>
      </section>
    </div>
  );
}
