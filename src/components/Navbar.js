// components/Navbar.js
"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const firstLinkRef = useRef(null);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = prev || "";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [isOpen]);

  // Focus first link when opened
  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => firstLinkRef.current?.focus(), 120);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Close on Escape key and click outside
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setIsOpen(false);
    }
    function onClick(e) {
      if (isOpen && navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onClick);
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/academics", label: "Academics" },
    { href: "/contact", label: "Contact" },
    { href: "/about-developers", label: "Developers" },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed w-full top-0 left-0 z-50 h-16 bg-gradient-to-r from-[#001f3f]/95 to-[#003366]/95 text-white shadow-md backdrop-blur-md"
    >
      <div className="container mx-auto px-4 md:px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#00FFFF] to-[#7F00FF] text-[#001f3f] font-extrabold shadow"
            aria-hidden="true"
          >
            S
          </span>
          <span className="font-semibold text-lg md:text-xl tracking-tight">STRASS</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm hover:text-[#00FFFF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00FFFF]/60 rounded"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/apply"
            className="ml-2 px-4 py-2 rounded-lg bg-[#00FFFF] text-[#001f3f] font-medium shadow-sm hover:translate-y-[-1px] transition-transform"
          >
            Apply
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            href="/apply"
            className="hidden mr-2 px-3 py-2 rounded-md bg-[#00FFFF] text-[#001f3f] font-medium sm:inline-block"
          >
            Apply
          </Link>

          <button
            onClick={() => setIsOpen((s) => !s)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            className="p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]/60"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu (animated) */}
      <div
        id="mobile-nav"
        className={`md:hidden transform origin-top transition-all duration-200 ease-out ${
          isOpen ? "max-h-screen opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        {/* backdrop for a slight dim & to catch clicks */}
        <div className={`absolute inset-0 bg-black/30 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} />

        <div className="relative bg-gradient-to-b from-[#00233a] to-[#001527] text-white shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((l, i) => (
                <Link
                  key={l.href}
                  href={l.href}
                  ref={i === 0 ? firstLinkRef : null}
                  className="block rounded-md px-3 py-2 text-lg font-medium hover:bg-white/6 focus:bg-white/6 focus:outline-none"
                >
                  {l.label}
                </Link>
              ))}
              <Link href="/apply" className="mt-2 inline-block px-4 py-2 rounded-lg bg-[#00FFFF] text-[#001f3f] font-semibold text-center">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
