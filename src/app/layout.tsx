import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { data } from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });
const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel",
});

// Metadata dinâmica baseada no data.json
export const metadata: Metadata = {
  title: `${data.basics.name} | ${data.basics.label}`,
  description: data.basics.summary,
  authors: [{ name: data.basics.name }],
  creator: data.basics.name,
  keywords: [...data.basics.label.split(" "), ...(data.skills || [])],
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
  const starter = data.config?.starterPokemon ?? "squirtle";

  return (
    <html lang="pt-BR" suppressHydrationWarning data-starter={starter}>
      <body className={`${inter.className} ${pressStart.variable}`}>
        {children}
      </body>
    </html>
  );
}
