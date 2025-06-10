import React, { useState, useEffect } from 'react'
import styles from './Projects.module.css'
import projects from '../../data/projects.json'
import ProjectCard from './ProjectCard'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Calculate projects per page based on screen size
  const getProjectsPerPage = (width) => {
    if (width <= 640) return 1; // Mobile phones
    if (width <= 1024) return 2; // Tablets
    return 3; // Desktops
  };
  
  const projectsPerPage = getProjectsPerPage(windowWidth);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      
      // Adjust current page if needed after resize
      const newProjectsPerPage = getProjectsPerPage(width);
      const newTotalPages = Math.ceil(projects.length / newProjectsPerPage);
      if (currentPage >= newTotalPages) {
        setCurrentPage(newTotalPages - 1);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentPage, projects.length]);

  // Navigate to next page with transition
  const nextPage = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    
    // Reset transitioning state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with your CSS transition duration
  };

  // Navigate to previous page with transition
  const prevPage = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Go to specific page with transition
  const goToPage = (pageIndex) => {
    if (isTransitioning || pageIndex === currentPage) return;
    
    setIsTransitioning(true);
    setCurrentPage(pageIndex);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Get displayed projects based on current page
  const getDisplayedProjects = () => {
    const startIndex = currentPage * projectsPerPage;
    const endIndex = Math.min(startIndex + projectsPerPage, projects.length);
    return projects.slice(startIndex, endIndex);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevPage();
      if (e.key === 'ArrowRight') nextPage();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTransitioning]);

  // Touch swipe navigation for mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) nextPage();
    if (isRightSwipe) prevPage();
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  const displayedProjects = getDisplayedProjects();

  return (
    <section className={styles.container} id='projects'>
      <h2 className={styles.title}>Projects</h2>
      
      <div className={styles.carouselContainer}>
        <button 
          className={`${styles.navButton} ${styles.prevButton}`} 
          onClick={prevPage}
          aria-label="Previous projects"
          disabled={isTransitioning}
        >
          <FaChevronLeft />
        </button>
        
        <div 
          className={`${styles.projectsCarousel} ${isTransitioning ? styles.transitioning : ''}`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {displayedProjects.map((project, index) => {
            const actualIndex = (currentPage * projectsPerPage) + index;
            return (
              <div key={actualIndex} className={styles.projectCardWrapper}>
                <ProjectCard 
                  project={project} 
                  index={actualIndex}
                />
              </div>
            );
          })}
        </div>
        
        <button 
          className={`${styles.navButton} ${styles.nextButton}`} 
          onClick={nextPage}
          aria-label="Next projects"
          disabled={isTransitioning}
        >
          <FaChevronRight />
        </button>
      </div>
      
      {/* Pagination indicators - only show if we have more than one page */}
      {totalPages > 1 && (
        <div className={styles.pageIndicators}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`${styles.pageIndicator} ${index === currentPage ? styles.activePage : ''}`}
              onClick={() => goToPage(index)}
              aria-label={`Go to page ${index + 1}`}
              disabled={isTransitioning}
            />
          ))}
        </div>
      )}
      
      {/* Project count indicator */}
      <div className={styles.projectCount}>
        Showing {currentPage * projectsPerPage + 1}-{Math.min((currentPage + 1) * projectsPerPage, projects.length)} of {projects.length} projects
      </div>
    </section>
  )
}

export default Projects
// import React from 'react'
// import styles from './Projects.module.css'
// import projects from '../../data/projects.json'
// // import { getImageUrl } from '../../utils'
// import ProjectCard from './ProjectCard'
// // import { ProjectCard } from './ProjectCard'

// export const Projects = () => {
//   return (
//     <section className={styles.container} id='projects'>
//       <h2 className={styles.title}>Projects</h2>
//       <div className={styles.projects}>
//         {
//           projects.map((project, id) => {
//             return (
//               <ProjectCard key={id} project={project}/>
//             )
//           })
//         }
//       </div>
//     </section>
//   )

// }

// export default Projects
