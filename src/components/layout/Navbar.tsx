"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Camera } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-8 md:px-16 flex justify-between items-center",
                scrolled ? "bg-black/80 backdrop-blur-lg py-4 border-b border-white/10" : "bg-transparent"
            )}
        >
            <Link href="/" className="flex items-center space-x-2 group">
                <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-sm group-hover:bg-gold transition-colors duration-300">
                    <Camera size={20} />
                </div>
                <span className="text-2xl font-bold tracking-tighter uppercase font-outfit">Aura</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-12">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-300 relative group"
                    >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                    </Link>
                ))}
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-4xl font-light uppercase tracking-tighter hover:text-gold transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
