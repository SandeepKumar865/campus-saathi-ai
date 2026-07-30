import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { FileText, AlertTriangle, CheckCircle2, Clock, Users, Activity, ChevronRight } from 'lucide-react';
import { mockTickets, mockIncidents } from '../../data/mockData';
import { Badge } from '../../components/ui/Badge';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  const openTickets = mockTickets.filter(t => t.status !== 'Resolved').length;
  const criticalTickets = mockTickets.filter(t => t.priority === 'Critical' && t.status !== 'Resolved').length;
  const recentIncidents = mockIncidents.filter(i => i.status !== 'Resolved');

  return (
    <div className="p-6 md:p-8 space-y-8 bg-[#F9F9F9] min-h-full text-slate-800">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Overview</h1>
          <p className="text-slate-500 mt-1 font-medium">CampusSaathi operational metrics for today.</p>
        </div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
          {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#800000]/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100">
              <FileText className="w-5 h-5 text-slate-700" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Total Open Requests</p>
              <h3 className="text-3xl font-bold text-slate-800">{openTickets + 42}</h3>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-3xl p-6 border border-[#FF9933]/30 shadow-sm relative overflow-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#FF9933]"></div>
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#FF9933]/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
          <div className="flex items-center gap-4 relative z-10 pl-2">
            <div className="w-12 h-12 rounded-2xl bg-[#FF9933]/10 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-[#FF9933]" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#FF9933] mb-1">Critical Issues</p>
              <h3 className="text-3xl font-bold text-slate-800">{criticalTickets}</h3>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-green-50 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center border border-green-100">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Resolved Today</p>
              <h3 className="text-3xl font-bold text-slate-800">28</h3>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-purple-50 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center border border-purple-100">
              <Clock className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Avg Resolution Time</p>
              <h3 className="text-3xl font-bold text-slate-800">4.2h</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Urgent Attention Needed */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-widest px-2">Requires Attention</h2>
            <Link to="/admin/requests" className="text-xs text-[#800000] font-bold flex items-center hover:bg-[#800000]/5 px-3 py-2 rounded-xl transition-colors">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="space-y-4">
            {mockTickets.filter(t => t.priority === 'Critical' || t.status === 'Action Required').map(ticket => (
              <div key={ticket.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm relative overflow-hidden transition-all hover:border-[#800000]/30 hover:shadow-md group">
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${ticket.priority === 'Critical' ? 'bg-[#FF9933]' : 'bg-[#800000]'}`}></div>
                <div className="flex items-center gap-5 pl-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-bold text-slate-400 font-mono bg-slate-100 px-2 py-1 rounded-md">{ticket.id}</span>
                      <span className={`px-2 py-1 text-[10px] font-bold rounded-lg uppercase tracking-wider ${ticket.priority === 'Critical' ? 'bg-red-100 text-red-700 border border-red-200' : 'bg-orange-100 text-orange-700 border border-orange-200'}`}>{ticket.status}</span>
                      <span className="px-2 py-1 text-[10px] font-bold rounded-lg uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200">{ticket.department}</span>
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg truncate group-hover:text-[#800000] transition-colors">{ticket.title}</h3>
                    <p className="text-sm text-slate-500 mt-1 line-clamp-1 font-medium">{ticket.description}</p>
                  </div>
                  <div className="text-right flex-shrink-0 flex flex-col items-end justify-between h-full">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Student: <span className="text-slate-700">{ticket.studentName}</span></p>
                    <Link to={`/admin/requests/${ticket.id}`} className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl text-xs font-bold hover:text-[#800000] hover:border-[#800000]/30 transition-colors shadow-sm">
                      Review Ticket
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Campus Pulse Summary */}
        <div className="space-y-6">
          <div className="flex justify-between items-center bg-slate-900 p-4 rounded-2xl border border-slate-800 shadow-md">
            <h2 className="text-sm font-bold text-white flex items-center gap-2 uppercase tracking-widest px-2">
              <Activity className="w-4 h-4 text-[#FF9933]" /> AI Insights
            </h2>
          </div>
          
          <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-[#800000]/40 to-[#FF9933]/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="p-6 relative z-10 space-y-6">
              {recentIncidents.map(incident => (
                <div key={incident.id} className="pb-6 border-b border-slate-800 last:border-0 last:pb-0">
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-2 py-1 text-[10px] font-bold rounded-lg uppercase tracking-widest bg-red-500/20 text-red-400">Incident Cluster</span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Detected 2h ago</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-slate-100">{incident.title}</h3>
                  <p className="text-sm text-slate-400 mb-5 font-medium leading-relaxed">{incident.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-xl bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-slate-300">U1</div>
                      <div className="w-8 h-8 rounded-xl bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-slate-300">U2</div>
                      <div className="w-8 h-8 rounded-xl bg-[#800000]/50 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-red-200">+{incident.affectedCount - 2}</div>
                    </div>
                    <Link to="/admin/pulse" className="text-xs font-bold text-[#FF9933] hover:text-[#e68a2e] transition-colors">
                      View details
                    </Link>
                  </div>
                </div>
              ))}
              
              <div className="pt-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">Trend Alert</p>
                <div className="bg-slate-800/50 rounded-2xl p-4 text-sm font-medium border border-slate-700/50 text-slate-300">
                  <span className="text-[#FF9933] font-bold">+25% increase</span> in Scholarship-related queries this week. Recommendation: Publish a detailed FAQ on the student portal.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
