"use client";

import Link from "next/link";
import { profile } from "@/lib/resume";
import { posts } from "@/lib/blog";
import { projects } from "@/lib/playground";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Home() {
  const recentPosts = posts.slice(0, 2);
  const featuredProject = projects.find((p) => p.status === "live");

  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: "680px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {/* Avatar + greeting */}
            <div
              className="fade-up fade-up-1"
              style={{ display: "flex", alignItems: "center", gap: "16px" }}
            >
              <div className="avatar-wrap">
                <span role="img" aria-label="designer">{profile.avatar}</span>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--text-muted)",
                    margin: 0,
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  Based in {profile.location}
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    margin: 0,
                  }}
                >
                  {profile.title} · Manatal
                </p>
              </div>
            </div>

            {/* Name */}
            <h1
              className="font-display fade-up fade-up-2"
              style={{
                fontSize: "clamp(40px, 6vw, 64px)",
                fontWeight: 700,
                color: "var(--text-primary)",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              {profile.name}
            </h1>

            {/* Tagline */}
            <p
              className="fade-up fade-up-3"
              style={{
                fontSize: "18px",
                color: "var(--text-secondary)",
                margin: 0,
                lineHeight: 1.6,
                maxWidth: "520px",
              }}
            >
              {profile.tagline}
            </p>

            {/* Sub-summary */}
            <p
              className="fade-up fade-up-4"
              style={{
                fontSize: "15px",
                color: "var(--text-muted)",
                margin: 0,
                lineHeight: 1.7,
                maxWidth: "560px",
              }}
            >
              10+ years across SaaS, ATS, and AI-driven products. I care about
              craft, shipping fast, and the invisible details that make products
              feel right.
            </p>

            {/* CTAs */}
            <div
              className="fade-up fade-up-5"
              style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
            >
              <Link href="/about" className="btn-primary">
                About me →
              </Link>
              <Link href="/playground" className="btn-outline">
                See my work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Recent writing ─────────────────────────────── */}
      <section style={{ paddingTop: "64px", paddingBottom: "64px" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: "32px",
            }}
          >
            <p className="section-label">From the blog</p>
            <Link
              href="/blog"
              style={{
                fontSize: "13px",
                color: "var(--text-muted)",
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 150ms ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--text-muted)")
              }
            >
              All posts →
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "16px",
            }}
          >
            {recentPosts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none" }}
                className={`card fade-up fade-up-${i + 1}`}
              >
                <article style={{ padding: "24px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "12px",
                    }}
                  >
                    <span className="tag">{post.category}</span>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "var(--text-muted)",
                      }}
                    >
                      {post.readTime}
                    </span>
                  </div>
                  <h2
                    style={{
                      fontSize: "17px",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      margin: "0 0 8px",
                      lineHeight: 1.4,
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    {post.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                      margin: "0 0 16px",
                      lineHeight: 1.6,
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "var(--text-muted)",
                      margin: 0,
                    }}
                  >
                    {formatDate(post.date)}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured playground ────────────────────────── */}
      {featuredProject && (
        <section
          style={{
            paddingTop: "0",
            paddingBottom: "80px",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div className="container" style={{ paddingTop: "64px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: "32px",
              }}
            >
              <p className="section-label">Currently building</p>
              <Link
                href="/playground"
                style={{
                  fontSize: "13px",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  fontWeight: 500,
                  transition: "color 150ms ease",
                }}
              >
                All experiments →
              </Link>
            </div>

            <Link
              href={`/playground/${featuredProject.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div
                className="card"
                style={{
                  padding: "32px",
                  display: "flex",
                  gap: "24px",
                  alignItems: "flex-start",
                }}
              >
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
                    flexShrink: 0,
                  }}
                >
                  {featuredProject.emoji}
                </div>
                <div style={{ flex: 1 }}>
                  <h2
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      margin: "0 0 8px",
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    {featuredProject.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      margin: "0 0 16px",
                      lineHeight: 1.6,
                    }}
                  >
                    {featuredProject.description}
                  </p>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {featuredProject.tags.map((tag) => (
                      <span key={tag} className="tag tag-gray">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "20px",
                    color: "var(--text-muted)",
                    alignSelf: "center",
                    flexShrink: 0,
                  }}
                >
                  →
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
