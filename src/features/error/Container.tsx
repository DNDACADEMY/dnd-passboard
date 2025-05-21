import { Flex } from '@/shared/components/Flex'
import { TextButton } from '@/shared/components/TextButton'
import { useRouter } from 'next/navigation'
import * as styles from './style.css'
import { useEffect } from 'react'
import { sendGAEvent } from '@next/third-parties/google'

export type ErrorContainerProps = {
  error: Error
  reset: () => void
}

export const ErrorContainer = ({ error, reset }: ErrorContainerProps) => {
  const router = useRouter()
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

  const handleTryAgain = () => {
    reset()
  }

  return (
    <Flex
      direction='column'
      align='center'
      justify='center'
      gap={16}
      className={styles.container}>
      <h1 className={styles.title}>에러가 발생했어요.</h1>
      <p className={styles.description}>
        죄송합니다. 현재 페이지에 문제가 있어 페이지를 로드할 수 없습니다. <br />
        잠시 후 다시 시도해주세요.
      </p>
      <Flex gap={16}>
        <TextButton
          color='white'
          onClick={handleTryAgain}>
          다시 시도하기
        </TextButton>
        <TextButton
          color='white'
          onClick={() => {
            router.push('/')
          }}>
          홈으로 돌아가기
        </TextButton>
      </Flex>
    </Flex>
  )
}
