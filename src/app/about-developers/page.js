"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function AboutDevelopers() {
  const developers = [
    {
      name: "Chris Mwiya",
      role: "Lead Developer",
      image: "/m.jpg",
      bio: "Full-stack developer with expertise in Next.js and React. Passionate about creating innovative web solutions.",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Dean Siabula",
      role: "Backend Developer",
      image: "/d.jpg",
      bio: "Expert backend developer specializing in scalable architectures and database optimization.",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Happy Chilala",
      role: "Full Stack Developer",
      image: "/h.jpg",
      bio: "Creative frontend developer focused on building beautiful and responsive user interfaces.",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Patrick NaMbula",
      role: "Full Stack Developer",
      image: "/p.jpg",
      bio: "Versatile full-stack developer with a passion for creating seamless web experiences.",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f3f6fb] text-slate-800">
      <Navbar />

      <main className="pt-20">
        {/* HERO */}
        <section className="relative h-[40vh] sm:h-[45vh]">
          <div className="absolute inset-0">
            <Image
              src="/m.jpg"
              alt="Development team"
              fill
              className="object-contain brightness-75"
              priority
              quality={100}
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f]/80 to-[#003366]/60" />

          <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
            <div className="max-w-3xl text-white">
              <div className="backdrop-blur-sm bg-white/6 rounded-2xl p-6 sm:p-10 shadow-lg border border-white/10">
                <h1 className="text-3xl sm:text-5xl font-extrabold mb-3 leading-tight">
                  Meet Our Developers
                </h1>
                <p className="text-lg sm:text-xl opacity-90">
                  The talented team behind STRASS&apos;s digital transformation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {developers.map((dev, index) => (
              <div key={index} className="bg-gradient-to-b from-white to-slate-50 rounded-2xl shadow-xl border border-slate-100 overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#001f3f]/20 z-10" />
                  <Image
                    src={dev.image}
                    alt={dev.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 sm:p-8 relative">
                  <div className="absolute top-0 right-0 mt-4 mr-4 flex gap-3">
                    <a
                      href={dev.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 p-2 rounded-full shadow-md hover:bg-[#00FFFF] text-slate-600 hover:text-[#001f3f] transition-all"
                    >
                      <GithubIcon />
                    </a>
                    <a
                      href={dev.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 p-2 rounded-full shadow-md hover:bg-[#00FFFF] text-slate-600 hover:text-[#001f3f] transition-all"
                    >
                      <LinkedinIcon />
                    </a>
                  </div>
                  <h3 className="text-2xl font-bold text-[#001f3f] mb-2">{dev.name}</h3>
                  <p className="inline-block bg-[#00FFFF]/10 text-[#001f3f] font-medium px-3 py-1 rounded-full text-sm">
                    {dev.role}
                  </p>
                  <p className="text-slate-600 mt-4 leading-relaxed">{dev.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="bg-white py-12 sm:py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#001f3f] text-center mb-8">
              Our Tech Stack
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <TechCard name="Next.js" icon="🔲" />
              <TechCard name="React" icon="⚛️" />
              <TechCard name="Tailwind CSS" icon="🎨" />
              <TechCard name="Node.js" icon="🟢" />
              <TechCard name="MongoDB" icon="🍃" />
              <TechCard name="TypeScript" icon="📘" />
              <TechCard name="Git" icon="📦" />
              <TechCard name="AWS" icon="☁️" />
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
    </div>
  );
}

function TechCard({ name, icon }) {
  return (
    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center gap-2 hover:shadow-md transition-shadow">
      <span className="text-3xl">{icon}</span>
      <span className="font-medium text-slate-800">{name}</span>
    </div>
  );
}

function GithubIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}
