import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const events = [
  {
    image: "/images/wedding-1.png",
    tag: "Wedding",
    date: "March 2026",
    title: "Adeola & Tunde — A Royal Affair",
    description:
      "A 700-guest celebration of Yoruba tradition layered with modern ballroom elegance.",
  },
  {
    image: "/images/conference-1.png",
    tag: "Conference",
    date: "February 2026",
    title: "West Africa Tech Summit",
    description:
      "Three-day executive summit hosting 1,200 delegates, keynotes and brand activations.",
  },
  {
    image: "/images/party-1.png",
    tag: "Celebration",
    date: "January 2026",
    title: "Sir Adekunle's 60th",
    description:
      "An invitation-only milestone gala with live orchestra and seven-course service.",
  },
];

export function RecentEvents() {
  return (
    <section id="events" className="py-24 md:py-32 bg-[#070707]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
            Recent Events
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Stories told under our dome.
          </h2>
          <p className="text-muted-foreground text-lg">
            A glimpse of the recent celebrations, summits, and gatherings that have called
            Glow Dome home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <motion.article
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 mb-4 text-xs tracking-[0.2em] uppercase">
                <span className="text-primary">{event.tag}</span>
                <span className="w-8 h-px bg-border" />
                <span className="text-muted-foreground">{event.date}</span>
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-3 group-hover:text-primary transition-colors flex items-start gap-2">
                <span>{event.title}</span>
                <ArrowUpRight
                  size={20}
                  className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-primary shrink-0 mt-1"
                />
              </h3>
              <p className="text-muted-foreground leading-relaxed">{event.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
