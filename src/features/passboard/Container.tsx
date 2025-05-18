'use client'

import { container } from './style.css'
import { Flex } from '@/shared/components/Flex'
import { RecruitingPeriodCard } from './components/recruting-period-card'
import Link from 'next/link'
import Image from 'next/image'
import * as styles from './style.css'
import { SwitchCase } from '@/shared/components/SwichCase'
import { StatusContainer } from './components/status-container'
import { If } from '@/shared/components/If'
import { RightArrow } from '@/shared/libs/assets/icon'
import { TextButton } from '@/shared/components/TextButton'
import { useCheckUserStatus } from './hooks/useCheckUserStatus'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

type Props = {
  recruitingEndDate: string | Date
  eventName: string
}

const DND_ACTIVE_PATH = 'https://dnd.ac/'

const firecracker = '/assets/lottie/firecracker.lottie'

export function PassboardContainer({ recruitingEndDate, eventName }: Props) {
  const { data: userStatus, reset } = useCheckUserStatus()

  const handleTryAgain = () => {
    reset()
  }

  const showFirecracker = userStatus?.status === 'WAITLISTED' || userStatus?.status === 'PASSED'
  // NOTE: 모집 기간이 아닐 경우 모집 기간중에 보여줄 카드를 보여줌
  const isRecruitingPeriod = recruitingEndDate > new Date()

  return (
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
      <If condition={showFirecracker}>
        <DotLottieReact
          src={firecracker}
          autoplay
          style={{ width: '100vw', position: 'fixed', top: 0, left: 0, zIndex: 1000 }}
        />
      </If>
      <SwitchCase
        value={isRecruitingPeriod}
        cases={{
          true: <StatusContainer eventName={eventName} />,
          false: <RecruitingPeriodCard recruitingEndDate={recruitingEndDate} />
        }}
        defaultComponent={null}
      />
      <If condition={userStatus != null}>
        <div className={styles.tryAgainTextButtonBox}>
          <TextButton
            onClick={handleTryAgain}
            rightAddon={<RightArrow />}>
            다시 시도하기
          </TextButton>
        </div>
      </If>
    </Flex>
  )
}
