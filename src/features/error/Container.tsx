import { Flex } from '@/shared/components/Flex'
import * as styles from './style.css'
import { useEffect } from 'react'
import { sendGAEvent } from '@next/third-parties/google'
import { ErrorCard } from './components/ErrorCard'

export type ErrorContainerProps = {
  error: Error
}

export const ErrorContainer = ({ error }: ErrorContainerProps) => {
  useEffect(
    function sendUserErrorEvent() {
      sendGAEvent({
        event: 'error',
        error: error.message,
        detail: error.stack,
        page: window.location.pathname,
        url: window.location.href,
        title: document.title,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer
      })
    },
    [error]
  )

  return (
    <Flex
      direction='column'
      align='center'
      justify='center'
      gap={16}
      className={styles.container}>
      <ErrorCard />
    </Flex>
  )
}
