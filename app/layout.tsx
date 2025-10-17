import "@/styles/globals.css";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thinking Longer, Not Always Smarter",
  description: "Evaluating LLM Capabilities in Hierarchical Legal Reasoning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Thinking Longer, Not Always Smarter</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" />
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
