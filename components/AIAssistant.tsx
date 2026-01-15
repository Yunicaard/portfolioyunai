
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, Language } from '../types';
import { CONTENT, FAQ_ANSWERS } from '../constants';

interface AIAssistantProps {
  lang: Language;
}

const normalizeText = (text: string) => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[¿?]/g, "");
};

export const AIAssistant: React.FC<AIAssistantProps> = ({ lang }) => {
  const t = CONTENT[lang].ai;
  const currentFaqs = FAQ_ANSWERS[lang];
  const fixedQuestions = Object.keys(currentFaqs);

  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: t.welcome }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ role: 'model', text: t.welcome }]);
    setInput('');
    setSuggestions([]);
  }, [lang, t.welcome]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const trimmedInput = input.trim();
    if (trimmedInput.length > 0) {
      const normalizedInput = normalizeText(trimmedInput);
      const filtered = fixedQuestions.filter(q => 
        normalizeText(q).includes(normalizedInput)
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [input, lang]);

  const handleSend = async (textToSend?: string) => {
    const messageText = textToSend || input.trim();
    if (!messageText || isLoading) return;

    setInput('');
    setSuggestions([]);
    setMessages(prev => [...prev, { role: 'user', text: messageText }]);
    setIsLoading(true);

    setTimeout(() => {
      const normalizedQuery = normalizeText(messageText);
      const matchedQuestion = fixedQuestions.find(q => normalizeText(q) === normalizedQuery);
      let responseText = matchedQuestion ? currentFaqs[matchedQuestion] : t.fallback;

      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
      setIsLoading(false);
    }, 600);
  };

  return (
    <div className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4">{t.title} <span className="text-indigo-600 dark:text-indigo-400">{t.highlight}</span></h2>
        <p className="text-slate-600 dark:text-slate-400">{t.subtitle}</p>
      </div>

      <div className="glass rounded-3xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col h-[650px] relative shadow-2xl transition-colors">
        {/* Header */}
        <div className="p-4 bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white border border-white/20">
                Y
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-slate-900"></div>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">Yunai Support</p>
              <p className="text-[10px] text-indigo-600 dark:text-indigo-400 uppercase tracking-widest font-mono">FAQ Mode - {lang.toUpperCase()}</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth bg-slate-50/50 dark:bg-slate-950/20">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-indigo-600 text-white rounded-tr-none shadow-indigo-200 dark:shadow-none' 
                  : 'bg-white dark:bg-white/10 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200 dark:border-white/5 backdrop-blur-sm'
              }`}>
                <p className="text-sm leading-relaxed">{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-white/5 p-4 rounded-2xl rounded-tl-none border border-slate-200 dark:border-white/5 flex gap-1">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-75"></span>
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-150"></span>
              </div>
            </div>
          )}
        </div>

        {/* Input and Suggestions Area */}
        <div className="bg-white dark:bg-slate-900/95 border-t border-slate-200 dark:border-white/10 backdrop-blur-md">
          {/* BARRA HORIZONTAL DE PREGUNTAS (QUICK ACCESS) */}
          <div className="px-4 pt-4">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
                {lang === 'es' ? 'Preguntas rápidas' : 'Quick questions'}
              </span>
              <span className="text-[10px] text-slate-400 italic">
                {lang === 'es' ? 'Desliza para ver más' : 'Scroll for more'} →
              </span>
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-4 custom-scrollbar scroll-smooth">
              {fixedQuestions.map((q, i) => (
                <button 
                  key={i} 
                  onClick={() => handleSend(q)}
                  className="whitespace-nowrap text-[11px] font-bold border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-5 py-2.5 rounded-full text-slate-700 dark:text-slate-300 hover:text-white hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all shadow-sm active:scale-95"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 pt-0 relative">
            {/* Suggestions Popover for Manual Typing */}
            {suggestions.length > 0 && (
              <div className="absolute bottom-full left-4 right-4 mb-4 z-20 p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/20 rounded-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-2">
                <div className="flex flex-col gap-1 max-h-48 overflow-y-auto custom-scrollbar">
                  {suggestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(q)}
                      className="text-sm px-4 py-2.5 text-left bg-slate-50 dark:bg-white/5 hover:bg-indigo-600 hover:text-white text-slate-700 dark:text-indigo-100 rounded-xl transition-all"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t.placeholder}
                className="flex-1 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900 dark:text-white"
              />
              <button
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className="bg-indigo-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-indigo-500 transition-all disabled:opacity-20 shadow-lg shadow-indigo-600/20 active:scale-95"
              >
                <i className="fas fa-paper-plane text-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #6366f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #4f46e5;
        }
      `}</style>
    </div>
  );
};
