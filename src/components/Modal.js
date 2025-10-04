import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink, FiStar, FiGitBranch, FiCalendar } from 'react-icons/fi';
import '../styles/Modal.css';

const Modal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset body overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const contentVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    exit: { 
      scale: 0.8, 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#f7df1e',
      TypeScript: '#3178c6',
      Python: '#3776ab',
      HTML: '#e34f26',
      CSS: '#1572b6',
      Java: '#ed8b00',
      'C++': '#00599c',
      React: '#61dafb'
    };
    return colors[language] || '#6b7280';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className="modal-title-section">
                <h2 className="modal-title">{project.name}</h2>
                <div className="modal-stats">
                  {project.language && (
                    <div className="modal-stat">
                      <span 
                        className="language-dot" 
                        style={{ backgroundColor: getLanguageColor(project.language) }}
                      ></span>
                      {project.language}
                    </div>
                  )}
                  <div className="modal-stat">
                    <FiStar /> {project.stargazers_count || 0}
                  </div>
                  <div className="modal-stat">
                    <FiGitBranch /> {project.forks_count || 0}
                  </div>
                  {project.updated_at && (
                    <div className="modal-stat">
                      <FiCalendar /> {formatDate(project.updated_at)}
                    </div>
                  )}
                </div>
              </div>
              <motion.button
                className="modal-close"
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close modal"
              >
                <FiX />
              </motion.button>
            </div>

            <div className="modal-body">
              <div className="modal-image">
                <img 
                  src={project.image || `https://via.placeholder.com/800x400/6366f1/ffffff?text=${encodeURIComponent(project.name)}`}
                  alt={project.name}
                />
              </div>

              <div className="modal-description">
                <h3>About This Project</h3>
                <p>
                  {project.description || 'This project showcases modern web development practices and demonstrates proficiency in various technologies.'}
                </p>

                {/* Additional project details for featured projects */}
                {project.featured && (
                  <div className="project-details">
                    <h4>Key Features</h4>
                    <ul>
                      <li>Responsive design that works on all devices</li>
                      <li>Modern UI/UX with smooth animations</li>
                      <li>Clean, maintainable code architecture</li>
                      <li>Performance optimized for fast loading</li>
                      <li>Accessibility compliant (WCAG 2.1)</li>
                    </ul>

                    <h4>Technologies Used</h4>
                    <p>
                      This project was built using cutting-edge technologies to ensure 
                      scalability, performance, and maintainability.
                    </p>
                  </div>
                )}
              </div>

              {project.topics && project.topics.length > 0 && (
                <div className="modal-technologies">
                  <h3>Technologies</h3>
                  <div className="tech-tags">
                    {project.topics.map((tech, index) => (
                      <motion.span 
                        key={tech}
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}

              <div className="modal-actions">
                <motion.a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-button primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub />
                  View Source Code
                </motion.a>
                
                {project.homepage && (
                  <motion.a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-button secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink />
                    View Live Demo
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;