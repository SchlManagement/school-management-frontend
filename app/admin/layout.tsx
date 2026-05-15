// src/app/dashboard/layout.tsx
'use client';

import React, { useState } from 'react';
import Sidebar from '@/app/components/admin/Sidebar';
import Header from '@/app/components/admin/Header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // State to manage the mobile sidebar toggle
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    // FIX 1: Changed to "flex-col" so items stack vertically
    <div className="flex flex-col h-screen bg-gray-50 font-sans text-gray-900 overflow-hidden">
      
      {/* 1. Top Header Component (Now spans 100% width edge-to-edge) */}
      <Header setIsSidebarOpen={setIsSidebarOpen} />

      {/* 2. Lower Area Wrapper (Holds Sidebar + Main Content) */}
      <div className="flex-1 flex overflow-hidden w-full">
        
        {/* Sidebar Component */}
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

        {/* Dynamic Page Content (This is the only part that scrolls) */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
        
      </div>
      
    </div>
  );
}