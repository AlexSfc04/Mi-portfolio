// components/Footer.jsx
import { personal, navLinks } from "../data/data";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <NavLink to="/" className={styles.logo}>
            {personal.name}
          </NavLink>
          <p className={styles.tagline}>{personal.role}</p>
        </div>

        {/* Nav */}
        <nav className={styles.nav} aria-label="Footer navigation">
          {navLinks.map(({ label, to }) => (
            <NavLink key={to} to={to} end={to === "/"} className={styles.link}>
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Social */}
        <div className={styles.social}>
          {[
            { label: "GitHub", href: personal.github },
            { label: "LinkedIn", href: personal.linkedin },
            { label: "Email", href: `mailto:${personal.email}` },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className="container">
          <span>© {new Date().getFullYear()} {personal.name} — All rights reserved</span>
          <span>Built with React</span>
        </div>
      </div>
    </footer>
  );
}
