import React from "react";

const Footer = () => {
  return (
    <footer className="pt-16 px-1 sm:px-4 md:px-8 lg:px-10 pb-8 border-t border-gray-100 bg-[#eff9f2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-x-[48px] gap-y-8  md:gap-10 lg:gap-4 mb-12">
          {/* 1. Brand Section */}
          <div className="space-y-6">
            <div className="space-y-6">
              <div className="inline-block rounded-xl">
                <img
                  src="/footer-logo.png"
                  alt="CRMbot.in"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-gray-500 text-[14px] leading-relaxed w-full sm:max-w-xs">
              WhatsApp CRM powered by Meta Official API. Trusted by 200+
              businesses across textile, real estate, manufacturing & more in
              India.
            </p>
          </div>

          {/* 2. Product Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Product</h4>
            <ul className="space-y-4 text-gray-500 text-[14px]">
              <li className="hover:text-green-600 cursor-pointer transition">
                Dashboard
              </li>
              <li className="hover:text-green-600 cursor-pointer transition">
                Campaigns
              </li>
              <li className="hover:text-green-600 cursor-pointer transition">
                Lead Management
              </li>
              <li className="hover:text-green-600 cursor-pointer transition">
                Automation
              </li>
              <li className="hover:text-green-600 cursor-pointer transition">
                Reports
              </li>
            </ul>
          </div>

          {/* 3. Industries Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Industries</h4>
            <ul className="space-y-4 text-gray-500 text-[14px]">
              <li className="hover:text-green-600 cursor-pointer transition">
                <a href="#industries">Textile CRM</a>
              </li>
              <li className="hover:text-green-600 cursor-pointer transition">
                <a href="#industries">Builder CRM</a>
              </li>
              <li className="hover:text-green-600 cursor-pointer transition">
                <a href="#industries">CA CRM</a>
              </li>
              <li className="hover:text-green-600 cursor-pointer transition">
                <a href="#industries">Manufacturer CRM</a>
              </li>
              <li className="hover:text-green-600 cursor-pointer transition">
                <a href="#industries">Seller CRM</a>
              </li>
            </ul>
          </div>

          {/* 4. Company Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4 text-gray-500 text-[14px]">
              <li className="hover:text-green-600 cursor-pointer transition">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="hover:text-green-600 cursor-pointer transition">
                <a href="#testimonials">Testimonials</a>
              </li>
              <li className="hover:text-green-600 cursor-pointer transition">
                <a href="#contact">Contact</a>
              </li>
              <li className="hover:text-green-600 cursor-pointer transition">
                Book Demo
              </li>
              <li className="hover:text-green-600 cursor-pointer transition font-bold">
                Call Us
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            © 2024 <span className="text-green-600 font-medium">CRMbot.in</span>
            . All rights reserved. Made with in Surat.
          </p>
          <p className="text-gray-400 text-xs font-medium">
            Meta Official WhatsApp Business API Partner
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
