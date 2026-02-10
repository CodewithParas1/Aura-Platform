"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { photos } from "@/data/photos";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FeaturedGrid() {
    const featuredPhotos = photos.filter(p => p.featured);

    return (
        <section className="py-24 px-8 md:px-16 bg-black">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-light uppercase tracking-tighter mb-4"
                    >
                        Featured <span className="font-serif italic">Works</span>
                    </motion.h2>
                    <p className="text-white/50 max-w-md uppercase tracking-wider text-xs">
                        A curated selection of our most impactful and emotionally resonant captures.
                    </p>
                </div>
                <Link
                    href="/gallery"
                    className="group mt-8 md:mt-0 flex items-center space-x-2 text-sm uppercase tracking-[0.2em] border-b border-white/20 pb-2 hover:border-white transition-all duration-300"
                >
                    <span>Explore All</span>
                    <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
                {featuredPhotos.map((photo, index) => (
                    <motion.div
                        key={photo.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={cn(
                            "relative group rounded-lg overflow-hidden",
                            index % 4 === 0 ? "lg:col-span-7 h-[600px]" :
                                index % 4 === 1 ? "lg:col-span-5 h-[400px]" :
                                    index % 4 === 2 ? "lg:col-span-5 h-[500px]" :
                                        "lg:col-span-7 h-[450px]"
                        )}
                    >
                        <Link href={`/photo/${photo.id}`}>
                            <Image
                                src={photo.imageUrl}
                                alt={photo.title}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <span className="text-gold text-[10px] uppercase tracking-[0.2em] mb-2">{photo.category}</span>
                                <h3 className="text-2xl font-light uppercase tracking-tighter italic">{photo.title}</h3>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
