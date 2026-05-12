// app/not-found.js
"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#001f3f] text-center px-4 text-white">
      {/* Title */}
      <h1 className="text-6xl md:text-8xl font-extrabold text-[#00FFFF] drop-shadow-lg">
        Page Under Development
      </h1>

      {/* Subtitle */}
      <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
        This page is not available yet
      </h2>

      {/* Explanation */}
      <p className="mt-3 max-w-xl text-white/80">
        The page you’re trying to access is still being built.  
        Our team is working hard to make it available soon.  
        Please check back later or return to the homepage.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="px-6 py-3 rounded-xl bg-[#00FFFF] text-[#001f3f] font-semibold shadow hover:scale-105 transition"
        >
          Go Back Home
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition"
        >
          Contact Us
        </Link>
      </div>

      {/* Optional Illustration */}
      <Image
        src="/images/under-construction.svg"
        alt="Page under development"
        width={400}
        height={300}
        className="mt-10 w-full max-w-sm opacity-90"
      />

      {/* Footer note */}
      <p className="mt-8 text-xs text-white/60">
        © 2025 STRASS School · All rights reserved
      </p>
    </div>
  );
}
