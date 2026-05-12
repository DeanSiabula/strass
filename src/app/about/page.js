// app/about/page.js  (or pages/about.js)
"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function About() {
  const [open, setOpen] = useState(null); // for optional timeline details

  return (
    <div className="min-h-screen bg-[#f3f6fb] text-slate-800 antialiased">
      <Navbar />

      {/* offset for fixed navbar: mobile 80px, desktop 64px */}
      <main className="pt-20 md:pt-16 pb-12">
        {/* Hero */}
        <section className="container mx-auto px-4 sm:px-6">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-[#001f3f] to-[#002c4f] text-white shadow-lg p-6 md:p-10">
            <div className="md:flex md:items-center md:justify-between gap-6">
              <div className="max-w-3xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                  About <span className="text-[#00FFFF]">STRASS</span>
                </h1>
                <p className="mt-3 text-sm sm:text-base text-white/90">
                  A modern school blending academic rigour with character formation, creativity and community
                  engagement. Learn about our history, mission and the values that guide everything we do.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="#our-mission"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#00FFFF] text-[#001f3f] font-semibold px-4 py-2 shadow hover:scale-[1.02] transition"
                  >
                    Our Mission
                  </a>
                  <a
                    href="#values"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/20 text-white px-4 py-2 hover:bg-white/6 transition"
                  >
                    Core Values
                  </a>
                </div>
              </div>

              <div className="mt-4 md:mt-0 w-full md:w-56 flex-shrink-0">
                <div className="rounded-lg overflow-hidden border border-white/10 bg-white/6 p-3 text-sm">
                  <div className="font-semibold">Quick Facts</div>
                  <div className="mt-2 text-xs text-white/90">
                    <div>Founded: <strong>1967</strong></div>
                    <div>Students: <strong>632</strong></div>
                    <div>Teachers: <strong>30+</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro + Stats */}
        <section className="container mx-auto px-4 sm:px-6 mt-8">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <article className="md:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-[#001f3f] mb-3">Our Story</h2>

              <div className="prose prose-slate max-w-none">
                <p>
                  Founded in 1967, STRASS has been at the forefront of educational excellence for over two decades.
                  Our commitment to providing quality education has made us one of the most respected educational
                  institutions in the region.
                </p>
                <p>
                  We believe in nurturing not just academic excellence, but also character, creativity, and leadership
                  skills in our students.
                </p>
              </div>

              {/* timeline */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-[#001f3f] mb-3">Milestones</h3>
                <ul className="space-y-3">
                  {[
                    { year: "1967", title: "Founded", details: "STRASS opened its doors with 120 students." },
                    { year: "2023", title: "New Computer Lab", details: "Built 2 modern labs and a library upgrade." },
                    { year: "2015", title: "STEM Program", details: "Launched dedicated STEM & robotics clubs." },
                    { year: "2022", title: "Community Outreach", details: "Expanded mentorship and community partnerships." },
                  ].map((item, i) => (
                    <li key={i} className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <button
                        onClick={() => setOpen(open === i ? null : i)}
                        className="w-full text-left flex items-start justify-between gap-4"
                        aria-expanded={open === i}
                      >
                        <div>
                          <div className="text-sm text-slate-500">{item.year}</div>
                          <div className="font-medium text-slate-800">{item.title}</div>
                        </div>
                        <div className="text-sm text-[#00FFFF]">{open === i ? "−" : "+"}</div>
                      </button>

                      {open === i && <div className="mt-3 text-sm text-slate-700">{item.details}</div>}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <aside className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-semibold text-[#001f3f] mb-3">Mission</h3>
                <p className="text-sm text-slate-700">
                  Educate them so that they may be         n  Free
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-semibold text-[#001f3f] mb-3">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 rounded-lg bg-[#001f3f] text-white">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-xs mt-1">Graduation Rate</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-100">
                    <div className="text-2xl font-bold text-[#00FFFF]">15+</div>
                    <div className="text-xs mt-1 text-slate-600">Programs</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-100">
                    <div className="text-2xl font-bold text-[#00FFFF]">30+</div>
                    <div className="text-xs mt-1 text-slate-600">Teachers</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-100">
                    <div className="text-2xl font-bold text-[#00FFFF]">60</div>
                    <div className="text-xs mt-1 text-slate-600">Years</div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Values & Faculty */}
        <section className="container mx-auto px-4 sm:px-6 mt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div id="values" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-semibold text-[#001f3f] mb-3">Core Values</h3>
              <p className="text-sm text-slate-700 mb-4">
                Our values shape our curriculum, behaviour and relationships across campus.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Excellence in Education",
                  "Character Development",
                  "Innovation and Creativity",
                  "Community Service",
                  "Global Perspective",
                ].map((v, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-100 text-sm shadow-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#00FFFF]" aria-hidden />
                    {v}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-semibold text-[#001f3f] mb-3">Meet a few faculty</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <StaffCard name="Mr.Silumbu" role="Head of Science" img="/images/faculty-miriam.jpg" />
                <StaffCard name="Mr.Mulenga" role="Head of Mathematics" img="/images/faculty-paul.jpg" />
                <StaffCard name="Mr.Simbeleko" role="Head of social sciences" img="/images/faculty-lillian.jpg" />
                <StaffCard name="Mr.Mtonga" role="Head of school" img="/images/faculty-angela.jpg" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 sm:px-6 mt-10">
          <div className="rounded-2xl bg-gradient-to-r from-white/60 to-white/30 border border-slate-200 shadow p-6 md:p-8 text-center">
            <h3 className="text-2xl font-bold text-[#001f3f]">Interested in STRASS?</h3>
            <p className="text-slate-600 mt-2 mb-4">Apply now or book a campus visit — we’d love to show you around.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/apply"
                className="rounded-lg bg-[#00FFFF] text-[#001f3f] px-6 py-3 font-semibold shadow hover:scale-[1.02] transition"
              >
                Start Application
              </a>
              <a
                href="/visit"
                className="rounded-lg border border-slate-300 px-6 py-3 text-slate-700 bg-white/60 hover:bg-white/70 transition"
              >
                Book a Visit
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/* ---------- helper components ---------- */

function StaffCard({ name, role, img }) {
  return (
    <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-3 border border-slate-100">
      <div className="relative w-14 h-14 rounded-md overflow-hidden bg-slate-100 flex-shrink-0">
        {/* Image will fallback to empty box if asset missing */}
        <Image src={img} alt={name} fill className="object-cover" />
      </div>
      <div>
        <div className="font-medium text-slate-800 text-sm">{name}</div>
        <div className="text-xs text-slate-600">{role}</div>
      </div>
    </div>
  );
}
