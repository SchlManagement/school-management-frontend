// src/features/public/LandingPage.tsx
'use client'; 

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import { tenantData } from './lib/data/tenantData'; 

export default function Page() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prevIndex) => (prevIndex + 1) % tenantData.taglines.length);
    }, 3500); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      
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

          {/* Desktop Links - Added padding and hover background box */}
          {/* Changed gap-8 to gap-2 because the padding adds natural spacing */}
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
              <Link href="/portal" className="bg-brand-primary text-white px-6 py-2.5 rounded-md hover:opacity-90 shadow-sm transition-all font-semibold text-sm">
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

        {/* Sidebar Links - Added display block, padding, and hover background box */}
        <div className="flex flex-col px-4 py-6 space-y-2 text-lg font-semibold text-gray-700 flex-1">
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-md hover:bg-gray-50 hover:text-brand-primary transition-all">About</Link>
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-md hover:bg-gray-50 hover:text-brand-primary transition-all">Academics</Link>
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-md hover:bg-gray-50 hover:text-brand-primary transition-all">Admission</Link>
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-md hover:bg-gray-50 hover:text-brand-primary transition-all">Students</Link>
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-md hover:bg-gray-50 hover:text-brand-primary transition-all">Blog</Link>
        </div>

        <div className="p-6 border-t border-gray-100">
          <Link 
            href="/portal" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center w-full bg-brand-primary text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity font-bold"
          >
            LOGIN TO PORTAL
          </Link>
        </div>
      </aside>

      {/* HERO SECTION */}
      <main className="container mx-auto px-6 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="space-y-6">
            <p className="text-sm font-bold tracking-wider text-gray-500 uppercase">
              Welcome to our portal
            </p>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-brand-primary transition-colors duration-300">
              {tenantData.schoolName}
            </h1>
            
            <h2 className="text-2xl font-bold text-brand-primary border-l-4 border-brand-primary pl-4 h-8 flex items-center">
              <span key={taglineIndex} className="animate-fade-in-up">
                {tenantData.taglines[taglineIndex]}
              </span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              {tenantData.description}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-brand-primary text-white px-8 py-3 rounded-md font-bold hover:opacity-90 shadow-lg transition-all hover:-translate-y-0.5">
                ENROLL NOW
              </button>
              <Link href="/login" className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-3 rounded-md font-bold hover:border-brand-primary hover:text-brand-primary transition-colors flex items-center justify-center">
                LOGIN
              </Link>
            </div>
          </div>

          {/* Right Column: Image Composition */}
          <div className="relative h-100 lg:h-125 flex items-center justify-center mt-10 lg:mt-0">
            <div className="relative w-75 h-75 lg:w-100 lg:h-100 rounded-full overflow-hidden shadow-2xl border-8 border-white z-10 transition-transform duration-700 hover:scale-105">
              <Image 
                src={tenantData.heroImageMain} 
                alt="Students reading" 
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 300px, 400px"
              />
            </div>
            
            <div className="absolute top-10 right-4 lg:right-12 w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden shadow-xl border-4 border-white z-20">
              <Image 
                src={tenantData.heroImageSmall1} 
                alt="Student portrait" 
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 96px, 128px"
              />
            </div>
            
            <div className="absolute bottom-10 right-0 lg:-right-4 w-20 h-20 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-xl border-4 border-white z-20">
              <Image 
                src={tenantData.heroImageSmall2} 
                alt="School activity" 
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80px, 112px"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}