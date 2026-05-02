import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "2348004569663";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
              Visit Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Find your way to Glow Dome.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Tucked away in the prestigious quiet of Agodi GRA, we welcome private
              viewings by appointment.
            </p>

            <div className="space-y-8 border-t border-border/40 pt-10">
              <div className="flex gap-5">
                <div className="w-12 h-12 shrink-0 border border-primary/40 flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    12 Premium Avenue, Agodi GRA,<br />
                    Ibadan, Oyo State, Nigeria.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-12 h-12 shrink-0 border border-primary/40 flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold mb-1">Concierge</h3>
                  <p className="text-muted-foreground">+234 800 4569 663</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-12 h-12 shrink-0 border border-primary/40 flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">events@glowdome.ng</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-12 h-12 shrink-0 border border-primary/40 flex items-center justify-center text-primary">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold mb-1">Viewing Hours</h3>
                  <p className="text-muted-foreground">
                    Mon — Sat: 9:00 AM to 7:00 PM<br />
                    Sundays: by appointment
                  </p>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hello Glow Dome, I would like to inquire about hosting an event.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-12"
            >
              <Button
                size="lg"
                className="rounded-none bg-[#25D366] hover:bg-[#1eb955] text-white h-14 px-8 tracking-widest uppercase text-xs gap-3"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border border-border/50 overflow-hidden h-full min-h-[500px] lg:min-h-[700px]"
          >
            <iframe
              title="Glow Dome Location — Agodi, Ibadan"
              src="https://www.google.com/maps?q=Agodi+GRA,+Ibadan,+Oyo+State,+Nigeria&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px", filter: "grayscale(0.4) contrast(1.1)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
