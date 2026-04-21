import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#industries", label: "Industries" },
    { href: "#features", label: "Features" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="sticky top-0 z-50">
      {/* MAIN NAV */}
      <nav className="w-full bg-white border-b border-gray-100 px-6 sm:px-10 md:px-12 lg:px-15 h-20 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="CRMbot" className="h-10 lg:h-12 w-auto" />
        </div>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ fontFamily: "DM Sans, sans-serif" }}
              className={`text-md transition-colors duration-200 ${
                router.asPath === link.href
                  ? "text-green-500 font-semibold"
                  : "text-gray-600 hover:text-green-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* DESKTOP BUTTON */}
        <button
          style={{ fontFamily: "DM Sans, sans-serif" }}
          className="hidden lg:block bg-[#00bc7d] hover:bg-green-500 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors duration-200"
        >
          Book Demo
        </button>

        {/* HAMBURGER BUTTON (Visible only on Mobile/Tablet) */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-600 p-2">
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* RIGHT SIDE SLIDE MENU (DRAWER) */}
      {/* Black Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={toggleMenu}
      />

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Close Button */}
          <button onClick={toggleMenu} className="self-end text-gray-600 mb-8">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Links */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 text-base sm:text-lg font-medium border-b border-gray-50 pb-2"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Button at Bottom */}
          <div className="mt-auto">
            <button
              style={{ fontFamily: "DM Sans, sans-serif" }}
              className="w-full bg-[#00bc7d] text-white py-2 sm:py-4 rounded-xl font-semibold shadow-lg shadow-green-200"
            >
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
