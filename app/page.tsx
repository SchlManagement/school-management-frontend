
'use client'; 

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import { tenantData } from './lib/data/tenantData'; 
import Header from '@/app/components/landingPage/header'; 

export default function Page() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prevIndex) => (prevIndex + 1) % tenantData.taglines.length);
    }, 3500); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      
      {/* INJECTED COMPONENT */}
      <Header />

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