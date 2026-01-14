import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle, Phone } from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/anikethdjz',
      icon: Github,
      color: 'hover:text-foreground',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/aniketh-s-2006-djz',
      icon: Linkedin,
      color: 'hover:text-primary',
    },
    {
      name: 'Email',
      href: 'mailto:anikethsshaji@gmail.com',
      icon: Mail,
      color: 'hover:text-secondary',
    },
    {
      name: 'Phone',
      href: 'tel:+919447073475',
      icon: Phone,
      color: 'hover:text-accent',
    },
  ];

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Let's build something impactful together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all bg-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all bg-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all bg-transparent resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`
                  w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2
                  transition-all duration-300
                  ${isSubmitted 
                    ? 'bg-accent text-accent-foreground' 
                    : 'bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/30 glow-cyan'
                  }
                  disabled:opacity-70
                `}
                whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                  />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="font-display text-2xl font-semibold mb-6">
                Get in Touch
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:anikethsshaji@gmail.com" className="hover:text-foreground transition-colors">
                    anikethsshaji@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+919447073475" className="hover:text-foreground transition-colors">
                    +91 9447073475
                  </a>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with me
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-xl bg-muted/50 text-muted-foreground ${link.color} transition-all duration-300 hover:bg-muted`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-center text-sm text-muted-foreground"
            >
              📍 Palakkad, Kerala, India • Open to remote opportunities
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
