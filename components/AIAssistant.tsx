
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { PERSONAL_INFO, FAQ_ANSWERS } from '../constants';

const FIXED_QUESTIONS = Object.keys(FAQ_ANSWERS);

// Función para normalizar texto: elimina acentos y pasa a minúsculas
const normalizeText = (text: string) => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[¿?]/g, ""); // También quitamos interrogaciones para facilitar la búsqueda
};

export const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: `¡Hola! Soy el asistente virtual de ${PERSONAL_INFO.name}. Selecciona una de las preguntas de abajo o escribe lo que quieras saber sobre mi perfil.` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Filtrar sugerencias basadas en lo que escribe el usuario
  useEffect(() => {
    const trimmedInput = input.trim();
    if (trimmedInput.length > 0) {
      const normalizedInput = normalizeText(trimmedInput);
      const filtered = FIXED_QUESTIONS.filter(q => 
        normalizeText(q).includes(normalizedInput)
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [input]);

  const handleSend = async (textToSend?: string) => {
    const messageText = textToSend || input.trim();
    if (!messageText || isLoading) return;

    setInput('');
    setSuggestions([]);
    setMessages(prev => [...prev, { role: 'user', text: messageText }]);
    setIsLoading(true);

    // Simulamos un breve tiempo de "escritura" para que se sienta más natural
    setTimeout(() => {
      const normalizedQuery = normalizeText(messageText);
      // Intentamos encontrar una coincidencia exacta o parcial
      const matchedQuestion = FIXED_QUESTIONS.find(q => normalizeText(q) === normalizedQuery);
      
      let responseText = "";
      if (matchedQuestion) {
        responseText = FAQ_ANSWERS[matchedQuestion];
      } else {
        responseText = "Lo siento, para esta sección de mi portfolio solo puedo responder a las preguntas que tengo almacenadas. ¡Prueba a seleccionar una de las sugerencias o las burbujas de abajo!";
      }

      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
      setIsLoading(false);
    }, 600);
  };

  return (
    <div className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Habla con mi <span className="text-indigo-400">Asistente Virtual</span></h2>
        <p className="text-slate-400">Selecciona una de las dudas frecuentes sobre mi carrera.</p>
      </div>

      <div className="glass rounded-3xl border border-white/10 overflow-hidden flex flex-col h-[600px] relative shadow-2xl">
        {/* Header */}
        <div className="p-4 bg-white/5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center overflow-hidden border border-white/20 font-bold text-white">
                {PERSONAL_INFO.name.charAt(0)}
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></div>
            </div>
            <div>
              <p className="text-sm font-bold">{PERSONAL_INFO.name} Support</p>
              <p className="text-[10px] text-indigo-400 uppercase tracking-widest font-mono">Modo FAQ activo</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth bg-slate-950/20">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-2xl shadow-lg ${
                msg.role === 'user' 
                  ? 'bg-indigo-600 text-white rounded-tr-none' 
                  : 'bg-white/10 text-slate-200 rounded-tl-none border border-white/5 backdrop-blur-sm'
              }`}>
                <p className="text-sm leading-relaxed">{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5 flex gap-1">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-75"></span>
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-150"></span>
              </div>
            </div>
          )}
        </div>

        {/* Suggestions Overlay (Se activa al escribir) */}
        {suggestions.length > 0 && (
          <div className="absolute bottom-[100px] left-4 right-4 z-20">
            <div className="p-3 glass border border-white/20 rounded-2xl shadow-2xl bg-slate-900/95 backdrop-blur-xl animate-in slide-in-from-bottom-2 duration-200">
              <p className="text-[10px] text-slate-500 font-mono mb-2 ml-2 uppercase tracking-tighter">¿Te refieres a esto?</p>
              <div className="flex flex-col gap-1">
                {suggestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(q)}
                    className="text-sm px-4 py-2.5 text-left bg-white/5 hover:bg-indigo-500/20 text-indigo-100 rounded-xl transition-all border border-transparent hover:border-indigo-500/30"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Input area */}
        <div className="p-4 bg-slate-900/95 border-t border-white/10 backdrop-blur-md">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Escribe tu pregunta aquí..."
              className="flex-1 bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-600"
            />
            <button
              onClick={() => handleSend()}
              disabled={isLoading || !input.trim()}
              className="bg-indigo-600 text-white w-12 h-12 rounded-xl flex items-center justify-center hover:bg-indigo-500 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
          {/* Quick Access Chips */}
          <div className="mt-3 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {FIXED_QUESTIONS.map((q, i) => (
              <button 
                key={i} 
                onClick={() => handleSend(q)}
                className="whitespace-nowrap text-[10px] font-mono border border-white/10 bg-white/5 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-indigo-500/20 transition-all"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
