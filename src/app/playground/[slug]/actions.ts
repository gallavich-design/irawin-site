"use server";

import { createHash, timingSafeEqual } from "node:crypto";
import { getProject } from "@/lib/playground";
import { lockedEmbedUrls } from "@/lib/playground-private";

function digest(value: string) {
  return createHash("sha256").update(value).digest();
}

export async function unlockProject(
  slug: string,
  password: string
): Promise<{ ok: true; embedUrl: string } | { ok: false }> {
  const expected = process.env.PLAYGROUND_PASSWORD;
  const project = getProject(slug);
  if (!expected || project?.status !== "locked") return { ok: false };

  // Compare fixed-length digests so timing doesn't leak the password length
  if (!timingSafeEqual(digest(password), digest(expected))) return { ok: false };

  return { ok: true, embedUrl: lockedEmbedUrls[slug] ?? "" };
}
