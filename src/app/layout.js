import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'], weight:'400',variable: '--font-inter'})
const interBold = Inter({ subsets: ['latin'], weight:'800',variable: '--font-interBold'})

export const metadata = {
  title: 'Lenguages and automatas',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body className={`${inter.variable} font-inter ${interBold.variable} font-interBold`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
