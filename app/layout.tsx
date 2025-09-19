import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Hypernova - Over-collateralized Stablecoin Protocol",
  description: "Over-collateralized stablecoin protocol on HyperEVM with no liquidations and native yield",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${spaceGrotesk.style.fontFamily};
  --font-sans: ${spaceGrotesk.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className={`${spaceGrotesk.variable}`}>{children}</body>
    </html>
  )
}
