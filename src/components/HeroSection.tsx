import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowDown, Download, Mail, Rocket } from 'lucide-react';

const roles = [
  'Computer Science Engineer',
  'Full-Stack Developer',
  'AI/ML Builder',
  'Hackathon Engineer',
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const nameLetters = 'Aniketh S'.split('');

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse-glow" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Animated name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
        >
          <span className="inline-flex">
            {nameLetters.map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block text-gradient-cyan hover:text-primary transition-colors duration-200"
                whileHover={{ 
                  y: -8, 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                style={{ cursor: 'default' }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="h-12 md:h-16 mb-8"
        >
          <span className="font-display text-xl md:text-3xl text-muted-foreground">
            {displayText}
            <span className="animate-pulse text-primary">|</span>
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          I build{' '}
          <span className="text-primary font-semibold">production-grade full-stack & AI systems</span>
          {' '}that solve real-world problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <MagneticButton href="#projects" variant="primary">
            <Rocket className="w-4 h-4 mr-2" />
            View Projects
          </MagneticButton>
          <MagneticButton href="/resume.pdf" variant="secondary" download>
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </MagneticButton>
          <MagneticButton href="#contact" variant="outline">
            <Mail className="w-4 h-4 mr-2" />
            Contact Me
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-muted-foreground"
        >
          <span className="text-xs mb-2 tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

interface MagneticButtonProps {
  children: React.ReactNode;
  href: string;
  variant: 'primary' | 'secondary' | 'outline';
  download?: boolean;
}

const MagneticButton = ({ children, href, variant, download }: MagneticButtonProps) => {
  const baseClasses = "relative inline-flex items-center px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 group overflow-hidden";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/30 glow-cyan",
    secondary: "bg-secondary text-secondary-foreground hover:shadow-lg hover:shadow-secondary/30 glow-purple",
    outline: "border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary",
  };

  return (
    <motion.a
      href={href}
      download={download}
      className={`${baseClasses} ${variants[variant]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10 flex items-center">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.5 }}
      />
    </motion.a>
  );
};

export default HeroSection;
