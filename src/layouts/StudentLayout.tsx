import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Home, MessageSquare, Map, FileText, User } from 'lucide-react';
import { cn } from '../components/ui/Button';

export default function StudentLayout() {
  const navItems = [
    { to: '/student', icon: Home, label: 'Home', end: true },
    { to: '/student/assistant', icon: MessageSquare, label: 'Assistant' },
    { to: '/student/navigator', icon: Map, label: 'Navigate' },
    { to: '/student/requests', icon: FileText, label: 'Requests' },
    { to: '/student/profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F9F9] text-slate-800 pb-16 md:pb-0 md:pl-64">
      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-50 flex justify-around items-center h-16">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center w-full h-full text-xs font-medium transition-colors",
                isActive ? "text-[#800000]" : "text-slate-500 hover:text-[#800000]"
              )
            }
          >
            <item.icon className="w-6 h-6 mb-1" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col fixed top-0 left-0 bottom-0 w-64 bg-[#800000] text-white flex-shrink-0 z-40">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-[#800000] rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-[#800000] rounded-full"></div>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-sm leading-tight uppercase tracking-wider">CSJMU</h1>
              <p className="text-[10px] opacity-70">CampusSaathi AI</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 py-6 px-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  "p-3 rounded-lg flex items-center gap-3 transition-opacity text-sm font-medium",
                  isActive ? "bg-white/10 border-l-4 border-[#FF9933] opacity-100" : "opacity-70 hover:opacity-100"
                )
              }
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
        
        <div className="mt-auto p-4 hidden lg:block">
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <p className="text-[10px] text-[#FF9933] font-bold uppercase tracking-widest mb-1">Campus Pulse</p>
            <p className="text-[11px] opacity-80 leading-snug">Exam portal traffic is high today. Apply early.</p>
          </div>
        </div>
        
        <div className="p-6 border-t border-white/10 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#FF9933] flex items-center justify-center font-bold text-xs text-white">RS</div>
          <div className="overflow-hidden">
            <p className="text-xs font-semibold truncate text-white">Rahul Sharma</p>
            <p className="text-[10px] opacity-60 text-white">B.Tech CS - Sem 4</p>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}
