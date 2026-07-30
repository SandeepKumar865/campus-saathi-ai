import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, FileText, Map, FileCheck, Search, Bell, Clock, ChevronRight, Mic } from 'lucide-react';
import { currentUser, mockTickets, mockNotifications } from '../../data/mockData';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const recentTickets = mockTickets.filter(t => t.studentId === currentUser.id).slice(0, 2);
  const unreadNotifs = mockNotifications.filter(n => !n.isRead).length;

  const handleAskAI = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/student/assistant?q=${encodeURIComponent(query)}`);
    }
  };

  const quickServices = [
    { name: 'Scholarship', icon: '🎓' },
    { name: 'Examination', icon: '📝' },
    { name: 'Fee & Payments', icon: '💳' },
    { name: 'Certificates', icon: '📜' },
    { name: 'Hostel', icon: '🏢' },
    { name: 'ID Card', icon: '🪪' },
  ];

  return (
    <div className="flex-1 flex flex-col h-full bg-[#F9F9F9] text-slate-800">
      {/* Header Bar */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
        <div>
          <h2 className="text-xl font-bold text-[#800000]">Good Morning, {currentUser.name.split(' ')[0]} 👋</h2>
          <p className="text-xs text-slate-500">“Ask. Navigate. Resolve.”</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative cursor-pointer">
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            <Bell className="w-6 h-6 text-slate-400" />
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full cursor-pointer">
            <span className="text-[10px] font-bold text-green-600 px-1.5 py-0.5 bg-green-100 rounded">VERIFIED</span>
            <span className="text-xs font-medium text-slate-700">Student Profile</span>
          </div>
        </div>
      </header>

      <div className="p-4 sm:p-8 flex-1 overflow-y-auto flex flex-col gap-8">
        
        {/* AI Hero Search */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 relative overflow-hidden shrink-0">
          <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-[#FF9933]/10 to-transparent pointer-events-none"></div>
          <div className="relative z-10">
            <h3 className="text-lg font-semibold mb-4 text-slate-800">How can <span className="text-[#800000]">CampusSaathi</span> help you today?</h3>
            <form onSubmit={handleAskAI} className="flex items-center bg-slate-100 rounded-2xl p-2 focus-within:ring-2 ring-[#800000]/20 transition-all">
              <div className="p-3 text-slate-400">
                <Bot className="w-6 h-6" />
              </div>
              <input 
                type="text" 
                placeholder="Ask about scholarships, exams, certificates, campus locations..." 
                className="flex-1 bg-transparent border-none outline-none text-slate-800 placeholder:text-slate-400 font-medium"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="button" className="p-3 text-slate-400 hover:text-[#800000] hidden sm:block">
                <Mic className="w-5 h-5" />
              </button>
              <button type="submit" className="bg-[#800000] text-white p-3 rounded-xl hover:bg-[#600000] transition-colors ml-2">
                <Search className="w-5 h-5" />
              </button>
            </form>
            <div className="mt-4 flex gap-2 flex-wrap items-center">
              <span className="text-[11px] font-medium text-slate-500 uppercase tracking-tighter mr-2">Suggested:</span>
              <button type="button" onClick={() => setQuery("Where is the Registrar's Office?")} className="px-3 py-1 bg-slate-100 rounded-lg text-xs text-slate-600 hover:bg-[#FF9933]/10 transition-colors">"Where is the Registrar's Office?"</button>
              <button type="button" onClick={() => setQuery("Apply for Migration Certificate")} className="px-3 py-1 bg-slate-100 rounded-lg text-xs text-slate-600 hover:bg-[#FF9933]/10 transition-colors">"Apply for Migration Certificate"</button>
            </div>
          </div>
        </section>
        
        {/* Quick Actions Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 shrink-0">
          <div onClick={() => navigate('/student/navigator')} className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-[#800000] transition-colors cursor-pointer group">
            <div className="w-10 h-10 bg-[#800000]/10 rounded-xl flex items-center justify-center text-[#800000] mb-3 group-hover:bg-[#800000] group-hover:text-white transition-colors">
              <Map className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-800">Campus Nav</h4>
            <p className="text-[10px] text-slate-500">Find buildings & offices</p>
          </div>
          
          <div onClick={() => navigate('/student/requests/new')} className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-[#FF9933] transition-colors cursor-pointer group">
            <div className="w-10 h-10 bg-[#FF9933]/10 rounded-xl flex items-center justify-center text-[#FF9933] mb-3 group-hover:bg-[#FF9933] group-hover:text-white transition-colors">
              <FileText className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-800">Raise Request</h4>
            <p className="text-[10px] text-slate-500">Complaint & services</p>
          </div>

          <div onClick={() => navigate('/student/document-checker')} className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-blue-600 transition-colors cursor-pointer group">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <FileCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-800">Doc Checker</h4>
            <p className="text-[10px] text-slate-500">Verify AI documents</p>
          </div>

          <div onClick={() => navigate('/student/requests')} className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-green-600 transition-colors cursor-pointer group">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-3 group-hover:bg-green-600 group-hover:text-white transition-colors">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-800">My Requests</h4>
            <p className="text-[10px] text-slate-500">Track your tickets</p>
          </div>
        </div>

        {/* Dashboard Bottom Split */}
        <div className="flex flex-col lg:flex-row gap-8 shrink-0 pb-8">
          
          {/* Requests Tracking */}
          <div className="flex-[3] flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400">Recent Requests</h4>
              <button onClick={() => navigate('/student/requests')} className="text-xs font-semibold text-[#800000] hover:underline">View All</button>
            </div>
            <div className="space-y-3 overflow-hidden">
              {recentTickets.map((ticket, index) => (
                <div key={ticket.id} onClick={() => navigate(`/student/requests/${ticket.id}`)} className={`bg-white p-4 rounded-2xl border border-slate-200 flex items-center gap-4 cursor-pointer hover:border-[#800000] transition-colors ${index > 0 ? 'opacity-90' : ''}`}>
                  <div className={`w-2 h-12 rounded-full ${ticket.status === 'Resolved' ? 'bg-green-500' : ticket.status === 'Action Required' ? 'bg-red-500' : 'bg-[#FF9933]'}`}></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h5 className="text-sm font-bold text-slate-800 truncate pr-2">{ticket.title}</h5>
                      <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full uppercase shrink-0 ${ticket.status === 'Resolved' ? 'bg-green-100 text-green-700' : ticket.status === 'Action Required' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>
                        {ticket.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Ticket: <span className="font-mono">{ticket.id}</span> • {ticket.department}</p>
                  </div>
                </div>
              ))}
              {recentTickets.length === 0 && (
                <div className="text-center py-6 bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
                  No recent requests found.
                </div>
              )}
            </div>
          </div>

          {/* Smart Directory Mini (Contacts) */}
          <div className="flex-[2] flex flex-col">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Verified Contacts</h4>
            <div className="bg-[#800000] rounded-2xl p-5 text-white flex-1 flex flex-col justify-center shadow-md relative overflow-hidden">
              {/* Subtle background pattern/gradient */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
              
              <div className="relative z-10 flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                  <Map className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold">Scholarship Cell</p>
                  <p className="text-[11px] opacity-70">Mr. Anil Kumar, Officer</p>
                </div>
              </div>
              <div className="relative z-10 space-y-2 mb-4">
                <div className="flex items-center gap-2 text-xs opacity-90">
                  <Map className="w-4 h-4 shrink-0" />
                  Admin Block, 1st Floor, Room 112
                </div>
                <div className="flex items-center gap-2 text-xs opacity-90">
                  <Clock className="w-4 h-4 shrink-0" />
                  Office Hours: 10:00 AM - 04:00 PM
                </div>
              </div>
              <button onClick={() => navigate('/student/navigator')} className="relative z-10 w-full py-2.5 bg-[#FF9933] text-white rounded-xl font-bold text-xs shadow-lg shadow-black/20 hover:bg-[#e68a2e] transition-colors">
                Navigate to Office
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
