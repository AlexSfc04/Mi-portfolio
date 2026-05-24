// components/Projects.jsx
import { useState } from "react";
import { projects } from "../data/data";
import { useInView } from "../hooks/useInView";
import styles from "./Projects.module.css";

function ProjectCard({ project, index }) {
  const [ref, visible] = useInView(0.1);
  const [hovered, setHovered] = useState(false);

  return (
    <article
      ref={ref}
      className={`${styles.card} ${visible ? styles.visible : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className={styles.imageWrap}>
        <img
          src={project.image}
          alt={project.title}
          className={`${styles.image} ${hovered ? styles.imageZoomed : ""}`}
          loading="lazy"
        />
        <div className={styles.imageOverlay} />

        {/* Hover actions */}
        <div className={`${styles.actions} ${hovered ? styles.actionsVisible : ""}`}>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionBtn}
          >
            Live Demo ↗
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.actionBtn} ${styles.actionBtnGhost}`}
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {/* Info */}
      <div className={styles.info}>
        <div className={styles.infoTop}>
          <span className={styles.year}>{project.year}</span>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.subtitle}>{project.subtitle}</p>
        </div>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [ref, visible] = useInView();

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        {/* Header */}
        <div
          ref={ref}
          className={`fade-in ${visible ? "visible" : ""}`}
        >
          <p className="section-label">03 — Work</p>
          <h2 className={`section-heading ${styles.heading}`}>
            Recent<br />Projects
          </h2>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {[...projects]
            .sort((a, b) => b.year - a.year)
            .map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
        </div>
      </div>
    </section>
  );
}
