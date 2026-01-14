import { motion } from 'framer-motion';
import { useState } from 'react';

const skillCategories = {
  All: [],
  Web: ['React', 'Next.js', 'Node.js', 'Express.js', 'FastAPI', 'Tailwind'],
  AI: ['TensorFlow', 'RAG', 'Gemini API', 'Computer Vision', 'Pinecone'],
  Mobile: ['Flutter', 'Dart', 'Firebase'],
};

const skills = [
  { name: 'Python', category: 'AI', proficiency: 90, color: 'cyan' },
  { name: 'JavaScript', category: 'Web', proficiency: 88, color: 'purple' },
  { name: 'React', category: 'Web', proficiency: 92, color: 'cyan' },
  { name: 'Next.js', category: 'Web', proficiency: 85, color: 'purple' },
  { name: 'Node.js', category: 'Web', proficiency: 88, color: 'lime' },
  { name: 'Express.js', category: 'Web', proficiency: 85, color: 'cyan' },
  { name: 'FastAPI', category: 'AI', proficiency: 82, color: 'purple' },
  { name: 'Flutter', category: 'Mobile', proficiency: 80, color: 'cyan' },
  { name: 'TensorFlow', category: 'AI', proficiency: 78, color: 'lime' },
  { name: 'MongoDB', category: 'Web', proficiency: 85, color: 'purple' },
  { name: 'MySQL', category: 'Web', proficiency: 82, color: 'cyan' },
  { name: 'Neo4j', category: 'AI', proficiency: 75, color: 'lime' },
  { name: 'Pinecone', category: 'AI', proficiency: 78, color: 'purple' },
  { name: 'Firebase', category: 'Mobile', proficiency: 85, color: 'cyan' },
  { name: 'Supabase', category: 'Web', proficiency: 82, color: 'lime' },
  { name: 'Git', category: 'Web', proficiency: 90, color: 'purple' },
  { name: 'GCP', category: 'AI', proficiency: 75, color: 'cyan' },
  { name: 'Gemini API', category: 'AI', proficiency: 85, color: 'purple' },
  { name: 'RAG', category: 'AI', proficiency: 80, color: 'lime' },
  { name: 'Java', category: 'Web', proficiency: 82, color: 'cyan' },
  { name: 'C', category: 'Web', proficiency: 78, color: 'purple' },
  { name: 'Dart', category: 'Mobile', proficiency: 80, color: 'lime' },
];

const colorVariants = {
  cyan: {
    bg: 'bg-primary/20',
    border: 'border-primary/40',
    text: 'text-primary',
    glow: 'hover:shadow-primary/30',
  },
  purple: {
    bg: 'bg-secondary/20',
    border: 'border-secondary/40',
    text: 'text-secondary',
    glow: 'hover:shadow-secondary/30',
  },
  lime: {
    bg: 'bg-accent/20',
    border: 'border-accent/40',
    text: 'text-accent',
    glow: 'hover:shadow-accent/30',
  },
};

const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState<keyof typeof skillCategories>('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = activeFilter === 'All' 
    ? skills 
    : skills.filter(s => s.category === activeFilter);

  return (
    <section id="skills" className="relative py-24 px-4">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I wield to build production-grade systems
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {(Object.keys(skillCategories) as Array<keyof typeof skillCategories>).map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeFilter === category 
                  ? 'bg-primary text-primary-foreground glow-cyan' 
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          layout
          className="flex flex-wrap justify-center gap-4"
        >
          {filteredSkills.map((skill, index) => {
            const colors = colorVariants[skill.color as keyof typeof colorVariants];
            const isHovered = hoveredSkill === skill.name;

            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`
                  relative px-5 py-3 rounded-xl cursor-default
                  ${colors.bg} ${colors.border} border
                  transition-all duration-300
                  hover:shadow-lg ${colors.glow}
                  ${isHovered ? 'scale-110 z-10' : ''}
                `}
                style={{
                  animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <span className={`font-medium ${colors.text}`}>
                  {skill.name}
                </span>

                {/* Proficiency tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                  className="absolute -bottom-12 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
                >
                  <div className="glass-strong px-3 py-1.5 rounded-lg whitespace-nowrap">
                    <div className="text-xs text-muted-foreground mb-1">Proficiency</div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${skill.color === 'cyan' ? 'bg-primary' : skill.color === 'purple' ? 'bg-secondary' : 'bg-accent'}`}
                          initial={{ width: 0 }}
                          animate={{ width: isHovered ? `${skill.proficiency}%` : 0 }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                      <span className="text-xs font-medium">{skill.proficiency}%</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
