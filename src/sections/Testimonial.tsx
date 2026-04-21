"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion, Variants } from "framer-motion";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Testimonial = () => {
  const swiperRef = useRef(null);

  const testimonials = [
    {
      name: "Manish Kothari",
      role: "Owner — Kothari Textiles, Surat",
      text: "CRMbot transformed how we manage fabric buyers. WhatsApp campaigns have a 90%+ open rate — no other tool comes close.",
      initials: "MK",
      color: "bg-[#22c55e]",
    },
    {
      name: "Rakesh Shah",
      role: "Director — Shreeji Developers",
      text: "As a builder, tracking site visits and sending automated flat updates on WhatsApp has increased our bookings by 40%.",
      initials: "RS",
      color: "bg-[#3b82f6]",
    },
    {
      name: "Payal Desai",
      role: "CA — Desai & Associates",
      text: "Our CA firm uses CRMbot to send tax reminders and collect documents. Client satisfaction has improved significantly.",
      initials: "PD",
      color: "bg-[#a855f7]",
    },
    {
      name: "Suresh Patel",
      role: "CEO — Patel Industries",
      text: "Excellent tool for B2B communication. The automation flows are very easy to set up and highly effective.",
      initials: "SP",
      color: "bg-[#f59e0b]",
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      className="bg-[#f9fafb] py-20 px-6 sm:px-10 md:px-12 lg:px-15  font-jakarta"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-14 flex flex-col items-center text-center"
          id="features"
        >
          <span className="text-[12px] min-[403px]:text-[13px] sm:text-[14px] font-jakarta font-[600] tracking-[1.5px] text-[#00bc7d] uppercase mb-2 block ">
            What Clients Say
          </span>
          <h2 className="text-[30px] min-[347px]:text-[32px] min-[403px]:text-[38px] sm:text-[40px] md:text-[43px] font-bold leading-[1.15] text-[#1a1a1a] mb-1 font-Sans tracking-tight">
            200+ Businesses Trust CRMbot.in
          </h2>
          <p className="text-[12px] min-[403px]:text-[14px] sm:text-[16px] text-[#6b7280] max-w-[520px] leading-relaxed font-jakarta">
            A complete growth stack — from first contact to closed deal, all
            powered by WhatsApp.
          </p>
        </motion.div>

        {/* Slider Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative group"
        >
          <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            className="pb-12 swiper-h-full"
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="bg-white border border-gray-100 p-8 rounded-[24px] shadow-sm h-full flex flex-col justify-between "
                >
                  <div>
                    {/* Stars */}
                    <div className="flex text-[#22c55e] gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-xl">
                          ★
                        </span>
                      ))}
                    </div>
                    {/* Feedback Text */}
                    <p className="text-[#4b5563] text-[14px] leading-relaxed">
                      "{item.text}"
                    </p>
                  </div>

                  {/* Profile Section */}
                  <div className="flex items-center gap-4 mt-8">
                    <div
                      className={`${item.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm`}
                    >
                      {item.initials}
                    </div>
                    <div>
                      <h4 className="text-[#111827] font-bold text-[14px]">
                        {item.name}
                      </h4>
                      <p className="text-[#6b7280] text-[12px]">{item.role}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 hover:border-green-400 transition-all shadow-sm text-emerald-500"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 hover:border-green-400 transition-all shadow-sm text-emerald-500"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
