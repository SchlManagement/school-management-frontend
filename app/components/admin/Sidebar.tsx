// src/components/admin/Sidebar.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Building2, List, PlusCircle, Settings, LineChart, ShieldCheck,
  LayoutDashboard, CreditCard, Bell, Zap, Users, GraduationCap, 
  UserSquare2, Users2, BookOpen, CalendarDays, FileText, Printer,
  FileCheck2, CheckSquare, ClipboardList, BookMarked, UserCheck, 
  AlertCircle, Target, PencilRuler, MonitorPlay, Presentation, 
  Library, Video, BrainCircuit, HelpCircle, FileSignature, BookCopy,
  MessageSquare, PieChart, Lock, Palette, Activity, Share2, PanelLeftClose
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

// 1. Massive Data Structure organized into Accordion Groups
// Now using Lucide React icons for both the Parent and the Child elements
const sidebarData = [
  {
    title: 'SCHOOL BRANCH',
    icon: <Building2 className="w-5 h-5" />,
    links: [
      { name: 'Branch List', href: '/dashboard/branch/list', icon: <List className="w-4 h-4" /> },
      { name: 'Create Branch', href: '/dashboard/branch/create', icon: <PlusCircle className="w-4 h-4" /> },
      { name: 'Branch Settings', href: '/dashboard/branch/settings', icon: <Settings className="w-4 h-4" /> },
      { name: 'Branch Performance', href: '/dashboard/branch/performance', icon: <LineChart className="w-4 h-4" /> },
    ]
  },
  {
    title: 'ADMIN CONTROL',
    icon: <ShieldCheck className="w-5 h-5" />,
    links: [
      { name: 'Dashboard Overview', href: '/dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
      { name: 'Subscription', href: '/dashboard/subscription', icon: <CreditCard className="w-4 h-4" /> },
      { name: 'Fee Summary', href: '/dashboard/fees', icon: <FileText className="w-4 h-4" /> },
      { name: 'Performance Analytics', href: '/dashboard/analytics', icon: <LineChart className="w-4 h-4" /> },
      { name: 'Notifications', href: '/dashboard/notifications', icon: <Bell className="w-4 h-4" /> },
      { name: 'Quick Actions', href: '/dashboard/actions', icon: <Zap className="w-4 h-4" /> },
    ]
  },
  {
    title: 'ADMIN PANEL',
    icon: <Users className="w-5 h-5" />,
    links: [
      { name: 'Student', href: '/dashboard/panel/student', icon: <GraduationCap className="w-4 h-4" /> },
      { name: 'Parent', href: '/dashboard/panel/parent', icon: <Users2 className="w-4 h-4" /> },
      { name: 'Staff', href: '/dashboard/panel/staff', icon: <UserSquare2 className="w-4 h-4" /> },
      { name: 'Class', href: '/dashboard/panel/class', icon: <BookOpen className="w-4 h-4" /> },
      { name: 'Subject', href: '/dashboard/panel/subject', icon: <BookCopy className="w-4 h-4" /> },
    ]
  },
  {
    title: 'ADMISSION & TERM',
    icon: <CalendarDays className="w-5 h-5" />,
    links: [
      { name: 'Next Term Config', href: '/dashboard/term/next', icon: <Settings className="w-4 h-4" /> },
      { name: 'Admission Session', href: '/dashboard/admission/session', icon: <CalendarDays className="w-4 h-4" /> },
      { name: 'Admission Form', href: '/dashboard/admission/form', icon: <FileSignature className="w-4 h-4" /> },
      { name: 'Custom Print', href: '/dashboard/print', icon: <Printer className="w-4 h-4" /> },
    ]
  },
  {
    title: 'RESULT CONTROL',
    icon: <FileCheck2 className="w-5 h-5" />,
    links: [
      { name: 'Generate Result', href: '/dashboard/result/generate', icon: <CheckSquare className="w-4 h-4" /> },
      { name: 'Broadsheet', href: '/dashboard/result/broadsheet', icon: <ClipboardList className="w-4 h-4" /> },
      { name: 'Check Result', href: '/dashboard/result/check', icon: <FileCheck2 className="w-4 h-4" /> },
      { name: 'Transcript', href: '/dashboard/result/transcript', icon: <BookMarked className="w-4 h-4" /> },
      { name: 'Grade Setting', href: '/dashboard/result/grades', icon: <Settings className="w-4 h-4" /> },
      { name: 'Result Summary', href: '/dashboard/result/summary', icon: <PieChart className="w-4 h-4" /> },
      { name: 'Staff Setting', href: '/dashboard/result/staff', icon: <UserCheck className="w-4 h-4" /> },
      { name: 'School Head Setting', href: '/dashboard/result/head', icon: <UserCheck className="w-4 h-4" /> },
      { name: 'Behaviour', href: '/dashboard/result/behaviour', icon: <AlertCircle className="w-4 h-4" /> },
      { name: 'Score Setting', href: '/dashboard/result/score', icon: <Target className="w-4 h-4" /> },
    ]
  },
  {
    title: 'ASSESSMENT & EXTRA',
    icon: <PencilRuler className="w-5 h-5" />,
    links: [
      { name: 'Create & Edit ER', href: '/dashboard/assess/create-er', icon: <PencilRuler className="w-4 h-4" /> },
      { name: 'Generate ER', href: '/dashboard/assess/generate-er', icon: <CheckSquare className="w-4 h-4" /> },
      { name: 'Check Extra Result', href: '/dashboard/assess/check-er', icon: <FileCheck2 className="w-4 h-4" /> },
      { name: 'End of Term Result', href: '/dashboard/assess/end-term', icon: <FileText className="w-4 h-4" /> },
      { name: 'Input Class Assess', href: '/dashboard/assess/input', icon: <PlusCircle className="w-4 h-4" /> },
      { name: 'Check Class Assess', href: '/dashboard/assess/check', icon: <CheckSquare className="w-4 h-4" /> },
      { name: 'Other Result Input', href: '/dashboard/assess/other', icon: <List className="w-4 h-4" /> },
    ]
  },
  {
    title: 'E-LEARNING',
    icon: <MonitorPlay className="w-5 h-5" />,
    links: [
      { name: 'Topics', href: '/dashboard/elearning/topics', icon: <BookOpen className="w-4 h-4" /> },
      { name: 'Class Activity', href: '/dashboard/elearning/activity', icon: <Presentation className="w-4 h-4" /> },
      { name: 'E-Library', href: '/dashboard/elearning/library', icon: <Library className="w-4 h-4" /> },
      { name: 'Virtual Class', href: '/dashboard/elearning/virtual', icon: <Video className="w-4 h-4" /> },
      { name: 'Online CBT (Exams)', href: '/dashboard/elearning/cbt', icon: <BrainCircuit className="w-4 h-4" /> },
      { name: 'Question Bank', href: '/dashboard/elearning/questions', icon: <HelpCircle className="w-4 h-4" /> },
    ]
  },
  {
    title: 'ADMIN EXTRA',
    icon: <Settings className="w-5 h-5" />,
    links: [
      { name: 'Public Pages (Blog/Post)', href: '/dashboard/extra/public', icon: <FileText className="w-4 h-4" /> },
      { name: 'SMS Management', href: '/dashboard/extra/sms', icon: <MessageSquare className="w-4 h-4" /> },
      { name: 'Statistics', href: '/dashboard/extra/stats', icon: <PieChart className="w-4 h-4" /> },
      { name: 'Report', href: '/dashboard/extra/report', icon: <ClipboardList className="w-4 h-4" /> },
      { name: 'My Account', href: '/dashboard/extra/account', icon: <UserSquare2 className="w-4 h-4" /> },
      { name: 'Chat', href: '/dashboard/extra/chat', icon: <MessageSquare className="w-4 h-4" /> },
    ]
  },
  {
    title: 'SYSTEM SECURITY',
    icon: <Lock className="w-5 h-5" />,
    links: [
      { name: 'School Profile', href: '/dashboard/system/profile', icon: <Building2 className="w-4 h-4" /> },
      { name: 'Logo & Branding', href: '/dashboard/system/branding', icon: <Palette className="w-4 h-4" /> },
      { name: 'Session/Term Config', href: '/dashboard/system/session', icon: <CalendarDays className="w-4 h-4" /> },
      { name: 'Roles & Permissions', href: '/dashboard/system/roles', icon: <ShieldCheck className="w-4 h-4" /> },
      { name: '2FA Settings', href: '/dashboard/system/2fa', icon: <Lock className="w-4 h-4" /> },
      { name: 'Activity Logs', href: '/dashboard/system/logs', icon: <Activity className="w-4 h-4" /> },
      { name: 'Integrations', href: '/dashboard/system/integrations', icon: <Share2 className="w-4 h-4" /> },
    ]
  }
];

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();
  
  // State to track which accordion is open. Default to the first one.
  const [openAccordion, setOpenAccordion] = useState<string | null>('ADMIN CONTROL');

  const toggleAccordion = (title: string) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };

  return (
    <>
      {/* Mobile Dark Overlay Backdrop */}
      <div 
        className={`fixed inset-0 bg-gray-900/50 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* The Actual Sidebar */}
      <aside 
        className={`fixed lg:static inset-y-0 left-0 z-50 w-[280px] bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 flex flex-col shadow-xl lg:shadow-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200 bg-gray-50 flex-shrink-0">
          <div className="flex flex-col">
            <span className="font-extrabold text-sm tracking-tight text-brand-primary uppercase">Administrator</span>
            <span className="text-xs font-semibold text-gray-500">GOE Portal</span>
          </div>
          
          <button 
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-gray-500 hover:text-red-500 hover:bg-red-50 p-1.5 rounded-md transition-colors"
          >
            <PanelLeftClose className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Area */}
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1 custom-scrollbar">
          {sidebarData.map((section) => {
            const isExpanded = openAccordion === section.title;
            
            // Check if any child link is currently active to highlight the parent header
            const hasActiveChild = section.links.some(link => pathname === link.href);

            return (
              <div key={section.title} className="mb-1 border-b border-gray-50 pb-1">
                
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(section.title)}
                  className={`w-full flex items-center justify-between px-3 py-3 rounded-lg font-bold text-sm transition-all focus:outline-none ${
                    hasActiveChild && !isExpanded
                      ? 'bg-brand-primary/10 text-brand-primary' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-brand-primary'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-brand-primary/80">{section.icon}</span>
                    <span className="tracking-wide">{section.title}</span>
                  </div>
                  
                  {/* Rotating Caret Icon - Using pure SVG for crisp rotation */}
                  <svg 
                    className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Accordion Body (Links) */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? 'max-h-96 opacity-100 mt-1' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="flex flex-col space-y-0.5 pl-4 pr-2 pb-2">
                    {section.links.map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setIsOpen(false)} // Close sidebar on mobile after clicking
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-semibold transition-all ${
                            isActive 
                              ? 'bg-brand-primary text-white shadow-sm' 
                              : 'text-gray-500 hover:text-brand-primary hover:bg-blue-50'
                          }`}
                        >
                          <span className={`${isActive ? 'text-white' : 'text-gray-400'}`}>
                            {link.icon}
                          </span>
                          {link.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
}