import { Flex } from '@/shared/components/Flex'
import { type UserStatus } from '../../../types/status'
import Image from 'next/image'
import { type ReactNode } from 'react'
import { CARDINAL_NUMBER } from '@/shared/constants'
import * as styles from '../style.css'
import { motion } from 'framer-motion'

type ResultCardProps = {
  status: UserStatus
  name: string
}

type Content = {
  imageUrl: string
  title: string
  description: ReactNode
}

const resultContentMap: Record<UserStatus, Content> = {
  accepted: {
    imageUrl: '/assets/images/passboard/result-accepted.png',
    title: '합격',
    description: `축하드립니다.
    앞으로 잘 부탁드려요.`
  },
  rejected: {
    imageUrl: '/assets/images/passboard/result-failed.png',
    title: '불합격',
    description: `합격하지 못해 아쉽지만,
    진심으로 응원할게요.`
  },
  waitlisted: {
    imageUrl: '/assets/images/passboard/result-waitlist.png',
    title: '예비 합격',
    description: `잠시만요!
    예비후보자로 등록되었어요.`
  }
}

export const ResultCard = ({ status, name }: ResultCardProps) => {
  const content = resultContentMap[status]

  return (
    <Flex
      align='center'
      direction='column'
      gap={20}
      asChild>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
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
          <p className={styles.cardinalNumber}>{CARDINAL_NUMBER}기 지원 결과</p>
          <h3 className={styles.cardName}>{name}</h3>
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
      </motion.div>
    </Flex>
  )
}
