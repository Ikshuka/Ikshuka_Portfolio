import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "Go", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
  },
  {
    category: "Backend & DB",
    skills: ["Node.js", "FastAPI", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "Docker", "GitHub Actions", "Figma", "Linux", "VS Code"],
  },
  {
    category: "AI / ML",
    skills: ["PyTorch", "scikit-learn", "OpenAI API", "Pandas", "NumPy"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="glow-orb-blue w-[400px] h-[400px] top-0 left-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-heading text-sm font-semibold tracking-widest uppercase text-accent mb-2">
            Skills
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            My toolkit
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl">
            Technologies and tools I work with on a regular basis.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl glass hover:glow-accent transition-all duration-300"
            >
              <h3 className="font-heading text-base font-semibold text-accent mb-4">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-body font-medium rounded-xl glass-subtle text-foreground/80 hover:text-accent hover:border-accent/30 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
