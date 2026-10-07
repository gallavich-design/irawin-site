"use client";

import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/lib/playground";
import { unlockProject } from "./actions";

export function ProjectContent({ project }: { project: Project }) {
  const [embedActive, setEmbedActive] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [unlockedEmbedUrl, setUnlockedEmbedUrl] = useState("");
  const [password, setPassword] = useState("");
  const [pwError, setPwError] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [checking, setChecking] = useState(false);

  const isLocked = project.status === "locked" && !unlocked;
  const embedUrl = unlocked ? unlockedEmbedUrl : project.embedUrl;

  async function handleUnlock(e: React.FormEvent) {
    e.preventDefault();
    setChecking(true);
    const result = await unlockProject(project.slug, password);
    setChecking(false);
    if (result.ok) {
      setUnlockedEmbedUrl(result.embedUrl);
      setUnlocked(true);
      setPwError(false);
    } else {
      setPwError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 400);
    }
  }

  return (
    <div style={{ paddingTop: "64px", paddingBottom: "80px" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        {/* Back */}
        <Link
          href="/playground"
          className="fade-up fade-up-1"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "13px",
            color: "var(--text-muted)",
            textDecoration: "none",
            marginBottom: "40px",
            transition: "color 150ms ease",
          }}
        >
          ← Back to Playground
        </Link>

        {/* Header */}
        <div className="fade-up fade-up-2" style={{ marginBottom: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "12px",
                background: "var(--accent-bg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
              }}
            >
              {project.emoji}
            </div>
            <div>
              <h1
                className="font-display"
                style={{
                  fontSize: "clamp(24px, 4vw, 36px)",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  margin: "0 0 4px",
                }}
              >
                {project.title}
              </h1>
              <p style={{ fontSize: "14px", color: "var(--text-secondary)", margin: 0 }}>
                {project.description}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <hr className="divider" style={{ marginBottom: "40px" }} />

        {/* Project story */}
        {project.problem && (
          <div
            className="fade-up fade-up-3"
            style={{ marginBottom: "40px" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "32px",
              }}
              className="project-story-grid"
            >
              {[
                { label: "The problem", text: project.problem },
                { label: "What I built", text: project.whatIBuilt },
                { label: "What I learned", text: project.whatILearned },
              ].map(({ label, text }) =>
                text ? (
                  <div key={label}>
                    <p
                      className="section-label"
                      style={{ marginBottom: "10px" }}
                    >
                      {label}
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "var(--text-secondary)",
                        margin: 0,
                        lineHeight: 1.65,
                      }}
                    >
                      {text}
                    </p>
                  </div>
                ) : null
              )}
            </div>
          </div>
        )}

        <hr className="divider" style={{ marginBottom: "40px" }} />

        {/* ── Locked gate ─────────────────────────────── */}
        {isLocked ? (
          <div
            className="fade-up"
            style={{
              background: "var(--bg-secondary)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              padding: "40px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <span style={{ fontSize: "40px" }}>🔒</span>
            <div>
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  margin: "0 0 8px",
                }}
              >
                This one&apos;s in beta
              </h2>
              <p style={{ fontSize: "14px", color: "var(--text-secondary)", margin: 0 }}>
                Enter the password to try it out.
              </p>
            </div>
            <form
              onSubmit={handleUnlock}
              style={{ display: "flex", gap: "8px", width: "100%", maxWidth: "320px" }}
            >
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPwError(false);
                }}
                placeholder="Password"
                className={`form-input ${pwError ? "error" : ""} ${shaking ? "shake" : ""}`}
                style={{ flex: 1 }}
              />
              <button type="submit" className="btn-primary" disabled={checking}>
                {checking ? "Checking…" : "Unlock"}
              </button>
            </form>
            {pwError && (
              <p style={{ fontSize: "13px", color: "#ef4444", margin: 0 }}>
                Not quite — try again.
              </p>
            )}
          </div>
        ) : (
          /* ── Embed ──────────────────────────────────── */
          <div className="fade-up embed-container">
            {!embedActive ? (
              <button
                className="embed-placeholder"
                onClick={() => setEmbedActive(true)}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <span style={{ fontSize: "40px" }}>{project.emoji}</span>
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      margin: "0 0 6px",
                    }}
                  >
                    Click to load
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--text-muted)",
                      margin: 0,
                    }}
                  >
                    {project.title} · Interactive
                  </p>
                </div>
                <span
                  className="btn-primary"
                  style={{ pointerEvents: "none" }}
                >
                  Launch →
                </span>
              </button>
            ) : embedUrl ? (
              <iframe
                src={embedUrl}
                style={{
                  width: "100%",
                  minHeight: "480px",
                  border: "none",
                  display: "block",
                }}
                title={project.title}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope"
              />
            ) : (
              <div
                style={{
                  minHeight: "400px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  padding: "40px",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "32px" }}>🚧</span>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    margin: 0,
                  }}
                >
                  This one&apos;s being updated — check back soon.
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--text-muted)",
                    margin: 0,
                    maxWidth: "360px",
                  }}
                >
                  {project.description}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 700px) {
          .project-story-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
