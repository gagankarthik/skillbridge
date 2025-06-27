"use client";

import React, { useState } from "react";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-neutral-950 text-gray-800 dark:text-neutral-200 transition-colors min-h-screen flex flex-col">
      {/* NAVBAR */}
      <header className="fixed top-0 w-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur border-b border-gray-200 dark:border-neutral-800 z-50 transition-all">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-4">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">SkillBridge</div>
          <nav className="hidden md:flex items-center gap-6">
            {["#features", "#use-cases", "#contact"].map(link => (
              <a
                key={link}
                href={link}
                className="text-gray-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition text-sm font-medium"
              >
                {link.replace("#", "").replace("-", " ").toUpperCase()}
              </a>
            ))}
            <a
              href="/login"
              className="px-4 py-2 rounded-full border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 transition text-sm font-medium"
            >
              Log In
            </a>
            <a
              href="/signup"
              className="px-4 py-2 rounded-full bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition text-sm font-medium"
            >
              Get Started
            </a>
          </nav>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6 text-blue-600 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800 shadow-sm">
            <div className="flex flex-col px-4 py-2 space-y-1">
              {["#features", "#use-cases", "#contact"].map(link => (
                <a
                  key={link}
                  href={link}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition text-sm font-medium"
                >
                  {link.replace("#", "").replace("-", " ").toUpperCase()}
                </a>
              ))}
              <a
                href="/login"
                className="px-4 py-2 rounded-full border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 text-center mt-2"
              >
                Log In
              </a>
              <a
                href="/signup"
                className="px-4 py-2 rounded-full bg-blue-600 dark:bg-blue-500 text-white text-center mt-2"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </header>

      {/* MAIN */}
      <main className="flex-1 pt-24">
        {/* HERO */}
        <section className="px-4 md:px-6 py-24 text-center bg-gradient-to-b from-blue-50 dark:from-neutral-900 to-white dark:to-neutral-950 transition-colors">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in">
            Bridge the Skill Gap with <span className="text-blue-600 dark:text-blue-400">SkillBridge</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-neutral-400 mb-8 animate-fade-in delay-100">
            Empower yourself or your team with tailored learning paths, real-world projects, and expert mentorship.
          </p>
          <a
            href="#get-started"
            className="inline-block px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full font-semibold shadow hover:scale-105 hover:bg-blue-700 dark:hover:bg-blue-600 transition-transform duration-300 animate-slide-up"
          >
            Get Started
          </a>
        </section>

        {/* FEATURES */}
        <section id="features" className="py-16 bg-white dark:bg-neutral-950 transition-colors">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white animate-fade-in">
              Why Choose <span className="text-blue-600 dark:text-blue-400">SkillBridge?</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { title: "Personalized Learning", desc: "Adaptive courses tailored to your goals and skill level." },
                { title: "Real-World Projects", desc: "Hands-on projects to build your portfolio and confidence." },
                { title: "Expert Mentorship", desc: "Connect with industry experts for guidance and feedback." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 p-8 rounded-2xl shadow hover:shadow-lg transition duration-300 animate-slide-up">
                  <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">{item.title}</h3>
                  <p className="text-gray-700 dark:text-neutral-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section id="use-cases" className="py-16 bg-blue-50 dark:bg-neutral-900 transition-colors">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white animate-fade-in">
              Unlock Your Potential with SkillBridge
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
                alt="Learning"
                className="rounded-2xl shadow w-full object-cover animate-fade-in"
              />
              <div className="animate-slide-up">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  A Platform Built for Growth
                </h3>
                <p className="text-gray-700 dark:text-neutral-300 mb-4">
                  Whether you're a student, professional, or organization, our platform adapts to your needs.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-neutral-400 space-y-2">
                  <li>Curated learning paths for every industry</li>
                  <li>Interactive lessons and real-world challenges</li>
                  <li>Progress tracking and personalized recommendations</li>
                  <li>Community support and expert guidance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-16 bg-white dark:bg-neutral-950 transition-colors">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white animate-fade-in">
              Contact Us
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for contacting SkillBridge!");
              }}
              className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl shadow p-8 space-y-6 animate-slide-up"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 dark:text-neutral-300 font-medium mb-1">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition bg-white dark:bg-neutral-900 text-gray-900 dark:text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-neutral-300 font-medium mb-1">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition bg-white dark:bg-neutral-900 text-gray-900 dark:text-white"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 dark:text-neutral-300 font-medium mb-1">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition bg-white dark:bg-neutral-900 text-gray-900 dark:text-white"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full font-semibold shadow hover:scale-105 hover:bg-blue-700 dark:hover:bg-blue-600 transition-transform duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-neutral-900 text-neutral-300 py-10 mt-8 transition-colors">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-xl font-extrabold text-blue-400 mb-1">SkillBridge</div>
            <p className="text-sm text-neutral-400">
              Empowering learners and teams to bridge the skill gap with personalized learning and real-world experience.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#features" className="hover:text-blue-400 transition">Features</a></li>
              <li><a href="#use-cases" className="hover:text-blue-400 transition">Use Cases</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Resources</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 mt-8 pt-4 text-center text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} SkillBridge. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
