"use client";
import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What is CRMbot and how does it work?",
    a: "CRMbot is a WhatsApp CRM platform powered by Meta's Official WhatsApp Business API. It helps you manage leads, send bulk campaigns, automate replies, and track performance — all from one dashboard.",
  },
  {
    q: "Is CRMbot an official Meta WhatsApp partner?",
    a: "Yes! CRMbot is an official Meta WhatsApp Business Solution Provider (BSP). This means your messages are sent through verified, secure channels with high deliverability.",
  },
  {
    q: "Can I try CRMbot before purchasing?",
    a: "Absolutely. Every plan comes with a 14-day free trial — no credit card required. You get full access to all features during the trial period.",
  },
  {
    q: "How many WhatsApp numbers can I connect?",
    a: "Starter plan supports 1 number, Growth plan supports 3 numbers, and Enterprise plan supports unlimited WhatsApp numbers for your team.",
  },
  {
    q: "Can I send bulk messages to my customers?",
    a: "Yes! You can send bulk WhatsApp campaigns to your opted-in contacts. You can also import contacts via CSV and launch campaigns instantly.",
  },
  {
    q: "Is my customer data safe with CRMbot?",
    a: "100%. Your data is stored securely and never shared with third parties. CRMbot is fully GDPR-compliant and follows WhatsApp's data privacy policies.",
  },
  {
    q: "Do I need technical knowledge to use CRMbot?",
    a: "Not at all. CRMbot is built for non-technical users. We also provide a live onboarding session and team training so you're ready from day one.",
  },
  {
    q: "What industries is CRMbot best suited for?",
    a: "CRMbot is used across textiles, real estate, finance, CA firms, manufacturing, retail, and more. If your business communicates on WhatsApp, CRMbot is for you.",
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

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="bg-gray-50 py-18 px-6 sm:px-10 md:px-12 lg:px-15"
      id="faq"
    >
      <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-14 flex flex-col items-center text-center"
        >
          <span className="text-[12px] min-[403px]:text-[13px] sm:text-[14px] font-jakarta font-[600] tracking-[1.5px] text-[#00bc7d] uppercase mb-2 block ">
            Got Questions?
          </span>
          <h2 className="text-[29px] min-[347px]:text-[31px] min-[403px]:text-[37px] sm:text-[39px] md:text-[43px] font-bold leading-[1.15] text-[#1a1a1a] mb-1 font-Sans tracking-tight">
            Frequently Asked{" "}
            <span className="text-[#00bc7d]">Questions</span>
          </h2>
          <p className="text-[12px] min-[403px]:text-[14px] sm:text-[16px] text-[#6b7280] max-w-[520px] leading-relaxed font-jakarta">
            Everything you need to know about CRMbot.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${open === i ? "border-green-200 shadow-md shadow-green-50" : "border-gray-100 shadow-sm"}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              >
                <span
                  className={`font-semibold text-sm md:text-base leading-snug ${open === i ? "text-green-700" : "text-gray-800"}`}
                >
                  {faq.q}
                </span>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${open === i ? "bg-green-600 text-white rotate-45" : "bg-gray-100 text-gray-500"}`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-6 pb-5">
                      <div className="h-px bg-green-50 mb-4" />
                      <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm"
        >
          <p className="text-gray-600 text-sm mb-3 font-medium">
            Still have questions? We're happy to help.
          </p>
          <a
            href="https://wa.me/918866779008"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00bc7d] hover:bg-green-500 text-white font-bold text-sm px-6 py-3 rounded-2xl transition-all shadow-lg shadow-green-100"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};
