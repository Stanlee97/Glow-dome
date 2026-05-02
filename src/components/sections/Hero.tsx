import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[100dvh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" /> {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-background z-10" />
        <img 
          src="/images/hero.webp" 
          alt="Glow Dome Exterior at Night" 
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6 text-center flex flex-col items-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-4"
        >
          <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs md:text-sm">
            Welcome to Ibadan's Finest
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight max-w-4xl"
        >
          Where Grandeur <br/><span className="text-primary italic font-light">Meets</span> Perfection.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 font-light leading-relaxed"
        >
          An extraordinary canvas for unforgettable weddings, premium corporate conferences, and exclusive social milestones.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button 
            size="lg" 
            className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base tracking-wide"
            onClick={() => scrollToSection("#booking")}
          >
            Check Availability
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-none border-white/30 text-white hover:bg-white hover:text-black h-14 px-8 text-base tracking-wide backdrop-blur-sm bg-black/20"
            onClick={() => scrollToSection("#gallery")}
          >
            Explore Gallery
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-white/50 text-[10px] tracking-[0.2em] uppercase mb-3">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-[bounce_2s_infinite]" />
        </div>
      </motion.div>
    </section>
  );
}