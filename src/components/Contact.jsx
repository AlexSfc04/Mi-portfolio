// components/Contact.jsx
import { useState } from "react";
import { useInView } from "../hooks/useInView";
import styles from "./Contact.module.css";

const BUDGETS = ["< €1k", "€1k – €3k", "€3k – €5k", "> €5k"];

export default function Contact() {
  const [ref, visible] = useInView();
  const [form, setForm] = useState({ name: "", email: "", budget: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send — replace with your own API call (Formspree, EmailJS, etc.)
    await new Promise((res) => setTimeout(res, 1200));
    setStatus("sent");
  };

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div ref={ref} className={`fade-in ${visible ? "visible" : ""}`}>
          <p className="section-label">05 — Contact</p>
          <h2 className="section-heading">
            Let's Work<br />Together
          </h2>
        </div>

        {status === "sent" ? (
          <div className={styles.success}>
            <span className={styles.successIcon}>✓</span>
            <p>Message sent — I'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.row}>
              {/* Name */}
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              {/* Email */}
              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>
            </div>

            {/* Budget */}
            <div className={styles.field}>
              <label className={styles.label} htmlFor="budget">Budget</label>
              <select
                id="budget"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className={`${styles.input} ${styles.select}`}
              >
                <option value="" disabled>Select a range…</option>
                {BUDGETS.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project…"
                value={form.message}
                onChange={handleChange}
                className={`${styles.input} ${styles.textarea}`}
              />
            </div>

            <button
              type="submit"
              className={styles.submit}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
