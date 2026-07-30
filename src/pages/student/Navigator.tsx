import React, { useState } from 'react';
import { Search, MapPin, Navigation, Phone, Mail, Clock, QrCode } from 'lucide-react';
import { mockLocations } from '../../data/mockData';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export default function Navigator() {
  const [query, setQuery] = useState('');
  const [selectedLoc, setSelectedLoc] = useState(mockLocations[0]);
  const [showScanner, setShowScanner] = useState(false);

  const filteredLocations = mockLocations.filter(loc => 
    loc.name.toLowerCase().includes(query.toLowerCase()) || 
    loc.building.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex-1 flex flex-col h-full bg-[#F9F9F9] overflow-hidden text-slate-800">
      
      {/* Mobile Map View Placeholder */}
      <div className="relative flex-1 bg-slate-200 min-h-[300px]">
        {/* Fake Map Image / styling */}
        <div className="absolute inset-0 bg-[#e5e3df] overflow-hidden flex items-center justify-center">
           <div className="text-center text-[#800000] opacity-20 flex flex-col items-center">
             <MapPin className="w-16 h-16 mb-2" />
             <p className="font-bold text-xl uppercase tracking-widest">Interactive Map</p>
           </div>
           
           {/* Mock Route Path SVG */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.4 }}>
             <path d="M100,500 Q200,400 300,350 T600,200" fill="none" stroke="#FF9933" strokeWidth="4" strokeDasharray="8,8" />
           </svg>
           
           {/* Markers */}
           <div className="absolute top-[200px] left-[600px] transform -translate-x-1/2 -translate-y-1/2">
             <div className="w-6 h-6 bg-[#800000] rounded-full border-2 border-white shadow-lg flex items-center justify-center">
               <div className="w-2 h-2 bg-white rounded-full"></div>
             </div>
             <div className="bg-white px-2 py-1 rounded-lg shadow-md text-[10px] font-bold uppercase tracking-widest mt-1 absolute -left-6 whitespace-nowrap text-[#800000]">{selectedLoc.name}</div>
           </div>
           <div className="absolute top-[500px] left-[100px] transform -translate-x-1/2 -translate-y-1/2">
             <div className="w-5 h-5 bg-[#FF9933] rounded-full border-2 border-white shadow-lg"></div>
             <div className="bg-white px-2 py-1 rounded-lg shadow-md text-[10px] font-bold uppercase tracking-widest mt-1 absolute -left-4 whitespace-nowrap text-[#FF9933]">You Are Here</div>
           </div>
        </div>

        {/* Floating Search overlay on mobile, fixed left panel on desktop */}
        <div className="absolute top-4 left-4 right-4 md:w-[400px] md:bottom-4 md:right-auto z-10 flex flex-col gap-4 max-h-[90%]">
          
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col h-full">
            <div className="p-4 border-b border-slate-100 flex gap-2 items-center bg-[#F9F9F9]">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text"
                  placeholder="Search offices, buildings..."
                  className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#800000]/20 outline-none placeholder:text-slate-400 text-slate-800"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <button className="w-11 h-11 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[#800000] hover:bg-slate-50 transition-colors shrink-0" onClick={() => setShowScanner(true)}>
                <QrCode className="w-5 h-5" />
              </button>
            </div>
            
            {query && (
              <div className="max-h-60 overflow-y-auto bg-white border-b border-slate-100">
                {filteredLocations.map(loc => (
                  <div 
                    key={loc.id} 
                    className="p-4 hover:bg-[#800000]/5 border-b border-slate-50 cursor-pointer flex items-center gap-4 transition-colors"
                    onClick={() => { setSelectedLoc(loc); setQuery(''); }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#800000]/10 flex items-center justify-center text-[#800000] shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{loc.name}</p>
                      <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">{loc.building}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Selected Location Info */}
            <div className="p-6 bg-white flex-1 overflow-y-auto relative">
              <div className="absolute right-0 top-0 w-32 h-32 bg-gradient-to-br from-[#FF9933]/10 to-transparent rounded-bl-full pointer-events-none"></div>
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div>
                  <h2 className="text-xl font-bold text-slate-800 mb-1">{selectedLoc.name}</h2>
                  <p className="text-[11px] text-slate-500 flex items-center font-bold uppercase tracking-widest"><MapPin className="w-3 h-3 mr-1 text-[#800000]"/> {selectedLoc.building} • {selectedLoc.floor}</p>
                </div>
                <div className="bg-[#800000]/10 text-[#800000] text-[10px] font-bold px-2 py-1 rounded-md shrink-0">
                  {selectedLoc.roomNumber}
                </div>
              </div>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0"><Clock className="w-4 h-4 text-slate-400"/></div>
                  <div>
                    <p className="font-bold text-[10px] uppercase tracking-widest text-slate-400 mb-0.5">Office Hours</p>
                    <p className="text-xs font-bold text-slate-800">{selectedLoc.officeTiming}</p>
                  </div>
                </div>
                
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-[10px] text-slate-400 font-bold mb-2 uppercase tracking-widest">Concerned Person</p>
                  <p className="text-sm font-bold text-slate-800">{selectedLoc.contactPerson}</p>
                  <p className="text-[11px] text-slate-500 font-medium mb-4">{selectedLoc.designation}</p>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[#800000] hover:border-[#800000]/30 transition-colors flex items-center justify-center text-xs font-bold shadow-sm">
                      <Phone className="w-3 h-3 mr-1" /> Call
                    </button>
                    <button className="flex-1 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[#FF9933] hover:border-[#FF9933]/30 transition-colors flex items-center justify-center text-xs font-bold shadow-sm">
                      <Mail className="w-3 h-3 mr-1" /> Email
                    </button>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-6 bg-[#800000] hover:bg-[#600000] text-white rounded-xl py-3 font-bold text-xs shadow-md shadow-black/10 flex items-center justify-center transition-colors relative z-10">
                <Navigation className="w-4 h-4 mr-2" /> Start Navigation
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mock QR Scanner Modal */}
      {showScanner && (
        <div className="fixed inset-0 bg-slate-900/80 z-50 flex flex-col items-center justify-center p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-2xl relative border border-white/20">
            <div className="p-4 border-b border-slate-100 text-center relative bg-[#F9F9F9]">
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-widest">Scan Campus QR</h3>
              <button className="absolute right-4 top-4 text-slate-400 hover:text-[#800000]" onClick={() => setShowScanner(false)}>✕</button>
            </div>
            <div className="aspect-square bg-slate-900 relative flex items-center justify-center">
              {/* Fake scanner UI */}
              <div className="w-48 h-48 border-2 border-[#FF9933] rounded-2xl relative">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#FF9933] -mt-1 -ml-1 rounded-tl-xl"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#FF9933] -mt-1 -mr-1 rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#FF9933] -mb-1 -ml-1 rounded-bl-xl"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#FF9933] -mb-1 -mr-1 rounded-br-xl"></div>
                <div className="w-full h-0.5 bg-[#FF9933] absolute top-1/2 animate-pulse shadow-[0_0_15px_3px_#FF9933]"></div>
              </div>
            </div>
            <div className="p-6 text-center">
              <p className="text-xs text-slate-500 mb-6 font-medium">Point your camera at any CSJMU indoor location QR code to get step-by-step routing.</p>
              <button className="w-full bg-[#800000] hover:bg-[#600000] text-white py-3 rounded-xl font-bold text-xs shadow-md transition-colors" onClick={() => {
                setShowScanner(false);
                alert("Location Detected: Administrative Block, Ground Floor.");
              }}>Simulate Scan</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
