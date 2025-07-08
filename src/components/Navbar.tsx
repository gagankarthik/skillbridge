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
import { signOut } from 'aws-amplify/auth';
import { getCurrentUser, fetchUserAttributes} from 'aws-amplify/auth';

export default function TopNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showUserCard, setShowUserCard] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);

 
  
  const userIconRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Query', href: '/query' },
    { name: 'New Resumes', href: '/upload' },
  ];

  useEffect(() => {
  const fetchUser = async () => {
    try {
      const user = await getCurrentUser();
      const userAttributes = await fetchUserAttributes();
      setUserName(userAttributes.email || null);
    } catch (error) {
      console.error('No user found, redirecting to signup:', error);
      router.push('/signup');
    }
  };
  fetchUser();
}, [router]);



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
                  <div className="py-2 px-4 border-b border-gray-200">
                    <p className="text-sm text-gray-700">Signed in as:</p>
                    <p className="text-sm font-medium text-gray-900">{userName || 'No User'}</p>
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
                      onClick={async () => {
                        await signOut();
                        router.push('/');
                      }}
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
