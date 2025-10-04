import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { FaTwitter } from 'react-icons/fa';
import '../styles/Hero.css';

const Hero = () => {
  const socialLinks = [
    {
      icon: <FiGithub />,
      href: 'https://github.com/your-username',
      label: 'GitHub'
    },
    {
      icon: <FiLinkedin />,
      href: 'https://linkedin.com/in/your-username',
      label: 'LinkedIn'
    },
    {
      icon: <FaTwitter />,
      href: 'https://twitter.com/your-username',
      label: 'Twitter'
    },
    {
      icon: <FiMail />,
      href: 'mailto:your.email@example.com',
      label: 'Email'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-pattern"></div>
      </div>
      
      <motion.div 
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content">
          <motion.div 
            className="hero-image"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src="https://via.placeholder.com/300x300/6366f1/ffffff?text=Your+Photo" 
              alt="Your Name - Profile"
              className="profile-photo"
            />
            <div className="image-border"></div>
          </motion.div>

          <motion.div className="hero-text">
            <motion.h1 
              variants={itemVariants}
              className="hero-title"
            >
              Hi, I'm <span className="highlight">Your Name</span>
            </motion.h1>

            <motion.div 
              variants={itemVariants}
              className="hero-subtitle"
            >
              <span className="typing-text">Full Stack Developer</span>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="hero-description"
            >
              I'm a passionate developer who loves creating amazing web experiences 
              and solving complex problems with clean, efficient code. Welcome to my 
              digital portfolio where creativity meets functionality.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="hero-actions"
            >
              <motion.a
                href="#projects"
                className="cta-button primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>

              <motion.a
                href="/resume.pdf"
                className="cta-button secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download
              >
                <FiDownload />
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="social-links"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="scroll-mouse"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="scroll-wheel"></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;