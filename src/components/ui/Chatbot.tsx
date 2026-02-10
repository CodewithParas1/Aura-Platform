"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, User, Bot, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
    role: "user" | "assistant";
    content: string;
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Welcome to Aura Studio. I'm your concierge. How can I help you today? I can help you find photos or explain the techniques behind them." }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg = input.trim();
        setInput("");
        setMessages(prev => [...prev, { role: "user", content: userMsg }]);
        setIsLoading(true);

        try {
            const response = await fetch("http://localhost:8000/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMsg, session_id: "portfolio-user" }),
            });

            const data = await response.json();
            if (data.response) {
                setMessages(prev => [...prev, { role: "assistant", content: data.response }]);
            } else {
                setMessages(prev => [...prev, { role: "assistant", content: "I'm having trouble connecting to the studio. Please try again later." }]);
            }
        } catch (error) {
            setMessages(prev => [...prev, { role: "assistant", content: "The studio backend seems to be offline. Please ensure it's running." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-black/90 border border-white/10 backdrop-blur-xl rounded-2xl flex flex-col overflow-hidden shadow-2xl"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                                    <Bot size={18} className="text-gold" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium uppercase tracking-wider text-white">Studio Concierge</h3>
                                    <p className="text-[10px] text-white/40 uppercase tracking-widest">Powered by Google ADK</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/50 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10"
                        >
                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        "flex flex-col max-w-[85%]",
                                        msg.role === "user" ? "ml-auto items-end" : "items-start"
                                    )}
                                >
                                    <div className={cn(
                                        "p-3 rounded-2xl text-sm leading-relaxed",
                                        msg.role === "user"
                                            ? "bg-white text-black"
                                            : "bg-white/5 text-white/90 border border-white/5"
                                    )}>
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex items-start">
                                    <div className="bg-white/5 p-3 rounded-2xl">
                                        <Loader2 size={16} className="animate-spin text-gold" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-white/10 bg-white/5">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                    placeholder="Ask about photography..."
                                    className="w-full bg-black/50 border border-white/10 rounded-full py-2 px-4 pr-12 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-all"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={isLoading}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-black hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
                                >
                                    <Send size={14} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500",
                    isOpen ? "bg-white text-black rotate-90" : "bg-gold text-black"
                )}
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </motion.button>
        </div>
    );
}
