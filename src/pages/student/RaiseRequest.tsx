import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Bot, Sparkles, UploadCloud, FileText, ArrowRight, RefreshCw } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';

export default function RaiseRequest() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  const navigate = useNavigate();
  
  const [description, setDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiResult, setAiResult] = useState<{category: string, priority: string, department: string} | null>(null);

  const handleAnalyze = () => {
    if (!description.trim()) return;
    setIsAnalyzing(true);
    
    // Simulate AI classification
    setTimeout(() => {
      setAiResult({
        category: description.toLowerCase().includes('sparking') ? 'Campus Facility' : 'Scholarship',
        priority: description.toLowerCase().includes('sparking') ? 'Critical' : 'Normal',
        department: description.toLowerCase().includes('sparking') ? 'Maintenance' : 'Student Welfare',
      });
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#F9F9F9] h-full text-slate-800">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Raise a Request</h1>
        <p className="text-slate-500 mb-8 font-medium">Describe your issue and let our AI route it to the correct department.</p>

        <div className="bg-white rounded-3xl p-6 md:p-8 mb-6 shadow-sm border border-slate-200 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-[#FF9933]/5 to-transparent pointer-events-none"></div>
          <div className="relative z-10 space-y-6">
            
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2 flex items-center justify-between">
                <span>Describe your issue</span>
                <span className="text-[10px] text-[#800000] flex items-center gap-1 font-bold bg-[#800000]/10 px-2 py-0.5 rounded-full"><Sparkles className="w-3 h-3"/> AI Assisted</span>
              </label>
              <div className="relative">
                <textarea 
                  className="w-full min-h-[120px] p-4 bg-[#F9F9F9] border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#800000]/20 focus:border-transparent outline-none transition-all resize-none text-slate-800 font-medium placeholder:text-slate-400"
                  placeholder="E.g., My scholarship is approved but payment has not arrived yet..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              {!aiResult && (
                <button 
                  className="mt-4 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs px-5 py-3 rounded-xl disabled:opacity-50 transition-colors flex items-center shadow-md shadow-black/10" 
                  disabled={!description.trim() || isAnalyzing}
                  onClick={handleAnalyze}
                >
                  {isAnalyzing ? (
                    <><RefreshCw className="w-4 h-4 mr-2 animate-spin" /> Analyzing...</>
                  ) : (
                    <><Bot className="w-4 h-4 mr-2" /> Let AI Understand My Issue</>
                  )}
                </button>
              )}
            </div>

            {aiResult && (
              <div className="bg-slate-50 border border-[#800000]/20 rounded-2xl p-5 animate-in fade-in slide-in-from-top-4 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#800000]"></div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#800000]/10 flex items-center justify-center shrink-0"><Sparkles className="w-4 h-4 text-[#800000]" /></div>
                  <div className="flex-1">
                    <h4 className="text-[11px] font-bold text-[#800000] uppercase tracking-widest mb-3">AI Classification Complete</h4>
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <p className="text-[10px] text-slate-500 mb-1 font-bold uppercase tracking-widest">Detected Category</p>
                        <span className="px-2 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700">{aiResult.category}</span>
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-500 mb-1 font-bold uppercase tracking-widest">Priority</p>
                        <span className={`px-2 py-1 text-[10px] font-bold rounded-lg uppercase ${aiResult.priority === 'Critical' ? 'bg-red-100 text-red-700 border border-red-200' : 'bg-slate-100 text-slate-700 border border-slate-200'}`}>
                          {aiResult.priority}
                        </span>
                      </div>
                      <div className="col-span-2">
                        <p className="text-[10px] text-slate-500 mb-1 font-bold uppercase tracking-widest">Suggested Department</p>
                        <p className="text-sm font-bold text-slate-800">{aiResult.department}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {aiResult && (
               <div className="space-y-5 pt-6 border-t border-slate-100 animate-in fade-in">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">Issue Title</label>
                    <input type="text" className="w-full p-3.5 bg-[#F9F9F9] border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#800000]/20 focus:border-transparent outline-none font-bold text-slate-800" defaultValue={description.substring(0, 40) + '...'} />
                  </div>
                  
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">Enrollment Number</label>
                    <input type="text" className="w-full p-3.5 bg-slate-100 border border-slate-200 rounded-xl outline-none font-mono text-sm text-slate-500 cursor-not-allowed" defaultValue="CSJMU210045" disabled />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">Attachments (Optional)</label>
                    <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center hover:bg-slate-50 hover:border-[#800000]/30 transition-colors cursor-pointer bg-[#F9F9F9]">
                      <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                      <p className="text-sm text-slate-700 font-bold">Click to upload or drag and drop</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-2">PDF, JPG, PNG up to 5MB</p>
                    </div>
                  </div>
               </div>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button className="px-5 py-3 rounded-xl font-bold text-xs bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors shadow-sm" onClick={() => navigate(-1)}>Cancel</button>
          <button 
            className="px-5 py-3 rounded-xl font-bold text-xs bg-[#800000] text-white hover:bg-[#600000] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md shadow-black/10 flex items-center" 
            disabled={!aiResult}
            onClick={() => {
              alert("Request submitted successfully! Ticket ID: SCH-1025");
              navigate('/student/requests');
            }}
          >
            Submit Request <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
