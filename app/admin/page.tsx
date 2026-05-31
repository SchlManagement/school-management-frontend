// src/app/dashboard/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  AlertTriangle, 
  BarChart3, 
  MessageSquare, 
  Calculator,
  CreditCard,
  GraduationCap,
  Users2,
  MonitorPlay,
  Activity,
  Users,
  UserPlus
} from 'lucide-react';
import { tenantData } from '../lib/data/tenantData'; // Adjust import if needed
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer 
} from 'recharts';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// --- MOCK DATA ---

const performanceData = [
  { term: '23/24 2nd', performance: 95 },
  { term: '23/24 3rd', performance: 94 },
  { term: '23/24 Annual', performance: 95 },
  { term: '24/25 1st', performance: 98 },
  { term: '24/25 2nd', performance: 93 },
  { term: '24/25 3rd', performance: 90 },
  { term: '24/25 Annual', performance: 96 },
  { term: '25/26 1st', performance: 100 },
];

// Population trend matching your image context (image_2e83c7.png)
const studentPopulationData = [
  { term: '2023/2024 2nd Term', students: 71 },
  { term: '2023/2024 3rd Term', students: 65 },
  { term: '2024/2025 1st Term', students: 54 },
  { term: '2024/2025 2nd Term', students: 54 },
  { term: '2024/2025 3rd Term', students: 52 },
  { term: '2025/2026 1st Term', students: 40 },
];

const featureSlides = [
  { name: 'Finance Management', icon: <CreditCard className="w-10 h-10" />, bg: 'from-teal-400 to-teal-600', description: 'Track fee payments and summary.' },
  { name: 'Result Portal', icon: <BarChart3 className="w-10 h-10" />, bg: 'from-orange-400 to-orange-600', description: 'Generate and check student results.' },
  { name: 'SMS Messaging', icon: <MessageSquare className="w-10 h-10" />, bg: 'from-blue-400 to-blue-600', description: 'Send instant notifications to parents.' },
  { name: 'Student Panel', icon: <GraduationCap className="w-10 h-10" />, bg: 'from-emerald-400 to-emerald-600', description: 'Manage student records and population.' },
  { name: 'Staff Management', icon: <Users2 className="w-10 h-10" />, bg: 'from-slate-600 to-slate-800', description: 'Track staff details and settings.' },
  { name: 'E-Learning', icon: <MonitorPlay className="w-10 h-10" />, bg: 'from-purple-400 to-purple-600', description: 'Virtual classes and digital library.' },
];

const recentStudents = [
  { id: 1, name: 'Ilobinso Michelle', class: 'NURSERY 2', date: '03/04/2024' },
  { id: 2, name: 'Idehen Osazeon', class: 'NURSERY 2', date: '16/08/2022' },
  { id: 3, name: 'Adebayo John', class: 'PRIMARY 1', date: '12/01/2024' },
  { id: 4, name: 'Okafor Sarah', class: 'JSS 1', date: '05/09/2023' },
];

