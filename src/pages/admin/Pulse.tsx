import React from 'react';
import { Activity, Sparkles, AlertTriangle, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { mockIncidents } from '../../data/mockData';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

export default function CampusPulse() {
  return (
    <div className="p-6 md:p-8 space-y-8 bg-[#F9F9F9] min-h-full text-slate-800">
      
      {/* Header */}
      <div className="bg-[#800000] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <Activity className="w-64 h-64" />
        </div>
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-gradient-to-tr from-[#FF9933]/30 to-transparent rounded-full blur-2xl pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 mb-6 bg-black/20 w-fit px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#FF9933]" />
            <span className="text-[10px] font-bold tracking-widest text-[#FF9933] uppercase">AI Intelligence</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Campus Pulse</h1>
          <p className="text-red-100 text-lg font-medium leading-relaxed">
            Operational intelligence powered by AI. We monitor thousands of student requests to detect anomalies, cluster duplicate issues, and provide actionable recommendations.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Col: Incidents */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-[#FF9933]" />
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-widest">Active Incident Clusters</h2>
          </div>
          <p className="text-sm text-slate-500 mb-4 font-medium px-2">AI has detected multiple similar requests and grouped them into the following incidents to prevent duplicate work.</p>
          
          <div className="space-y-6">
            {mockIncidents.map(incident => (
              <div key={incident.id} className="bg-white border border-[#FF9933]/30 rounded-3xl shadow-sm overflow-hidden relative">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#FF9933]"></div>
                <div className="bg-[#FF9933]/5 px-6 py-4 border-b border-[#FF9933]/20 flex justify-between items-center pl-8">
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-[#FF9933] text-white text-[10px] font-bold rounded-lg uppercase tracking-widest shadow-sm">CRITICAL</span>
                    <span className="text-[10px] font-bold text-slate-600 font-mono bg-white px-2 py-1 rounded-md border border-slate-200">{incident.id}</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-xl uppercase tracking-widest">
                    Status: <span className="text-[#800000]">{incident.status}</span>
                  </span>
                </div>
                <div className="p-6 md:p-8 pl-8">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800 mb-3">{incident.title}</h3>
                      <p className="text-slate-600 font-medium leading-relaxed">{incident.description}</p>
                    </div>
                    <div className="text-center bg-[#F9F9F9] p-5 rounded-2xl border border-slate-200 md:ml-4 flex-shrink-0 w-full md:w-32 shadow-inner">
                      <Users className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                      <span className="block text-3xl font-bold text-slate-800">{incident.affectedCount}</span>
                      <span className="block text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">Affected</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-slate-100 gap-4">
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                      First reported: <span className="text-slate-700 ml-1 bg-slate-100 px-2 py-1 rounded-md">{new Date(incident.firstReportedAt).toLocaleString()}</span>
                    </div>
                    <div className="flex gap-3 w-full md:w-auto">
                      <button className="flex-1 md:flex-none px-5 py-3 rounded-xl font-bold text-xs bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors shadow-sm text-center">Notify Students</button>
                      <button className="flex-1 md:flex-none px-5 py-3 rounded-xl font-bold text-xs bg-[#800000] text-white hover:bg-[#600000] transition-colors shadow-md shadow-black/10 flex items-center justify-center">Manage Incident <ArrowRight className="w-4 h-4 ml-2"/></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Col: Insights */}
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-widest">Operational Insights</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 relative overflow-hidden group hover:border-slate-300 transition-colors">
              <div className="absolute right-0 top-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
              <div className="flex items-start gap-4 mb-4 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center shrink-0 border border-purple-100">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Scholarship Queries Trending</h4>
                  <p className="text-xs text-slate-500 mt-2 font-medium leading-relaxed">We've seen a 25% increase in scholarship status queries in the last 48 hours.</p>
                </div>
              </div>
              <div className="bg-purple-50/50 p-4 rounded-2xl border border-purple-100/50 mt-6 relative z-10">
                <p className="text-[10px] font-bold text-purple-900/60 uppercase tracking-widest mb-2 flex items-center gap-1"><Sparkles className="w-3 h-3"/> AI Recommendation</p>
                <p className="text-xs font-bold text-purple-900 leading-relaxed mb-4">Send a mass notification to all 3rd-year students explaining the current delay in UP State Scholarship disbursements.</p>
                <button className="w-full py-3 bg-white border border-purple-200 text-purple-700 rounded-xl text-xs font-bold hover:bg-purple-50 transition-colors shadow-sm">Draft Notification</button>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 relative overflow-hidden group hover:border-slate-300 transition-colors">
              <div className="absolute right-0 top-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
              <div className="flex items-start gap-4 mb-4 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Examination Docs Confusion</h4>
                  <p className="text-xs text-slate-500 mt-2 font-medium leading-relaxed">Most examination queries this week (68%) are related to required documents for provisional certificates.</p>
                </div>
              </div>
              <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100/50 mt-6 relative z-10">
                <p className="text-[10px] font-bold text-blue-900/60 uppercase tracking-widest mb-2 flex items-center gap-1"><Sparkles className="w-3 h-3"/> AI Recommendation</p>
                <p className="text-xs font-bold text-blue-900 leading-relaxed mb-4">Update the Knowledge Base article for "Provisional Certificate" to clearly list the mandatory documents. This will reduce ticket volume.</p>
                <button className="w-full py-3 bg-white border border-blue-200 text-blue-700 rounded-xl text-xs font-bold hover:bg-blue-50 transition-colors shadow-sm">Update Knowledge Base</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
