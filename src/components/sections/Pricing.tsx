import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Standard",
    tagline: "For intimate ceremonies",
    capacity: "Up to 300 guests",
    features: [
      "6-hour venue access",
      "Banquet or theatre setup",
      "Standard architectural lighting",
      "On-site coordinator",
      "Parking for 100 vehicles",
      "Standby generator",
    ],
    highlight: false,
  },
  {
    name: "Premium",
    tagline: "For signature celebrations",
    capacity: "Up to 800 guests",
    features: [
      "10-hour venue access",
      "Custom layout consultation",
      "Programmable colour lighting",
      "Dedicated event manager",
      "VIP green room & lounge",
      "Valet parking",
      "Curated supplier network",
    ],
    highlight: true,
  },
  {
    name: "Corporate",
    tagline: "For executive gatherings",
    capacity: "Up to 1,500 delegates",
    features: [
      "Full-day venue access",
      "AV stage with LED wall",
      "Executive boardroom suite",
      "Branded signage installation",
      "Translation booth ready",
      "Private dining service",
      "Hybrid streaming support",
    ],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
            Tailored Packages
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Designed around your event.
          </h2>
          <p className="text-muted-foreground text-lg">
            Three thoughtfully composed offerings — each one fully customizable to suit
            your guest list, programme, and ambition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`p-10 border flex flex-col ${
                pkg.highlight
                  ? "border-primary bg-card relative md:-translate-y-4"
                  : "border-border/40 bg-card/40"
              }`}
            >
              {pkg.highlight && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-[10px] tracking-[0.3em] uppercase px-4 py-1.5">
                  Most Requested
                </span>
              )}
              <div className="mb-8 pb-8 border-b border-border/40">
                <h3 className="font-serif text-3xl font-semibold mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{pkg.tagline}</p>
                <p className="text-primary text-sm tracking-widest uppercase">
                  {pkg.capacity}
                </p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      size={18}
                      className="text-primary shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={pkg.highlight ? "default" : "outline"}
                className={`rounded-none h-12 tracking-widest uppercase text-xs ${
                  pkg.highlight
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
                onClick={() => {
                  const el = document.querySelector("#booking");
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
              >
                Request a Quote
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-12">
          All packages are bespoke. Final pricing is shared after a private consultation.
        </p>
      </div>
    </section>
  );
}
