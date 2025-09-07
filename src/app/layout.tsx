import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Real Estate | Property in India | Buy/Sale/Rent Properties',
  description: 'Find the best real estate projects in your city',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen antialiased">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}