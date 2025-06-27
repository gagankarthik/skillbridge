'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';

const SignupPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/dashboard');
    } catch (err: any) {
      console.error('Signup error:', err);
      setError(err?.message || 'Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 dark:from-neutral-900 to-white dark:to-neutral-950 transition-colors px-4">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-md bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl shadow-lg p-8 space-y-6 animate-slide-up backdrop-blur"
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 animate-fade-in">
            Create Account
          </h2>
          <p className="text-gray-600 dark:text-neutral-400 text-sm animate-fade-in delay-100">
            Join SkillBridge today!
          </p>
        </div>

        {error && (
          <div className="bg-red-50 dark:bg-red-900 text-red-600 dark:text-red-300 border border-red-200 dark:border-red-800 rounded-lg px-4 py-2 text-sm text-center animate-fade-in">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-gray-900 dark:text-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-gray-900 dark:text-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2 rounded-full bg-blue-600 dark:bg-blue-500 text-white font-semibold shadow hover:scale-105 hover:bg-blue-700 dark:hover:bg-blue-600 transition-transform duration-300 disabled:opacity-50"
        >
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>

        <div className="text-center text-sm text-gray-600 dark:text-neutral-400">
          Already have an account?{' '}
          <a
            href="/login"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            Log in
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
