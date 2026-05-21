import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Phone, X, Send } from 'lucide-react';

interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [conversationHistory, setConversationHistory] = useState<ChatMessage[]>([]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isChatOpen) {
      scrollToBottom();
    }
  }, [messages, isChatOpen]);

  useEffect(() => {
    const handleOpenChat = (e: Event) => {
      const customEvent = e as CustomEvent;
      const prefillMessage = customEvent.detail?.message;
      setIsChatOpen(true);
      setIsOpen(false);
      if (prefillMessage) {
        setInputVal(prefillMessage);
      }
    };
    window.addEventListener('open-perfectplus-chat', handleOpenChat);
    return () => window.removeEventListener('open-perfectplus-chat', handleOpenChat);
  }, []);

  // Handle outside click to close options or chat window
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputVal.trim() || isTyping) return;

    const userMsg = inputVal.trim();
    setInputVal('');

    // Add User Message to UI
    const updatedMessages: ChatMessage[] = [...messages, { role: 'user', content: userMsg }];
    setMessages(updatedMessages);
    setIsTyping(true);

    try {
      // Generate a session ID once per page load (if not already done)
      const sessionId = sessionStorage.getItem('chat_session_id') || 
        Math.random().toString(36).substring(2);
      sessionStorage.setItem('chat_session_id', sessionId);

      // Send message to n8n
      const response = await fetch(
        'https://n8n.srv1462469.hstgr.cloud/webhook/website-chat',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: userMsg,
            session_id: sessionId,
            history: conversationHistory  // array of {role, content} objects
          })
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const botReply = data.reply;

      // Add Bot/Assistant Message to UI
      setMessages((prev) => [...prev, { role: 'assistant', content: botReply }]);

      // Maintain conversation history
      let updatedHistory = [...conversationHistory];
      updatedHistory.push({ role: 'user', content: userMsg });
      updatedHistory.push({ role: 'assistant', content: botReply });

      if (updatedHistory.length > 10) {
        updatedHistory = updatedHistory.slice(-10);
      }
      setConversationHistory(updatedHistory);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'দুঃখিত, সংযোগে সমস্যা হয়েছে। অনুগ্রহ করে WhatsApp এ যোগাযোগ করুন: https://wa.me/8801887633339'
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-[9999] font-sans flex flex-col items-end">
      
      {/* Live Chat Popup Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="mb-4 w-[340px] max-w-[calc(100vw-32px)] h-[480px] bg-[#0a0a1a]/95 backdrop-blur-lg border border-[rgba(124,58,237,0.4)] rounded-2xl flex flex-col shadow-[0_10px_40px_rgba(124,58,237,0.3)] text-white overflow-hidden"
          >
            {/* Header */}
            <div className="px-4 py-3 bg-gradient-to-r from-purple-700/80 to-indigo-800/80 backdrop-blur-md flex items-center justify-between border-b border-purple-500/20">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></span>
                <span className="font-bold text-sm tracking-wide bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Perfectplus AI 🤖
                </span>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-purple-500">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === 'user'
                        ? 'bg-purple-600 text-white rounded-tr-none shadow-[0_2px_10px_rgba(124,58,237,0.3)]'
                        : 'bg-slate-900/90 text-slate-100 border border-slate-850 rounded-tl-none'
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center space-x-1 px-3.5 py-3.5 bg-slate-900/90 border border-slate-850 rounded-2xl rounded-tl-none">
                    <span className="inline-block w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="inline-block w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="inline-block w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input Field & Send Button */}
            <form onSubmit={handleSendMessage} className="p-3 bg-slate-950/80 border-t border-purple-500/10 flex items-center gap-2">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type your message..."
                disabled={isTyping}
                className="flex-1 min-w-0 bg-[#0e0e22] text-sm text-white placeholder-slate-500 px-3.5 py-2.5 rounded-xl border border-purple-500/25 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button
                type="submit"
                disabled={!inputVal.trim() || isTyping}
                className="p-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white disabled:opacity-40 disabled:hover:bg-purple-600 cursor-pointer transition-colors flex items-center justify-center flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Expanded Sub-options list */}
      <div className="relative flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="flex flex-col gap-3.5 mb-4 items-end"
            >
              {/* Option 3: Live Chat Option */}
              <div className="flex items-center gap-3 group">
                <span className="px-2.5 py-1 bg-[#0f0f24]/90 text-sm font-semibold text-white border border-purple-500/30 rounded-lg shadow-md md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
                  Live Chat
                </span>
                <button
                  onClick={() => {
                    setIsChatOpen(true);
                    setIsOpen(false);
                  }}
                  className="w-11 h-11 rounded-full bg-violet-600 hover:bg-violet-500 hover:scale-105 active:scale-95 text-white flex items-center justify-center shadow-lg transition-transform duration-200 cursor-pointer"
                  title="Live Chat"
                >
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>

              {/* Option 2: WhatsApp Option */}
              <div className="flex items-center gap-3 group">
                <span className="px-2.5 py-1 bg-[#0f0f24]/90 text-sm font-semibold text-white border border-purple-500/30 rounded-lg shadow-md md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
                  WhatsApp
                </span>
                <a
                  href="https://wa.me/8801887633339"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-green-500 hover:bg-green-400 hover:scale-105 active:scale-95 text-white flex items-center justify-center shadow-lg transition-transform duration-200 cursor-pointer"
                  title="WhatsApp"
                  onClick={() => setIsOpen(false)}
                >
                  {/* Styled SVG replacement so a direct Lucide placeholder isn't needed for WhatsApp */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>

              {/* Option 1: Direct Call Option */}
              <div className="flex items-center gap-3 group">
                <span className="px-2.5 py-1 bg-[#0f0f24]/90 text-sm font-semibold text-white border border-purple-500/30 rounded-lg shadow-md md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
                  Direct Call
                </span>
                <a
                  href="tel:+8801887633339"
                  className="w-11 h-11 rounded-full bg-emerald-600 hover:bg-emerald-500 hover:scale-105 active:scale-95 text-white flex items-center justify-center shadow-lg transition-transform duration-200 cursor-pointer animate-pulse"
                  title="Direct Call"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Primary Floating Purple Circular Toggle Button */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
          if (isChatOpen) setIsChatOpen(false);
        }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-[#7c3aed] text-white flex items-center justify-center shadow-[0_5px_25px_rgba(124,58,237,0.5)] cursor-pointer hover:bg-[#8b5cf6] transition-colors overflow-hidden z-[10001]"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </motion.div>
      </motion.button>

    </div>
  );
};
