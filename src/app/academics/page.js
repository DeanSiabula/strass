"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Academics() {
  const [programFilter, setProgramFilter] = useState("all");

  return (
    <div className="min-h-screen bg-[#f3f6fb] text-slate-800 antialiased overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      {/* pt-20 mobile (80px) to match mobile navbar, md:pt-16 for desktop (64px) */}
      <header className="relative pt-20 md:pt-16">
        <div
          className={
            "relative h-auto min-h-[55vh] md:h-[calc(100vh-64px)] lg:h-[60vh] overflow-hidden"
          }
        >
          <Image
            src="/images/academics-hero.jpg"
            alt="Students learning in a classroom"
            fill
            className="object-cover object-top md:object-center brightness-80"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f]/88 via-[#002c4f]/60 to-transparent" />

          {/*
            Changed layout for mobile:
            - use flex-col (not flex-col-reverse) so the main text appears before the snapshot on small screens
            - increase vertical padding and make container height 'auto' so content can grow instead of being clipped
          */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex flex-col lg:flex-row items-start lg:items-center gap-6 py-8">
            {/* Main text column (left on lg, top on mobile) */}
            <div className="w-full lg:max-w-3xl text-white mt-0 sm:mt-0 order-1">
              <div className="backdrop-blur-sm bg-white/6 rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg border border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 bg-white/8 px-3 py-1 rounded-full text-sm font-semibold">
                      Academics · STRASS
                    </div>

                    <h1
                      id="academics-heading"
                      className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight drop-shadow-sm"
                    >
                      Educate Them So that They May Be Free
                    </h1>

                    <p className="text-sm sm:text-base text-white/90 mb-4 mt-3 max-w-prose">
                      Our academic program blends strong fundamentals with hands-on learning. From inquiry-led science to
                      project-based humanities, students build skills to thrive in a changing world.
                    </p>

                    <div className="flex gap-3 flex-col sm:flex-row">
                      <a
                        href="#programs"
                        className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg px-4 py-3 bg-[#00FFFF] text-[#001f3f] font-semibold shadow hover:-translate-y-0.5 transition-transform text-sm"
                        aria-label="View Programs"
                      >
                        View Programs
                      </a>

                      <a
                        href="#apply"
                        className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg px-4 py-3 bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-colors text-sm"
                        aria-label="Start Application"
                      >
                        Start Application
                      </a>
                    </div>

                    <div className="mt-3 text-xs text-white/80 flex flex-col sm:flex-row gap-2">
                      <span>Scholarships available</span>
                      <span>· Open days</span>
                    </div>

                    <div className="mt-3 text-xs text-white/80">
                      <strong>Academic Year:</strong> 2025 · <span>Terms start Sept 8 &amp; Jan 10</span>
                    </div>
                  </div>

                  {/* Snapshot */}
                  <aside
                    className={
                      "w-full bg-white/6 rounded-xl p-3 border border-white/10 text-white mt-4 md:mt-0 md:w-72 lg:w-44 flex-shrink-0 order-2"
                    }
                    aria-hidden="true"
                  >
                    <div className="text-white/90 mb-3 font-medium">Snapshot</div>

                    <div className="flex justify-between items-center mb-2">
                      <div className="text-white/80 text-sm">Students</div>
                      <div className="text-white font-semibold">632</div>
                    </div>

                    <div className="flex justify-between items-center mb-2">
                      <div className="text-white/80 text-sm">Teachers</div>
                      <div className="text-white font-semibold">30</div>
                    </div>

                    <div className="border-t border-white/10 mt-2 pt-2 text-white/80 text-sm space-y-2">
                      <div className="flex justify-between"><span>Avg class size</span><strong>18</strong></div>
                      <div className="flex justify-between"><span>Labs & workshops</span><strong>4</strong></div>
                      <div className="flex justify-between"><span>Libraries</span><strong>1</strong></div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 mt-8 pb-16">
        {/* Programs + filter */}
        <section id="programs" className="mb-8">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-2xl font-bold text-[#001f3f]">Programs</h2>
              <p className="text-sm text-slate-600">Explore our age-appropriate programs and curriculum pathways.</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setProgramFilter("all")}
                className={`text-sm px-3 py-2 rounded-full ${programFilter === "all" ? "bg-[#00FFFF] text-[#001f3f] font-semibold" : "bg-white border border-slate-200 text-slate-700"}`}
              >
                All
              </button>
              <button
                onClick={() => setProgramFilter("junior")}
                className={`text-sm px-3 py-2 rounded-full ${programFilter === "junior" ? "bg-[#00FFFF] text-[#001f3f] font-semibold" : "bg-white border border-slate-200 text-slate-700"}`}
              >
                Junior Secondary
              </button>
              <button
                onClick={() => setProgramFilter("high")}
                className={`text-sm px-3 py-2 rounded-full ${programFilter === "high" ? "bg-[#00FFFF] text-[#001f3f] font-semibold" : "bg-white border border-slate-200 text-slate-700"}`}
              >
                High School
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {([
              {
                key: "junior",
                title: "Junior Secondary",
                subtitle: "Grades 8 - 9",
                bullets: [
                  "Broadened curriculum with electives",
                  "Study skills & project-based learning",
                  "Clubs, sports & leadership",
                  "STEM introduction labs",
                ],
              },
              {
                key: "high",
                title: "High School",
                subtitle: "Grades 10 - 12",
                bullets: [
                  "University preparation & counselling",
                  "Advanced coursework & AP options",
                  "Internships & career workshops",
                  "Competitive exam prep",
                ],
              },
            ]).filter((p) => programFilter === "all" || programFilter === p.key).map((p) => (
              <ProgramCard key={p.title} title={p.title} subtitle={p.subtitle} bullets={p.bullets} />
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mt-10">
          <div className="bg-[#001f3f] text-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <SimpleStat value="98%" label="Graduation Rate" />
              <SimpleStat value="15+" label="Academic Programs" />
              <SimpleStat value="30+" label="Expert Teachers" />
              <SimpleStat value="60+" label="Years of Excellence" />
            </div>
          </div>
        </section>

        {/* Curriculum & Faculty */}
        <section className="mt-12 grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-[#001f3f] mb-3">Detailed Curriculum</h2>
            <p className="text-slate-600 mb-4">
              Each program is carefully scaffolded with age-appropriate learning outcomes, continuous assessment, and
              project-based experiences.
            </p>

            <div className="space-y-3">
              <Accordion
                title="English & Literature"
                content={
                  <>
                    <p className="text-sm text-slate-700 mb-2">
                      Phonics-first approach (Primary), moving to analytical reading, essay writing and debate (High School).
                      Foreign language electives include French and Spanish.
                    </p>
                    <ul className="list-disc list-inside text-slate-700 text-sm">
                      <li>Reading circles & leveled libraries</li>
                      <li>Creative writing workshops</li>
                      <li>Public speaking & debate</li>
                    </ul>
                  </>
                }
              />

              <Accordion
                title="Ordinary Math & Additinal Mathematics"
                content={
                  <>
                    <p className="text-sm text-slate-700 mb-2">
                      From number sense and problem solving in early years to algebra, calculus introductions, and data
                      literacy in senior years.
                    </p>
                    <ul className="list-disc list-inside text-slate-700 text-sm">
                      <li>Small-group coaching</li>
                      <li>Problem-solving contests</li>
                      <li>Applied math projects</li>
                    </ul>
                  </>
                }
              />

              <Accordion
                title="STEM & Technology"
                content={
                  <>
                    <p className="text-sm text-slate-700 mb-2">
                      Hands-on engineering, coding clubs, robotics, and lab work across levels to build future-ready skills.
                    </p>
                    <ul className="list-disc list-inside text-slate-700 text-sm">
                      <li>After-school STEM labs</li>
                      <li>Annual science exhibition</li>
                      <li>Industry visits & mentorships</li>
                    </ul>
                  </>
                }
              />
            </div>
          </div>

          {/* Faculty & Testimonials */}
         <aside className="space-y-4">


            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-semibold text-[#001f3f] mb-3">What parents say</h3>
              <Testimonial
                quote="STRASS gave my child the confidence to excel in science and public speaking. Teachers are supportive and hands-on."
                author="— Grace, parent"
              />
              <Testimonial
                quote="The STEM program and workshops opened new interests for our son. The school balances academics and character development well."
                author="— Michael, parent"
              />
            </div>
          </aside>
        </section>

        {/* Calendar & Programs */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-[#001f3f] mb-3">Academic Calendar</h2>
          <div className="card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
            <div>
              <p className="muted text-slate-600">Key dates: Term 1 begins Sept 1. Term 3 begins Sept 8.</p>
              <p className="muted text-slate-600">(This can link to a downloadable calendar in <code>/assets/</code> when available.)</p>
            </div>
            <div className="flex gap-2">
              <a className="px-4 py-2 rounded-lg bg-[#00FFFF] text-[#001f3f] font-semibold" href="/assets/academic-calendar.pdf">
                Download PDF
              </a>
              <a className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 bg-white/60" href="/contact">
                Ask a question
              </a>
            </div>
          </div>
        </section>

        {/* Special programs */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-[#001f3f] mb-3">Special Programs & Clubs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <MiniCard title="Coding" desc="Build, code and compete in regional challenges." />
            <MiniCard title="Debate & Public Speaking" desc="From confidence to competition — students find their voice." />
            <MiniCard title="Chess" desc="Teaching and learning strategic chess plays" />
            <MiniCard title="Sports Academy" desc="Football, basketball, athletics — structured training & tournaments." />
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-8 mb-12">
          <h2 className="text-2xl font-bold text-[#001f3f] mb-3">Frequently Asked Questions</h2>
          <div className="space-y-3">
            <FaqItem q="How do I apply?" a="Click ‘Start Application’ in the header or visit the Apply page. Our admissions team will contact you with the next steps." />
            <FaqItem q="Are scholarships available?" a="Yes — we offer need-based scholarships and entrance awards. Contact admissions for eligibility and documentation." />
            <FaqItem q="Do you offer transport?" a="Yes — we provide limited school transport routes. Contact our front office for current coverage." />
          </div>
        </section>

        {/* CTA */}
        <section id="apply" className="mb-20">
          <div className="max-w-3xl mx-auto text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-white/60 to-white/30 border border-slate-200 shadow">
            <h3 className="text-2xl font-bold mb-2 text-[#001f3f]">Ready to join STRASS?</h3>
            <p className="text-slate-600 mb-4">Start your application or book a campus tour — we’ll guide you through the process.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a className="px-5 py-3 rounded-lg bg-[#00FFFF] text-[#001f3f] font-semibold shadow hover:scale-[1.02] transition w-full sm:w-auto text-center" href="/apply">
                Start Application
              </a>
              <a className="px-5 py-3 rounded-lg border border-slate-300 text-slate-700 bg-white/60 hover:bg-white/70 transition w-full sm:w-auto text-center" href="/visit">
                Book a Visit
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-6">
          <div className="bg-slate-50 border-t border-slate-100 py-8">
            <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-slate-800">STRASS School</div>
                <div className="text-xs text-slate-600">123 Learning Road • Your City</div>
              </div>
              <div className="text-sm text-slate-600 text-right">
                <div>© 2025 STRASS School</div>
                <div>Privacy · Terms</div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

/* ---------- Small reusable components ---------- */

function ProgramCard({ title, subtitle, bullets = [] }) {
  return (
    <article className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transform hover:-translate-y-1 transition">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-[#e6fbfb] flex items-center justify-center text-[#006b6b] shrink-0">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5L4.2 7 12 4.5 19.8 7 12 9.5zM4 10v8l8 4 8-4v-8L12 14 4 10z" /></svg>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[#001f3f]">{title}</h3>
          <div className="text-sm text-slate-600 mb-3">{subtitle}</div>
          <ul className="list-disc list-inside text-slate-700 space-y-1 mb-3 text-sm">
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
          <a href="/programs" className="text-sm font-medium text-[#00FFFF] hover:underline">See full curriculum →</a>
        </div>
      </div>
    </article>
  );
}

function SimpleStat({ value, label }) {
  return (
    <div className="p-4 rounded-lg bg-white/6 backdrop-blur-sm hover:bg-white/10 transition-all text-center">
      <div className="text-2xl sm:text-3xl font-bold text-[#00FFFF]">{value}</div>
      <div className="text-sm text-white/90 mt-1">{label}</div>
    </div>
  );
}

function Accordion({ title, content }) {
  const [open, setOpen] = useState(false);
  const id = title.replace(/\s+/g, "-").toLowerCase();
  return (
    <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
      <button
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((s) => !s)}
        className="w-full flex items-center justify-between gap-3 text-left"
      >
        <span className="font-medium text-slate-800">{title}</span>
        <span className="text-slate-500">{open ? "−" : "+"}</span>
      </button>

      <div
        id={id}
        className={`mt-3 transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="text-sm text-slate-700">{content}</div>
      </div>
    </div>
  );
}

function TeacherCard({ name, role, img }) {
  return (
    <div className="min-w-[150px] sm:min-w-[170px] bg-white p-3 rounded-lg shadow-sm border border-slate-100 flex-shrink-0">
      <div className="relative w-full h-28 rounded-md overflow-hidden bg-slate-100">
        <Image src={img} alt={name} fill className="object-cover" />
      </div>
      <div className="mt-3">
        <div className="font-semibold text-sm text-slate-800">{name}</div>
        <div className="text-xs text-slate-500">{role}</div>
      </div>
    </div>
  );
}

function Testimonial({ quote, author }) {
  return (
    <blockquote className="text-sm text-slate-700 mb-3">
      <p className="mb-2">“{quote}”</p>
      <cite className="text-xs text-slate-500">{author}</cite>
    </blockquote>
  );
}

function MiniCard({ title, desc }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition">
      <div className="font-semibold text-slate-800">{title}</div>
      <div className="text-sm text-slate-600 mt-1">{desc}</div>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
      <button className="w-full flex justify-between items-center" onClick={() => setOpen((s) => !s)} aria-expanded={open}>
        <span className="font-medium text-slate-800">{q}</span>
        <span className="text-slate-500">{open ? "−" : "+"}</span>
      </button>
      <div className={`mt-3 text-sm text-slate-700 ${open ? "block" : "hidden"}`}>{a}</div>
    </div>
  );
}