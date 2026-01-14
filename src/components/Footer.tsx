import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 md:px-8 lg:px-12 border-t border-border/50">
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground"
          >
            © {new Date().getFullYear()} Aniketh S. All rights reserved.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground flex items-center gap-1"
          >
            Built with <Heart className="w-4 h-4 text-destructive" fill="currentColor" /> and React
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
