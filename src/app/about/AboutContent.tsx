"use client";

import Link from "next/link";
import {
  profile,
  experience,
  skills,
  tools,
  education,
  certifications,
  languages,
} from "@/lib/resume";

export function AboutContent() {
  return (
    <div style={{ paddingTop: "64px", paddingBottom: "80px" }}>
      <div className="container">
        {/* ── Header ─────────────────────────────────── */}
        <div
          className="fade-up fade-up-1"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginBottom: "56px",
            maxWidth: "680px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              className="avatar-wrap"
              style={{ width: "64px", height: "64px", fontSize: "28px" }}
            >
              {profile.avatar}
            </div>
            <div>
              <h1
                className="font-display"
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                  margin: 0,
                  color: "var(--text-primary)",
                }}
              >
                {profile.name}
              </h1>
              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
                  color: "var(--text-secondary)",
                }}
              >
                {profile.title} · {profile.location}
              </p>
            </div>
          </div>
          <p
            style={{
              fontSize: "16px",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {profile.summary}
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              paddingTop: "8px",
            }}
          >
            <a href="/resume.pdf" download className="btn-primary">
              ↓ Download Resume
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="btn-outline"
            >
              Email me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <hr className="divider" style={{ marginBottom: "56px" }} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 300px",
            gap: "64px",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* ── Left: Timeline ──────────────────────── */}
          <div className="fade-up fade-up-2">
            <p className="section-label" style={{ marginBottom: "32px" }}>
              Experience
            </p>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {experience.map((exp) => (
                <div
                  key={exp.company}
                  style={{ marginBottom: "48px" }}
                  className="timeline-item"
                >
                  <div style={{ marginBottom: "20px" }}>
                    <h2
                      style={{
                        fontSize: "17px",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        margin: "0 0 2px",
                      }}
                    >
                      {exp.company}
                    </h2>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "var(--text-muted)",
                        margin: 0,
                      }}
                    >
                      {exp.companyDesc} · {exp.location}
                    </p>
                  </div>

                  {exp.roles.map((role, ri) => (
                    <div
                      key={role.title}
                      style={{
                        marginBottom:
                          ri < exp.roles.length - 1 ? "28px" : 0,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          flexWrap: "wrap",
                          gap: "4px",
                          marginBottom: "12px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "15px",
                            fontWeight: 600,
                            color: "var(--text-primary)",
                          }}
                        >
                          {role.title}
                        </span>
                        <span
                          style={{
                            fontSize: "13px",
                            color: "var(--text-muted)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {role.period}
                        </span>
                      </div>
                      <ul
                        style={{
                          margin: 0,
                          paddingLeft: "16px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                        }}
                      >
                        {role.bullets.map((b, bi) => (
                          <li
                            key={bi}
                            style={{
                              fontSize: "14px",
                              color: "var(--text-secondary)",
                              lineHeight: 1.6,
                            }}
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <p className="section-label" style={{ marginBottom: "24px" }}>
              Education
            </p>
            {education.map((e) => (
              <div
                key={e.school}
                className="timeline-item"
                style={{ marginBottom: "32px" }}
              >
                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    margin: "0 0 4px",
                  }}
                >
                  {e.school}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    margin: "0 0 2px",
                  }}
                >
                  {e.degree}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--text-muted)",
                    margin: 0,
                  }}
                >
                  {e.location} · {e.period}
                </p>
              </div>
            ))}
          </div>

          {/* ── Right: Skills sidebar ───────────────── */}
          <div
            className="fade-up fade-up-3"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              position: "sticky",
              top: "calc(var(--nav-height) + 24px)",
            }}
          >
            <div>
              <p className="section-label" style={{ marginBottom: "16px" }}>
                Skills
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {skills.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontSize: "13px",
                      fontWeight: 500,
                      padding: "4px 10px",
                      borderRadius: "20px",
                      background: "var(--bg-secondary)",
                      color: "var(--text-secondary)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="section-label" style={{ marginBottom: "16px" }}>
                Tools
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {tools.map((t) => (
                  <span key={t} className="tag tag-gray">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="section-label" style={{ marginBottom: "16px" }}>
                Certifications
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "12px" }}
              >
                {certifications.map((c) => (
                  <div key={c.id}>
                    <p
                      style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        margin: "0 0 2px",
                      }}
                    >
                      {c.name}
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "var(--text-muted)",
                        margin: 0,
                      }}
                    >
                      {c.issuer} · {c.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="section-label" style={{ marginBottom: "16px" }}>
                Languages
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                {languages.map((l) => (
                  <div key={l.name}>
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                      }}
                    >
                      {l.name}
                    </span>{" "}
                    <span
                      style={{ fontSize: "13px", color: "var(--text-muted)" }}
                    >
                      — {l.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Contact section ─────────────────────── */}
        <hr className="divider" style={{ margin: "64px 0" }} />
        <div className="fade-up" style={{ maxWidth: "520px" }} id="contact">
          <p className="section-label" style={{ marginBottom: "16px" }}>
            Get in touch
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "var(--text-primary)",
              margin: "0 0 8px",
            }}
          >
            I&apos;d love to hear from you.
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-secondary)",
              margin: "0 0 32px",
            }}
          >
            Whether you&apos;re working on something interesting, have a role
            in mind, or just want to talk design — my inbox is open.
          </p>
          <ContactForm email={profile.email} linkedin={profile.linkedin} />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function ContactForm({
  email,
  linkedin,
}: {
  email: string;
  linkedin: string;
}) {
  return (
    <div>
      <form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
          }}
          className="form-row"
        >
          <div>
            <label
              htmlFor="name"
              style={{
                display: "block",
                fontSize: "13px",
                fontWeight: 500,
                color: "var(--text-secondary)",
                marginBottom: "6px",
              }}
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="form-input"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              style={{
                display: "block",
                fontSize: "13px",
                fontWeight: 500,
                color: "var(--text-secondary)",
                marginBottom: "6px",
              }}
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="form-input"
              placeholder="your@email.com"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            style={{
              display: "block",
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--text-secondary)",
              marginBottom: "6px",
            }}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="form-input"
            placeholder="Hi Irawin, I'd love to talk about…"
            style={{ resize: "vertical" }}
          />
        </div>
        <div>
          <button type="submit" className="btn-primary">
            Send message →
          </button>
        </div>
      </form>

      <p
        style={{
          fontSize: "13px",
          color: "var(--text-muted)",
          marginTop: "20px",
        }}
      >
        Or reach me directly:{" "}
        <a
          href={`mailto:${email}`}
          style={{ color: "var(--accent-text)", textDecoration: "none" }}
        >
          {email}
        </a>{" "}
        ·{" "}
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--accent-text)", textDecoration: "none" }}
        >
          LinkedIn ↗
        </a>
      </p>

      <style>{`
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
