import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "James Belda",
  description:
    "Web developer and designer crafting beautiful, fast websites for every industry.",
  keywords: [
    "James Belda",
    "web developer",
    "web designer",
    "Next.js",
    "Philippines",
    "Kulay",
    "KBLink",
    "portfolio",
  ],
  authors: [{ name: "James Belda" }],
  creator: "James Belda",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    title: "James Belda",
    description:
      "Web developer and designer crafting beautiful, fast websites for every industry.",
    images: [
      {
        url: "/jamesbelda2.png",
        width: 1200,
        height: 630,
        alt: "James Belda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "James Belda",
    description:
      "Web developer and designer crafting beautiful, fast websites for every industry.",
    images: ["/jamesbelda2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-black text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
