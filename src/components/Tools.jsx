// components/Tools.jsx
import { FaReact, FaGithub } from "react-icons/fa";
import { SiFigma, SiTailwindcss, SiOpenai } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import { tools } from "../data/data";
import { useInView } from "../hooks/useInView";
import styles from "./Tools.module.css";

const toolIcons = {
  React: <FaReact />,
  Figma: <SiFigma />,
  "VS Code": <VscVscode />,
  "Tailwind CSS": <SiTailwindcss />,
  GitHub: <FaGithub />,
  ChatGpt: <SiOpenai />,
};

function ToolItem({ tool, index }) {
  const [ref, visible] = useInView(0.1);
  const icon = toolIcons[tool.name] || (
    <svg viewBox="0 0 128 128" aria-hidden="true">
      <circle cx="64" cy="64" r="24" fill="currentColor" opacity="0.2" />
      <path d="M40 64h48M64 40v48" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
    </svg>
  );

  return (
    <a
      ref={ref}
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.item} ${visible ? styles.visible : ""}`}
      style={{ transitionDelay: `${index * 0.07}s` }}
    >
      <div className={styles.iconWrap}>{icon}</div>
      <div className={styles.info}>
        <span className={styles.name}>{tool.name}</span>
        <span className={styles.category}>{tool.category}</span>
      </div>
      <span className={styles.arrow}>↗</span>
    </a>
  );
}

export default function Tools() {
  const [ref, visible] = useInView();

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div ref={ref} className={`fade-in ${visible ? "visible" : ""}`}>
          <p className="section-label">04 — Stack</p>
          <h2 className="section-heading">
            Premium<br />Tools
          </h2>
        </div>

        <div className={styles.grid}>
          {tools.map((tool, i) => (
            <ToolItem key={tool.name} tool={tool} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
