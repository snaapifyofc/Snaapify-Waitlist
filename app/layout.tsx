import type React from "react"
import "./globals.css"
import { Josefin_Sans, Inter } from "next/font/google"
import type { Metadata } from "next"

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Snaapify - Photography Marketplace",
  description:
    "Connect with photographers, book shoots, and explore stunning visuals. Join the future of photography with Snaapify.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${josefinSans.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}

