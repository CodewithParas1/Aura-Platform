"use client";

import { motion } from "framer-motion";
import { Camera, Layers, Users, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: <Camera size={32} />,
        title: "Commercial Shoots",
        description: "High-end product and editorial photography for brands looking to make a cinematic statement.",
        price: "Starting at $1,500"
    },
    {
        icon: <Users size={32} />,
        title: "Private Portraits",
        description: "Intimate and emotive portrait sessions captured in unique locations or within my London studio.",
        price: "Starting at $450"
    },
    {
        icon: <Layers size={32} />,
        title: "Art Licensing",
        description: "Purchase limited usage licenses for digital or print media. Optimized for high-fidelity output.",
        price: "Custom Pricing"
    },
    {
        icon: <Star size={32} />,
        title: "Workshops",
        description: "One-on-one sessions focused on cinematic lighting, composition, and professional post-production.",
        price: "Starting at $300/hr"
    }
];

export default function Services() {
    return (
        <section className="py-32 px-8 md:px-16 bg-[#050505]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-4 space-y-8">
                    <span className="text-gold uppercase tracking-[0.4em] text-xs">Work with Me</span>
                    <h2 className="text-4xl md:text-6xl font-light uppercase tracking-tighter">
                        Professional <br />
                        <span className="font-serif italic font-normal text-white/90">Services</span>
                    </h2>
                    <p className="text-white/40 leading-relaxed text-lg max-w-sm">
                        Tailored photographic solutions that bridge the gap between commercial precision and artistic soul.
                    </p>
                    <div className="pt-8">
                        <Link href="/contact" className="group flex items-center space-x-4 text-xs uppercase tracking-widest text-white hover:text-gold transition-colors">
                            <span>Inquire about a service</span>
                            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </div>

                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-10 bg-white/5 rounded-3xl border border-white/10 hover:border-gold/50 transition-colors group"
                        >
                            <div className="text-gold mb-8 bg-gold/10 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-light uppercase tracking-tighter mb-4">{service.title}</h3>
                            <p className="text-white/40 text-sm leading-relaxed mb-8">
                                {service.description}
                            </p>
                            <div className="flex justify-between items-center pt-6 border-t border-white/5">
                                <span className="text-[10px] uppercase tracking-widest text-white/30">Investment</span>
                                <span className="text-sm font-bold text-gold">{service.price}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
