import { motion } from "framer-motion";
import { Users, MapPin, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "Grand Capacity",
    text: "Comfortably hosts intimate ceremonies of 100 to grand celebrations of 1,500 guests.",
  },
  {
    icon: MapPin,
    title: "Prime Agodi Address",
    text: "Located in the prestigious heart of Agodi GRA — Ibadan's most respected neighborhood.",
  },
  {
    icon: Sparkles,
    title: "Versatile Space",
    text: "Engineered for weddings, conferences, milestone birthdays, and cultural galas.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="aspect-[4/5] w-full overflow-hidden">
              <img
                src="/images/about.webp"
                alt="Inside Glow Dome"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:flex absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8 w-56 flex-col">
              <span className="font-serif text-5xl font-bold">12+</span>
              <span className="text-sm tracking-widest uppercase mt-2">Years of Excellence</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
          >
            <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
              About Glow Dome
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              A landmark for moments that matter.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Set in the prestigious enclave of Agodi GRA, Glow Dome is Ibadan's premier
              destination for occasions that deserve more than just a venue. From soaring
              ceilings and bespoke lighting to white-glove service, every element is
              orchestrated to elevate your event into a story worth telling.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Whether you are exchanging vows, addressing a boardroom of executives, or
              toasting a milestone among friends, our space adapts to your vision with
              uncompromising elegance.
            </p>

            <div className="space-y-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  className="flex items-start gap-5 border-l-2 border-primary/40 pl-6"
                >
                  <div className="w-12 h-12 shrink-0 border border-primary/40 flex items-center justify-center text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
