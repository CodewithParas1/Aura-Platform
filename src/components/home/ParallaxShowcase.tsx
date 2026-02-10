"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ParallaxItemProps {
    src: string;
    title: string;
    speed: number;
}

function ParallaxItem({ src, title, speed }: ParallaxItemProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, speed * 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);

    return (
        <div ref={ref} className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden my-32 px-8">
            <motion.div
                style={{ y }}
                className="relative w-full h-full max-w-5xl rounded-2xl overflow-hidden"
            >
                <motion.div style={{ scale }} className="w-full h-full">
                    <Image
                        src={src}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-black/30" />
            </motion.div>

            <motion.div
                style={{ opacity }}
                className="absolute z-10 text-center"
            >
                <h2 className="text-6xl md:text-9xl font-light uppercase tracking-tighter italic text-white drop-shadow-2xl">
                    {title}
                </h2>
            </motion.div>
        </div>
    );
}

export default function ParallaxShowcase() {
    return (
        <section className="bg-black py-24">
            <div className="px-8 md:px-16 mb-24">
                <span className="text-gold uppercase tracking-[0.4em] text-xs">Immersive Views</span>
                <h2 className="text-4xl md:text-6xl font-light uppercase tracking-tighter mt-4">
                    Perspective <br />
                    <span className="font-serif italic text-white/90">& Scale</span>
                </h2>
            </div>

            <ParallaxItem
                src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=2070"
                title="Atmosphere"
                speed={-1}
            />
            <ParallaxItem
                src="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&q=80&w=2070"
                title="Geometry"
                speed={1}
            />
            <ParallaxItem
                src="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=2070"
                title="Silence"
                speed={-0.5}
            />
        </section>
    );
}
