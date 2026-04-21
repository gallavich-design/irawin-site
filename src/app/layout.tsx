import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://irawin.com"),
  title: {
    default: "Irawin Pengpitak — Lead Product Designer",
    template: "%s — Irawin Pengpitak",
  },
  description:
    "Personal site of Irawin Pengpitak. AI UX, SaaS design, and small experiments. Lead Product Designer based in Bangkok.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://irawin.com",
    siteName: "Irawin Pengpitak",
    title: "Irawin Pengpitak — Lead Product Designer",
    description:
      "Personal site of Irawin Pengpitak. AI UX, SaaS design, and small experiments.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Irawin Pengpitak — Lead Product Designer",
    description: "Personal site of Irawin Pengpitak. AI UX, SaaS design, and small experiments.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeProvider>
          <Nav />
          <main style={{ paddingTop: "var(--nav-height)" }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
