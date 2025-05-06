// src/components/ProjectCard.tsx
import React from 'react';
import styles from './styles/ProjectCard.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export interface Project {
  title: string;
  description: string;
  techs: string[];
  repoUrl: string;
  liveUrl?: string;
  imageUrl?: string;
}

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className={styles.card}>
    {project.imageUrl && (
      <img src={project.imageUrl} alt={project.title} className={styles.image} />
    )}
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <ul className={styles.techList}>
      {project.techs.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
    <div className={styles.links}>
      <a href={project.repoUrl} target="_blank" aria-label="Repositório no GitHub">
        <FaGithub size={20} />
      </a>
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" aria-label="Ver deploy">
          <FaExternalLinkAlt size={20} />
        </a>
      )}
    </div>
  </div>
);
