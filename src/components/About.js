import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiGlobe, FiTool } from 'react-icons/fi';
import '../styles/About.css';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <FiGlobe />,
      technologies: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js']
    },
    {
      category: 'Backend',
      icon: <FiDatabase />,
      technologies: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL']
    },
    {
      category: 'Development',
      icon: <FiCode />,
      technologies: ['Git', 'Docker', 'AWS', 'Firebase', 'Jest', 'Webpack', 'Linux']
    },
    {
      category: 'Tools',
      icon: <FiTool />,
      technologies: ['VS Code', 'Figma', 'Postman', 'Jira', 'Slack', 'GitHub', 'Vercel']
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
    <section id="about" className="about">
      <motion.div 
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <div className="bio">
              <h3>Hello! I'm a passionate Full Stack Developer</h3>
              <p>
                With over 3 years of experience in web development, I specialize in creating 
                modern, responsive, and user-friendly applications. I have a strong foundation 
                in both frontend and backend technologies, allowing me to build complete 
                web solutions from concept to deployment.
              </p>
              <p>
                My journey in tech started with curiosity about how websites work, and it has 
                evolved into a passion for creating digital experiences that make a difference. 
                I enjoy staying up-to-date with the latest technologies and best practices 
                in the ever-evolving world of web development.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="achievements">
              <motion.div 
                className="achievement"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4>50+</h4>
                <p>Projects Completed</p>
              </motion.div>
              <motion.div 
                className="achievement"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4>3+</h4>
                <p>Years Experience</p>
              </motion.div>
              <motion.div 
                className="achievement"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4>100%</h4>
                <p>Client Satisfaction</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="skills-section" variants={itemVariants}>
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              {skills.map((skillCategory, index) => (
                <motion.div 
                  key={skillCategory.category}
                  className="skill-category"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="skill-header">
                    <div className="skill-icon">
                      {skillCategory.icon}
                    </div>
                    <h4>{skillCategory.category}</h4>
                  </div>
                  <div className="skill-tags">
                    {skillCategory.technologies.map((tech, techIndex) => (
                      <motion.span 
                        key={tech}
                        className="skill-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;