// pages/ProjectsPage.jsx
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import styles from "./Page.module.css";

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <Projects />
      <Contact />
    </div>
  );
}
