import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Bot, User, Send, Paperclip, Mic, Map, FileText, CheckCircle2, RefreshCw } from 'lucide-react';
import { Button } from '../../components/ui/Button';

interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string | React.ReactNode;
}

export default function AIAssistant() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q');
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg_0',
      role: 'ai',
      content: 'Hello! I am CampusSaathi AI. You can ask me about university procedures, navigate to offices, or raise a request. How can I help you today?'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (initialQuery) {
      handleSendQuery(initialQuery);
    }
  }, [initialQuery]);

  const handleSendQuery = (query: string) => {
    if (!query.trim()) return;
    
    const newUserMsg: Message = { id: Date.now().toString(), role: 'user', content: query };
    setMessages(prev => [...prev, newUserMsg]);
    setInput('');
    setIsTyping(true);

    // Mock AI Response after delay
    setTimeout(() => {
      let aiResponse: React.ReactNode = '';
      
      if (query.toLowerCase().includes('migration')) {
        aiResponse = (
          <div className="space-y-4">
            <h4 className="font-bold text-slate-800 border-b border-slate-200 pb-2">Migration Certificate Process</h4>
            
            <div>
              <p className="font-semibold text-xs uppercase tracking-widest text-slate-500 mb-2">Required Documents:</p>
              <ul className="text-sm space-y-2 text-slate-700">
                <li className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100"><CheckCircle2 className="w-4 h-4 text-green-600"/> Application Form</li>
                <li className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100"><CheckCircle2 className="w-4 h-4 text-green-600"/> Previous semester marksheets</li>
                <li className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100"><CheckCircle2 className="w-4 h-4 text-green-600"/> Student ID</li>
                <li className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100"><CheckCircle2 className="w-4 h-4 text-green-600"/> No-Dues Certificate</li>
                <li className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100"><CheckCircle2 className="w-4 h-4 text-green-600"/> Passport-size photograph</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <p className="font-semibold text-xs uppercase tracking-widest text-slate-500 mb-1">Responsible Department:</p>
              <p className="text-sm text-slate-800 font-medium">Student Support / Registrar Office</p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <button className="text-xs font-bold px-4 py-2 rounded-xl bg-white border border-[#800000]/20 text-[#800000] hover:bg-[#800000]/5 flex items-center transition-colors" onClick={() => navigate('/student/document-checker')}>
                <FileText className="w-4 h-4 mr-2" /> Check My Documents
              </button>
              <button className="text-xs font-bold px-4 py-2 rounded-xl bg-white border border-[#FF9933]/20 text-[#FF9933] hover:bg-[#FF9933]/5 flex items-center transition-colors" onClick={() => navigate('/student/navigator')}>
                <Map className="w-4 h-4 mr-2" /> Navigate to Office
              </button>
              <button className="text-xs font-bold px-4 py-2 rounded-xl bg-[#800000] text-white hover:bg-[#600000] flex items-center transition-colors" onClick={() => navigate('/student/requests/new?category=Certificate')}>
                Raise Request
              </button>
            </div>
            
            <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-green-700 bg-green-50 border border-green-100 px-3 py-1.5 rounded-lg w-max mt-4">
              <CheckCircle2 className="w-3 h-3" />
              Verified from University Knowledge Base
            </div>
          </div>
        );
      } else {
        aiResponse = (
          <div className="space-y-4">
            <p>I can help you with that. The relevant department for your query is the Examination Department.</p>
            <div className="flex flex-wrap gap-2 pt-2">
              <button className="text-xs font-bold px-4 py-2 rounded-xl bg-white border border-[#FF9933]/20 text-[#FF9933] hover:bg-[#FF9933]/5 flex items-center transition-colors" onClick={() => navigate('/student/navigator')}>
                <Map className="w-4 h-4 mr-2" /> Find Department
              </button>
              <button className="text-xs font-bold px-4 py-2 rounded-xl bg-[#800000] text-white hover:bg-[#600000] flex items-center transition-colors" onClick={() => navigate('/student/requests/new')}>
                Raise Request
              </button>
            </div>
          </div>
        );
      }

      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'ai', content: aiResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[#F9F9F9] relative">
      {/* Header */}
      <header className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-white sticky top-0 z-10 shadow-sm shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#800000]/10 text-[#800000] flex items-center justify-center">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-bold text-slate-800 leading-tight">CampusSaathi AI</h1>
            <p className="text-xs text-green-600 flex items-center gap-1 font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> Online
            </p>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setMessages([messages[0]])} title="New Conversation" className="hover:bg-slate-100">
          <RefreshCw className="w-5 h-5 text-slate-500" />
        </Button>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map(msg => (
          <div key={msg.id} className={`flex gap-4 max-w-3xl mx-auto ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-[#FF9933] text-white' : 'bg-[#800000] text-white'}`}>
              {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
            </div>
            
            <div className={`p-4 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-[#FF9933] text-white rounded-tr-sm' : 'bg-white border border-slate-200 shadow-sm rounded-tl-sm text-slate-800 w-full md:w-auto'}`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex gap-4 max-w-3xl mx-auto">
             <div className="w-8 h-8 rounded-xl bg-[#800000] text-white flex items-center justify-center flex-shrink-0">
               <Bot className="w-5 h-5" />
             </div>
             <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm rounded-tl-sm flex items-center gap-2">
                <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
             </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-slate-200 shrink-0">
        <div className="max-w-3xl mx-auto relative">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSendQuery(input); }}
            className="flex items-end gap-2 bg-[#F9F9F9] border border-slate-200 rounded-2xl p-2 focus-within:border-[#800000]/30 focus-within:ring-2 focus-within:ring-[#800000]/10 transition-all"
          >
            <button type="button" className="p-3 text-slate-400 hover:text-[#800000] rounded-xl transition-colors">
              <Paperclip className="w-5 h-5" />
            </button>
            <textarea 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about the campus..."
              className="flex-1 bg-transparent border-none outline-none resize-none max-h-32 min-h-[44px] py-3 text-slate-800 font-medium placeholder:text-slate-400"
              rows={1}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendQuery(input);
                }
              }}
            />
            <div className="flex items-center gap-1">
               <button type="button" className="p-3 text-slate-400 hover:text-[#800000] rounded-xl transition-colors hidden sm:block">
                 <Mic className="w-5 h-5" />
               </button>
               <button 
                type="submit" 
                disabled={!input.trim()}
                className="p-3 bg-[#800000] text-white rounded-xl hover:bg-[#600000] disabled:opacity-50 transition-colors"
               >
                 <Send className="w-5 h-5" />
               </button>
            </div>
          </form>
          <div className="mt-2 text-center text-[10px] uppercase tracking-widest text-slate-400 font-bold">
             CampusSaathi AI can make mistakes. Verify important information.
          </div>
        </div>
      </div>
    </div>
  );
}
