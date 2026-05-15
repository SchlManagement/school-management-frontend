// src/components/Header.tsx
'use client'; 

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import { tenantData } from '../../lib/data/tenantData';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-white shadow-md">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="relative w-14 h-14 bg-white flex items-center justify-center overflow-hidden">
              <Image 
                src={tenantData.logoUrl} 
                alt={`${tenantData.schoolName} Logo`} 
                fill
                className="object-contain p-1" 
                sizes="56px"
              />
            </div>
            <span className="font-extrabold text-base tracking-tight hidden sm:block w-36 leading-tight text-brand-primary">
              {tenantData.schoolName}
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-2 text-base font-semibold text-gray-600">
            <Link href="#" className="px-4 py-2 rounded-md hover:bg-gray-50 hover:text-brand-primary transition-all">About</Link>
            <Link href="#" className="px-4 py-2 rounded-md hover:bg-gray-50 hover:text-brand-primary transition-all">Academics</Link>
            <Link href="#" className="px-4 py-2 rounded-md hover:bg-gray-50 hover:text-brand-primary transition-all">Admission</Link>
            <Link href="#" className="px-4 py-2 rounded-md hover:bg-gray-50 hover:text-brand-primary transition-all">Students</Link>
            <Link href="#" className="px-4 py-2 rounded-md hover:bg-gray-50 hover:text-brand-primary transition-all">Blog</Link>
          </div>

          {/* Desktop Action Buttons & Hamburger Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              {/* UPDATED: Route changed to /login */}
              <Link href="/login" className="bg-brand-primary text-white px-6 py-2.5 rounded-md hover:opacity-90 shadow-sm transition-all font-semibold text-sm">
                Login
              </Link>
            </div>

            <button 
              className="lg:hidden p-2 text-gray-600 hover:text-brand-primary hover:bg-gray-100 rounded-md transition-all focus:outline-none"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU SLIDE-IN */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <aside 
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <span className="font-extrabold text-brand-primary">Menu</span>
          
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-md transition-all focus:outline-none"
            aria-label="Close Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col px-4 py-6 space-y-2 text-lg font-semibold text-gray-700 flex-1">
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-md hover:bg-gray-50 hover:text-brand-primary transition-all">About</Link>
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-md hover:bg-gray-50 hover:text-brand-primary transition-all">Academics</Link>
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-md hover:bg-gray-50 hover:text-brand-primary transition-all">Admission</Link>
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-md hover:bg-gray-50 hover:text-brand-primary transition-all">Students</Link>
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-md hover:bg-gray-50 hover:text-brand-primary transition-all">Blog</Link>
        </div>

        <div className="p-6 border-t border-gray-100">
          {/* UPDATED: Route changed to /login */}
          <Link 
            href="/login" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center w-full bg-brand-primary text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity font-bold"
          >
            LOGIN
          </Link>
        </div>
      </aside>
    </>
  );
}