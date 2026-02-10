"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { photos, Photo } from "@/data/photos";
import { cn } from "@/lib/utils";

const categories = ["All", "Nature", "Portraits", "Street", "Travel"];

export default function GalleryGrid() {
    const [filter, setFilter] = useState("All");

    const filteredPhotos = filter === "All"
        ? photos
        : photos.filter(p => p.category === filter);

    return (
        <div className="space-y-12">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={cn(
                            "text-[10px] uppercase tracking-[0.3em] pb-1 transition-all duration-300 border-b",
                            filter === cat ? "border-white text-white" : "border-transparent text-white/40 hover:text-white"
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Masonry-like Grid */}
            <motion.div
                layout
                className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
            >
                <AnimatePresence mode="popLayout">
                    {filteredPhotos.map((photo) => (
                        <motion.div
                            key={photo.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="relative group break-inside-avoid rounded-lg overflow-hidden cursor-pointer"
                        >
                            <Link href={`/photo/${photo.id}`}>
                                <Image
                                    src={photo.imageUrl}
                                    alt={photo.title}
                                    width={600}
                                    height={800}
                                    className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                                    <span className="text-gold text-[10px] uppercase tracking-[0.3em] mb-2">{photo.category}</span>
                                    <h3 className="text-xl font-light uppercase tracking-tighter italic">{photo.title}</h3>
                                    <div className="mt-4 w-10 h-[1px] bg-white/50" />
                                    <span className="mt-4 text-[10px] uppercase tracking-widest text-white/70">View Details</span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
