'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
  Cog6ToothIcon as SettingsIcon,
  ArrowLeftStartOnRectangleIcon as LogoutIcon,
} from '@heroicons/react/24/outline';
import { auth } from '@/lib/firebase'; // adjust this path
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function TopNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showUserCard, setShowUserCard] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const userIconRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Query', href: '/query' },
    { name: 'New Resumes', href: '/upload' },
  ];

  // Listen for auth changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserEmail(user?.email || null);
    });

    return () => unsubscribe();
  }, []);

  // Close card when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userIconRef.current &&
        !userIconRef.current.contains(event.target as Node)
      ) {
        setShowUserCard(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/'); // redirect to landing page
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 z-50 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Left - Logo & Links */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900 mr-8">
              <img src="/logo.svg" alt="Logo" className="h-8 w-auto inline-block" />
            </span>
            <div className="hidden md:flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-black text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right - Icons */}
          <div className="flex items-center space-x-4 relative">
            <div ref={userIconRef} className="relative">
              <button
                onClick={() => setShowUserCard(!showUserCard)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <UserCircleIcon className="h-6 w-6" />
              </button>

              {/* Dropdown card */}
              {showUserCard && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="py-3 px-4 border-b border-gray-100 text-sm text-gray-600">
                    {userEmail ? `Signed in as ${userEmail}` : 'Not signed in'}
                  </div>
                  <div className="py-2 px-4 flex flex-col space-y-2">
                    <Link
                      href="/settings"
                      onClick={() => setShowUserCard(false)}
                      className="text-gray-700 hover:text-black text-sm"
                    >
                      <SettingsIcon className="inline-block mr-2 h-4 w-4" />
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="text-left text-gray-700 hover:text-red-600 text-sm"
                    >
                      <LogoutIcon className="inline-block mr-2 h-4 w-4" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile toggle */}
            <div className="md:hidden">
              <button onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? (
                  <XMarkIcon className="h-6 w-6 text-gray-700" />
                ) : (
                  <Bars3Icon className="h-6 w-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-black text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
