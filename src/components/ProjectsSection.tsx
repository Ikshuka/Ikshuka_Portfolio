import { motion } from "framer-motion";
import smartCampusImg from "@/assets/smart-campus.png";
import wildLankaImg from "@/assets/wildlanka.png";
import vehicleRentalImg from "@/assets/vehicle-rental.png";
import wellnessMasterImg from "@/assets/wellness-master.png";
import movieTicketImg from "@/assets/movie-ticket.png";

const projects = [
  {
    title: "Smart Campus",
    description:
      "A comprehensive university management platform featuring real-time shuttle tracking with Google Maps, driver GPS transmission, facility & asset cataloguing, transport announcements, and an admin dashboard with driver ratings.",
    tags: ["React", "Spring Boot", "MongoDB", "Google Maps API"],
    glow: "tech-blue",
    github: "https://github.com/Ikshuka",
    image: smartCampusImg,
  },
  {
    title: "WildLanka",
    description:
      "A digital platform for wildlife tracking and conservation in Sri Lanka. Built as a Year 2 Semester 2 collaborative project, enabling users to explore, report, and monitor wildlife across national parks.",
    tags: ["JavaScript", "React", "Node.js", "MongoDB"],
    glow: "tech-green",
    github: "https://github.com/Ikshuka/WildLanka",
    liveUrl: "https://wild-lanka.vercel.app/",
    image: wildLankaImg,
  },
  {
    title: "Online Vehicle Rental System",
    description:
      "A full-stack vehicle rental management application with user authentication, vehicle browsing, booking management, and an admin panel for fleet operations and rental tracking.",
    tags: ["Java", "Spring Boot", "React", "MySQL"],
    glow: "accent",
    github: "https://github.com/Ikshuka/online-vehicle-rental-system",
    image: vehicleRentalImg,
  },
  {
    title: "Wellness Master",
    description:
      "A mobile wellness companion app built with Kotlin for Android. Helps users track health habits, set wellness goals, and maintain a balanced lifestyle with an intuitive material design interface.",
    tags: ["Kotlin", "Android", "Firebase", "Material Design"],
    glow: "accent",
    github: "https://github.com/Ikshuka/Wellness_Master",
    image: wellnessMasterImg,
  },
  {
    title: "Movie Ticket Booking",
    description:
      "A modern cinema ticket booking system that allows users to browse currently showing movies, select showtimes, and book their preferred seats with an intuitive interactive UI.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    glow: "tech-blue",
    github: "https://github.com/Ikshuka/MovieTicket",
    image: movieTicketImg,
  },
];

const glowStyles: Record<string, string> = {
  "tech-blue": "shadow-[0_0_60px_-15px_hsl(200_70%_60%/0.25)]",
  accent: "shadow-[0_0_60px_-15px_hsl(42_90%_55%/0.25)]",
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
              {/* Project Image */}
              <div className="relative w-full aspect-video overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>

              <div className="p-7 -mt-4 relative z-10">
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
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                  >
                    View Code →
                  </a>
                  {"liveUrl" in p && p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                    >
                      Live Demo ↗
                    </a>
                  )}
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
