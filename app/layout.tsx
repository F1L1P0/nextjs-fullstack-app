import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import { GlobalContextProvider } from './Context/store'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GlobalContextProvider>
        <body className={`${inter.className}`}>
          <Header />
          {children}
          <Footer />
        </body>
      </GlobalContextProvider>
    </html>
  )
}
