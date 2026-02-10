"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { photos } from "@/data/photos";

export default function HorizontalScroll() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-20 left-8 md:left-16 z-10">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-white/20 text-[12vw] font-bold uppercase tracking-tighter leading-none pointer-events-none"
                    >
                        Film <span className="font-serif italic font-light italic">Archives</span>
                    </motion.h2>
                </div>

                <motion.div style={{ x }} className="flex gap-12 px-8 md:px-16">
                    {photos.map((photo) => (
                        <div
                            key={photo.id}
                            className="group relative h-[60vh] w-[80vw] md:w-[45vw] flex-shrink-0 overflow-hidden rounded-xl bg-neutral-900"
                        >
                            <Image
                                src={photo.imageUrl}
                                alt={photo.title}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 z-20 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                <p className="text-gold text-xs uppercase tracking-widest mb-2">{photo.category}</p>
                                <h3 className="text-3xl font-light uppercase tracking-tighter italic text-white">
                                    {photo.title}
                                </h3>
                                <p className="text-white/60 text-sm mt-2 max-w-xs">{photo.description}</p>
                            </div>
                        </div>
                    ))}
                    {/* Duplicate some for length if needed, but photos array is fine for now */}
                    {photos.slice(0, 2).map((photo, i) => (
                        <div
                            key={`dup-${i}`}
                            className="group relative h-[60vh] w-[80vw] md:w-[45vw] flex-shrink-0 overflow-hidden rounded-xl bg-neutral-900"
                        >
                            <Image
                                src={photo.imageUrl}
                                alt={photo.title}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
