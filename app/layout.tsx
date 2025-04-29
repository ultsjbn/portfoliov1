import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Jessica Bea Novesteras | Graphic Design Portfolio",
  description: "Graphic design and UI/UX portfolio of Jessica Bea Novesteras, Computer Science student at UP Baguio",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">{children}</body>
    </html>
  )
}
