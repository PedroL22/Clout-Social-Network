import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import { ReactNode } from 'react'

import './globals.css'

import { Header } from '@layout/Header'
import { MainContainer } from '@layout/MainContainer'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clout Social Network',
  description: 'Clout - An open-source social network.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={dmSans.className}>
        <Header />
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  )
}
