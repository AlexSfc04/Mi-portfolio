// components/Hero.jsx
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personal } from "../data/data";
import styles from "./Hero.module.css";

const SOCIAL_LINKS = [
  { label: "GitHub", href: personal.github, icon: FaGithub },
  { label: "LinkedIn", href: personal.linkedin, icon: FaLinkedin },
];

const STATS = [
  { value: `+${personal.yearsOfExperience}`, label: "Years of\nExperience" },
  { value: `+${personal.projectsCompleted}`, label: "Projects\nCompleted" },
  { value: `+${personal.worldwideClients}`, label: "Worldwide\nClients" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Split layout: photo left, content right */}
      <div className={styles.grid}>

        {/* ── Photo column ── */}
        <div className={`${styles.photoCol} ${mounted ? styles.visible : ""}`}>
          <div className={styles.photoWrap}>
            <img
              src="https://res.cloudinary.com/deydlxlap/image/upload/v1779622662/IMG_20250302_200253_kujehy.jpg"
              alt={personal.name}
              className={styles.photo}
            />
            <div className={styles.photoOverlay} />
          </div>

          {/* Social pills — overlaid bottom-left of photo */}
          <div className={styles.socials}>
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* ── Content column ── */}
        <div className={styles.contentCol}>
          {/* Label */}
          <p
            className={`section-label ${styles.label} ${mounted ? styles.visible : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            — Portfolio
          </p>

          {/* Big heading */}
          <h1
            className={`${styles.heading} ${mounted ? styles.visible : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            {personal.role.split(" ").map((word, i) => (
              <span key={i} className={styles.headingWord}>{word}</span>
            ))}
          </h1>

          {/* Tagline */}
          <p
            className={`${styles.tagline} ${mounted ? styles.visible : ""}`}
            style={{ transitionDelay: "0.35s" }}
          >
            {personal.tagline}
          </p>

          {/* Stats row */}
          <div
            className={`${styles.statsRow} ${mounted ? styles.visible : ""}`}
            style={{ transitionDelay: "0.5s" }}
          >
            {STATS.map(({ value, label }) => (
              <div key={label} className={styles.stat}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>

          {/* Scroll marquee strip */}
          <div
            className={`${styles.marqueeWrap} ${mounted ? styles.visible : ""}`}
            style={{ transitionDelay: "0.65s" }}
          >
            <div className={styles.marqueeTrack}>
              {["React", "Figma", "Next.js", "Tailwind", "TypeScript", "Node.js",
                "React", "Figma", "Next.js", "Tailwind", "TypeScript", "Node.js"].map((t, i) => (
                <span key={i} className={styles.marqueeItem}>
                  {t} <span className={styles.marqueeDot}>·</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
