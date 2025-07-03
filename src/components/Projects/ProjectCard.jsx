import React from 'react'
import styles from './ProjectCard.module.css'
import { getImageUrl } from '../../utils'
import { Link } from 'react-router-dom'

export const ProjectCard = ({project: {title, imageSrc, skills, demo, description, source, screenshot, site}}) => {

  // Create a URL-friendly version of the project title or use the index
  const projectSlug = title.toLowerCase().replace(/\s+/g, '-') || id.toString();

  return (
    <div  className={styles.container}>
    <img src={getImageUrl(imageSrc)} alt={`image of ${title}`} className={styles.img} />
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
    <ul className={styles.skills}>
      {skills.map((skill, id) => {
        return (
        <li key={id} className={styles.skill}>
          {skill}
        </li>
      )})}
    </ul>
    <div className={styles.links}>
        <a href={site ? site : demo} className={styles.link} target='_blank' rel='noopener noreferrer'>{site ? 'Live Site' : 'Demo'}</a>
        <a href={source} className={styles.link}target='_blank' rel='noopener noreferrer'>Source</a>
        <Link to={`/project/${projectSlug}/screenshots`} className={styles.link}>Screenshots</Link>
    </div>
  </div>
  )
}

export default ProjectCard
