"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Twitter, Linkedin, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-24 px-8 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
                {/* Contact Info */}
                <div className="space-y-12">
                    <div className="space-y-6">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-gold uppercase tracking-[0.4em] text-xs font-outfit"
                        >
                            Get In Touch
                        </motion.span>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-6xl md:text-9xl font-light uppercase tracking-tighter"
                        >
                            Start a <br />
                            <span className="font-serif italic text-white/90">Project</span>
                        </motion.h1>
                    </div>

                    <div className="space-y-8">
                        <p className="text-white/50 text-lg max-w-md">
                            Whether you are looking for a commercial shoot, a private portrait session, or just want to say hello, I am always open to new connections.
                        </p>

                        <div className="space-y-6 pt-4">
                            <div className="flex items-center space-x-6 group">
                                <div className="p-4 bg-white/5 rounded-full text-gold group-hover:bg-white group-hover:text-black transition-all">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <span className="block text-[10px] uppercase tracking-widest text-white/30">Email Me</span>
                                    <span className="text-xl font-light">hello@auraphoto.com</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-6 group">
                                <div className="p-4 bg-white/5 rounded-full text-gold group-hover:bg-white group-hover:text-black transition-all">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <span className="block text-[10px] uppercase tracking-widest text-white/30">Call Me</span>
                                    <span className="text-xl font-light">+44 20 7946 0123</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 pt-12">
                        <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/50">Follow My Perspective</h4>
                        <div className="flex space-x-8">
                            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -5, textShadow: "0px 0px 8px rgb(212, 175, 55)" }}
                                    className="text-white/40 hover:text-gold transition-colors"
                                >
                                    <Icon size={24} />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10"
                >
                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 ml-1">Full Name</label>
                            <input
                                type="text"
                                placeholder="Ex. John Doe"
                                className="w-full bg-transparent border-b border-white/20 py-4 px-2 focus:outline-none focus:border-gold transition-colors placeholder:text-white/10 text-white font-light text-xl"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 ml-1">Email Address</label>
                            <input
                                type="email"
                                placeholder="Ex. john@example.com"
                                className="w-full bg-transparent border-b border-white/20 py-4 px-2 focus:outline-none focus:border-gold transition-colors placeholder:text-white/10 text-white font-light text-xl"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 ml-1">Message</label>
                            <textarea
                                rows={4}
                                placeholder="Tell me about your vision..."
                                className="w-full bg-transparent border border-white/10 rounded-xl p-4 mt-2 focus:outline-none focus:border-gold transition-colors placeholder:text-white/10 text-white font-light text-xl resize-none"
                            />
                        </div>
                        <button className="group w-full py-6 bg-white text-black text-sm uppercase tracking-widest font-bold hover:bg-gold hover:text-white transition-all duration-500 rounded-full flex items-center justify-center space-x-4">
                            <span>Send Message</span>
                            <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </main>
    );
}
