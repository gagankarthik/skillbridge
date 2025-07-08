'use client';

import { ReactNode, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';

export default function AppLayout({ children }: { children: ReactNode }) {
 
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4">
        {children}
      </main>
    </>
  );
}
