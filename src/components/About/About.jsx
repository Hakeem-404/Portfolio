import React from 'react';
import styles from './About.module.css';

export const About = () => {
  const skillCategories = [
    {
      icon: '💻',
      title: 'Frontend Development',
      description: 'Creating responsive, intuitive web interfaces with modern frameworks and best practices.',
      skills: ['React', 'Vue.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      icon: '⚙️',
      title: 'Backend Development',
      description: 'Building robust server-side applications and APIs with scalable architecture.',
      skills: ['Node.js', 'Express', 'Python', 'Java', 'REST APIs', 'GraphQL', 'Microservices']
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Developing native and cross-platform mobile applications for iOS and Android.',
      skills: ['Android Studio', 'Java', 'Xamarin', '.NET MAUI', 'React Native', 'Flutter']
    },
    {
      icon: '🗄️',
      title: 'Database & Cloud',
      description: 'Designing and managing databases with cloud infrastructure and DevOps practices.',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase', 'AWS', 'Docker', 'Git']
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Implementing intelligent systems with natural language processing and data analysis.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'NLP', 'Computer Vision', 'Data Science']
    }
  ];

  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.sectionSubtitle}>
            Passionate about creating innovative solutions that bridge technology and real-world impact
          </p>
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p className={styles.aboutDescription}>
              I'm a computing graduate with a first-class degree, specializing in AI application development 
              and software engineering. My journey spans across full-stack development, mobile applications, 
              and intelligent systems that solve real-world problems.
            </p>
            
            <div className={styles.aboutStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statLabel}>Projects Completed</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>Technologies Proficiency</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>0.5+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Passion Driven & Motivated</span>
              </div>
            </div>
          </div>

          <div className={styles.skillsGrid}>
            <h3 className={styles.skillsTitle}>Technical Expertise</h3>
            <div className={styles.skillCategories}>
              {skillCategories.map((category, index) => (
                <div key={index} className={styles.skillCategory}>
                  <div className={styles.categoryHeader}>
                    <div className={styles.categoryIcon}>
                      {category.icon}
                    </div>
                    <div>
                      <h4 className={styles.categoryTitle}>{category.title}</h4>
                    </div>
                  </div>
                  <p className={styles.categoryDescription}>
                    {category.description}
                  </p>
                  <div className={styles.skillsList}>
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className={styles.skillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;