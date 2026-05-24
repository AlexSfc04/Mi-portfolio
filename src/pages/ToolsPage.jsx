// pages/ToolsPage.jsx
import Tools from "../components/Tools";
import Contact from "../components/Contact";
import styles from "./Page.module.css";

export default function ToolsPage() {
  return (
    <div className={styles.page}>
      <Tools />
      <Contact />
    </div>
  );
}
