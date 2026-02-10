import GalleryGrid from "@/components/gallery/GalleryGrid";

export default function GalleryPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-8 md:px-16 bg-black">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <span className="text-gold uppercase tracking-[0.4em] text-[10px]">The Collection</span>
                    <h1 className="text-5xl md:text-7xl font-light uppercase tracking-tighter">
                        Visual <span className="font-serif italic font-normal text-white/90">Archives</span>
                    </h1>
                    <p className="text-white/40 max-w-2xl mx-auto text-sm uppercase tracking-widest leading-relaxed">
                        Exploring the world through a cinematic lens, one archive at a time.
                    </p>
                </div>

                <GalleryGrid />
            </div>
        </main>
    );
}
