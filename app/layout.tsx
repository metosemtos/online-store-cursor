import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'المتجر الإلكتروني',
  description: 'متجر إلكتروني مبني باستخدام Next.js و Supabase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}