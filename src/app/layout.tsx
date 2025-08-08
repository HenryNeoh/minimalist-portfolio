import type { Metadata } from 'next';
import { useEffect, useState } from 'react';
import ViewCounter from "./ViewCounter";

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Deep Learning Engineer & Data Scientist Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* Move ViewCounter to page.tsx instead */}
      </body>
    </html>
  );
}
