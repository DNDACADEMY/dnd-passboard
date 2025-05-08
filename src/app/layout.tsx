import type { Metadata } from 'next'
import '@/styles/globals.css'
import { pretendard } from '@/styles/fonts/pretendard'

export const metadata: Metadata = {
  title: 'DND-PASSBOARD',
  description: 'DND-PASSBOARD'
}

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      className={pretendard.variable}
      lang='ko'>
      <body>{children}</body>
    </html>
  )
}
