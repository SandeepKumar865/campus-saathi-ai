import React, { useState } from 'react';
import { UploadCloud, CheckCircle2, AlertTriangle, XCircle, Sparkles, FileText, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';

export default function DocumentChecker() {
  const [selectedService, setSelectedService] = useState('Migration Certificate');
  const [isChecking, setIsChecking] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);

  const handleSimulateCheck = () => {
    setIsChecking(true);
    setTimeout(() => {
      setIsChecking(false);
      setHasChecked(true);
    }, 2000);
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#F9F9F9] h-full text-slate-800">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">AI Document Checker</h1>
          <p className="text-slate-500 font-medium">Upload your documents before visiting the office to ensure you have everything required.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Upload */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="p-6 border-b border-slate-100 bg-[#F9F9F9]">
                <h2 className="text-sm font-bold flex justify-between items-center text-slate-800 uppercase tracking-widest">
                  Select Service
                  <select 
                    className="text-xs font-bold p-2.5 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#800000]/20 text-slate-700 shadow-sm"
                    value={selectedService}
                    onChange={(e) => {setSelectedService(e.target.value); setHasChecked(false);}}
                  >
                    <option>Migration Certificate</option>
                    <option>Provisional Degree</option>
                    <option>Duplicate Marksheet</option>
                  </select>
                </h2>
              </div>
              <div className="p-6 md:p-8">
                <div className="border-2 border-dashed border-slate-300 rounded-2xl p-10 text-center hover:bg-slate-50 hover:border-[#800000]/30 transition-colors cursor-pointer group bg-[#F9F9F9]">
                  <div className="w-16 h-16 bg-[#800000]/10 text-[#800000] rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                    <UploadCloud className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Upload Documents</h3>
                  <p className="text-sm text-slate-500 max-w-sm mx-auto mb-8 font-medium">Select all the documents you plan to submit for the {selectedService}. We will verify if anything is missing.</p>
                  <button className="px-6 py-3 rounded-xl font-bold text-xs bg-white border border-slate-200 text-slate-700 hover:text-[#800000] hover:border-[#800000]/30 shadow-sm transition-colors disabled:opacity-50" onClick={handleSimulateCheck} disabled={isChecking}>
                    {isChecking ? "AI Analyzing Documents..." : "Select Files (Simulate)"}
                  </button>
                </div>
                
                {isChecking && (
                  <div className="mt-8 p-5 bg-slate-800 text-white rounded-2xl flex items-center gap-4 relative overflow-hidden shadow-lg border border-slate-700">
                    <div className="absolute right-0 top-0 w-32 h-32 bg-gradient-to-br from-[#FF9933]/20 to-transparent rounded-full blur-2xl pointer-events-none transform translate-x-10 -translate-y-10"></div>
                    <Sparkles className="w-6 h-6 text-[#FF9933] animate-pulse shrink-0 relative z-10" />
                    <div className="flex-1 relative z-10">
                      <p className="font-bold text-sm tracking-wide">CampusSaathi AI is scanning your documents...</p>
                      <div className="w-full bg-slate-700 h-1.5 rounded-full mt-3 overflow-hidden">
                        <div className="bg-gradient-to-r from-[#800000] to-[#FF9933] h-full w-1/2 animate-[pulse_1s_ease-in-out_infinite] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="md:col-span-1">
            <div className={`h-full bg-white rounded-3xl border transition-all duration-500 overflow-hidden flex flex-col ${hasChecked ? 'border-[#FF9933]/30 shadow-lg shadow-[#FF9933]/5' : 'border-slate-200 opacity-50 pointer-events-none'}`}>
              <div className="bg-slate-800 text-white p-6 relative overflow-hidden shrink-0">
                <div className="absolute right-0 top-0 w-32 h-32 bg-gradient-to-br from-[#FF9933]/20 to-transparent rounded-full blur-2xl pointer-events-none transform translate-x-10 -translate-y-10"></div>
                <h3 className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest relative z-10">
                  <Sparkles className="w-5 h-5 text-[#FF9933]" /> AI Report
                </h3>
              </div>
              <div className="p-6 relative flex-1 flex flex-col">
                {hasChecked && (
                  <div className="absolute -top-6 right-6 w-12 h-12 rounded-2xl bg-white border-2 border-slate-800 flex items-center justify-center font-bold text-[#FF9933] text-sm shadow-md">
                    75%
                  </div>
                )}
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-slate-800">Student ID</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-green-600 mt-0.5">Verified</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-slate-800">Previous Marksheets</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-green-600 mt-0.5">Verified (Sem 1-5)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors bg-amber-50/50 border border-amber-100">
                    <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-slate-800">Application Form</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mt-0.5">Missing Signature</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors bg-red-50/50 border border-red-100">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-slate-800">No-Dues Certificate</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-red-600 mt-0.5">Missing</p>
                    </div>
                  </div>
                </div>

                {hasChecked && (
                  <div className="mt-auto pt-6 border-t border-slate-100 space-y-3">
                    <p className="text-[10px] font-bold text-slate-400 mb-3 uppercase tracking-widest">Next Steps</p>
                    <button className="w-full bg-[#FF9933] hover:bg-[#e68a2e] text-white py-3 rounded-xl font-bold text-xs shadow-md transition-colors">
                      Upload Missing Docs
                    </button>
                    <button className="w-full bg-white border border-slate-200 text-slate-500 hover:text-slate-800 py-3 rounded-xl font-bold text-xs flex items-center justify-center transition-colors" onClick={() => setSelectedService('')}>
                      Continue Anyway <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
