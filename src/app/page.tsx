"use client";

import React, { useState } from "react";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 min-h-screen flex flex-col">
      {/* NAVBAR */}
      <header className="fixed top-0 w-full bg-transparent shadow-sm backdrop-blur border-b border-gray-200 dark:border-neutral-800 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
          <div className="flex items-center gap-2">
           <img
              src="/logo.svg"
              alt="SkillBridge Logo"
              className="h-8 w-auto"
              loading="lazy"
            />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {["#features", "#use-cases", "#contact"].map((link) => (
              <a
                key={link}
                href={link}
                className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                {link.replace("#", "").replace("-", " ").toUpperCase()}
              </a>
            ))}
            
            <a
              href="/signup"
              className="text-sm font-medium bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition"
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
              {["#features", "#use-cases", "#contact"].map((link) => (
                <a
                  key={link}
                  href={link}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  {link.replace("#", "").replace("-", " ").toUpperCase()}
                </a>
              ))}
           
              <a
                href="/signup"
                className="text-center mt-2 text-sm font-medium bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-full"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </header>

      {/* MAIN */}
      <main className="flex-1">
        {/* HERO */}
        <section className="hero-grid-bg px-4 py-20 md:py-28 text-center relative overflow-hidden ">
          <div className="max-w-3xl mx-auto pt-12">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Find the <span className="text-blue-600 dark:text-blue-400">best people</span> for <br /> your company
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8">
              Maximize conversions with the right talent. Discover highly skilled, vetted candidates.
            </p>
            <a
              href="/signup"
              className="inline-block px-6 py-3 rounded-full bg-blue-600 dark:bg-blue-500 text-white font-semibold shadow hover:bg-blue-700 dark:hover:bg-blue-600 transition"
            >
              Get Started
            </a>
          </div>
        </section>

     

        {/* FEATURES */}
        <section id="features" className="bg-white dark:bg-neutral-950 py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Leverage global world-class talented people
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-2xl p-6 shadow hover:shadow-lg transition">
                <img src="raising.gif" alt="Raising" className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Vetted Professionals</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Access a pool of highly skilled, vetted professionals ready to contribute to your projects.
                </p>
              </div>
              <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-2xl p-6 shadow hover:shadow-lg transition">
                <img src="globe.gif" alt="Global" className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global Talent</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Tap into a diverse talent pool from around the world, bringing unique perspectives and skills to your projects.
                </p>
              </div>
              <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-2xl p-6 shadow hover:shadow-lg transition">
                <img src="top.gif" alt="Top 0.1% Talent" className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Top 0.1% Talent</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  We test and vet the best so you don't have to.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section id="use-cases" className="bg-blue-50 dark:bg-neutral-900 py-16 px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                The all-in-one hiring platform
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300">
                Find the best match for your company. Built for speed, quality, and cost efficiency.
              </p>
              <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                <li>✔️ Vetted professionals for key roles</li>
                <li>✔️ Transparent pricing</li>
                <li>✔️ Fast, reliable hiring process</li>
                <li>✔️ Web and mobile friendly</li>
              </ul>
              <a
                href="/signup"
                className="inline-block mt-4 px-6 py-3 rounded-full bg-blue-600 dark:bg-blue-500 text-white font-semibold shadow hover:bg-blue-700 dark:hover:bg-blue-600 transition"
              >
                Learn More
              </a>
            </div>
            <img
              src="hiring.svg"
              alt="Hiring platform"
              className="rounded-2xl w-full object-cover"
            />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-white dark:bg-neutral-950 py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in touch</h2>
            <p className="mb-8 text-neutral-700 dark:text-neutral-300">
              Have questions or need help? We're here to support your hiring journey.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for contacting SkillBridge!");
              }}
              className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl shadow p-8 space-y-6"
            >
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-blue-100 focus:border-blue-600 transition"
              />
              <input
                type="email"
                required
                placeholder="you@email.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-blue-100 focus:border-blue-600 transition"
              />
              <textarea
                required
                rows={4}
                placeholder="How can we help you?"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-blue-100 focus:border-blue-600 transition"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-full bg-blue-600 dark:bg-blue-500 text-white font-semibold shadow hover:bg-blue-700 dark:hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
    

      {/*CTA*/}
      <section className="bg-transparent py-16 px-4">
  <div className="layout-grid-bg  backdrop-blur max-w-5xl mx-auto px-8 py-16 text-center relative rounded-2xl shadow-lg overflow-hidden">
    <h2 className="text-5xl font-bold mb-4">Start looking for best talent</h2>
    <p className="mb-8 text-neutral-700 dark:text-neutral-300">
      Join SkillBridge today and experience a new way to hire top talent.
    </p>

    <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-center md:space-y-0 md:space-x-6">
      <a
        href="/signup"
        className="px-6 py-3 mt-8 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-full shadow hover:bg-blue-700 dark:hover:bg-blue-600 transition"
      >
        Get Started
      </a>
      
      <img
        src="arrowdown.gif"
        alt="Arrow pointing to Get Started"
        className="w-12 h-12"
      />

      
    </div>
  </div>
</section>

      </main>

      {/* FOOTER */}
      <footer className="py-10 mt-8 bg-gradient-to-r from-blue-100 to-blue-200">
        <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-xl font-extrabold text-blue-400 mb-1">
              <img
                src="/logo.svg"
                alt="SkillBridge Logo"
                className="h-8 w-auto"
                loading="lazy"
              />
            </div>
            <p className="text-md text-neutral-400 pt-5">
              Empowering companies to hire top talent quickly, easily, and affordably.
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
        <div className="border-t border-neutral-800 mt-8 pt-4 text-center text-sm text-neutral-500 mx-8">
          &copy; {new Date().getFullYear()} SkillBridge. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
