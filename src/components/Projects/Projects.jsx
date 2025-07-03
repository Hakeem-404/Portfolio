import React from 'react';
import styles from './Projects.module.css';
import projects from '../../data/projects.json';
import { getImageUrl } from '../../utils';
import { Link } from 'react-router-dom';

export const Projects = () => {
  // Show only first 6 projects
  const featuredProjects = projects;

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.projectsContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.sectionSubtitle}>
            A showcase of my latest work in AI/ML, web development, and mobile applications
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {featuredProjects.map((project, index) => {
            const projectSlug = project.title.toLowerCase().replace(/\s+/g, '-');
            
            return (
              <div key={index} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <img 
                    src={getImageUrl(project.imageSrc)} 
                    alt={`${project.title} preview`}
                  />
                  <div className={styles.projectOverlay}>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        className={styles.overlayButton}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 12L9 16.5V7.5L15 12Z" fill="currentColor"/>
                        </svg>
                        Demo
                      </a>
                    )}
                    {project.source && (
                      <a 
                        href={project.source} 
                        className={styles.overlayButton}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 19C4 20.5 4 16.5 2 16M22 16V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H16C15.4696 21 14.9609 20.7893 14.5858 20.4142C14.2107 20.0391 14 19.5304 14 19V16M22 16L18 12L22 8M14 8L18 12L14 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Code
                      </a>
                    )}
                  </div>
                </div>
                
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>
                    {project.description.length > 120 
                      ? `${project.description.substring(0, 120)}...` 
                      : project.description
                    }
                  </p>
                  
                  <div className={styles.projectTags}>
                    {project.skills.slice(0, 4).map((skill, skillIndex) => (
                      <span key={skillIndex} className={styles.projectTag}>
                        {skill}
                      </span>
                    ))}
                    {project.skills.length > 4 && (
                      <span className={styles.projectTag}>
                        +{project.skills.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  <div className={styles.projectLinks}>
                    {(project.site || project.demo) && (
                      <a 
                        href={project.site ? project.site : project.demo} 
                        className={`${styles.projectLink} ${styles.primary}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Live Demo
                      </a>
                    )}
                    <Link 
                      to={`/project/${projectSlug}/screenshots`} 
                      className={`${styles.projectLink} ${styles.secondary}`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="2"/>
                        <polyline points="21,15 16,10 5,21" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      Screenshots
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;