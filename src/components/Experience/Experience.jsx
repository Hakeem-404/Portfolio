import React from 'react';
import styles from './Experience.module.css';
import skills from '../../data/skills.json';
import history from '../../data/history.json';
import { getImageUrl } from '../../utils';

export const Experience = () => {
  return (
    <section className={styles.experience} id="experience">
      <div className={styles.experienceContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Experience & Skills</h2>
        </div>

        <div className={styles.experienceContent}>
          <div className={styles.skillsSection}>
            <h3 className={styles.skillsTitle}>Technical Skills</h3>
            <div className={styles.skillsGrid}>
              {skills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <span className={styles.skillName}>{skill.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.historySection}>
            <h3 className={styles.historyTitle}>Professional Journey</h3>
            <div className={styles.timeline}>
              {history.map((item, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineHeader}>
                    <img 
                      src={getImageUrl(item.imageSrc)} 
                      alt={`${item.organisation} logo`}
                      className={styles.companyLogo}
                    />
                    <div>
                      <h4 className={styles.timelineTitle}>{item.role}</h4>
                      <p className={styles.timelineCompany}>{item.organisation}</p>
                      <p className={styles.timelinePeriod}>
                        {item.startDate} - {item.endDate}
                      </p>
                    </div>
                  </div>
                  
                  <ul className={styles.achievementsList}>
                    {item.experience.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className={styles.achievementItem}>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;