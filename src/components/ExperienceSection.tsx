import { motion } from 'framer-motion';
import { BookOpen, Award } from 'lucide-react';

const coursework = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Database Management Systems',
  'Operating Systems',
  'Computer Networks',
  'Machine Learning',
  'Web Development',
  'Discrete Mathematics',
  'Computer Organization',
];

const certifications = [
  {
    title: 'Machine Learning Using Python',
    issuer: 'Simplilearn',
    year: '2025',
  },
  {
    title: 'MERN Stack Development',
    issuer: 'Simplilearn',
    year: '2025',
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-24 px-4">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Learning <span className="text-gradient-cyan">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation through coursework and continuous learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Coursework */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/20">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold">Technical Coursework</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

              <div className="space-y-4">
                {coursework.map((course, index) => (
                  <motion.div
                    key={course}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-4 group"
                  >
                    {/* Timeline dot */}
                    <motion.div
                      className="relative z-10 w-6 h-6 rounded-full bg-muted border-2 border-primary/50 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                      whileHover={{ scale: 1.2 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </motion.div>

                    <div className="glass px-4 py-3 rounded-lg flex-1 group-hover:border-primary/30 transition-colors">
                      <span className="text-sm font-medium">{course}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent/20">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-semibold">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass rounded-xl p-6 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-lg group-hover:text-accent transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent">
                      {cert.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Hackathon emphasis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 gradient-border rounded-2xl"
            >
              <div className="glass-strong rounded-2xl p-6">
                <h4 className="font-display text-xl font-semibold mb-3 text-gradient">
                  Hackathon Builder
                </h4>
                <p className="text-muted-foreground text-sm">
                  Built 4+ production-grade applications in competitive hackathons including 
                  <span className="text-foreground font-medium"> Google Solution Challenge 2025</span>, 
                  <span className="text-foreground font-medium"> Smart India Hackathon 2025</span>, and 
                  <span className="text-foreground font-medium"> Hack For Earth 2025</span>. 
                  Proven ability to rapidly prototype and ship under pressure.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
