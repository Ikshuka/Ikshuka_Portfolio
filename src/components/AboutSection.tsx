import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const traits = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable, elegant solutions" },
  { icon: Lightbulb, title: "Creative Thinker", desc: "Turning complex problems into simple UX" },
  { icon: Rocket, title: "Fast Learner", desc: "Always exploring new frameworks & tools" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="glow-orb-blue w-[400px] h-[400px] -top-40 right-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-heading text-sm font-semibold tracking-widest uppercase text-accent mb-2">
            About Me
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Crafting digital experiences<br className="hidden md:block" /> with passion & code
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* About photo */}
            <div className="flex items-center gap-5 mb-2">
              <div className="w-20 h-20 rounded-2xl overflow-hidden glass-strong p-0.5 flex-shrink-0">
                <img src={profilePhoto} alt="Profile" className="w-full h-full object-cover rounded-2xl" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">Hey, I'm Ikshuka</h3>
                <p className="font-body text-sm text-accent">IT Undergraduate @ SLIIT • Dharmaraja College, Kandy</p>
              </div>
            </div>

            <p className="font-body text-muted-foreground leading-relaxed text-lg">
              I'm an IT undergraduate who loves the intersection of design and engineering.
              Whether it's building responsive web apps, training machine learning models,
              or sketching out database schemas — I bring curiosity and craft to everything I do.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed text-lg">
              When I'm not coding, you'll find me exploring open-source projects,
              contributing to developer communities, or doodling algorithm flowcharts
              on colourful Post-its.
            </p>
          </motion.div>

          <div className="grid gap-5">
            {traits.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl glass hover:glow-accent transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                  <t.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground">{t.title}</h3>
                  <p className="font-body text-sm text-muted-foreground mt-1">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
