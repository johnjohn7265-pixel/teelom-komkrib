import { Kanit, Sarabun } from 'next/font/google'

const kanit = Kanit({ subsets: ['thai', 'latin'], weight: ['500','600','700'], variable: '--font-kanit' })
const sarabun = Sarabun({ subsets: ['thai', 'latin'], weight: ['400','500','600'], variable: '--font-sarabun' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={`${kanit.variable} ${sarabun.variable}`}>
      <body>{children}</body>
    </html>
  )
}

import { Home, User, Bell } from 'lucide-react'
// <Home size={20} />