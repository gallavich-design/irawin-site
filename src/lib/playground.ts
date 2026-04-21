export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  status: "live" | "locked" | "coming-soon";
  emoji: string;
  problem?: string;
  whatIBuilt?: string;
  whatILearned?: string;
  embedUrl?: string;
  passwordHash?: string; // SHA-256 hash of the password
};

export const projects: Project[] = [
  {
    slug: "contrast-checker",
    title: "Contrast Checker",
    description:
      "A real-time WCAG color contrast checker. Paste two hex colors and instantly see if they pass AA or AAA accessibility standards.",
    tags: ["React", "CSS", "Accessibility"],
    status: "live",
    emoji: "🎨",
    problem:
      "Every time I needed to check color contrast mid-design, I had to open a separate tool and break my flow. I wanted one that lived in my browser.",
    whatIBuilt:
      "A minimal React app that takes two hex colors, calculates the relative luminance of each, and outputs the contrast ratio + pass/fail against WCAG 2.1 AA and AAA thresholds. Updates on every keystroke.",
    whatILearned:
      "The WCAG luminance formula is more nuanced than I expected — gamma correction, sRGB space, the works. Also learned that perceived contrast and calculated contrast sometimes feel at odds.",
    embedUrl: "",
  },
  {
    slug: "focus-timer",
    title: "Focus Timer",
    description:
      "A Pomodoro-style focus timer with an absurd amount of animation polish. 25 minutes never looked this good.",
    tags: ["React", "Framer Motion", "CSS"],
    status: "live",
    emoji: "⏱️",
    problem:
      "I wanted to practise building expressive motion-driven UI. A timer seemed like the simplest meaningful thing that would still let me go overboard on animation.",
    whatIBuilt:
      "A 25/5 Pomodoro timer with a circular progress ring, smooth transitions between work and break states, and a satisfying completion animation. Built in React with Framer Motion.",
    whatILearned:
      "SVG stroke-dashoffset animation is surprisingly elegant once you understand the math. Also: good animation timing is about restraint, not quantity.",
    embedUrl: "",
  },
  {
    slug: "ai-ux-playground",
    title: "AI Copy Rewriter",
    description:
      "Paste any UI copy and get 3 rewrites: clearer, warmer, and more concise. Powered by Claude.",
    tags: ["Claude API", "Next.js", "AI UX"],
    status: "locked",
    emoji: "✍️",
    problem:
      "Writing good microcopy is hard. I wanted a tool that could give me multiple tonal options instantly, not a generic rewrite.",
    whatIBuilt:
      "A Next.js app that sends copy to the Claude API with structured prompts for three distinct rewrite modes, then displays the results side-by-side for comparison.",
    whatILearned:
      "Prompt engineering for creative tasks is genuinely different from informational tasks. The system prompt needs to encode the design philosophy, not just the instruction.",
    passwordHash: "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918",
  },
  {
    slug: "design-token-explorer",
    title: "Design Token Explorer",
    description: "Coming soon — a visual tool for exploring and testing design token relationships.",
    tags: ["React", "Design Systems"],
    status: "coming-soon",
    emoji: "🔧",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
