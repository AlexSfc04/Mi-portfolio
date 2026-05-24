// components/Nav.jsx
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { personal, navLinks } from "../data/data";
import styles from "./Nav.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change / resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 700) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <NavLink to="/" className={styles.logo}>
          {personal.name.split(" ")[0]}
          <span className={styles.logoDot}>.</span>
        </NavLink>

        {/* Desktop links */}
        <nav className={styles.nav} aria-label="Main navigation">
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={`mailto:${personal.email}`}
          className={styles.cta}
        >
          Contact me
        </a>

        {/* Mobile burger */}
        <button
          className={styles.burger}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`${styles.burgerLine} ${menuOpen ? styles.open : ""}`} />
          <span className={`${styles.burgerLine} ${menuOpen ? styles.open : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}>
        {navLinks.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `${styles.drawerLink} ${isActive ? styles.drawerActive : ""}`
            }
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </NavLink>
        ))}
        <a href={`mailto:${personal.email}`} className={styles.drawerCta}>
          Contact me
        </a>
      </div>
    </header>
  );
}
