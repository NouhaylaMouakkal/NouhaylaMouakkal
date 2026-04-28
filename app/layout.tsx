import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-cal",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: {
    default: "Nouhayla Mouakkal — AI Engineer & Product Thinker",
    template: "%s | Nouhayla Mouakkal",
  },
  description:
    "Senior AI Software Engineer specializing in Machine Learning, NLP, GenAI, LLMs, and full-stack development. Building intelligent products that make an impact.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "NLP",
    "GenAI",
    "LLMs",
    "Data Engineering",
    "Full Stack Developer",
    "Portfolio",
    "Nouhayla Mouakkal",
  ],
  authors: [{ name: "Nouhayla Mouakkal" }],
  creator: "Nouhayla Mouakkal",
  metadataBase: new URL("https://nouhaylamouakkal.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nouhaylamouakkal.vercel.app",
    siteName: "Nouhayla Mouakkal",
    title: "Nouhayla Mouakkal — AI Engineer & Product Thinker",
    description:
      "Senior AI Software Engineer specializing in Machine Learning, NLP, GenAI, LLMs, and full-stack development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nouhayla Mouakkal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nouhayla Mouakkal — AI Engineer & Product Thinker",
    description:
      "Senior AI Software Engineer specializing in Machine Learning, NLP, GenAI, LLMs, and full-stack development.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased min-h-screen bg-background text-foreground selection:bg-primary/20">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col grain">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <Chatbot />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
