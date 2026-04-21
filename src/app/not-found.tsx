"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - var(--nav-height))",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        textAlign: "center",
        gap: "32px",
      }}
    >
      {/* Big playful 404 */}
      <div style={{ position: "relative" }}>
        <p
          className="font-display"
          style={{
            fontSize: "clamp(100px, 20vw, 180px)",
            fontWeight: 900,
            color: "var(--bg-secondary)",
            margin: 0,
            lineHeight: 1,
            userSelect: "none",
            letterSpacing: "-0.04em",
          }}
        >
          404
        </p>
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "clamp(36px, 6vw, 56px)",
            animation: "spin 4s linear infinite",
          }}
          role="img"
          aria-label="lost"
        >
          🧭
        </span>
      </div>

      {/* Copy */}
      <div style={{ maxWidth: "400px" }}>
        <h1
          style={{
            fontSize: "24px",
            fontWeight: 700,
            color: "var(--text-primary)",
            margin: "0 0 8px",
          }}
        >
          Looks like this page wandered off.
        </h1>
        <p
          style={{
            fontSize: "15px",
            color: "var(--text-secondary)",
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          Maybe it&apos;s somewhere in the Playground, plotting its next
          experiment. Let&apos;s get you back.
        </p>
      </div>

      {/* CTAs */}
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
        <Link href="/" className="btn-primary">
          ← Back to home
        </Link>
        <Link href="/blog" className="btn-outline">
          Read the blog
        </Link>
        <Link href="/playground" className="btn-outline">
          Playground →
        </Link>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
