import type { Metadata } from 'next'
import '@/shared/styles/globals.css'
import { pretendard } from '@/shared/styles/fonts/pretendard'

export const metadata: Metadata = {
  title: 'DND - 지원결과조회',
  description: 'DND 지원결과조회 페이지입니다.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      className={pretendard.variable}
      lang='ko'>
      <head>
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/assets/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/assets/favicon-16x16.png'
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
