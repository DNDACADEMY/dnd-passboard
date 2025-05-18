'use client'

import Image from 'next/image'
import { getCardContentIndex, getRecruitingEndDate } from './utils'
import { recruitingCardContent } from './utils'
import { type RecruitingCardType } from './type'
import * as styles from './style.css'
import { useState, useEffect } from 'react'
import { Flex } from '@/shared/components/Flex'
import { motion } from 'framer-motion'

export type SplashCardProps = {
  /**
   * @description 모집 종료일
   */
  recruitingEndDate: string | Date
  number?: RecruitingCardType
}

export const SplashCard = ({ recruitingEndDate, number: numberFromProps }: SplashCardProps) => {
  const [number, setNumber] = useState<RecruitingCardType | undefined>(numberFromProps)

  useEffect(() => {
    if (numberFromProps === undefined) {
      setNumber(getCardContentIndex())
    }
  }, [numberFromProps])

  if (number == null) return null

  return (
    <motion.div className={styles.container}>
      <Image
        src={`/assets/images/passboard/recruiting-card-${number}.png`}
        alt='recruiting card'
        width={340}
        height={292}
        style={{ objectFit: 'contain' }}
      />
      <Flex
        justify='center'
        direction='column'
        align='center'
        gap={12}
        className={styles.content}>
        <div className={styles.date}>{`발표 D-${getRecruitingEndDate(recruitingEndDate)}`}</div>
        <div className={styles.description}>{recruitingCardContent[number]}</div>
      </Flex>
    </motion.div>
  )
}
