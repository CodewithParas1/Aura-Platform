"use client";

import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { photos } from "@/data/photos";
import { ArrowLeft, ArrowRight, Download, ShoppingBag, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PhotoDetailPage() {
    const { id } = useParams();
    const router = useRouter();

    const currentPhotoIndex = photos.findIndex(p => p.id === id);
    const photo = photos[currentPhotoIndex];

    if (!photo) return <div className="h-screen flex items-center justify-center">Photo not found</div>;

    const prevPhoto = photos[currentPhotoIndex - 1] || photos[photos.length - 1];
    const nextPhoto = photos[currentPhotoIndex + 1] || photos[0];

    return (
        <main className="min-h-screen bg-black text-white pt-24 pb-12 px-8 md:px-16">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Navigation */}
                <div className="flex justify-between items-center mb-8">
                    <Link
                        href="/gallery"
                        className="flex items-center space-x-2 text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={16} />
                        <span>Back to Gallery</span>
                    </Link>
                    <div className="flex space-x-6">
                        <Link href={`/photo/${prevPhoto.id}`} className="hover:text-gold transition-colors">
                            <ArrowLeft size={24} />
                        </Link>
                        <Link href={`/photo/${nextPhoto.id}`} className="hover:text-gold transition-colors">
                            <ArrowRight size={24} />
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Main Image View */}
                    <motion.div
                        key={photo.id}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-8 relative aspect-[4/5] lg:aspect-[3/2] rounded-lg overflow-hidden group"
                    >
                        <Image
                            src={photo.imageUrl}
                            alt={photo.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>

                    {/* Details & Purchase */}
                    <div className="lg:col-span-4 space-y-12">
                        <div className="space-y-4">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                key={`cat-${photo.id}`}
                                className="text-gold uppercase tracking-[0.4em] text-xs font-outfit"
                            >
                                {photo.category}
                            </motion.span>
                            <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                key={`title-${photo.id}`}
                                className="text-4xl md:text-6xl font-light uppercase tracking-tighter italic"
                            >
                                {photo.title}
                            </motion.h1>
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                key={`desc-${photo.id}`}
                                className="text-white/60 leading-relaxed"
                            >
                                {photo.description}
                            </motion.p>
                        </div>

                        <div className="pb-8 border-b border-white/10 flex justify-between items-end">
                            <div>
                                <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] block mb-2">Investment</span>
                                <span className="text-4xl font-serif">${photo.price}</span>
                            </div>
                            <div className="flex space-x-4">
                                <button className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
                                    <Share2 size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <button className="w-full py-5 bg-white text-black text-sm uppercase tracking-widest font-bold hover:bg-gold hover:text-white transition-all duration-500 flex items-center justify-center space-x-3">
                                <ShoppingBag size={18} />
                                <span>Purchase License</span>
                            </button>
                            <button className="w-full py-5 border border-white/20 text-white text-sm uppercase tracking-widest font-bold hover:bg-white/5 transition-all duration-300 flex items-center justify-center space-x-3">
                                <Download size={18} />
                                <span>Free Download (Personal)</span>
                            </button>
                        </div>

                        {/* Print details */}
                        <div className="pt-8 space-y-4">
                            <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/50">Specifications</h4>
                            <ul className="text-xs space-y-2 text-white/70">
                                <li>• Museum-quality archival pigment print</li>
                                <li>• Hand-signed and numbered by the artist</li>
                                <li>• Includes Certificate of Authenticity</li>
                                <li>• Ships in a reinforce protective tube</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
