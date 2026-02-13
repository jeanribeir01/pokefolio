import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { data } from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });

// Metadata dinâmica baseada no data.json
export const metadata: Metadata = {
  title: `${data.basics.name} | ${data.basics.label}`,
  description: data.basics.summary,
  authors: [{ name: data.basics.name }],
  creator: data.basics.name,
  keywords: [
    ...data.basics.label.split(" "),
    ...(data.skills?.flatMap((s) => s.items) || []),
  ],
  openGraph: {
    title: `${data.basics.name} | ${data.basics.label}`,
    description: data.basics.summary,
    type: "website",
    locale: "pt_BR",
    images: data.basics.image ? [{ url: data.basics.image }] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: `${data.basics.name} | ${data.basics.label}`,
    description: data.basics.summary,
    images: data.basics.image ? [data.basics.image] : undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme={data.config?.darkMode ? "dark" : "light"}
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
