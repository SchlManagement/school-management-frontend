// src/app/login/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { tenantData } from '../lib/data/tenantData';
import Header from '@/app/components/landingPage/header';

// Mock data for the branches and classes (Eventually fetched from your DB)
const branches = [
  { id: 1, name: 'Main Campus', classes: ['Kindergarten', 'Primary', 'Secondary'] },
  { id: 2, name: 'Lekki Phase 1', classes: ['Primary', 'Secondary'] },
  { id: 3, name: 'Abuja Annex', classes: ['Kindergarten', 'Primary'] },
];

export default function LoginPage() {
  // Form State
  const [serialNumber, setSerialNumber] = useState('');
  const [password, setPassword] = useState('');
  
  // Custom Dropdown & Accordion State
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [expandedBranch, setExpandedBranch] = useState<number | null>(null);
  const [selectedPlacement, setSelectedPlacement] = useState<{ branch: string; className: string } | null>(null);

  const handleClassSelect = (branchName: string, className: string) => {
    setSelectedPlacement({ branch: branchName, className: className });
    setIsDropdownOpen(false); // Close dropdown after selection
    setExpandedBranch(null);  // Reset accordion
  };

  // Smart Auto-Formatting for Serial Number (e.g., U/16/0001)
  const handleSerialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toUpperCase();

    // Prevent the "backspace trap" by letting the user delete normally
    if (val.length < serialNumber.length) {
      setSerialNumber(val);
      return;
    }

    // Strip out everything except letters and numbers
    const raw = val.replace(/[^A-Z0-9]/g, '');
    let formatted = raw;

    // After the 1st character, add the first slash
    if (raw.length >= 1) {
      formatted = raw.substring(0, 1) + '/';
      if (raw.length > 1) {
        formatted += raw.substring(1);
      }
    }
    
    // After the 3rd character (1 letter + 2 digits), add the second slash
    if (raw.length >= 3) {
      formatted = raw.substring(0, 1) + '/' + raw.substring(1, 3) + '/';
      if (raw.length > 3) {
        // Cap the total length to the standard format (1 letter, 2 digits, 4 digits)
        formatted += raw.substring(3, 7); 
      }
    }
    
    setSerialNumber(formatted);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", { selectedPlacement, serialNumber, password });
    // In the future, route to /dashboard here
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* INJECTED HEADER */}
      <Header />

      {/* Container for the split layout - flex-1 pushes it to fill the remaining screen space */}
      <div className="flex-1 flex items-center justify-center p-4 lg:p-8">
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* LEFT SIDE: Brand & Image (Hidden on small mobile screens) */}
          <div className="hidden md:flex md:w-1/2 bg-gray-900 relative items-center justify-center p-12">
            <Image 
              src={tenantData.heroImageMain} 
              alt="School Campus" 
              fill
              className="object-cover opacity-30"
            />
            
            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
              <div className="w-24 h-24 bg-transparent flex items-center justify-center overflow-hidden p-2 shadow-lg">
                <Image 
                  src={tenantData.logoUrl} 
                  alt="Logo" 
                  width={80} 
                  height={80} 
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-white mb-2">{tenantData.schoolName}</h2>
                <p className="text-gray-300 font-medium tracking-wide">Portal Access</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: The Login Form */}
          <div className="w-full md:w-1/2 p-8 lg:p-14 flex flex-col justify-center">
            
            <div className="mb-10 text-center md:text-left">
              <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome Back</h1>
              <p className="text-gray-500 font-medium">Please enter your details to sign in.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              
              {/*  BRANCH & CLASS ACCORDION DROPDOWN */}
              <div className="relative">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Branch & Class
                </label>
                
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full text-left px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-brand-primary transition-colors flex items-center justify-between bg-white hover:bg-gray-50"
                >
                  <span className={`font-semibold ${selectedPlacement ? 'text-gray-900' : 'text-gray-400'}`}>
                    {selectedPlacement 
                      ? `${selectedPlacement.branch} — ${selectedPlacement.className}` 
                      : 'Select your branch and class...'}
                  </span>
                  <svg className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute z-20 w-full mt-2 bg-white border border-gray-100 rounded-lg shadow-xl max-h-72 overflow-y-auto">
                    {branches.map((branch) => (
                      <div key={branch.id} className="border-b border-gray-50 last:border-0">
                        
                        <button
                          type="button"
                          onClick={() => setExpandedBranch(expandedBranch === branch.id ? null : branch.id)}
                          className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none"
                        >
                          <span className="font-bold text-gray-800">{branch.name}</span>
                          <svg className={`w-4 h-4 text-gray-500 transition-transform ${expandedBranch === branch.id ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>

                        {expandedBranch === branch.id && (
                          <div className="bg-white py-1">
                            {branch.classes.map((className) => (
                              <button
                                key={className}
                                type="button"
                                onClick={() => handleClassSelect(branch.name, className)}
                                className="w-full text-left px-8 py-2.5 text-sm font-semibold text-gray-600 hover:text-brand-primary hover:bg-blue-50/50 transition-colors"
                              >
                                {className}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

             
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Serial Number
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="U/16/0001"
                  value={serialNumber}
                  onChange={handleSerialChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all font-bold text-gray-900 tracking-wider placeholder-gray-400 placeholder:tracking-normal placeholder:font-medium"
                />
              </div>

              {/* 3. PASSWORD FIELD */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-bold text-gray-700">
                    Password
                  </label>
                  <Link href="#" className="text-sm font-semibold text-brand-primary hover:underline">
                    Forgot Password?
                  </Link>
                </div>
                <input 
                  type="password" 
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all font-semibold text-gray-900 tracking-widest placeholder-gray-400 placeholder:tracking-normal"
                />
              </div>

              {/* 4. SUBMIT BUTTON */}
              <button 
                type="submit"
                className="w-full bg-brand-primary text-white font-bold text-lg px-4 py-4 rounded-lg hover:opacity-90 shadow-lg shadow-brand-primary/30 transition-all hover:-translate-y-0.5 mt-4"
              >
                Sign In
              </button>
            </form>

            <p className="mt-8 text-center text-sm font-semibold text-gray-500">
              Having trouble logging in? <Link href="#" className="text-brand-primary hover:underline">Contact Admin</Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}