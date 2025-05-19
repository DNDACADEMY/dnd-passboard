'use client'

import { Flex } from '@/shared/components/Flex'
import { type UserStatus } from '../../../types/status'
import Image from 'next/image'
import { type ReactNode } from 'react'
import * as styles from '../style.css'
import { useStatusContainerContext } from '../../../context'

type Content = {
  imageUrl: string
  title: string
  description: ReactNode
}

const resultContentMap: Record<UserStatus, Content> = {
  NONE: {
    imageUrl: '',
    title: '',
    description: ''
  },
  PASSED: {
    imageUrl: '/assets/images/passboard/result-accepted.png',
    title: '합격',
    description: (
      <>
        축하드립니다.
        <br />
        앞으로 잘 부탁드려요.
      </>
    )
  },
  FAILED: {
    imageUrl: '/assets/images/passboard/result-failed.png',
    title: '불합격',
    description: (
      <>
        지원해주셔서 진심으로 감사합니다.
        <br />
        이번엔 함께하지 못했지만, 다음 기회에 뵙기를 바랍니다.
      </>
    )
  },
  WAITLISTED: {
    imageUrl: '/assets/images/passboard/result-waitlist.png',
    title: '예비 합격',
    description: (
      <>
        잠시만요!
        <br />
        예비후보자로 등록되었어요.
      </>
    )
  }
}

export const ResultCard = () => {
  const { status, eventName } = useStatusContainerContext('ResultCard')

  if (status == null) {
    return null
  }

  const content = resultContentMap[status.status]

  return (
    <Flex
      align='center'
      direction='column'
      gap={20}
      asChild>
      <div>
        <Image
          className={styles.cardImage}
          src={content.imageUrl}
          alt={content.title}
          width={292}
          height={292}
        />
        <Flex
          align='center'
          direction='column'
          gap={4}>
          <p className={styles.cardinalNumber}>{eventName} 지원 결과</p>
          <h3 className={styles.cardName}>{status.name}</h3>
          <h4 className={styles.cardTitle}>{content.title}</h4>
        </Flex>
        <Flex
          align='center'
          direction='column'>
          <p className={styles.cardDescription}>{content.description}</p>
          <p className={styles.cardDescription}>
            자세한 사항은 지원하신 <strong>이메일</strong>로 안내드렸어요.
          </p>
        </Flex>
      </div>
    </Flex>
  )
}
