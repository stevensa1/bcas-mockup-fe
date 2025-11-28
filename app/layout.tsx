import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import './globals.css'

export const metadata: Metadata = {
  title: 'BCA Syariah - Perbankan Syariah Terpercaya',
  description: 'BCA Syariah menyediakan layanan perbankan syariah yang aman dan terpercaya',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
