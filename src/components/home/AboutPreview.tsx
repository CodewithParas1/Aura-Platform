"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TextReveal from "@/components/ui/TextReveal";

export default function AboutPreview() {
    return (
        <section className="py-24 px-8 md:px-16 bg-[#0a0a0a] flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 relative w-full h-[500px] md:h-[600px]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="absolute inset-0 z-10 border border-white/10 m-4"
                />
                <Image
                    src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=2070"
                    alt="Photographer at work"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="flex-1 space-y-8">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-gold uppercase tracking-[0.3em] text-xs font-outfit"
                >
                    The Artist
                </motion.span>
                <TextReveal
                    text="Behind the Lens"
                    className="text-4xl md:text-6xl font-light uppercase tracking-tighter"
                />
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-white/60 leading-relaxed text-lg"
                >
                    Driven by a passion for visual storytelling and cinematic aesthetics,
                    I travel the world capturing the whispers of nature and the echoes of
                    human emotion. Every photograph is a portal to a moment frozen in time.
                </motion.p>
                <div className="flex space-x-8 pt-4">
                    <div>
                        <span className="block text-2xl font-bold font-serif">10+</span>
                        <span className="text-[10px] uppercase tracking-widest text-white/40">Years Exp</span>
                    </div>
                    <div>
                        <span className="block text-2xl font-bold font-serif">500+</span>
                        <span className="text-[10px] uppercase tracking-widest text-white/40">Galleries</span>
                    </div>
                    <div>
                        <span className="block text-2xl font-bold font-serif">25</span>
                        <span className="text-[10px] uppercase tracking-widest text-white/40">Awards</span>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="pt-8"
                >
                    <Link
                        href="/about"
                        className="text-sm uppercase tracking-widest border-b border-white/20 pb-2 hover:border-white transition-all duration-300"
                    >
                        Learn More About Me
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
