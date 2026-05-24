// pages/ExperiencePage.jsx
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import styles from "./Page.module.css";

export default function ExperiencePage() {
  return (
    <div className={styles.page}>
      <Experience />
      <Contact />
    </div>
  );
}
