import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Pacifico } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  weight: "400",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Cake Wala - Premium Cakes | Handcrafted Delights",
  description:
    "Handcrafted premium cakes made fresh daily. Custom designs for birthdays, weddings, and special occasions. Free delivery on orders over £50.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${pacifico.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
