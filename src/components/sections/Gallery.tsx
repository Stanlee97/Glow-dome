import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Category = "All" | "Weddings" | "Conferences" | "Parties";

interface GalleryItem {
  src: string;
  category: Exclude<Category, "All">;
  title: string;
}

const items: GalleryItem[] = [
  { src: "/images/wedding-1.png", category: "Weddings", title: "Royal Wedding Reception" },
  { src: "/images/conference-1.png", category: "Conferences", title: "Executive Summit" },
  { src: "/images/party-1.png", category: "Parties", title: "Milestone Birthday Gala" },
  { src: "/images/wedding-2.png", category: "Weddings", title: "Garden Ceremony" },
  { src: "/images/conference-2.png", category: "Conferences", title: "Tech Conference" },
  { src: "/images/party-2.png", category: "Parties", title: "Anniversary Soirée" },
  { src: "/images/wedding-3.png", category: "Weddings", title: "Traditional Engagement" },
  { src: "/images/about.png", category: "Conferences", title: "Boardroom Setup" },
  { src: "/images/hero.png", category: "Parties", title: "Glow Dome by Night" },
];

const categories: Category[] = ["All", "Weddings", "Conferences", "Parties"];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? items
      : items.filter((i) => i.category === activeCategory);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const next = () =>
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % filtered.length));
  const prev = () =>
    setLightboxIndex((i) =>
      i === null ? 0 : (i - 1 + filtered.length) % filtered.length,
    );

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#070707]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
            Our Gallery
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Moments captured at Glow Dome.
          </h2>
          <p className="text-muted-foreground text-lg">
            A curated look inside the celebrations, conventions, and ceremonies our space
            has hosted.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 text-sm tracking-widest uppercase border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border/50 text-muted-foreground hover:text-primary hover:border-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                layout
                key={`${item.src}-${activeCategory}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => openLightbox(i)}
                className="group relative overflow-hidden cursor-pointer aspect-[4/5]"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <span className="text-primary text-xs tracking-[0.2em] uppercase">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-2xl text-white mt-2">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/80 hover:text-primary transition-colors z-10"
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-primary transition-colors z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={48} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-primary transition-colors z-10"
              aria-label="Next"
            >
              <ChevronRight size={48} />
            </button>
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].title}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="text-center mt-4">
                <span className="text-primary text-xs tracking-[0.2em] uppercase">
                  {filtered[lightboxIndex].category}
                </span>
                <h3 className="font-serif text-2xl text-white mt-1">
                  {filtered[lightboxIndex].title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