const populationStats = [
  { label: 'Total Active', count: 40, color: 'text-purple-600', bg: 'bg-purple-50' },
  { label: 'Total Male', count: 18, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Total Female', count: 22, color: 'text-pink-500', bg: 'bg-pink-50' },
  { label: 'New Intake', count: 0, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { label: 'Inactive', count: 0, color: 'text-red-500', bg: 'bg-red-50' },
  { label: 'Total Staff', count: 5, color: 'text-gray-900', bg: 'bg-gray-100' },
];

export default function DashboardOverview() {
  // Set up Embla Carousel with Autoplay
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

  return (
    <div className="animate-in fade-in duration-700 space-y-6 pb-10 h-full">
      
      {/* 1. SCHOOL HEADER SECTION */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 relative rounded-full overflow-hidden border-2 border-gray-100 shadow-inner shrink-0 bg-white">
            <Image 
              src={tenantData.logoUrl} 
              alt="School Logo" 
              fill
              className="object-contain p-2"
            />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-wide">
              {tenantData.schoolName}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-gray-500 mt-1 uppercase tracking-wider">
              PLOT 126 EXT 111, PHASE 2 SITE 1 KUBWA, ABUJA
            </p>
          </div>
        </div>
        
        {/* Quick Action Buttons from ZAP Header */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-bold rounded-lg hover:bg-gray-50 transition-colors">
            Change Password
          </button>
          <button className="flex-1 md:flex-none px-4 py-2 bg-emerald-600 text-white text-sm font-bold rounded-lg shadow-sm hover:bg-emerald-700 transition-colors">
            2025/2026 2nd Term
          </button>
        </div>
      </div>

      {/* 2. FULL-WIDTH SUBSCRIPTION BANNER (Replaces Modal) */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex-1 space-y-2">
          <p className="text-red-900/80 text-sm font-medium leading-relaxed">
            <strong className="text-red-700">Important Notice:</strong> We regret to inform you that your invoice has expired, resulting in the temporary shutdown of certain features on the school portal. To regain access and fully restore functionality of the portal, we kindly request that you proceed with payment immediately. Please visit the <Link href="/subscription" className="text-blue-600 hover:underline border border-blue-200 px-2 py-0.5 rounded-full bg-blue-50 text-xs mx-1">subscription</Link> page to make an online payment. Your prompt attention to this matter is highly appreciated. To Contact us call: <strong className="text-gray-900">09055555414</strong>
          </p>
        </div>
      </div>

      {/* 3. FOUR TOP STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <p className="text-red-500 font-black text-xl mb-1 uppercase tracking-wider">Expired</p>
            <h3 className="text-gray-500 font-bold text-xs uppercase tracking-widest">Subscription</h3>
          </div>
          <div className="p-3 bg-red-50 text-red-500 rounded-xl">
            <AlertTriangle className="w-8 h-8" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <p className="text-red-500 font-black text-xl mb-1 uppercase tracking-wider">Not Ready</p>
            <h3 className="text-gray-500 font-bold text-xs uppercase tracking-widest">Result</h3>
          </div>
          <div className="p-3 bg-red-50 text-red-500 rounded-xl">
            <BarChart3 className="w-8 h-8" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <p className="text-gray-900 font-black text-3xl mb-1 leading-none">72</p>
            <h3 className="text-gray-500 font-bold text-xs uppercase tracking-widest mt-1">SMS Unit</h3>
          </div>
          <div className="p-3 bg-blue-50 text-blue-500 rounded-xl">
            <MessageSquare className="w-8 h-8" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <p className="text-emerald-500 font-black text-xl mb-1 uppercase tracking-wider">In Use</p>
            <h3 className="text-gray-500 font-bold text-xs uppercase tracking-widest">Finance</h3>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-500 rounded-xl">
            <Calculator className="w-8 h-8" />
          </div>
        </div>

      </div>

      {/* 4. FULL-WIDTH FEATURES CAROUSEL */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 flex flex-col">
        <div className="mb-6">
          <h2 className="text-base font-black text-gray-900 uppercase tracking-widest">Features</h2>
          <p className="text-sm font-semibold text-gray-400 mt-1">Optimize and Streamline School Management through Our System</p>
        </div>
        
        <div className="embla overflow-hidden w-full" ref={emblaRef}>
          <div className="embla__container flex">
            {featureSlides.map((slide, index) => (
              <div key={index} className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] xl:flex-[0_0_25%] pl-4 first:pl-0">
                <div className="h-full flex flex-col items-center justify-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 relative overflow-hidden group">
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-br ${slide.bg} opacity-10 rounded-bl-full`}></div>
                  <div className={`p-4 bg-white shadow-sm rounded-2xl text-brand-primary mb-4`}>
                    {slide.icon}
                  </div>
                  <h4 className="text-lg font-extrabold text-gray-900 mb-2">{slide.name}</h4>
                  <p className="text-xs font-semibold text-gray-500 px-2">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. BOTTOM GRID: ANALYTICS (Left) & STUDENT STATS (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Side: Analytics Chart (Takes up 2/3 space) */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col overflow-hidden">
          <div className="bg-emerald-500 p-4 border-b border-gray-100 flex items-center justify-between">
             <h2 className="text-sm font-black text-white uppercase tracking-widest">Academic Performance</h2>
          </div>
          
          <div className="flex-1 p-6 w-full h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={true} />
                <XAxis 
                  dataKey="term" 
                  tick={{ fontSize: 11, fontWeight: 700, fill: '#9ca3af' }} 
                  tickLine={false} 
                  axisLine={false}
                  interval={0}
                />
                <YAxis 
                  tick={{ fontSize: 11, fontWeight: 700, fill: '#9ca3af' }} 
                  tickLine={false} 
                  axisLine={false}
                  tickFormatter={(value) => `${value}%`}
                  domain={[0, 100]}
                />
                <Tooltip 
                  contentStyle={{ border: 'none', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} 
                  itemStyle={{ fontWeight: 700, color: '#10b981' }}
                />
                <Legend iconType="square" wrapperStyle={{ fontSize: '12px', fontWeight: 600, paddingTop: '20px' }} />
                <Line 
                  name="Performance" 
                  type="monotone" 
                  dataKey="performance" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  dot={{ r: 4, strokeWidth: 2, fill: 'white', stroke: '#10b981' }} 
                  activeDot={{ r: 6, fill: '#10b981' }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Side Stack: Current Population + Recent Applicants */}
        <div className="flex flex-col gap-6">
          
          {/* Current Population */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col overflow-hidden">
             <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gray-500" />
                <h2 className="text-sm font-black text-gray-800 uppercase tracking-widest">Current Population</h2>
              </div>
            </div>
            <div className="p-0">
              <ul className="divide-y divide-gray-100">
                {populationStats.map((stat, i) => (
                  <li key={i} className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                    <span className={`text-sm font-bold ${stat.color}`}>{stat.label}</span>
                    <span className="text-sm font-black text-gray-900">{stat.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recent Applicants */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-gray-500" />
                <h2 className="text-sm font-black text-gray-800 uppercase tracking-widest">Recent Applicant</h2>
              </div>
            </div>
            <div className="flex-1 p-0 overflow-auto max-h-[300px]">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-gray-500 font-bold text-[10px] uppercase tracking-wider sticky top-0">
                  <tr>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Class</th>
                    <th className="px-4 py-3 text-right">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {recentStudents.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-bold text-gray-900 text-xs">{student.name}</td>
                      <td className="px-4 py-3 font-semibold text-gray-500 text-xs">{student.class}</td>
                      <td className="px-4 py-3 font-semibold text-gray-400 text-xs text-right">{student.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
      
      {/* 6. NEW: ENHANCED PAST STUDENT POPULATION GRAPH */}
      <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col overflow-hidden">
        <div className="bg-emerald-500 p-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-sm font-black text-white uppercase tracking-widest">Past Student Population</h2>
        </div>
        
        <div className="p-6 w-full h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={studentPopulationData} margin={{ top: 10, right: 30, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={true} />
              <XAxis 
                dataKey="term" 
                tick={{ fontSize: 10, fontWeight: 700, fill: '#9ca3af' }} 
                tickLine={false} 
                axisLine={false}
              />
              <YAxis 
                tick={{ fontSize: 11, fontWeight: 700, fill: '#9ca3af' }} 
                tickLine={false} 
                axisLine={false}
                domain={[30, 80]}
              />
              <Tooltip 
                contentStyle={{ border: 'none', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} 
                itemStyle={{ fontWeight: 700, color: '#10b981' }}
              />
              <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', fontWeight: 600, paddingTop: '20px' }} />
              <Line 
                name="No of Students" 
                type="monotone" 
                dataKey="students" 
                stroke="#10b981" 
                strokeWidth={2}
                dot={{ r: 5, strokeWidth: 2, fill: 'white', stroke: '#10b981' }} 
                activeDot={{ r: 7, fill: '#10b981' }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}