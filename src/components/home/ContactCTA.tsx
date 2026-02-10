"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactCTA() {
    return (
        <section className="py-32 bg-black text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/20 rounded-full animate-pulse" />
            </div>

            <div className="relative z-10 px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-9xl font-light uppercase tracking-tight mb-12"
                >
                    Let&apos;s Create <br />
                    <span className="font-serif italic">Together</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-white/50 uppercase tracking-[0.4em] text-xs mb-16"
                >
                    Currently accepting commissions and worldwide projects.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <Link
                        href="/contact"
                        className="px-16 py-6 bg-white text-black text-sm uppercase tracking-widest font-bold hover:bg-gold hover:text-white transition-all duration-500 rounded-full"
                    >
                        Get In Touch
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
