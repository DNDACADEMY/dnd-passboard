'use client'

import { container } from './style.css'
import { Flex } from '@/shared/components/Flex'
import { RecruitingPeriodCard } from './components/recruting-period-card'
import Link from 'next/link'
import Image from 'next/image'
import * as styles from './style.css'
import { SwitchCase } from '@/shared/components/SwichCase'
import { StatusContainer } from './components/status-container'
import { ResetButton } from './components/reset-button'
import dayjs from 'dayjs'
import { StatusContainerContextProvider } from './context'
import { type ResCheckUserStatus } from './apis/checkUserStatus'
import { useState } from 'react'

type Props = {
  recruitingEndDate: string | Date
  eventName: string
}

const DND_ACTIVE_PATH = 'https://dnd.ac/'

export function PassboardContainer({ recruitingEndDate, eventName }: Props) {
  // NOTE: 모집 기간이 아닐 경우 모집 기간중에 보여줄 카드를 보여줌
  const isRecruitingPeriod = dayjs(recruitingEndDate).isBefore(dayjs())

  const [status, setStatus] = useState<ResCheckUserStatus | null>(null)

  return (
    <StatusContainerContextProvider
      status={status}
      setStatus={setStatus}>
      <Flex
        as='section'
        direction='column'
        align='center'
        justify='center'
        className={container}
        gap={24}>
        <Flex
          direction='column'
          align='center'
          gap={8}>
          <Link href={DND_ACTIVE_PATH}>
            <Image
              src={'/assets/logos/dnd.png'}
              alt='logo'
              width={32}
              height={36}
            />
          </Link>
          <div className={styles.titleBox}>
            <h4 className={styles.title}>결과 조회</h4>
          </div>
        </Flex>
        <SwitchCase
          value={isRecruitingPeriod}
          cases={{
            true: <StatusContainer eventName={eventName} />,
            false: <RecruitingPeriodCard recruitingEndDate={recruitingEndDate} />
          }}
        />
        <ResetButton />
      </Flex>
    </StatusContainerContextProvider>
  )
}
