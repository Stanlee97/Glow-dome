import { motion } from "framer-motion";
import {
  Maximize2,
  Lightbulb,
  Car,
  Zap,
  ShieldCheck,
  Settings2,
} from "lucide-react";

const features = [
  {
    icon: Maximize2,
    title: "Spacious Hall",
    text: "A 1,500-capacity main hall with soaring ceilings and column-free sightlines.",
  },
  {
    icon: Lightbulb,
    title: "Modern Lighting",
    text: "Programmable architectural lighting that transforms with your color palette.",
  },
  {
    icon: Car,
    title: "Ample Parking",
    text: "On-site parking for 300+ vehicles with valet service available on request.",
  },
  {
    icon: Zap,
    title: "24/7 Power Supply",
    text: "Triple-redundant power: grid, dual generators, and silent inverter backup.",
  },
  {
    icon: ShieldCheck,
    title: "Discreet Security",
    text: "Trained personnel, CCTV coverage, and controlled access for total peace of mind.",
  },
  {
    icon: Settings2,
    title: "Flexible Setup",
    text: "Banquet, theatre, classroom, U-shape — reconfigured to your exact brief.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
              Why Glow Dome
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Engineered for the moments you cannot afford to compromise on.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Every detail of Glow Dome — from the floor finish to the standby power — is
            chosen so your guests notice nothing but the experience you intended.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-10 border border-border/40 -mb-px -mr-px hover:bg-card transition-colors duration-500"
            >
              <div className="w-14 h-14 border border-primary/40 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                <feature.icon size={22} />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
