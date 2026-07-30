import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { 
  Bot, 
  Map, 
  CheckCircle2, 
  GraduationCap, 
  Sparkles, 
  ArrowRight, 
  FileText, 
  FileCheck, 
  Clock, 
  Bell, 
  AlertTriangle, 
  Search, 
  Users, 
  Building2, 
  ShieldCheck,
  ChevronRight,
  Zap,
  CheckCircle,
  XCircle,
  HelpCircle,
  Layers,
  Activity,
  QrCode
} from 'lucide-react';

export default function Landing() {
  const [activeTab, setActiveTab] = useState<'student' | 'visitor' | 'staff'>('student');
  const [demoQuery, setDemoQuery] = useState("Where is the Scholarship Cell?");

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-slate-900 flex flex-col font-sans selection:bg-[#FF9933]/20 selection:text-[#800000]">
      
      {/* Top Banner Notice */}
      <div className="bg-[#800000] text-white text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2 border-b border-[#600000]">
        <span className="bg-[#FF9933] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Official AI Platform</span>
        <span>Chhatrapati Shahu Ji Maharaj University (CSJMU) Campus Assistant</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md px-6 lg:px-12 h-20 flex items-center justify-between border-b border-slate-200 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#800000] flex items-center justify-center shadow-md shadow-red-950/20">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-[#800000] tracking-tight flex items-center gap-1.5">
              CampusSaathi <span className="text-[#FF9933] font-extrabold text-sm px-2 py-0.5 bg-[#FF9933]/10 rounded-md border border-[#FF9933]/20">AI</span>
            </h1>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest -mt-0.5">Ask. Navigate. Resolve.</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#problem" className="hover:text-[#800000] transition-colors">Overview</a>
          <a href="#capabilities" className="hover:text-[#800000] transition-colors">Capabilities</a>
          <a href="#how-it-works" className="hover:text-[#800000] transition-colors">How It Works</a>
          <a href="#navigator" className="hover:text-[#800000] transition-colors">Navigator</a>
          <a href="#pulse" className="hover:text-[#800000] transition-colors">Campus Pulse</a>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/admin">
            <Button variant="ghost" className="hidden sm:flex text-slate-600 font-bold hover:text-[#800000] hover:bg-slate-100 rounded-xl">
              Admin Login
            </Button>
          </Link>
          <Link to="/student">
            <Button className="bg-[#800000] hover:bg-[#600000] text-white font-bold px-6 py-2.5 rounded-xl shadow-md shadow-red-950/20 transition-all hover:scale-[1.02]">
              Student Portal
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">

        {/* SECTION 1 — HERO */}
        <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#800000]/10 via-[#FF9933]/15 to-transparent blur-3xl rounded-full pointer-events-none"></div>

          <div className="text-center max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FF9933]/30 bg-[#FF9933]/10 px-4 py-1.5 text-xs font-bold text-[#800000] mb-8 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#FF9933] animate-pulse" />
              <span>Next-Gen Campus Intelligence Platform</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Your Campus. <br />
              <span className="text-[#800000]">One Intelligent Assistant.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
              From finding the right office to resolving academic issues, CampusSaathi AI connects students with university services through one unified, intelligent platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
              <Link to="/student/assistant" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto text-base font-bold h-14 px-8 rounded-xl bg-[#800000] hover:bg-[#600000] text-white shadow-xl shadow-red-950/20 flex items-center justify-center gap-2">
                  <Bot className="w-5 h-5" /> Ask CampusSaathi
                </Button>
              </Link>
              <Link to="/student/navigator" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base font-bold h-14 px-8 rounded-xl border-slate-300 text-slate-700 hover:bg-slate-100 flex items-center justify-center gap-2">
                  <Map className="w-5 h-5 text-[#FF9933]" /> Explore Campus
                </Button>
              </Link>
              <Link to="/student/requests/new" className="w-full sm:w-auto">
                <Button variant="ghost" size="lg" className="w-full sm:w-auto text-base font-bold h-14 px-6 rounded-xl text-[#800000] hover:bg-[#800000]/5 flex items-center justify-center gap-2">
                  <FileText className="w-5 h-5" /> Raise Request
                </Button>
              </Link>
            </div>

            {/* Interactive Hero Preview Element */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-4 sm:p-6 text-left max-w-3xl mx-auto relative overflow-hidden">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-xs font-mono text-slate-400 ml-2">campussaathi-ai-assistant v2.4</span>
              </div>
              <div className="flex items-center gap-3 bg-[#F9F9F9] rounded-2xl p-3 border border-slate-200 mb-4">
                <Bot className="w-5 h-5 text-[#800000] shrink-0" />
                <input 
                  type="text" 
                  value={demoQuery} 
                  onChange={(e) => setDemoQuery(e.target.value)}
                  className="bg-transparent text-sm font-semibold text-slate-800 outline-none w-full"
                />
                <button className="bg-[#800000] text-white p-2 rounded-xl text-xs font-bold shrink-0 hover:bg-[#600000] transition-colors">
                  <Search className="w-4 h-4" />
                </button>
              </div>
              <div className="bg-slate-900 text-white rounded-2xl p-4 sm:p-5 text-xs sm:text-sm space-y-3 shadow-inner">
                <div className="flex items-center justify-between text-[11px] text-[#FF9933] font-bold uppercase tracking-wider border-b border-slate-800 pb-2">
                  <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5"/> Instant AI Resolution</span>
                  <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-[10px]">Verified Source</span>
                </div>
                <p className="font-semibold text-slate-200">
                  Scholarship Cell is located at <span className="text-[#FF9933] font-bold">Administrative Block, 1st Floor, Room 112</span>.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 text-[11px] text-slate-300">
                  <div className="bg-slate-800 p-2 rounded-lg">Officer: <span className="font-bold text-white">Mr. Anil Kumar</span></div>
                  <div className="bg-slate-800 p-2 rounded-lg">Hours: <span className="font-bold text-white">10 AM - 4 PM</span></div>
                  <div className="bg-slate-800 p-2 rounded-lg col-span-2 sm:col-span-1">Status: <span className="font-bold text-green-400">Open Now</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — QUICK PROBLEM STATEMENT */}
        <section id="problem" className="py-20 bg-white border-y border-slate-200 px-4 sm:px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#800000] mb-3">The Campus Reality</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Why University Services Feel Frustrating
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
              {[
                { icon: "🏛️", title: "Too Many Offices" },
                { icon: "📋", title: "Confusing Procedures" },
                { icon: "⏳", title: "Long Queues" },
                { icon: "🗺️", title: "Unknown Locations" },
                { icon: "📄", title: "Missing Documents" },
                { icon: "❓", title: "No Visibility" }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#F9F9F9] border border-slate-200 rounded-2xl p-5 text-center flex flex-col items-center justify-center hover:border-red-200 transition-colors">
                  <span className="text-3xl mb-2">{item.icon}</span>
                  <p className="text-xs font-bold text-slate-700">{item.title}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#800000] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
              <div className="absolute right-0 top-0 opacity-10 w-96 h-96 pointer-events-none">
                <GraduationCap className="w-full h-full" />
              </div>
              <div className="relative z-10 max-w-3xl mx-auto">
                <span className="bg-[#FF9933] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">The Solution</span>
                <h4 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight">One Intelligent Campus Platform</h4>
                <p className="text-red-100 text-sm sm:text-base font-medium leading-relaxed">
                  CampusSaathi AI converts confusing university bureaucracy into clear, automated steps. From information discovery to final issue resolution — everything is tracked and transparent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — CORE CAPABILITIES */}
        <section id="capabilities" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#800000] mb-3">Complete Ecosystem</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Built for Campus Resolution
            </h3>
            <p className="text-slate-500 mt-3 font-medium">
              Every tool designed to eliminate student friction and empower administration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: "AI Campus Assistant",
                desc: "Get 24/7 verified answers regarding academic deadlines, syllabus details, exam forms, and university guidelines from official sources.",
                color: "bg-red-100 text-[#800000]"
              },
              {
                icon: FileText,
                title: "Smart Request System",
                desc: "Raise grievances or service requests. AI automatically classifies priority, assigns the concerned department, and creates a tracked ticket.",
                color: "bg-orange-100 text-[#FF9933]"
              },
              {
                icon: Map,
                title: "Campus Navigator",
                desc: "Step-by-step campus routing. Find exact buildings, floors, room numbers, concerned officials, and scan QR codes for indoor navigation.",
                color: "bg-amber-100 text-amber-700"
              },
              {
                icon: FileCheck,
                title: "AI Document Checker",
                desc: "Upload required documents before visiting any office. AI verifies document readiness (ID, marksheets, signatures) to prevent repeat visits.",
                color: "bg-blue-100 text-blue-700"
              },
              {
                icon: Clock,
                title: "Real-time Request Tracking",
                desc: "Full transparency over ticket status (`Submitted` → `Assigned` → `In Review` → `Resolved`) with status update notifications.",
                color: "bg-purple-100 text-purple-700"
              },
              {
                icon: Bell,
                title: "Smart Notifications",
                desc: "Personalized deadline alerts for exam registration, scholarship application submissions, and immediate document action alerts.",
                color: "bg-green-100 text-green-700"
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#800000]/30 transition-all flex flex-col justify-between group">
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${card.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <card.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{card.desc}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#800000]">
                  <span>Explore Feature</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4 — HOW IT WORKS (WORKFLOW) */}
        <section id="how-it-works" className="py-24 bg-slate-900 text-white px-4 sm:px-6 lg:px-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-[#FF9933] text-xs font-extrabold uppercase tracking-widest mb-3 inline-block">Core Methodology</span>
              <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight">The 5-Step Resolution Engine</h3>
              <p className="text-slate-400 mt-4 text-sm sm:text-base font-medium">
                CampusSaathi AI doesn't stop at answering questions — it guides the process to complete resolution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              {[
                { step: "01", label: "ASK", title: "Query AI", desc: "Ask any campus query or state an issue in plain natural language." },
                { step: "02", label: "UNDERSTAND", title: "AI Classification", desc: "AI identifies intent, checks documents, and determines responsible department." },
                { step: "03", label: "ACT", title: "Generate Action", desc: "AI builds a formal ticket or provides exact room & floor navigation route." },
                { step: "04", label: "TRACK", title: "Live Progress", desc: "Real-time updates as administration reviews, comments, and updates status." },
                { step: "05", label: "RESOLVE", title: "Issue Closed", desc: "Verified resolution confirmation and feedback collection." }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-800/80 border border-slate-700/60 rounded-3xl p-6 relative flex flex-col justify-between hover:border-[#FF9933]/50 transition-colors">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-2xl font-black text-[#FF9933] font-mono">{item.step}</span>
                    <span className="text-[10px] font-extrabold tracking-widest px-2.5 py-1 bg-slate-700 rounded-lg text-slate-300">{item.label}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — AI CAMPUS NAVIGATOR */}
        <section id="navigator" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#800000] text-xs font-extrabold uppercase tracking-widest mb-3 block">Smart Wayfinding</span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Never Get Lost On Campus Again
              </h3>
              <p className="text-slate-600 font-medium leading-relaxed mb-8">
                University campuses have dozens of departments spread across multiple blocks. CampusSaathi AI delivers precise building, floor, room, and official contact details in seconds.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Building, floor, and room number accuracy",
                  "Direct contact officer details and office timings",
                  "QR-assisted indoor navigation markers outside offices"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold text-slate-700">{point}</span>
                  </div>
                ))}
              </div>

              <Link to="/student/navigator">
                <Button className="bg-[#800000] hover:bg-[#600000] text-white font-bold h-12 px-6 rounded-xl shadow-md">
                  Navigate Campus Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Mini Location Preview Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[10px] font-extrabold text-[#800000] uppercase tracking-widest bg-red-50 px-2.5 py-1 rounded-md">Location Match</span>
                  <h4 className="text-2xl font-extrabold text-slate-900 mt-2">Scholarship Cell</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Administrative Block • 1st Floor • Room 112</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#FF9933]/10 text-[#FF9933] flex items-center justify-center shrink-0">
                  <Map className="w-6 h-6" />
                </div>
              </div>

              <div className="bg-[#F9F9F9] rounded-2xl p-4 border border-slate-200 space-y-3 text-xs mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-bold">Concerned Official:</span>
                  <span className="font-bold text-slate-800">Mr. Anil Kumar (Officer)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-bold">Office Hours:</span>
                  <span className="font-bold text-slate-800">10:00 AM - 04:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-bold">Official Email:</span>
                  <span className="font-mono text-slate-700">scholarship@csjmu.ac.in</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-xl border border-amber-200/60 text-xs text-amber-800 font-medium">
                <QrCode className="w-5 h-5 text-[#FF9933] shrink-0" />
                <span>Includes QR-assisted indoor navigation markers at main entrance!</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — SMART REQUEST PREVIEW */}
        <section className="py-20 bg-white border-y border-slate-200 px-4 sm:px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#800000] mb-2 block">AI Categorization</span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Smart Request Auto-Routing</h3>
            </div>

            <div className="bg-[#F9F9F9] border border-slate-200 rounded-3xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 shadow-sm">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Student Input</h4>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 text-sm text-slate-700 font-medium italic shadow-xs">
                  "My UP State Scholarship application has been approved on the state portal, but the payment amount has not been credited to my bank account for over 2 weeks."
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#800000] mb-3 flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-[#FF9933]" /> AI Classification Output
                </h4>
                <div className="bg-slate-900 text-white p-5 rounded-2xl text-xs space-y-3 font-mono shadow-md">
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Category:</span>
                    <span className="font-bold text-[#FF9933]">Scholarship</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Target Department:</span>
                    <span className="font-bold text-white">Scholarship Cell</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Priority Assigned:</span>
                    <span className="font-bold text-green-400">Normal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Action:</span>
                    <span className="font-bold text-white">Generate Ticket SCH-1024 →</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 — AI DOCUMENT CHECKER */}
        <section className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Service: Migration Certificate</span>
                <span className="bg-[#FF9933] text-white text-xs font-bold px-3 py-1 rounded-full">Readiness: 75%</span>
              </div>

              <div className="space-y-4">
                {[
                  { name: "Student ID Card", status: "Verified", ok: true },
                  { name: "Previous Marksheets (Sem 1-5)", status: "Verified", ok: true },
                  { name: "Application Form Signature", status: "Missing Signature", ok: false, warning: true },
                  { name: "No-Dues Certificate", status: "Missing File", ok: false }
                ].map((doc, idx) => (
                  <div key={idx} className={`p-3.5 rounded-xl border flex items-center justify-between text-xs font-bold ${doc.ok ? 'bg-green-50/60 border-green-200 text-green-800' : doc.warning ? 'bg-amber-50/60 border-amber-200 text-amber-800' : 'bg-red-50/60 border-red-200 text-red-800'}`}>
                    <span className="flex items-center gap-2">
                      {doc.ok ? <CheckCircle className="w-4 h-4 text-green-600"/> : doc.warning ? <AlertTriangle className="w-4 h-4 text-amber-600"/> : <XCircle className="w-4 h-4 text-red-600"/>}
                      {doc.name}
                    </span>
                    <span>{doc.status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-[#800000] text-xs font-extrabold uppercase tracking-widest mb-3 block">Pre-submission Verification</span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Check Documents Before Visiting Offices
              </h3>
              <p className="text-slate-600 font-medium leading-relaxed mb-8">
                Nothing is worse than standing in line for 2 hours only to be told you're missing a signature or No-Dues certificate. AI Document Checker scans your files in advance so you arrive 100% prepared.
              </p>
              <Link to="/student/document-checker">
                <Button className="bg-[#800000] hover:bg-[#600000] text-white font-bold h-12 px-6 rounded-xl shadow-md">
                  Launch Document Checker <FileCheck className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 8 — CAMPUS PULSE */}
        <section id="pulse" className="py-24 bg-slate-900 text-white px-4 sm:px-6 lg:px-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#FF9933]/20 border border-[#FF9933]/40 text-[#FF9933] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
                  <Activity className="w-4 h-4" /> Admin Intelligence Engine
                </div>
                <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
                  Campus Pulse AI Insights
                </h3>
                <p className="text-slate-300 font-medium leading-relaxed mb-8">
                  CampusSaathi AI doesn't just assist individual students — it gives university management real-time operational visibility. Detect duplicate complaints, monitor incident clusters, and resolve systemic campus issues proactively.
                </p>
                <div className="space-y-4">
                  <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                    <p className="text-xs font-bold text-[#FF9933] uppercase tracking-wider mb-1">Clustering Detection Example</p>
                    <p className="text-sm text-slate-200 font-semibold">"37 Wi-Fi outage complaints detected in Boys Hostel 2 within 3 hours. Auto-clustered into Incident INC-991."</p>
                  </div>
                  <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                    <p className="text-xs font-bold text-green-400 uppercase tracking-wider mb-1">Trend Alert Example</p>
                    <p className="text-sm text-slate-200 font-semibold">"+25% increase in scholarship inquiry volume this week. Recommendation: Publish FAQ announcement."</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
                <div className="flex justify-between items-center border-b border-slate-700 pb-4 mb-6">
                  <span className="text-xs font-bold text-slate-400 font-mono">CAMPUS_PULSE_ANALYTICS</span>
                  <span className="text-xs font-bold text-green-400 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span> Live Monitoring
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-slate-900/60 rounded-xl text-xs">
                    <span className="font-bold text-slate-300">Total Open Requests Today:</span>
                    <span className="font-bold text-white text-base">45</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-900/60 rounded-xl text-xs">
                    <span className="font-bold text-slate-300">Critical Safety & Electrical Issues:</span>
                    <span className="font-bold text-[#FF9933] text-base">1</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-900/60 rounded-xl text-xs">
                    <span className="font-bold text-slate-300">Average Resolution Time:</span>
                    <span className="font-bold text-green-400 text-base">4.2 Hours</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-700 text-center">
                  <Link to="/admin/pulse">
                    <Button className="bg-[#FF9933] hover:bg-[#e68a2e] text-white font-bold w-full py-3 rounded-xl shadow-md">
                      Explore Admin Pulse Dashboard
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9 — USER TYPES */}
        <section className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#800000] mb-2 block">Designed For Everyone</span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Tailored Campus Experience</h3>
          </div>

          <div className="flex justify-center gap-3 mb-12">
            {(['student', 'visitor', 'staff'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all ${activeTab === tab ? 'bg-[#800000] text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
              >
                {tab === 'student' ? 'Students' : tab === 'visitor' ? 'Parents & Visitors' : 'University Staff'}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm max-w-4xl mx-auto">
            {activeTab === 'student' && (
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-slate-900">Empowering University Students</h4>
                <p className="text-slate-600 font-medium leading-relaxed">
                  No more wandering between administrative blocks. Get verified answers, check missing documents before visiting offices, track request statuses transparently, and navigate straight to your destination.
                </p>
                <div className="pt-4">
                  <Link to="/student">
                    <Button className="bg-[#800000] text-white font-bold rounded-xl px-6">Access Student Portal</Button>
                  </Link>
                </div>
              </div>
            )}
            {activeTab === 'visitor' && (
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-slate-900">Guiding Parents & Campus Visitors</h4>
                <p className="text-slate-600 font-medium leading-relaxed">
                  First time visiting CSJMU? Easily locate admission cells, guest houses, audit halls, administrative offices, and official contact numbers without confusion.
                </p>
                <div className="pt-4">
                  <Link to="/student/navigator">
                    <Button className="bg-[#FF9933] text-white font-bold rounded-xl px-6">Use Campus Map</Button>
                  </Link>
                </div>
              </div>
            )}
            {activeTab === 'staff' && (
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-slate-900">Streamlining University Administration</h4>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Reduce overcrowding in administrative offices. Manage assigned student requests systematically, eliminate duplicate complaint work, and gain predictive operational analytics.
                </p>
                <div className="pt-4">
                  <Link to="/admin">
                    <Button className="bg-slate-900 text-white font-bold rounded-xl px-6">Admin Management Portal</Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* SECTION 10 — FINAL CTA */}
        <section className="py-24 bg-gradient-to-br from-[#800000] via-[#600000] to-slate-900 text-white px-4 sm:px-6 lg:px-12 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <span className="bg-[#FF9933] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6 inline-block">Hackathon Ready</span>
            <h3 className="text-4xl sm:text-6xl font-black tracking-tight mb-6">Stop searching. Start resolving.</h3>
            <p className="text-red-100 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
              Experience the future of campus service delivery with CampusSaathi AI today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/student" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto text-base font-bold h-14 px-8 rounded-xl bg-white text-[#800000] hover:bg-slate-100 shadow-xl">
                  Ask CampusSaathi
                </Button>
              </Link>
              <Link to="/student/navigator" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base font-bold h-14 px-8 rounded-xl border-white/30 text-white hover:bg-white/10">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-6 lg:px-12 border-t border-slate-900 text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-6 h-6 text-[#FF9933]" />
              <span className="text-lg font-bold text-white tracking-tight">CampusSaathi AI</span>
            </div>
            <p className="text-slate-500 leading-relaxed">
              Intelligent campus service assistance platform designed for CSJMU and higher education institutions.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider mb-4 text-xs">Quick Links</h5>
            <ul className="space-y-2.5">
              <li><Link to="/student" className="hover:text-white transition-colors">Student Dashboard</Link></li>
              <li><Link to="/student/assistant" className="hover:text-white transition-colors">AI Assistant</Link></li>
              <li><Link to="/student/navigator" className="hover:text-white transition-colors">Campus Navigator</Link></li>
              <li><Link to="/student/document-checker" className="hover:text-white transition-colors">Document Checker</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider mb-4 text-xs">Administration</h5>
            <ul className="space-y-2.5">
              <li><Link to="/admin" className="hover:text-white transition-colors">Admin Overview</Link></li>
              <li><Link to="/admin/pulse" className="hover:text-white transition-colors">Campus Pulse AI</Link></li>
              <li><Link to="/admin" className="hover:text-white transition-colors">Request Management</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider mb-4 text-xs">System Status</h5>
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 text-green-400 font-bold mb-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span> All Systems Operational
              </div>
              <p className="text-[11px] text-slate-500">Version 2.4.0 • Node/Express Backend Foundation Active</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px]">
          <p>© {new Date().getFullYear()} CampusSaathi AI. Developed for AI-centric hackathon demonstration.</p>
          <p className="text-slate-500 font-mono">CSJMU Inspired Architecture</p>
        </div>
      </footer>

    </div>
  );
}
