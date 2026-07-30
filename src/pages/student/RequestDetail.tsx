import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, CheckCircle2, MessageSquare, Paperclip, Send, AlertCircle, FileText } from 'lucide-react';
import { mockTickets } from '../../data/mockData';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

export default function RequestDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const ticket = mockTickets.find(t => t.id === id);

  if (!ticket) {
    return <div className="p-8 text-center text-gray-500">Request not found.</div>;
  }

  const timelineSteps = [
    { label: 'Submitted', date: ticket.createdAt, completed: true },
    { label: 'Assigned', date: '2023-10-25T11:00:00Z', completed: true },
    { label: 'In Review', date: ticket.updatedAt, completed: ticket.status !== 'Open' && ticket.status !== 'Assigned' },
    { label: 'Action Required', date: ticket.status === 'Action Required' ? ticket.updatedAt : null, completed: ticket.status === 'Action Required' || ticket.status === 'Resolved', isAlert: ticket.status === 'Action Required' },
    { label: 'Resolved', date: ticket.status === 'Resolved' ? ticket.updatedAt : null, completed: ticket.status === 'Resolved' },
  ];

  return (
    <div className="flex-1 flex flex-col h-full bg-[#F9F9F9] overflow-hidden text-slate-800">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-4 py-4 flex items-center gap-3 sticky top-0 z-10 shrink-0">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="rounded-xl hover:bg-slate-100">
          <ArrowLeft className="w-5 h-5 text-slate-700" />
        </Button>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-bold text-slate-800 font-mono bg-slate-100 px-2 py-0.5 rounded">{ticket.id}</h1>
            <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full uppercase shrink-0 ${ticket.status === 'Resolved' ? 'bg-green-100 text-green-700' : ticket.status === 'Action Required' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>
              {ticket.status}
            </span>
          </div>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Submitted on {new Date(ticket.createdAt).toLocaleDateString()}</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Progress Timeline */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200">
            <h3 className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-widest">Progress</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-100 sm:left-auto sm:top-4 sm:bottom-auto sm:w-full sm:h-0.5"></div>
              <div className="flex flex-col sm:flex-row justify-between relative gap-6 sm:gap-0">
                {timelineSteps.map((step, idx) => (
                  <div key={idx} className="flex sm:flex-col items-start sm:items-center relative z-10 gap-4 sm:gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 bg-white flex-shrink-0 ${
                      step.completed 
                        ? step.isAlert ? 'border-amber-500 text-amber-500' : 'border-green-500 text-green-500' 
                        : 'border-slate-200 text-slate-300'
                    }`}>
                      {step.completed ? (step.isAlert ? <AlertCircle className="w-4 h-4"/> : <CheckCircle2 className="w-4 h-4" />) : <Clock className="w-4 h-4" />}
                    </div>
                    <div className="sm:text-center pt-1 sm:pt-0">
                      <p className={`text-sm font-bold ${step.completed ? 'text-slate-800' : 'text-slate-400'}`}>{step.label}</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{step.date ? new Date(step.date).toLocaleDateString() : '---'}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-slate-200">
                <h2 className="text-xl font-bold text-slate-800 mb-4">{ticket.title}</h2>
                <div className="prose prose-sm text-slate-600 max-w-none">
                  <p>{ticket.description}</p>
                </div>
                
                {/* Mock Attachments */}
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <h3 className="text-[11px] font-bold text-slate-400 mb-3 uppercase tracking-widest">Attachments</h3>
                  <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
                    <div className="border border-slate-200 rounded-xl p-3 flex items-center gap-3 min-w-[200px] cursor-pointer hover:border-[#800000]/30 hover:bg-[#800000]/5 transition-colors">
                      <div className="w-10 h-10 bg-[#800000]/10 text-[#800000] rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-slate-800 truncate">Application_Form.pdf</p>
                        <p className="text-[10px] text-slate-500 font-medium">1.2 MB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat / Updates */}
              <div className="bg-white rounded-3xl border border-slate-200 flex flex-col overflow-hidden">
                <div className="p-4 border-b border-slate-100 bg-[#F9F9F9] flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-slate-400" />
                  <h3 className="font-bold text-slate-800 text-sm">Updates & Messages</h3>
                </div>
                <div className="p-6 space-y-6">
                  {ticket.status === 'Action Required' && (
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-xl bg-[#800000] text-white flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold">A</span>
                      </div>
                      <div className="flex-1">
                        <div className="bg-[#FF9933]/10 border border-[#FF9933]/20 p-4 rounded-2xl rounded-tl-sm text-sm text-slate-800">
                          <p className="font-bold text-[#800000] mb-1">Action Required</p>
                          <p className="font-medium text-slate-700">We need a scanned copy of your 3rd semester marksheet to process this correction. Please upload it here.</p>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1 ml-1 font-bold uppercase tracking-widest">{new Date(ticket.updatedAt).toLocaleString()}</p>
                      </div>
                    </div>
                  )}
                  {/* Mock Student Reply */}
                  <div className="flex gap-4 flex-row-reverse">
                    <div className="w-8 h-8 rounded-xl bg-[#FF9933] text-white flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold">You</span>
                    </div>
                    <div className="flex-1 flex flex-col items-end">
                      <div className="bg-[#FF9933] p-4 rounded-2xl rounded-tr-sm text-sm text-white inline-block">
                        <p className="font-medium">I have attached the document you requested.</p>
                        <div className="mt-2 bg-black/10 rounded-xl p-2 flex items-center gap-2 border border-white/10">
                          <FileText className="w-4 h-4 text-white/80" />
                          <span className="text-xs font-bold">3rd_Sem_Marksheet.jpg</span>
                        </div>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-1 mr-1 font-bold uppercase tracking-widest">Just now</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-[#F9F9F9] border-t border-slate-100 flex items-end gap-2">
                  <button className="p-2 text-slate-400 hover:text-[#800000] rounded-xl transition-colors">
                    <Paperclip className="w-5 h-5" />
                  </button>
                  <textarea 
                    placeholder="Type a message..."
                    className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-2.5 resize-none outline-none focus:ring-2 focus:ring-[#800000]/20 text-sm h-11 min-h-[44px] max-h-32 placeholder:text-slate-400 font-medium text-slate-800"
                    rows={1}
                  />
                  <button className="h-11 w-11 rounded-xl bg-[#800000] hover:bg-[#600000] flex items-center justify-center text-white shrink-0 transition-colors">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              <div className="bg-slate-800 rounded-3xl p-6 text-white border border-slate-700 shadow-xl relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl pointer-events-none transform translate-x-10 -translate-y-10"></div>
                <h3 className="text-[10px] font-bold text-slate-400 mb-6 uppercase tracking-widest relative z-10">Ticket Info</h3>
                
                <div className="space-y-5 relative z-10">
                  <div>
                    <p className="text-[10px] text-slate-400 mb-1 uppercase tracking-widest font-bold">Department</p>
                    <p className="text-sm font-bold">{ticket.department}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 mb-1 uppercase tracking-widest font-bold">Category</p>
                    <p className="text-sm font-bold">{ticket.category}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 mb-2 uppercase tracking-widest font-bold">Priority</p>
                    <span className={`px-2 py-1 text-[10px] font-bold rounded-lg uppercase ${ticket.priority === 'Critical' ? 'bg-red-500/20 text-red-300 border border-red-500/30' : 'bg-slate-700 text-slate-300 border border-slate-600'}`}>
                      {ticket.priority}
                    </span>
                  </div>
                  {ticket.aiClassification && (
                    <div className="pt-5 border-t border-slate-700">
                      <p className="text-[10px] text-green-400 flex items-center gap-1 mb-1 font-bold uppercase tracking-widest"><CheckCircle2 className="w-3 h-3"/> AI Classified</p>
                      <p className="text-xs text-slate-300 font-medium leading-relaxed">{ticket.aiClassification.reason}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
