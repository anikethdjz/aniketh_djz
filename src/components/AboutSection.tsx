import { motion } from 'framer-motion';
import { GraduationCap, Code2, Zap, MapPin } from 'lucide-react';
import { useState } from 'react';

const aboutCards = [
  {
    icon: GraduationCap,
    title: 'Education',
    subtitle: 'IIIT Kottayam',
    content: 'B.Tech in Computer Science Engineering',
    detail: 'GPA: 8.12/10.0 • Expected Apr 2028',
    expanded: 'Strong foundation in DSA, DBMS, OS, CN, ML, and Web Development. Higher Secondary from Marygiri Public School (94.8%).',
    color: 'cyan',
  },
  {
    icon: Code2,
    title: 'Focus Areas',
    subtitle: 'Core Expertise',
    content: 'Full-Stack • AI/ML • DSA',
    detail: 'Production-grade applications',
    expanded: 'Specializing in React, Next.js, Node.js for web, Flutter for mobile, and TensorFlow, RAG, Gemini API for AI/ML projects.',
    color: 'purple',
  },
  {
    icon: Zap,
    title: 'Strengths',
    subtitle: 'What I Bring',
    content: 'Rapid Prototyping & Systems',
    detail: 'Hackathon-proven builder',
    expanded: 'Built 4+ production-grade projects in hackathons. Strong in system fundamentals, clean code architecture, and fast iteration.',
    color: 'lime',
  },
  {
    icon: MapPin,
    title: 'Location',
    subtitle: 'Based In',
    content: 'Kerala, India',
    detail: 'Open to remote opportunities',
    expanded: 'Fluent in English, Malayalam, with intermediate Hindi and Tamil. Available for internships and collaborative projects worldwide.',
    color: 'blue',
  },
];

const colorClasses = {
  cyan: {
    bg: 'group-hover:bg-primary/10',
    border: 'group-hover:border-primary/50',
    icon: 'text-primary',
    glow: 'group-hover:shadow-primary/20',
  },
  purple: {
    bg: 'group-hover:bg-secondary/10',
    border: 'group-hover:border-secondary/50',
    icon: 'text-secondary',
    glow: 'group-hover:shadow-secondary/20',
  },
  lime: {
    bg: 'group-hover:bg-accent/10',
    border: 'group-hover:border-accent/50',
    icon: 'text-accent',
    glow: 'group-hover:shadow-accent/20',
  },
  blue: {
    bg: 'group-hover:bg-glow-blue/10',
    border: 'group-hover:border-glow-blue/50',
    icon: 'text-glow-blue',
    glow: 'group-hover:shadow-glow-blue/20',
  },
};

const AboutSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section id="about" className="relative py-24 px-4 md:px-8 lg:px-12">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-gradient-cyan">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Computer Science Engineer with a passion for building impactful solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {aboutCards.map((card, index) => {
            const colors = colorClasses[card.color as keyof typeof colorClasses];
            const isExpanded = expandedCard === index;
            const Icon = card.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setExpandedCard(isExpanded ? null : index)}
                className={`
                  group relative cursor-pointer
                  glass rounded-2xl p-7 md:p-8
                  transition-all duration-500
                  ${colors.bg} ${colors.border}
                  hover:shadow-xl ${colors.glow}
                  hover:-translate-y-1
                `}
                style={{
                  transformStyle: 'preserve-3d',
                }}
                whileHover={{
                  rotateX: 2,
                  rotateY: -2,
                }}
              >
                <div className="flex items-start gap-5">
                  <motion.div
                    className={`p-3.5 rounded-xl bg-muted/50 ${colors.icon}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-7 h-7" />
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-sm md:text-base uppercase tracking-wider text-muted-foreground mb-2">
                      {card.subtitle}
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3">
                      {card.title}
                    </h3>
                    <p className="text-base md:text-lg text-foreground font-semibold">{card.content}</p>
                    <p className="text-base md:text-lg text-muted-foreground mt-2">
                      {card.detail}
                    </p>
                    
                    <motion.div
                      initial={false}
                      animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-base md:text-lg text-muted-foreground mt-5 pt-5 border-t border-border">
                        {card.expanded}
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Click indicator */}
                <motion.div
                  className="absolute bottom-4 right-4 text-sm md:text-base text-muted-foreground/50"
                  animate={{ opacity: isExpanded ? 0 : 1 }}
                >
                  Click to expand
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
