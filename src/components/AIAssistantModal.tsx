import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, User, ArrowRight, MessageSquare, Heart } from 'lucide-react';
import {
  ChatMessage,
  SUGGESTED_PROMPTS,
  queryBlissfulAI,
} from '../services/aiAssistantService';

interface AIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const AIAssistantModal: React.FC<AIAssistantModalProps> = ({
  isOpen,
  onClose,
  onNavigateToSection,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'assistant',
      text: 'Hello & Welcome! I am Blissful AI, your dedicated photography guide for Blissful Munchkins by Ashwin Bangade in Nagpur. How may I help you plan your baby or event photoshoot today?',
      timestamp: 'Just now',
      suggestedAction: {
        label: 'View Newborn Packages',
        actionType: 'scroll_to_packages',
      },
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || inputValue;
    if (!textToSend.trim() || isTyping) return;

    const userMessage: ChatMessage = {
      id: 'user-' + Date.now(),
      sender: 'user',
      text: textToSend.trim(),
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!queryText) setInputValue('');
    setIsTyping(true);

    try {
      const response = await queryBlissfulAI(textToSend);
      const assistantMessage: ChatMessage = {
        id: 'bot-' + Date.now(),
        sender: 'assistant',
        text: response.reply,
        timestamp: 'Just now',
        suggestedAction: response.suggestedAction,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: 'err-' + Date.now(),
          sender: 'assistant',
          text: 'I am here to help! Please feel free to select one of the common questions below or reach out directly to Ashwin Bangade.',
          timestamp: 'Just now',
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleActionClick = (action?: ChatMessage['suggestedAction']) => {
    if (!action) return;
    onClose();
    if (action.actionType === 'scroll_to_packages') {
      onNavigateToSection('#packages');
    } else if (action.actionType === 'scroll_to_inquiry') {
      onNavigateToSection('#inquiry');
    } else if (action.actionType === 'scroll_to_portfolio') {
      onNavigateToSection('#portfolio');
    } else if (action.actionType === 'scroll_to_themes') {
      onNavigateToSection('#themes');
    } else if (action.actionType === 'scroll_to_reels') {
      onNavigateToSection('#reels');
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Blissful AI Assistant"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end p-0 sm:p-6 bg-slate-900/30 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="absolute inset-0 -z-10" onClick={onClose} />

      {/* Main Chat Box */}
      <div className="w-full sm:w-[440px] h-[85vh] sm:h-[620px] max-h-[90vh] bg-[#FFFDFB] rounded-t-3xl sm:rounded-3xl shadow-2xl border border-pink-100/80 flex flex-col overflow-hidden animate-in slide-in-from-bottom sm:slide-in-from-right duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#FF7893] via-[#ff8fa6] to-[#60A5FA] p-4 text-white flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-inner">
              <Sparkles className="w-5 h-5 text-amber-100 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="serif-text font-bold text-sm tracking-wide">Blissful AI</h3>
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
              </div>
              <p className="text-[11px] text-pink-50">Photography Assistant • Nagpur Studio</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close Assistant"
            id="close-ai-assistant-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#FFFBFB]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-2.5 ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.sender === 'assistant' && (
                <div className="w-7 h-7 rounded-full bg-pink-50 text-[#FF7893] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed shadow-xs ${
                  msg.sender === 'user'
                    ? 'bg-[#FF7893] text-white rounded-br-xs font-medium'
                    : 'bg-white text-[#2D2D2D] border border-pink-100 rounded-bl-xs'
                }`}
              >
                <div className="whitespace-pre-line">{msg.text}</div>

                {/* Suggested Action CTA */}
                {msg.suggestedAction && (
                  <div className="mt-3 pt-2.5 border-t border-pink-100/60 flex justify-start">
                    <button
                      type="button"
                      onClick={() => handleActionClick(msg.suggestedAction)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF7893] hover:text-[#ff6584] bg-pink-50 hover:bg-pink-100/80 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
                    >
                      <span>{msg.suggestedAction.label}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>

              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-full bg-[#2D2D2D] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex gap-2.5 items-center">
              <div className="w-7 h-7 rounded-full bg-pink-50 text-[#FF7893] flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white border border-pink-100 p-3 rounded-2xl rounded-bl-xs shadow-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7893] animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7893] animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7893] animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Prompts Pills */}
        <div className="px-3 py-2 bg-pink-50/40 border-t border-pink-100 overflow-x-auto no-scrollbar">
          <p className="text-[10px] uppercase font-bold tracking-wider text-[#FF7893] mb-1.5">
            Quick Questions:
          </p>
          <div className="flex gap-1.5 overflow-x-auto pb-1">
            {SUGGESTED_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => handleSend(prompt)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white border border-pink-200/80 text-[11px] font-medium text-[#2D2D2D] hover:text-[#FF7893] hover:border-pink-300 transition-colors shrink-0 shadow-2xs cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 bg-white border-t border-pink-100 flex items-center gap-2"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about newborn shoot rates, themes..."
            className="flex-1 bg-[#FFFBFB] text-[#2D2D2D] text-xs sm:text-sm px-4 py-2.5 rounded-full border border-pink-200 focus:outline-none focus:border-[#FF7893] focus:ring-2 focus:ring-pink-100 transition-all placeholder:text-[#4A4A4A]/50"
            id="ai-assistant-input-field"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isTyping}
            className="p-2.5 rounded-full bg-[#FF7893] hover:bg-[#ff6584] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-105 shadow-sm transition-all cursor-pointer"
            aria-label="Send query"
            id="ai-assistant-send-btn"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
