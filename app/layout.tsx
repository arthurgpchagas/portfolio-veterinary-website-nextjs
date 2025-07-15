import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Pet Office",
  description: "Veterinary care for your beloved pets",
}

export default function RootLayout({
  children,
} : {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressContentEditableWarning>
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              {children}
          </ThemeProvider>
        </body>
    </html>
  )
}