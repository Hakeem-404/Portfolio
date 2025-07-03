import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './Screenshots.module.css';
import { getImageUrl } from '../../utils';
import projects from '../../data/projects.json';

const Screenshots = () => {
  const { projectId } = useParams();
  const [currentProject, setCurrentProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [screenshots, setScreenshots] = useState([]);

  useEffect(() => {
    // Find the project by ID or title slug
    const project = projects.find((p, id) => 
      id.toString() === projectId || p.title.toLowerCase().replace(/\s+/g, '-') === projectId
    );
    
    if (project) {
      setCurrentProject(project);
      
      // Use the screenshots from project data if available
      if (project.screenshots && project.screenshots.length > 0) {
        setScreenshots(project.screenshots);
      } else {
        // Fallback if no screenshots provided
        setScreenshots([
          { idx: 1, src: project.imageSrc, alt: `${project.title} screenshot 1`, description: "Main screenshot" }
        ]);
      }
    }
    
    setLoading(false);
  }, [projectId]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? screenshots.length - 1 : prev - 1
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  useEffect(() => {
    // Add keyboard navigation
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [screenshots]); // Re-add listener if screenshots change

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (!currentProject) {
    return (
      <div className={styles.notFound}>
        <h2>Project Not Found</h2>
        <p>Sorry, we couldn't find the project you're looking for.</p>
        <Link to="/projects" className={styles.backLink}>Back Home</Link>
      </div>
    );
  }

  const currentScreenshot = screenshots[currentImageIndex];

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{currentProject.title}</h1>
      
      <div className={styles.galleryContainer}>
        <button 
          className={`${styles.navButton} ${styles.prevButton}`} 
          onClick={prevImage}
          aria-label="Previous screenshot"
        >
          &lt;
        </button>
        
        <div className={styles.imageContainer}>
          <img 
            src={getImageUrl(currentScreenshot.src)} 
            alt={currentScreenshot.alt}
            className={styles.screenshot}
          />
          {currentScreenshot.description && (
            <p className={styles.description}>{currentScreenshot.description}</p>
          )}
          <p className={styles.caption}>
            {currentImageIndex + 1} / {screenshots.length}
          </p>
        </div>
        
        <button 
          className={`${styles.navButton} ${styles.nextButton}`} 
          onClick={nextImage}
          aria-label="Next screenshot"
        >
          &gt;
        </button>
      </div>
      
      <div className={styles.thumbnails}>
        {screenshots.map((screenshot, id) => (
          <img 
            key={screenshot.idx}
            src={getImageUrl(screenshot.src)} 
            alt={`Thumbnail ${id + 1}`}
            className={`${styles.thumbnail} ${id === currentImageIndex ? styles.active : ''}`}
            onClick={() => setCurrentImageIndex(id)}
          />
        ))}
      </div>
      
      <div className={styles.projectInfo}>
        <h2>About this project</h2>
        <p>{currentProject.description}</p>
        <div className={styles.skills}>
          <h3>Technologies used:</h3>
          <ul>
            {currentProject.skills.map((skill, id) => (
              <li key={id} className={styles.skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className={styles.links}>
          <a href={currentProject.demo} className={styles.link} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
          <a href={currentProject.source} className={styles.link} target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
          <Link to="/" className={styles.link}>
            Back Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;