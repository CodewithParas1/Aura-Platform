"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, MapPin, Award, Globe } from "lucide-react";

const timeline = [
    { year: "2015", event: "Purchased my first DSLR and began exploring the Pacific Northwest." },
    { year: "2018", event: "First solo exhibition 'Shadows of Silence' in Seattle." },
    { year: "2020", event: "National Geographic 'Nature Photographer of the Year' Runner-up." },
    { year: "2022", event: "Released 'Aura', a limited edition photobook on arctic landscapes." },
    { year: "2024", event: "Established AURA Studio in London, focusing on cinematic street photography." }
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-24 px-8 md:px-16">
            <div className="max-w-7xl mx-auto space-y-32">
                {/* Bio Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 order-2 lg:order-1">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-gold uppercase tracking-[0.4em] text-xs font-outfit"
                        >
                            The Visionary
                        </motion.span>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-5xl md:text-8xl font-light uppercase tracking-tighter"
                        >
                            Alex <br />
                            <span className="font-serif italic text-white/90">Vanguard</span>
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-white/60 text-lg leading-relaxed max-w-xl"
                        >
                            I believe that photography is more than just capturing light;
                            it&apos;s about capturing the soul of a moment. My work is a
                            study of contrast—between nature and urbanization, light and shadow,
                            ephemerality and eternity.
                        </motion.p>
                        <div className="grid grid-cols-2 gap-8 pt-8">
                            <div className="flex items-center space-x-4">
                                <MapPin className="text-gold" size={24} />
                                <span className="text-xs uppercase tracking-widest text-white/50">Based in London</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Globe className="text-gold" size={24} />
                                <span className="text-xs uppercase tracking-widest text-white/50">Worldwide Travel</span>
                            </div>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative aspect-[4/5] order-1 lg:order-2 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=2070"
                            alt="Alex Vanguard"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </section>

                {/* Timeline */}
                <section className="space-y-16">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight">The <span className="font-serif italic">Journey</span></h2>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-12 relative overflow-hidden">
                        <div className="absolute left-[15px] top-0 w-[1px] h-full bg-white/10" />
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative pl-12 flex flex-col md:flex-row md:items-center gap-4 group"
                            >
                                <div className="absolute left-0 top-1.5 w-8 h-8 bg-black border border-white/20 rounded-full flex items-center justify-center z-10 group-hover:border-gold transition-colors">
                                    <div className="w-2 h-2 bg-white rounded-full group-hover:bg-gold transition-colors" />
                                </div>
                                <span className="text-gold font-serif text-2xl md:min-w-[80px]">{item.year}</span>
                                <p className="text-white/50 text-sm uppercase tracking-wider leading-relaxed">{item.event}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Gear Section */}
                <section className="bg-white/5 p-12 md:p-24 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                    <div className="space-y-6">
                        <div className="w-16 h-16 bg-white/10 mx-auto flex items-center justify-center rounded-full text-gold">
                            <Camera size={32} />
                        </div>
                        <h3 className="text-xl font-light uppercase tracking-widest">Main Gear</h3>
                        <p className="text-white/40 text-xs uppercase tracking-widest leading-loose">
                            Sony A7R V <br />
                            Leica M11 <br />
                            35mm f/1.4 GM <br />
                            50mm f/1.2 GM
                        </p>
                    </div>
                    <div className="space-y-6">
                        <div className="w-16 h-16 bg-white/10 mx-auto flex items-center justify-center rounded-full text-gold">
                            <Award size={32} />
                        </div>
                        <h3 className="text-xl font-light uppercase tracking-widest">Expertise</h3>
                        <p className="text-white/40 text-xs uppercase tracking-widest leading-loose">
                            Cinematic Landscapes <br />
                            Street Photography <br />
                            Color Grading <br />
                            Digital Post-Production
                        </p>
                    </div>
                    <div className="space-y-6">
                        <div className="w-16 h-16 bg-white/10 mx-auto flex items-center justify-center rounded-full text-gold">
                            <Globe size={32} />
                        </div>
                        <h3 className="text-xl font-light uppercase tracking-widest">Clients</h3>
                        <p className="text-white/40 text-xs uppercase tracking-widest leading-loose">
                            National Geographic <br />
                            Vogue Travel <br />
                            Adobe <br />
                            Condé Nast
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
