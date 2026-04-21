import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/playground";

export const metadata: Metadata = {
  title: "Playground",
  description:
    "Small products and experiments built while learning. AI tools, UI experiments, and useful utilities.",
};

const statusLabel: Record<string, string> = {
  live: "Live",
  locked: "🔒 Password protected",
  "coming-soon": "Coming soon",
};

const statusStyle: Record<string, React.CSSProperties> = {
  live: { background: "var(--accent-bg)", color: "var(--accent-text)" },
  locked: { background: "var(--bg-secondary)", color: "var(--text-muted)" },
  "coming-soon": {
    background: "var(--bg-secondary)",
    color: "var(--text-muted)",
    fontStyle: "italic",
  },
};

export default function PlaygroundPage() {
  return (
    <div style={{ paddingTop: "64px", paddingBottom: "80px" }}>
      <div className="container">
        {/* Header */}
        <div className="fade-up fade-up-1" style={{ marginBottom: "48px", maxWidth: "600px" }}>
          <h1
            className="font-display"
            style={{
              fontSize: "40px",
              fontWeight: 700,
              color: "var(--text-primary)",
              margin: "0 0 12px",
            }}
          >
            Playground
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "var(--text-secondary)",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Small things I&apos;ve built while learning. None of these are
            polished products — they&apos;re experiments. That&apos;s the point.
          </p>
        </div>

        {/* Project grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "16px",
          }}
        >
          {projects.map((project, i) => {
            const isClickable =
              project.status === "live" || project.status === "locked";

            const inner = (
              <div style={{ padding: "28px" }}>
                {/* Emoji + status */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "10px",
                      background: "var(--accent-bg)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                    }}
                  >
                    {project.emoji}
                  </div>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 500,
                      padding: "3px 8px",
                      borderRadius: "20px",
                      ...statusStyle[project.status],
                    }}
                  >
                    {statusLabel[project.status]}
                  </span>
                </div>

                <h2
                  style={{
                    fontSize: "17px",
                    fontWeight: 600,
                    color:
                      project.status === "coming-soon"
                        ? "var(--text-muted)"
                        : "var(--text-primary)",
                    margin: "0 0 8px",
                  }}
                >
                  {project.title}
                </h2>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    margin: "0 0 16px",
                    lineHeight: 1.6,
                  }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag tag-gray">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {isClickable && (
                  <div style={{ marginTop: "20px" }}>
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "var(--accent-text)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      {project.status === "locked" ? "Unlock →" : "Open →"}
                    </span>
                  </div>
                )}
              </div>
            );

            return isClickable ? (
              <Link
                key={project.slug}
                href={`/playground/${project.slug}`}
                style={{ textDecoration: "none" }}
                className={`card fade-up fade-up-${Math.min(i + 2, 6)}`}
              >
                {inner}
              </Link>
            ) : (
              <div
                key={project.slug}
                className={`card fade-up fade-up-${Math.min(i + 2, 6)}`}
                style={{ opacity: 0.6, cursor: "default" }}
              >
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
