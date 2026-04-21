export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: "UX & Design" | "Personal";
  readTime: string;
  content: string;
};

// Static seed posts — replace with Notion API integration later
export const posts: Post[] = [
  {
    slug: "making-ai-feel-human",
    title: "Making AI Feel Human: Lessons from Designing Copilot Experiences",
    excerpt:
      "When everyone's building AI features, the real challenge isn't the model — it's the conversation between the product and the person using it.",
    date: "2026-04-10",
    category: "UX & Design",
    readTime: "6 min read",
    content: `
When I joined Manatal's AI team, I thought designing for AI would mostly be about surfacing the right outputs at the right time. Pick a good font, add a loading spinner, ship it.

I was wrong.

The hardest part of AI UX isn't the interface — it's the **expectation gap**. Users arrive with a mental model of what "AI" means (magic, instant, infallible), and the actual product rarely matches it. Your job as the designer is to close that gap before it creates frustration.

## The 3 questions I ask before designing any AI feature

**1. When should the AI speak first?**
Proactive AI that jumps in uninvited creates anxiety. Reactive AI that waits to be summoned feels underutilized. The answer lives in the task: if the user is in the middle of a flow where they're making a decision, gentle proactive nudges are welcome. If they're heads-down in focused work, wait.

**2. What does uncertainty look like?**
Most AI outputs have a confidence level. Most UIs don't show it. Showing uncertainty ("Here's my best match — let me know if it misses the mark") dramatically improves trust more than faking certainty does.

**3. What does the user do when the AI is wrong?**
This is the question most teams skip. Design the correction flow first. If fixing a bad AI suggestion requires 6 clicks and a reload, no one will trust the feature. Make disagreeing with the AI as frictionless as agreeing with it.

## The thing nobody talks about: AI pacing

Humans have a rhythm when they think — they pause, reconsider, revise. AI outputs arrive instantly, which creates a jarring mismatch. A response that feels "too fast" can read as careless or random.

Consider **progressive reveal** — let the answer build character by character, as if the system is thinking. This isn't just aesthetics. It gives users time to process, increases perceived thoughtfulness, and reduces abandonment on longer outputs.

---

The best AI experiences I've seen don't feel like AI at all. They feel like a very competent colleague who always has context, never forgets, and knows when to stay quiet.

That's the bar.
    `,
  },
  {
    slug: "why-i-started-building",
    title: "Why I Started Building Things, Not Just Designing Them",
    excerpt:
      "A designer who can't build is like a chef who's never cooked. Here's what happened when I started shipping my own small products.",
    date: "2026-03-22",
    category: "Personal",
    readTime: "4 min read",
    content: `
For most of my career, my job ended at the handoff. I'd finish the Figma file, document the specs, walk the engineers through it, and then wait to see what came out the other side.

It worked. But something always felt incomplete.

## The gap between designing and building

The gap between a pixel-perfect Figma frame and what ships to production isn't always the engineers' fault. Sometimes it's the designer's. We specify things that are genuinely hard to build, or we leave ambiguities that get resolved without us, or we design interactions that feel perfect at 48fps in Prototype mode but fall apart in a real browser with real latency.

The only way I found to close that gap was to start building things myself.

## What changed

I started small. A color contrast checker tool. A simple kanban board. A Pomodoro timer with an absurd amount of animation polish. Nothing production-scale — just me and a browser and enough React to be dangerous.

Three things happened:

**I started respecting edge cases more.** When you're the designer *and* the engineer, you can't punt the hard states to someone else. You have to design the loading state, the empty state, the error state — not because a design review told you to, but because the thing breaks without them.

**My Figma files got simpler.** Less decoration, more structure. Fewer flourishes, more considered components. When you've felt the pain of implementing something needlessly complex, you think twice about speccing it.

**I started having better conversations with engineers.** Not because I suddenly know everything, but because I know *something*. I know what's expensive. I know what's not. I can say "what if we did it this way instead" and have it be a real suggestion, not a wishful one.

---

The Playground section of this site is where I put those experiments. None of them are polished products. Most of them are just me figuring something out in public.

That's the point.
    `,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category?: string): Post[] {
  if (!category || category === "All") return posts;
  return posts.filter((p) => p.category === category);
}

export const categories = ["All", "UX & Design", "Personal"] as const;
