import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Study Buddy",
    description: "An intelligent learning assistant powered by NLP that summarises lectures and generates practice questions.",
    tags: ["Python", "FastAPI", "React", "OpenAI"],
    glow: "tech-blue",
  },
  {
    title: "Campus Connect",
    description: "A full-stack social platform for university students to share resources, form study groups, and chat in real-time.",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Socket.io"],
    glow: "accent",
  },
  {
    title: "Smart Budget Tracker",
    description: "A responsive finance dashboard with data visualisation, recurring-expense predictions, and CSV export.",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    glow: "tech-green",
  },
  {
    title: "Portfolio Builder CLI",
    description: "A command-line tool that scaffolds beautiful developer portfolios from a simple YAML config file.",
    tags: ["Go", "Cobra", "HTML/CSS", "GitHub Actions"],
    glow: "accent",
  },
];

const glowStyles: Record<string, string> = {
  "tech-blue": "shadow-[0_0_60px_-15px_hsl(200_70%_60%/0.25)]",
  "accent": "shadow-[0_0_60px_-15px_hsl(42_90%_55%/0.25)]",
  "tech-green": "shadow-[0_0_60px_-15px_hsl(160_50%_55%/0.25)]",
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="glow-orb-gold w-[500px] h-[500px] -bottom-40 -right-20" />
      <div className="glow-orb-blue w-[300px] h-[300px] top-20 -left-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-heading text-sm font-semibold tracking-widest uppercase text-accent mb-2">
            Projects
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Things I've built
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl">
            A selection of personal and academic projects that showcase my range.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group rounded-2xl glass overflow-hidden hover:${glowStyles[p.glow]} transition-all duration-500`}
            >
              {/* Top accent line */}
              <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

              <div className="p-7">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{p.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium font-heading rounded-full glass-subtle text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-5">
                  <button className="flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
                    <Github className="w-4 h-4" /> Code
                  </button>
                  <button className="flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
