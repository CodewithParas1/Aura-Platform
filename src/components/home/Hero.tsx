"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import TextReveal from "@/components/ui/TextReveal";

const heroSlides = [
    {
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070",
        title: "Celestial Horizons",
        subtitle: "Exploring the boundary between Earth and Sky"
    },
    {
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2070",
        title: "Silent Wilderness",
        subtitle: "Finding peace in the untamed corners of the world"
    },
    {
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=2070",
        title: "Urban Rhythms",
        subtitle: "Capturing the heartbeat of the modern metropolis"
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsInitialLoad(false);
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "linear" }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <Image
                        src={heroSlides[currentSlide].image}
                        alt={heroSlides[currentSlide].title}
                        fill
                        priority={currentSlide === 0}
                        className="object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                <motion.p
                    key={`subtitle-${currentSlide}`}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-gold uppercase tracking-[0.3em] text-sm mb-4 font-outfit"
                >
                    {heroSlides[currentSlide].subtitle}
                </motion.p>
                <motion.h1
                    key={`title-${currentSlide}`}
                    className="text-5xl md:text-8xl font-light tracking-tighter uppercase mb-8 max-w-4xl"
                >
                    <TextReveal text="Capturing Moments That Last Forever" className="justify-center" />
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    <Link
                        href="/gallery"
                        className="px-10 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-widest text-xs"
                    >
                        View Gallery
                    </Link>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
            >
                <ChevronDown size={30} />
            </motion.div>

            {/* Slide Indicators */}
            <div className="absolute bottom-10 right-10 z-20 flex flex-col space-y-4">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className="group flex items-center space-x-4"
                    >
                        <span className={cn(
                            "text-[10px] uppercase tracking-widest transition-opacity duration-300",
                            currentSlide === index ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                        )}>
                            0{index + 1}
                        </span>
                        <div className={cn(
                            "h-1 transition-all duration-500",
                            currentSlide === index ? "w-12 bg-white" : "w-4 bg-white/30 group-hover:w-8 group-hover:bg-white/50"
                        )} />
                    </button>
                ))}
            </div>
        </section>
    );
}
