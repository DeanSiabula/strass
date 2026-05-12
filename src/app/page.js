//page.js

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f3f6fb] text-slate-800">
      <Navbar />

      <main className="pt-20">
        {/* HERO */}
        <section className="relative h-[70vh] sm:h-[72vh]">
          <div className="absolute inset-0">
            <Image
              src="/images/school-hero.jpg"
              alt="Students on campus"
              fill
              className="object-cover brightness-75"
              priority
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f]/80 to-[#003366]/60" />

          <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
            <div className="max-w-3xl text-white">
              <div className="backdrop-blur-sm bg-white/6 rounded-2xl p-6 sm:p-10 shadow-lg border border-white/10">
                <h1 className="text-3xl sm:text-5xl font-extrabold mb-3 leading-tight">
                  Welcome to <span className="text-[#00FFFF]">STRASS</span>
                </h1>
                <p className="text-lg sm:text-xl mb-6 opacity-90">
                  Empowering minds and shaping futures with a modern curriculum, expert faculty and a
                  caring community.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href="#apply"
                    className="inline-flex items-center justify-center rounded-lg px-6 py-3 bg-[#00FFFF] text-[#001f3f] font-semibold shadow-md hover:-translate-y-0.5 transition-transform"
                  >
                    Apply Now
                  </a>

                  <a
                    href="#about"
                    className="inline-flex items-center justify-center rounded-lg px-6 py-3 bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-colors"
                  >
                    Learn More
                  </a>
                </div>

                <p className="mt-4 text-sm text-white/80">Open days · Scholarships available ·Sports</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section id="about" className="container mx-auto px-6 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#001f3f]">Why Choose STRASS?</h2>
            <p className="mt-3 text-slate-600">A balanced education that combines strong academics with hands-on learning.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Excellence in Education"
              desc="World-class curriculum designed to inspire and challenge students at every level."
              icon={bookIcon}
            />

            <FeatureCard
              title="Computer Labs "
              desc="State-of-the-art facilities and technology-driven learning environments."
              icon={labIcon}
            />

            <FeatureCard
              title="Expert Faculty"
              desc="Dedicated teachers committed to nurturing each student's unique potential."
              icon={teacherIcon}
            />
          </div>
        </section>

        {/* STATS */}
        <section className="bg-[#001f3f] text-white py-10 sm:py-14">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <StatCard value="98%" label="Graduation Rate" />
              <StatCard value="15+" label="Academic Programs" />
              <StatCard value="30+" label="Expert Teachers" />
              <StatCard value="60" label="Years of Excellence" />
            </div>
          </div>
        </section>

        {/* CTA / APPLICATION */}
        <section id="apply" className="container mx-auto px-6 py-12 sm:py-16">
          <div className="max-w-3xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-r from-white/50 to-white/30 border border-slate-200 shadow">
            <h3 className="text-2xl font-bold mb-3 text-[#001f3f]">Ready to join our community?</h3>
            <p className="text-slate-600 mb-6">Start your application or schedule a campus visit we&apos;d love to meet you.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a className="px-6 py-3 rounded-lg bg-[#00FFFF] text-[#001f3f] font-semibold shadow hover:scale-[1.02] transition-transform" href="#">
                Start Application
              </a>
              <a className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 bg-white/60 hover:bg-white/70 transition-colors" href="#">
                Book a Visit
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-slate-50 border-t border-slate-100 py-8">
          <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-600">© {new Date().getFullYear()} STRASS. All rights reserved.</div>
            <div className="flex gap-4 text-slate-600">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Contact</a>
            </div>
          </div>
        </footer>
      </main>

      <style jsx>{`
        /* Small helpers for subtle motion */
        .feature-icon {
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}

/* ---------- Helper Components & icons (kept in same file for convenience) ---------- */

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/40 backdrop-blur-md border-b border-white/30">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-gradient-to-br from-[#00FFFF] to-[#7F00FF] flex items-center justify-center text-white font-bold">S</div>
          <div className="text-sm font-semibold text-slate-800">STRASS</div>
        </a>

        <nav className="hidden sm:flex gap-4 items-center text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#apply" className="hover:underline">Apply</a>
          <a href="#" className="hover:underline">Programs</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>

        <div className="sm:hidden">
          {/* mobile action */}
          <a href="#apply" className="px-3 py-2 rounded-md bg-[#00FFFF] text-[#001f3f] font-medium text-sm">Apply</a>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({ title, desc, icon }) {
  return (
    <article className="p-5 rounded-xl bg-white shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="feature-icon bg-[#001f3f] text-white">{icon}</div>
        <div>
          <h4 className="font-semibold text-slate-800">{title}</h4>
          <p className="text-sm text-slate-600 mt-1">{desc}</p>
        </div>
      </div>
    </article>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
      <div className="text-2xl sm:text-3xl font-bold text-[#00FFFF]">{value}</div>
      <div className="text-sm text-white/80 mt-1">{label}</div>
    </div>
  );
}

/* Simple inline SVG icons so you have consistent visuals without external assets */
const bookIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
    <path fill="currentColor" d="M3 6.5A2.5 2.5 0 015.5 4h12A2.5 2.5 0 0120 6.5V18a1 1 0 01-1 1H4a1 1 0 01-1-1V6.5z" />
  </svg>
);

const labIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
    <path fill="currentColor" d="M14 3v4h3v2l3 6v2H4v-2l3-6V7h3V3h4z" />
  </svg>
);

const teacherIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
    <path fill="currentColor" d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z" />
  </svg>
);
