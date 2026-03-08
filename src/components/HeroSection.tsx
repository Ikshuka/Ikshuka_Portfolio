import { motion } from "framer-motion";
import heroImage from "@/assets/hero-portfolio.jpg";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Creative tech workspace with coding setup"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
      </div>

      {/* Ambient glow orbs */}
      <div className="glow-orb-blue w-[500px] h-[500px] top-20 right-10" />
      <div className="glow-orb-gold w-[400px] h-[400px] bottom-20 left-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-32 md:py-0 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-heading text-sm md:text-base font-semibold tracking-widest uppercase text-accent mb-4"
            >
              Hello, I'm
            </motion.p>

            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] mb-6">
              Ikshuka
              <br />
              <span className="text-gradient">Malhengoda</span>
            </h1>

            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
              IT undergraduate at SLIIT, passionate about building delightful digital
              experiences — from clean UIs to intelligent backends.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-xl bg-accent text-accent-foreground font-heading text-sm font-semibold hover:opacity-90 transition-opacity glow-accent"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-xl glass font-heading text-sm font-semibold text-foreground hover:bg-foreground/10 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden glass-strong p-1.5 glow-accent">
                <img
                  src={profilePhoto}
                  alt="Profile photo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border border-accent/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute -inset-6 rounded-full border border-tech-blue/10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-accent" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
