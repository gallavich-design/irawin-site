import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "10+ years of product design across AI, SaaS, and ATS platforms. Lead Product Designer at Manatal, based in Bangkok.",
};

export default function AboutPage() {
  return <AboutContent />;
}
