"use client";

import Link from "next/link";
import { useState } from "react";
import { posts, categories } from "@/lib/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <div style={{ paddingTop: "64px", paddingBottom: "80px" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        {/* Header */}
        <div className="fade-up fade-up-1" style={{ marginBottom: "40px" }}>
          <h1
            className="font-display"
            style={{
              fontSize: "40px",
              fontWeight: 700,
              color: "var(--text-primary)",
              margin: "0 0 8px",
            }}
          >
            Blog
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "var(--text-secondary)",
              margin: 0,
            }}
          >
            Writing on UX, design thinking, and life.
          </p>
        </div>

        {/* Category tabs */}
        <div className="tab-strip fade-up fade-up-2" style={{ marginBottom: "40px" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-item ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Post list */}
        {filtered.length === 0 ? (
          <div
            className="fade-up"
            style={{
              textAlign: "center",
              padding: "64px 0",
              color: "var(--text-muted)",
            }}
          >
            <p style={{ fontSize: "32px", marginBottom: "12px" }}>✍️</p>
            <p style={{ fontSize: "15px", margin: 0 }}>
              No posts in this category yet — check back soon.
            </p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {filtered.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none" }}
                className={`fade-up fade-up-${Math.min(i + 3, 6)}`}
              >
                <article
                  style={{
                    padding: "28px 0",
                    borderBottom: "1px solid var(--border)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    transition: "padding-left 200ms var(--ease-out)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.paddingLeft = "8px")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.paddingLeft = "0")
                  }
                >
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <span className="tag">{post.category}</span>
                    <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                      {post.readTime}
                    </span>
                  </div>
                  <h2
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      margin: 0,
                      lineHeight: 1.35,
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    {post.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                      margin: 0,
                      lineHeight: 1.65,
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <p style={{ fontSize: "12px", color: "var(--text-muted)", margin: 0 }}>
                    {formatDate(post.date)}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        )}

        {/* RSS link */}
        <div style={{ marginTop: "40px", textAlign: "right" }}>
          <a
            href="/feed.xml"
            style={{
              fontSize: "12px",
              color: "var(--text-muted)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <span>RSS</span>
            <span style={{ fontSize: "10px" }}>↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}
