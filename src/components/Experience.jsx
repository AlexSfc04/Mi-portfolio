// components/Experience.jsx
import { experience } from "../data/data";
import { useInView } from "../hooks/useInView";
import styles from "./Experience.module.css";

function ExperienceItem({ item, index }) {
  const [ref, visible] = useInView(0.1);

  return (
    <a
      ref={ref}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.item} ${visible ? styles.visible : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className={styles.left}>
        <span className={styles.period}>{item.period}</span>
      </div>

      <div className={styles.right}>
        <div className={styles.header}>
          <div>
            <h3 className={styles.role}>{item.role}</h3>
            <p className={styles.company}>{item.company}</p>
          </div>
          <span className={styles.arrow}>↗</span>
        </div>
        <p className={styles.desc}>{item.desc}</p>
      </div>
    </a>
  );
}

export default function Experience() {
  const [ref, visible] = useInView();

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div ref={ref} className={`fade-in ${visible ? "visible" : ""}`}>
          <p className="section-label">02 — History</p>
          <h2 className="section-heading">
            1 Year of<br />Experience
          </h2>
        </div>

        <div className={styles.list}>
          {experience.map((item, i) => (
            <ExperienceItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
