import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormState = {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  date: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  eventType: "",
  date: "",
  message: "",
};

export function Booking() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.phone.trim()) e.phone = "Please enter a phone number.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email.";
    if (!form.eventType) e.eventType = "Select an event type.";
    if (!form.date) e.date = "Choose a preferred date.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // TODO: Replace this with a POST to your WhatsApp Business API endpoint, e.g.:
    // await fetch("/api/whatsapp/inquiry", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });
    // For now we simulate a successful submission.

    setIsSubmitted(true);
    setForm(initialForm);
    setTimeout(() => setIsSubmitted(false), 6000);
  };

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  return (
    <section id="booking" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(212,175,55,0.25), transparent 50%), radial-gradient(circle at 80% 70%, rgba(212,175,55,0.15), transparent 50%)",
        }}
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
              Reserve Your Date
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Begin the conversation.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Share a few details about your event and our concierge team will respond
              within one business day with availability, pricing, and a private viewing
              invitation.
            </p>

            <div className="space-y-6 border-t border-border/40 pt-8">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground tracking-widest uppercase">
                  Response Time
                </span>
                <span className="font-serif text-xl">Within 24 hours</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground tracking-widest uppercase">
                  Private Viewings
                </span>
                <span className="font-serif text-xl">By Appointment</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground tracking-widest uppercase">
                  Concierge Line
                </span>
                <span className="font-serif text-xl">+234 800 4569 663</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card border border-border/50 p-8 md:p-12"
          >
            {isSubmitted ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border border-primary/40 flex items-center justify-center text-primary">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-serif text-3xl font-semibold mb-4">
                  Thank you.
                </h3>
                <p className="text-muted-foreground max-w-sm mx-auto">
                  Your inquiry has been received. A member of our concierge team will be in
                  touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                      Full Name
                    </label>
                    <Input
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Your name"
                      className="rounded-none bg-background/50 border-border/50 h-12 focus-visible:border-primary"
                    />
                    {errors.name && (
                      <p className="text-destructive text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="+234 ..."
                      className="rounded-none bg-background/50 border-border/50 h-12 focus-visible:border-primary"
                    />
                    {errors.phone && (
                      <p className="text-destructive text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="you@example.com"
                    className="rounded-none bg-background/50 border-border/50 h-12 focus-visible:border-primary"
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                      Event Type
                    </label>
                    <Select
                      value={form.eventType}
                      onValueChange={(v) => update("eventType", v)}
                    >
                      <SelectTrigger className="rounded-none bg-background/50 border-border/50 h-12 focus:border-primary">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="conference">Conference</SelectItem>
                        <SelectItem value="birthday">Birthday</SelectItem>
                        <SelectItem value="corporate">Corporate</SelectItem>
                        <SelectItem value="cultural">Cultural / Gala</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.eventType && (
                      <p className="text-destructive text-xs mt-1">{errors.eventType}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                      Preferred Date
                    </label>
                    <Input
                      type="date"
                      value={form.date}
                      onChange={(e) => update("date", e.target.value)}
                      className="rounded-none bg-background/50 border-border/50 h-12 focus-visible:border-primary"
                    />
                    {errors.date && (
                      <p className="text-destructive text-xs mt-1">{errors.date}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                    Tell us about your event
                  </label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Guest count, theme, special requests..."
                    rows={5}
                    className="rounded-none bg-background/50 border-border/50 focus-visible:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-none bg-primary hover:bg-primary/90 text-primary-foreground h-14 tracking-widest uppercase text-sm gap-3"
                >
                  Submit Inquiry
                  <Send size={16} />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
