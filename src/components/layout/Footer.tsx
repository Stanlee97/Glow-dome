import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] text-foreground border-t border-border/20 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-bold tracking-wider text-primary">GLOW DOME</span>
              <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Event Centre</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Nigeria's premier destination for luxury events, milestone celebrations, and world-class corporate gatherings.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 tracking-wide text-foreground">Explore</h4>
            <ul className="space-y-4">
              {['Our Story', 'Gallery', 'Packages', 'Testimonials', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center group">
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 tracking-wide text-foreground">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-sm text-muted-foreground">
                <MapPin size={18} className="mr-3 text-primary shrink-0 mt-0.5" />
                <span>12 Premium Avenue,<br />Agodi GRA,<br />Ibadan, Oyo State.</span>
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Phone size={18} className="mr-3 text-primary shrink-0" />
                <span>+234 800 GLOW DOME</span>
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Mail size={18} className="mr-3 text-primary shrink-0" />
                <span>events@glowdome.ng</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 tracking-wide text-foreground">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to receive updates on exclusive packages and event inspiration.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="rounded-none rounded-l-md border-r-0 focus-visible:ring-0 focus-visible:border-primary bg-background/50 border-border/50" 
              />
              <Button type="submit" className="rounded-none rounded-r-md bg-primary text-primary-foreground px-4">
                Subscribe
              </Button>
            </form>
          </div>

        </div>

        <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Glow Dome Event Centre. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}