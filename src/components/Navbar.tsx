import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`
          fixed top-0 left-0 right-0 z-50 px-4 py-4
          transition-all duration-300
          ${isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/50' : ''}
        `}
      >
        <div className="w-full flex items-center justify-between px-4 md:px-8 lg:px-12">
          {/* Logo */}
          <motion.a
            href="#"
            className="font-display text-3xl md:text-4xl font-bold text-gradient-cyan"
            whileHover={{ scale: 1.05 }}
          >
            AS
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="px-6 py-3 text-base md:text-lg font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
                <motion.span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-3 text-muted-foreground hover:text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
        }}
        className="fixed inset-0 z-40 md:hidden"
      >
        <div 
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <motion.div
          initial={false}
          animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="absolute right-0 top-0 bottom-0 w-64 bg-card border-l border-border p-6 pt-20"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0, 
                  x: isMobileMenuOpen ? 0 : 20 
                }}
                transition={{ delay: index * 0.1 }}
                className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navbar;
