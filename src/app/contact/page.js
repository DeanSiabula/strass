// app/contact/page.js   (or pages/contact.js depending on your project layout)
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      // TODO: wire up to your API endpoint
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });

      console.log("Sending contact form:", formData);

      // Simulate network delay
      await new Promise((r) => setTimeout(r, 700));

      setFormData({ name: "", email: "", subject: "", message: "" });
      setSuccess(true);
      // auto-hide the success message
      setTimeout(() => setSuccess(false), 4500);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f6fb] text-slate-800 antialiased">
      <Navbar />

      {/* top offset to avoid fixed navbar (mobile:80px, desktop:64px) */}
      <main className="pt-20 md:pt-16 pb-12">
        {/* Page header / hero */}
        <section className="container mx-auto px-4 sm:px-6">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-[#001f3f] to-[#002c4f] text-white shadow-lg p-6 md:p-8">
            <div className="md:flex md:items-center md:justify-between gap-6">
              <div className="max-w-3xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                  Get in touch with <span className="text-[#00FFFF]">STRASS</span>
                </h1>
                <p className="mt-2 text-sm sm:text-base text-white/90">
                  We&apos;re here to help — whether you want to ask about admissions, campus visits, programs or partnerships.
                  Fill out the form and our team will get back to you as soon as possible.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="#contact-form"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#00FFFF] text-[#001f3f] font-semibold px-4 py-2 shadow hover:scale-[1.02] transition"
                  >
                    Contact Us
                  </a>
                  <a
                    href="/visit"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/20 text-white px-4 py-2 hover:bg-white/6 transition"
                  >
                    Book a Visit
                  </a>
                </div>
              </div>

              <div className="mt-4 md:mt-0">
                <div className="bg-white/6 rounded-lg px-4 py-3 border border-white/10 text-white text-sm">
                  <div className="font-semibold">Office Hours</div>
                  <div className="mt-1 text-xs text-white/85">Mon — Fri: 6:00 AM — 4:30 PM</div>
                  <div className="mt-2 text-xs text-white/80">Sat — Sun: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 sm:px-6 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Contact info + map */}
            <aside className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <h2 className="text-xl font-semibold text-[#001f3f] mb-3">Contact Information</h2>

                <div className="space-y-4 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-[#e6fbfb] text-[#006b6b] shrink-0">
                      {/* address icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zM12 11.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-slate-800">Address</div>
                      <div className="text-slate-600">Kaunda road</div>
                      <div className="text-slate-600">Livinstone, Maramba</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-[#eaf9ff] text-[#00607f] shrink-0">
                      {/* phone icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2 11.3 11.3 0 0 0 3.5.6 1 1 0 0 1 1 1v3.4a1 1 0 0 1-1 1A17 17 0 0 1 3 5a1 1 0 0 1 1-1h3.4a1 1 0 0 1 1 1 11.3 11.3 0 0 0 .6 3.5 1 1 0 0 1-.2 1l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-slate-800">Phone</div>
                      <div className="text-slate-600">0767909220</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-[#f0fff6] text-[#0a6b3a] shrink-0">
                      {/* email icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2zM4 8l8 5 8-5v-1l-8 5-8-5v1z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-slate-800">Email</div>
                      <div className="text-slate-600">info@strass.edu</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t pt-4 text-sm text-slate-600">
                  <div className="font-medium text-slate-800 mb-2">Find us</div>
                  <div className="rounded-md overflow-hidden border border-slate-100 shadow-sm">
                    {/* Map placeholder — replace with embed if you have one */}
                    <div className="w-full h-40 bg-gradient-to-r from-[#e6eef8] to-[#f5f8fb] flex items-center justify-center text-slate-400">
                      Map placeholder
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-[#001f3f]">Follow STRASS</div>
                    <div className="text-xs text-slate-600">Stay updated with news & events</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <a href="#" className="p-2 rounded-md bg-[#e8faff] text-[#00607f]"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.92c-.7.3-1.45.5-2.24.6a3.9 3.9 0 0 0-6.65 3.55A11 11 0 0 1 3.16 4.9a3.9 3.9 0 0 0 1.2 5.2 3.8 3.8 0 0 1-1.77-.5v.05a3.9 3.9 0 0 0 3.12 3.83c-.3.08-.6.12-.92.12-.22 0-.44-.02-.65-.06a3.9 3.9 0 0 0 3.64 2.72A7.82 7.82 0 0 1 2 18.57a11 11 0 0 0 6 1.76c7.2 0 11.14-6 11.14-11.2v-.51A7.9 7.9 0 0 0 22 5.92z"/></svg></a>
                    <a href="#" className="p-2 rounded-md bg-[#fff0f6] text-[#7f0055]"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 2.86 8.16 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.2-3.37-1.2-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03a9.56 9.56 0 0 1 2.5-.34c.85 0 1.7.11 2.5.34 1.9-1.3 2.74-1.03 2.74-1.03.55 1.37.2 2.39.1 2.64.64.7 1.02 1.6 1.02 2.68 0 3.83-2.34 4.67-4.57 4.92.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10 10 0 0 0 22 12c0-5.5-4.46-9.96-9.96-9.96z"/></svg></a>
                    <a href="#" className="p-2 rounded-md bg-[#fff8e6] text-[#7a5d00]"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 4.82 6.64 11.54 6.92 11.82.18.18.44.28.71.28s.53-.1.71-.28C12.36 20.54 19 13.82 19 9c0-3.87-3.13-7-7-7zM7.5 9.5A1.5 1.5 0 1 1 9 8a1.5 1.5 0 0 1-1.5 1.5z"/></svg></a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right: Contact form */}
            <div>
              <div id="contact-form" className="rounded-2xl bg-white p-6 shadow-lg border border-slate-100">
                <h2 className="text-xl font-semibold text-[#001f3f] mb-2">Send us a message</h2>
                <p className="text-sm text-slate-600 mb-5">
                  Tell us a little about your enquiry and we&apos;ll respond within 1–2 business days.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-xs text-slate-700">Full name</span>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00FFFF]/50 transition"
                        placeholder="Jane Doe"
                      />
                    </label>

                    <label className="block">
                      <span className="text-xs text-slate-700">Email</span>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00FFFF]/50 transition"
                        placeholder="you@example.com"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="text-xs text-slate-700">Subject</span>
                    <input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00FFFF]/50 transition"
                      placeholder="Subject (e.g. Admissions enquiry)"
                    />
                  </label>

                  <label className="block">
                    <span className="text-xs text-slate-700">Message</span>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      className="mt-1 block w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00FFFF]/50 transition"
                      placeholder="Write your message..."
                    />
                  </label>

                  <div className="flex items-center gap-3">
                    <button
                      type="submit"
                      disabled={sending}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-[#00FFFF] to-[#7F00FF] px-5 py-2 text-sm font-semibold text-[#001f3f] shadow hover:brightness-105 transition disabled:opacity-60"
                    >
                      {sending ? "Sending…" : "Send Message"}
                    </button>

                    <div className="text-sm text-slate-500">Or call us at <strong className="text-slate-700">0767909220</strong></div>
                  </div>
                </form>

                {/* success toast */}
                {success && (
                  <div className="mt-4 rounded-md bg-emerald-50 border border-emerald-100 p-3 text-sm text-emerald-800 shadow-sm">
                    ✅ Thank you — your message has been sent. We&apos;ll reply soon.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
