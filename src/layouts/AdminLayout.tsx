import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, Users, MapPin, Activity, BookOpen, Settings } from 'lucide-react';
import { cn } from '../components/ui/Button';

export default function AdminLayout() {
  const navItems = [
    { to: '/admin', icon: LayoutDashboard, label: 'Overview', end: true },
    { to: '/admin/requests', icon: FileText, label: 'Requests' },
    { to: '/admin/pulse', icon: Activity, label: 'Campus Pulse' },
    { to: '/admin/students', icon: Users, label: 'Students' },
    { to: '/admin/locations', icon: MapPin, label: 'Locations' },
    { to: '/admin/knowledge', icon: BookOpen, label: 'Knowledge Base' },
    { to: '/admin/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100 font-sans">
      <aside className="w-64 bg-[#800000] text-red-100 flex-shrink-0 flex flex-col hidden lg:flex">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-white tracking-tight">CampusSaathi <span className="text-[#FF9933] font-normal">Admin</span></h1>
          <p className="text-[10px] uppercase tracking-widest text-red-200 mt-2 font-bold opacity-80">CSJMU Management</p>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  "flex items-center px-4 py-3 rounded-xl text-sm font-bold transition-all",
                  isActive ? "bg-white text-[#800000] shadow-md shadow-black/10" : "hover:bg-[#600000] hover:text-white"
                )
              }
            >
              <item.icon className={cn("w-5 h-5 mr-3", "transition-colors")} />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#F9F9F9]">
        {/* Mobile Header */}
        <header className="lg:hidden bg-[#800000] text-white p-4 flex items-center justify-between shadow-md">
          <h1 className="text-xl font-bold">CampusSaathi <span className="text-[#FF9933]">Admin</span></h1>
        </header>
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
