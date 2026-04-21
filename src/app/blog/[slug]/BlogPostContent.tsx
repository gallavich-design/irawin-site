"use client";

import Link from "next/link";
import type { Post } from "@/lib/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          style={{
            fontSize: "22px",
            fontWeight: 700,
            color: "var(--text-primary)",
            margin: "40px 0 16px",
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("---")) {
      elements.push(
        <hr key={i} className="divider" style={{ margin: "32px 0" }} />
      );
    } else if (line.trim() === "") {
      // skip blank lines
    } else {
      // Process inline bold **text**
      const parts = line.split(/\*\*(.*?)\*\*/g);
      const rendered = parts.map((part, pi) =>
        pi % 2 === 1 ? <strong key={pi}>{part}</strong> : part
      );
      elements.push(
        <p
          key={i}
          style={{
            fontSize: "16px",
            color: "var(--text-secondary)",
            margin: "0 0 16px",
            lineHeight: 1.75,
          }}
        >
          {rendered}
        </p>
      );
    }
    i++;
  }
  return elements;
}

export function BlogPostContent({ post }: { post: Post }) {
  return (
    <div style={{ paddingTop: "64px", paddingBottom: "80px" }}>
      <div className="container" style={{ maxWidth: "720px" }}>
        {/* Back */}
        <Link
          href="/blog"
          className="fade-up fade-up-1"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "13px",
            color: "var(--text-muted)",
            textDecoration: "none",
            marginBottom: "40px",
          }}
        >
          ← Back to Blog
        </Link>

        {/* Header */}
        <div className="fade-up fade-up-2" style={{ marginBottom: "48px" }}>
          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <span className="tag">{post.category}</span>
            <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
              {post.readTime}
            </span>
          </div>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              color: "var(--text-primary)",
              margin: "0 0 16px",
              lineHeight: 1.2,
            }}
          >
            {post.title}
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: "var(--accent-bg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                }}
              >
                🎨
              </div>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                }}
              >
                Irawin Pengpitak
              </span>
            </div>
            <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
              {formatDate(post.date)}
            </span>
          </div>
        </div>

        <hr className="divider" style={{ marginBottom: "48px" }} />

        {/* Body */}
        <div className="fade-up fade-up-3">{renderContent(post.content)}</div>

        <hr className="divider" style={{ margin: "48px 0 40px" }} />

        {/* Clap */}
        <ClapButton />

        <hr className="divider" style={{ margin: "40px 0" }} />

        {/* Also from */}
        <div>
          <p className="section-label" style={{ marginBottom: "20px" }}>
            Also from Irawin
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/blog"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "var(--accent-text)",
                textDecoration: "none",
                padding: "8px 16px",
                borderRadius: "var(--radius)",
                background: "var(--accent-bg)",
              }}
            >
              ← More posts
            </Link>
            <Link
              href="/playground"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "var(--text-secondary)",
                textDecoration: "none",
                padding: "8px 16px",
                borderRadius: "var(--radius)",
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
              }}
            >
              See the Playground →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClapButton() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "8px 16px",
          borderRadius: "24px",
          border: "1px solid var(--border)",
          background: "var(--bg-primary)",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: 500,
          color: "var(--text-secondary)",
          transition:
            "background 150ms ease, border-color 150ms ease, transform 160ms var(--ease-out)",
        }}
        onClick={(e) => {
          const btn = e.currentTarget as HTMLButtonElement;
          btn.style.transform = "scale(1.15)";
          setTimeout(() => {
            btn.style.transform = "scale(1)";
          }, 200);
        }}
      >
        <span style={{ fontSize: "18px" }}>👏</span>
        <span>Clap</span>
      </button>
      <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>
        If this was useful, a clap means a lot.
      </span>
    </div>
  );
}
