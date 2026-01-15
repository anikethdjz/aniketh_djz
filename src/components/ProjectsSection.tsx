import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, X, Layers } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'FinEd',
    subtitle: 'AI-Powered Financial Education Platform',
    description: 'Built a full-stack AI-driven platform for financial learning with budgeting tools, investment simulators, real-time finance updates, and AI mentorship.',
    problem: 'Financial literacy is lacking among young adults, leading to poor money decisions.',
    tech: ['React.js', 'Node.js', 'Express', 'Firebase', 'Render'],
    year: '2025',
    color: 'cyan',
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'EcoByte',
    subtitle: 'Smart E-Waste Management App',
    description: 'Developed an AI-powered e-waste marketplace for Google Solution Challenge 2025, enabling certified recycling, reward-based disposal, and awareness tracking.',
    problem: 'E-waste is growing 5x faster than recycling efforts, creating environmental hazards.',
    tech: ['Flutter', 'Firebase', 'Supabase', 'Gemini', 'Cloud Vision API', 'OpenStreetMap'],
    year: '2025',
    color: 'purple',
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Climorae',
    subtitle: 'AI-Powered Climate Resilience Platform',
    description: 'Created an AI platform for Hack For Earth 2025 providing climate risk insights, early warnings, interactive risk maps, and simplified climate guidance.',
    problem: 'Climate data is complex and inaccessible for everyday decision-making.',
    tech: ['React.js', 'TensorFlow', 'Node.js', 'Express.js', 'OpenStreetMap'],
    year: '2025',
    color: 'lime',
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'JalMitra',
    subtitle: 'AI-Driven Water Data Chatbot',
    description: 'Built a multilingual AI chatbot for Smart India Hackathon 2025 delivering groundwater and rainfall insights using real-time INGRES data.',
    problem: 'Water data is siloed and difficult for citizens and farmers to access.',
    tech: ['React.js', 'FastAPI', 'Neo4j', 'Pinecone', 'Gemini', 'Tailwind'],
    year: '2025',
    color: 'blue',
    link: '#',
    github: '#',
  },
];

const colorVariants = {
  cyan: {
    gradient: 'from-primary/20 to-primary/5',
    border: 'hover:border-primary/50',
    badge: 'bg-primary/20 text-primary',
    glow: 'group-hover:shadow-primary/20',
  },
  purple: {
    gradient: 'from-secondary/20 to-secondary/5',
    border: 'hover:border-secondary/50',
    badge: 'bg-secondary/20 text-secondary',
    glow: 'group-hover:shadow-secondary/20',
  },
  lime: {
    gradient: 'from-accent/20 to-accent/5',
    border: 'hover:border-accent/50',
    badge: 'bg-accent/20 text-accent',
    glow: 'group-hover:shadow-accent/20',
  },
  blue: {
    gradient: 'from-glow-blue/20 to-glow-blue/5',
    border: 'hover:border-glow-blue/50',
    badge: 'bg-glow-blue/20 text-glow-blue',
    glow: 'group-hover:shadow-glow-blue/20',
  },
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="relative py-24 px-4 md:px-8 lg:px-12">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Production-grade applications built for hackathons and real-world impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const colors = colorVariants[project.color as keyof typeof colorVariants];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className={`
                  group relative cursor-pointer
                  glass rounded-2xl p-7 md:p-8
                  border border-border/50 ${colors.border}
                  transition-all duration-500
                  hover:shadow-xl ${colors.glow}
                  hover:-translate-y-2
                  overflow-hidden
                `}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-5">
                    <div>
                      <span className={`text-sm font-medium px-3 py-1.5 rounded-full ${colors.badge}`}>
                        {project.year}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mt-3">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground mt-2">
                        {project.subtitle}
                      </p>
                    </div>
                    <motion.div
                      className="p-3 rounded-lg bg-muted/50 opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Layers className="w-6 h-6 text-muted-foreground" />
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="text-base text-muted-foreground mb-5 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-3">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-3 py-1.5 rounded-md bg-muted/50 text-muted-foreground font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-sm px-3 py-1.5 rounded-md bg-muted/50 text-muted-foreground font-medium">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* View indicator */}
                  <motion.div
                    className="absolute bottom-7 right-7 text-sm text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    Click to view details →
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl glass-strong rounded-3xl p-8 max-h-[90vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${colorVariants[selectedProject.color as keyof typeof colorVariants].badge}`}>
                    {selectedProject.year}
                  </span>
                  <h3 className="font-display text-3xl font-bold mt-3">
                    {selectedProject.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedProject.subtitle}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2">The Problem</h4>
                  <p className="text-muted-foreground">{selectedProject.problem}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2">The Solution</h4>
                  <p className="text-foreground">{selectedProject.description}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-primary mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-muted text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-4 pt-4">
                  <motion.a
                    href={selectedProject.link}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-primary-foreground font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </motion.a>
                  <motion.a
                    href={selectedProject.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-border hover:bg-muted font-medium transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
