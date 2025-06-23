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
            router.push('/dashboard'); // Navigate after successful signup
        } catch (err: any) {
            setError(err?.message || 'Signup failed. Please try again.');
            console.error('Signup error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4">
            <form
                onSubmit={handleSignup}
                className="bg-white/90 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-blue-100 backdrop-blur-md"
            >
                <div className="flex flex-col items-center mb-6">
                    <h2 className="text-3xl font-extrabold text-blue-700 mb-1">Create Account</h2>
                    <p className="text-gray-500 text-sm">Join SkillBridge today!</p>
                </div>
                {error && (
                    <div className="mb-4 text-red-600 text-center bg-red-50 rounded py-2 px-3">{error}</div>
                )}
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        placeholder="Enter your password"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-colors disabled:opacity-50 shadow-lg"
                >
                    {loading ? 'Signing up...' : 'Sign Up'}
                </button>
                <div className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <a href="/login" className="text-blue-600 hover:underline font-medium">
                        Log in
                    </a>
                </div>
            </form>
        </div>
    );
};

export default SignupPage;
