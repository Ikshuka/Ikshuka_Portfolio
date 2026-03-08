import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="glow-orb-gold w-[500px] h-[500px] top-0 left-1/3" />
      <div className="glow-orb-blue w-[300px] h-[300px] bottom-20 right-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="font-heading text-sm font-semibold tracking-widest uppercase text-accent mb-2">
            Contact
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's work together
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-12">
            Have a project idea, internship opportunity, or just want to say hi?
            I'd love to hear from you.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3.5 rounded-xl glass font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition-shadow"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3.5 rounded-xl glass font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition-shadow"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3.5 rounded-xl glass font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition-shadow"
          />
          <textarea
            rows={5}
            placeholder="Your message..."
            className="w-full px-4 py-3.5 rounded-xl glass font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 resize-none transition-shadow"
          />
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-accent text-accent-foreground font-heading text-sm font-semibold hover:opacity-90 transition-opacity glow-accent"
          >
            Send Message
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-8 mt-14"
        >
          <a href="mailto:iumadawa4@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
            <Mail className="w-4 h-4" /> iumadawa4@gmail.com
          </a>
          <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://wa.me/94754077281" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
            <Phone className="w-4 h-4" /> WhatsApp
          </a>
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" /> Kandy, Sri Lanka
          </span>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border/50 text-center relative z-10">
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} — Designed & built with ❤️
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
