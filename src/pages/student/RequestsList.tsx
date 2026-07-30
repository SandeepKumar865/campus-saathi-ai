import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Plus, ChevronRight, Clock, CheckCircle2, AlertCircle, FileText } from 'lucide-react';
import { mockTickets, currentUser } from '../../data/mockData';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';

export default function RequestsList() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  
  const myTickets = mockTickets.filter(t => t.studentId === currentUser.id);
  
  const filteredTickets = filter === 'All' 
    ? myTickets 
    : myTickets.filter(t => 
        (filter === 'Active' && t.status !== 'Resolved') || 
        (filter === 'Resolved' && t.status === 'Resolved')
      );

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'Resolved': return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'Action Required': return <AlertCircle className="w-5 h-5 text-amber-500" />;
      default: return <Clock className="w-5 h-5 text-blue-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Resolved': return <Badge variant="success">{status}</Badge>;
      case 'Action Required': return <Badge variant="warning">{status}</Badge>;
      case 'Open': return <Badge variant="destructive">{status}</Badge>;
      default: return <Badge variant="secondary">{status}</Badge>;
    }
  }

  return (
    <div className="flex-1 overflow-y-auto bg-[#F9F9F9] flex flex-col h-full text-slate-800">
      <header className="bg-white border-b border-slate-200 px-4 py-4 md:px-8 md:py-6 sticky top-0 z-10 shrink-0">
        <div className="flex justify-between items-center max-w-5xl mx-auto w-full">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">My Requests</h1>
            <p className="text-sm text-slate-500 mt-1">Track and manage your university requests.</p>
          </div>
          <button className="bg-[#800000] text-white hover:bg-[#600000] px-4 py-2 rounded-xl font-bold text-xs shadow-md transition-colors hidden sm:flex items-center" onClick={() => navigate('/student/requests/new')}>
            <Plus className="w-4 h-4 mr-2" /> New Request
          </button>
        </div>
      </header>
      
      <div className="flex-1 p-4 md:p-8 max-w-5xl mx-auto w-full">
        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Search by Ticket ID or Title..."
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#800000]/20 outline-none text-slate-800 placeholder:text-slate-400"
            />
          </div>
          <div className="flex bg-white border border-slate-200 rounded-xl p-1 overflow-x-auto hide-scrollbar shrink-0">
            {['All', 'Active', 'Resolved'].map(f => (
              <button 
                key={f}
                className={`px-4 py-1.5 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${filter === f ? 'bg-[#FF9933]/10 text-[#FF9933]' : 'text-slate-600 hover:bg-slate-50'}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        <div className="space-y-4">
          {filteredTickets.map(ticket => (
            <div key={ticket.id} className="bg-white rounded-2xl border border-slate-200 cursor-pointer hover:border-[#800000] transition-colors group p-5 flex items-start gap-4" onClick={() => navigate(`/student/requests/${ticket.id}`)}>
              <div className="mt-1 flex-shrink-0">
                {getStatusIcon(ticket.status)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-xs font-bold font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">{ticket.id}</span>
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full uppercase shrink-0 ${ticket.status === 'Resolved' ? 'bg-green-100 text-green-700' : ticket.status === 'Action Required' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>
                    {ticket.status}
                  </span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest ml-auto hidden sm:block">Updated {new Date(ticket.updatedAt).toLocaleDateString()}</span>
                </div>
                <h3 className="text-base font-bold text-slate-800 truncate">{ticket.title}</h3>
                <p className="text-sm text-slate-500 mt-1 line-clamp-2">{ticket.description}</p>
                
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-100">
                  <div className="text-[11px] uppercase tracking-wider text-slate-500 flex items-center gap-1">
                    <span className="font-bold text-slate-700">Department:</span> {ticket.department}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-500 flex items-center gap-1">
                    <span className="font-bold text-slate-700">Category:</span> {ticket.category}
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex items-center justify-center self-stretch px-2 text-slate-300 group-hover:text-[#800000] transition-colors">
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          ))}
          
          {filteredTickets.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">No requests found</h3>
              <p className="text-slate-500 font-medium">You don't have any {filter.toLowerCase()} requests at the moment.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile FAB */}
      <div className="fixed bottom-20 right-4 sm:hidden z-20">
        <button className="w-14 h-14 rounded-full bg-[#800000] text-white flex items-center justify-center hover:bg-[#600000] shadow-lg shadow-black/20" onClick={() => navigate('/student/requests/new')}>
          <Plus className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
