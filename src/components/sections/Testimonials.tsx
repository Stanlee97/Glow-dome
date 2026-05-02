import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Glow Dome delivered a wedding that our guests are still talking about months later. Every team member moved with intention — it felt less like a venue and more like a partner in our story.",
    name: "Adeola & Tunde",
    role: "Newlyweds, March 2026",
  },
  {
    quote:
      "We have hosted summits in Lagos, Abuja, and Accra. None have matched the technical command and quiet professionalism we experienced at Glow Dome. Booking again, without hesitation.",
    name: "Dr. Funmi Adesanya",
    role: "Director, West Africa Tech Summit",
  },
  {
    quote:
      "From the lighting design to the discreet security, the level of care was extraordinary. My father's 60th felt like a state event, not a private dinner.",
    name: "Olumide Adekunle",
    role: "Private Client",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[#070707]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
            Words from our clients
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">
            Trusted by those who choose carefully.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="p-10 border border-border/40 bg-card/40 flex flex-col"
            >
              <Quote className="text-primary mb-8" size={36} strokeWidth={1.2} />
              <blockquote className="font-serif text-lg leading-relaxed text-foreground/90 italic flex-grow mb-8">
                "{t.quote}"
              </blockquote>
              <figcaption className="border-t border-border/40 pt-6">
                <div className="font-semibold text-base">{t.name}</div>
                <div className="text-muted-foreground text-xs tracking-widest uppercase mt-1">
                  {t.role}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
