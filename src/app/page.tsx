"use client";
import React, { useState } from "react";

export default function HomePage() {

  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <nav
        className={`w-full bg-white fixed top-0 z-50 transition-all duration-300 `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
          <div className="text-xl md:text-2xl font-bold text-blue-700 tracking-tight">
            SkillBridge
          </div>
          {/* Center Links */}
          <div className="hidden md:flex gap-6">
            <a href="#use-cases" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Use Cases
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </a>
          </div>
          <div className="flex gap-2">
            <a
              href="/login"
              className="px-4 py-1.5 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold transition text-sm"
            >
              Log In
            </a>
            <a
              href="/signup"
              className="px-4 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 font-semibold transition text-sm"
            >
              Get Started
            </a>
            
          </div>
        </div>
       
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 bg-gradient-to-b from-blue-50 to-white py-28 px-4 mt-16">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-5 text-center leading-tight drop-shadow animate-slide-up">
          Bridge the Skill Gap with <span className="text-blue-600">SkillBridge</span>
        </h1>
        <p className="text-base md:text-xl text-gray-600 mb-8 text-center max-w-2xl animate-fade-in">
          Empower your team or yourself with tailored learning paths, real-world projects, and expert mentorship.
        </p>
        <a
          href="#get-started"
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-bold text-base shadow-lg hover:scale-105 hover:from-blue-700 hover:to-blue-600 transition-transform duration-200 animate-bounce"
        >
          Get Started
        </a>
      </section>

      {/* Content Section */}
      <section className="py-14 bg-white" id="content">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 animate-fade-in">
            Unlock Your Potential with SkillBridge
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-slide-up">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
                alt="Learning"
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center animate-slide-up delay-100">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">A Platform Built for Growth</h3>
              <p className="text-gray-700 mb-3 text-sm md:text-base">
                SkillBridge is designed to help individuals and teams bridge the gap between current skills and future goals. Whether you're a student, professional, or organization, our platform adapts to your needs.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm md:text-base">
                <li>Curated learning paths for every role and industry</li>
                <li>Interactive lessons and real-world challenges</li>
                <li>Progress tracking and personalized recommendations</li>
                <li>Community support and expert guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-14 bg-white" id="use-cases">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10 animate-fade-in">
            Why Choose <span className="text-blue-600">SkillBridge?</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Feature Card 1 */}
            <FeatureCard
              icon={
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9" /><path d="M12 4v16" /><path d="M4 12h16" /></svg>
              }
              title="Personalized Learning"
              desc="Adaptive courses and resources tailored to your goals and skill level."
            />
            {/* Feature Card 2 */}
            <FeatureCard
              icon={
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20l9-5-9-5-9 5 9 5z" /><path d="M12 4v6" /></svg>
              }
              title="Real-World Projects"
              desc="Hands-on projects to build your portfolio and gain practical experience."
              delay="delay-100"
            />
            {/* Feature Card 3 */}
            <FeatureCard
              icon={
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
              }
              title="Expert Mentorship"
              desc="Connect with industry experts for guidance and feedback."
              delay="delay-200"
            />
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-14 bg-blue-50" id="success-stories">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10 animate-fade-in">
            Success Stories
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <StoryCard
              img="https://randomuser.me/api/portraits/men/32.jpg"
              name="Arjun Mehta"
              role="Software Engineer"
              text="SkillBridge helped me transition from college to my first tech job. The real-world projects and mentorship were game changers!"
            />
            <StoryCard
              img="https://randomuser.me/api/portraits/women/44.jpg"
              name="Priya Sharma"
              role="Team Lead"
              text="Our team upskilled rapidly with SkillBridge's adaptive learning paths. Productivity and morale have never been higher."
              delay="delay-100"
            />
            <StoryCard
              img="https://randomuser.me/api/portraits/men/65.jpg"
              name="Rahul Verma"
              role="Data Analyst"
              text="The mentorship and hands-on projects gave me the confidence to switch careers. Highly recommended!"
              delay="delay-200"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-14 bg-white" id="contact">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-7 animate-fade-in">
            Contact Us
          </h2>
          <form
            className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-7 space-y-6 animate-slide-up border border-blue-100"
            onSubmit={e => {
              e.preventDefault();
              alert("Thank you for contacting SkillBridge!");
            }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-base"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-base"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-base"
                placeholder="How can we help you?"
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500"><path d="M2.5 5.5l7.5 7.5 7.5-7.5" /></svg>
                support@skillbridge.com
              </div>
              <button
                type="submit"
                className="px-8 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-bold shadow-lg hover:from-blue-700 hover:to-blue-600 transition text-base"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14 bg-blue-50" id="faq">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 animate-fade-in">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FAQItem
              question="What is SkillBridge?"
              answer="SkillBridge is a platform designed to help individuals and teams bridge the gap between their current skills and future goals through personalized learning, real-world projects, and expert mentorship."
            />
            <FAQItem
              question="Who can use SkillBridge?"
              answer="Anyone! Whether you're a student, professional, or organization, SkillBridge adapts to your needs and helps you grow."
            />
            <FAQItem
              question="How do I get started?"
              answer="Simply sign up for a free account and explore our curated learning paths, projects, and mentorship opportunities."
            />
            <FAQItem
              question="Is there a free trial?"
              answer="Yes, we offer a free trial so you can experience SkillBridge before committing."
            />
            <FAQItem
              question="How can I contact support?"
              answer="You can use the contact form above or email us at support@skillbridge.com."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center animate-fade-in" id="get-started">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to bridge your skill gap?</h2>
        <p className="mb-5 text-base md:text-lg">
          Join SkillBridge today and unlock your potential.
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-bold text-base shadow-lg hover:bg-blue-100 hover:text-blue-700 transition"
        >
          Sign Up Now
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 mt-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Col 1: Brand */}
          <div>
            <div className="text-xl font-extrabold text-blue-400 mb-1">SkillBridge</div>
            <p className="text-gray-400 text-xs">
              Empowering learners and teams to bridge the skill gap with personalized learning and real-world experience.
            </p>
          </div>
          {/* Col 2: Links */}
          <div>
            <div className="font-semibold text-gray-200 mb-2">Quick Links</div>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#use-cases" className="hover:text-blue-400 transition">Use Cases</a>
              </li>
              <li>
                <a href="#get-started" className="hover:text-blue-400 transition">Get Started</a>
              </li>
              <li>
                <a href="#features" className="hover:text-blue-400 transition">Features</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
              </li>
            </ul>
          </div>
          {/* Col 3: Resources */}
          <div>
            <div className="font-semibold text-gray-200 mb-2">Resources</div>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">Help Center</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} SkillBridge. All rights reserved.
        </div>
      </footer>

      {/* Animations (Tailwind CSS custom classes) */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1s ease;
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-slide-up {
          animation: slide-up 1s cubic-bezier(.4,0,.2,1);
        }
        .animate-slide-up.delay-100 {
          animation-delay: 0.1s;
        }
        .animate-slide-up.delay-200 {
          animation-delay: 0.2s;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-8px);}
        }
        .animate-bounce {
          animation: bounce 1.2s infinite;
        }
      `}</style>
    </div>
  );
}

// Feature Card
function FeatureCard({
  icon,
  title,
  desc,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay?: string;
}) {
  return (
    <div
      className={`bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center animate-slide-up ${delay || ""}`}
    >
      <div className="flex justify-center mb-3">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 text-2xl shadow">
          {icon}
        </span>
      </div>
      <h3 className="text-base font-semibold mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

// Success Story Card
function StoryCard({
  img,
  name,
  role,
  text,
  delay,
}: {
  img: string;
  name: string;
  role: string;
  text: string;
  delay?: string;
}) {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-slide-up ${delay || ""}`}>
      <div className="flex items-center mb-3">
        <img src={img} alt={name} className="w-10 h-10 rounded-full mr-2 border-2 border-blue-200" />
        <div>
          <div className="font-semibold text-gray-800 text-sm">{name}</div>
          <div className="text-xs text-gray-500">{role}</div>
        </div>
      </div>
      <p className="text-gray-600 italic text-sm">{`"${text}"`}</p>
    </div>
  );
}

// FAQItem component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-lg shadow p-4 transition cursor-pointer" onClick={() => setOpen(o => !o)}>
      <div className="flex items-center justify-between">
        <span className="font-semibold text-gray-800 text-base">{question}</span>
        <svg
          className={`w-5 h-5 text-blue-500 transform transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 text-gray-600 mt-2 text-sm ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {open && <div>{answer}</div>}
      </div>
    </div>
  );
}