import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar, FiGitBranch, FiEye } from 'react-icons/fi';
import GitHubService from '../services/github';
import '../styles/Projects.css';

const Projects = ({ onProjectClick }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Featured projects data (fallback or custom projects)
  const featuredProjects = [
    {
      id: 'featured-1',
      name: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
      html_url: 'https://github.com/your-username/ecommerce-platform',
      homepage: 'https://your-ecommerce-demo.com',
      language: 'JavaScript',
      stargazers_count: 25,
      forks_count: 8,
      topics: ['react', 'nodejs', 'mongodb', 'stripe'],
      featured: true,
      image: 'https://via.placeholder.com/600x300/6366f1/ffffff?text=E-Commerce+Platform'
    },
    {
      id: 'featured-2',
      name: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      html_url: 'https://github.com/your-username/task-manager',
      homepage: 'https://your-task-app.com',
      language: 'TypeScript',
      stargazers_count: 18,
      forks_count: 5,
      topics: ['react', 'typescript', 'firebase', 'tailwind'],
      featured: true,
      image: 'https://via.placeholder.com/600x300/10b981/ffffff?text=Task+Manager'
    },
    {
      id: 'featured-3',
      name: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts',
      html_url: 'https://github.com/your-username/weather-dashboard',
      homepage: 'https://your-weather-app.com',
      language: 'JavaScript',
      stargazers_count: 12,
      forks_count: 3,
      topics: ['react', 'api', 'weather', 'responsive'],
      featured: true,
      image: 'https://via.placeholder.com/600x300/f59e0b/ffffff?text=Weather+Dashboard'
    }
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const repos = await GitHubService.getRepositories(6);
        
        if (repos && repos.length > 0) {
          setProjects(repos);
        } else {
          // Use featured projects as fallback
          setProjects(featuredProjects);
        }
      } catch (err) {
        setError('Failed to fetch projects');
        setProjects(featuredProjects); // Use fallback on error
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

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

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
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

  if (loading) {
    return (
      <section id="projects" className="projects">
        <div className="projects-container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Loading projects...</p>
          </div>
          <div className="loading-grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="project-card-skeleton">
                <div className="skeleton-image"></div>
                <div className="skeleton-content">
                  <div className="skeleton-line"></div>
                  <div className="skeleton-line short"></div>
                  <div className="skeleton-tags">
                    <div className="skeleton-tag"></div>
                    <div className="skeleton-tag"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects">
      <motion.div 
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="project-image">
                <img 
                  src={project.image || `https://via.placeholder.com/600x300/6366f1/ffffff?text=${encodeURIComponent(project.name)}`}
                  alt={project.name}
                />
                <div className="project-overlay">
                  <motion.button
                    className="view-details-btn"
                    onClick={() => onProjectClick(project)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiEye /> View Details
                  </motion.button>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.name}</h3>
                  <div className="project-links">
                    <motion.a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="View on GitHub"
                    >
                      <FiGithub />
                    </motion.a>
                    {project.homepage && (
                      <motion.a
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="View live demo"
                      >
                        <FiExternalLink />
                      </motion.a>
                    )}
                  </div>
                </div>

                <p className="project-description">
                  {project.description || 'A great project showcasing modern web development practices.'}
                </p>

                {project.topics && project.topics.length > 0 && (
                  <div className="project-technologies">
                    {project.topics.slice(0, 4).map((tech, techIndex) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="project-stats">
                  {project.language && (
                    <div className="project-stat">
                      <span 
                        className="language-dot" 
                        style={{ backgroundColor: getLanguageColor(project.language) }}
                      ></span>
                      {project.language}
                    </div>
                  )}
                  <div className="project-stat">
                    <FiStar /> {project.stargazers_count || 0}
                  </div>
                  <div className="project-stat">
                    <FiGitBranch /> {project.forks_count || 0}
                  </div>
                  {project.updated_at && (
                    <div className="project-stat">
                      Updated {formatDate(project.updated_at)}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="projects-footer"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;