'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful:', userCredential.user);
      router.push('/dashboard');
    } catch (err: any) {
      console.error('Login error:', err);
      switch (err.code) {
        case 'auth/invalid-email':
          setError('Invalid email address.');
          break;
        case 'auth/user-not-found':
          setError('No user found with this email.');
          break;
        case 'auth/wrong-password':
          setError('Incorrect password.');
          break;
        case 'auth/too-many-requests':
          setError('Too many login attempts. Please try again later.');
          break;
        default:
          setError(err.message || 'Login failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 dark:from-neutral-900 to-white dark:to-neutral-950 transition-colors px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl shadow-lg p-8 space-y-6 animate-slide-up backdrop-blur"
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 animate-fade-in">
            Welcome Back
          </h2>
          <p className="text-gray-600 dark:text-neutral-400 text-sm animate-fade-in delay-100">
            Login to your SkillBridge account
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
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <div className="text-center text-sm text-gray-600 dark:text-neutral-400">
          Don't have an account?{' '}
          <a
            href="/signup"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            Sign up
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
