// src/components/admin/Header.tsx
'use client';

import React from 'react';

interface HeaderProps {
  setIsSidebarOpen: (isOpen: boolean) => void;
}

export default function Header({ setIsSidebarOpen }: HeaderProps) {

  // Function to handle the Fullscreen / Maximize toggle
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <header className="w-full h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8 z-30 flex-shrink-0">
      
      {/* Left Side: Mobile Menu, Brand & Search */}
      <div className="flex items-center gap-4 flex-1">
        
        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden p-2 text-gray-500 hover:text-brand-primary hover:bg-gray-100 rounded-md transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Brand Name */}
        <div className="text-brand-primary font-black text-2xl tracking-widest uppercase mr-2 hidden md:block">
          GOE
        </div>

        {/* Global Search Bar (Hidden on very small screens) */}
        <div className="hidden sm:flex items-center w-full max-w-md relative">
          <svg className="w-5 h-5 absolute left-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search students, staff, or settings..." 
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all text-sm font-medium"
          />
        </div>
      </div>

      {/* Right Side: Actions, Notifications & User Profile */}
      <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
        
        {/* Maximize / Fullscreen Button */}
        <button 
          onClick={toggleFullScreen}
          className="hidden sm:block p-2 text-gray-500 hover:text-brand-primary hover:bg-gray-100 rounded-full transition-colors"
          title="Fullscreen"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </button>

        {/* Notification Bell */}
        <button className="relative p-2 text-gray-500 hover:text-brand-primary hover:bg-gray-100 rounded-full transition-colors" title="Notifications">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-1 right-1.5 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
        </button>

        {/* Power / Logout Button */}
        <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors" title="Logout">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 11-12.728 0M12 3v9" />
          </svg>
        </button>

        {/* User Profile Info */}
        <div className="flex items-center gap-3 border-l border-gray-200 pl-4 lg:pl-6 ml-2 lg:ml-0">
          <div className="flex flex-col text-right hidden md:block">
            <span className="text-sm font-bold text-gray-900 block leading-tight">Admin User</span>
            <span className="text-xs font-semibold text-gray-500">Super Admin</span>
          </div>
          
          <button className="h-9 w-9 rounded-full bg-brand-primary text-white font-bold flex items-center justify-center shadow-md hover:opacity-90 transition-opacity">
            A
          </button>
        </div>

      </div>
    </header>
  );
}