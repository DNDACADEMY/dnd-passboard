'use client'

import { container } from './style.css'
import { Flex } from '@/shared/components/Flex'
import { SplashCard } from './components/spash-card'
import { useTimedVisibility } from '@/shared/hooks/useTimedVisibility'
import Link from 'next/link'
import Image from 'next/image'
import * as styles from './style.css'
import { SwitchCase } from '@/shared/components/SwichCase'
import { StatusContainer } from './components/status-container'
import { type UserStatus } from './types/status'
import { useState } from 'react'
import { StatusContainerContextProvider } from './components/status-container/context'
import { If } from '@/shared/components/If'
import { RightArrow } from '@/shared/libs/assets/icon'
import { TextButton } from '@/shared/components/TextButton'
type Props = {
  recruitingEndDate: string | Date
}

const DND_ACTIVE_PATH = 'https://dnd.ac/'

export function PassboardContainer({ recruitingEndDate }: Props) {
  const { isVisible: isSplashCardVisible, isClosing: isSplashCardClosing } = useTimedVisibility()
  const [status, setStatus] = useState<UserStatus | null>(null)
  const [name, setName] = useState<string>('')

  const handleTryAgain = () => {
    setStatus(null)
  }

  return (
    <StatusContainerContextProvider
      status={status}
      setStatus={setStatus}
      name={name}
      setName={setName}>
      <Flex
        direction='column'
        align='center'
        justify='center'
        gap={24}
        asChild>
        <section className={container}>
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
            value={isSplashCardVisible}
            cases={{
              true: (
                <SplashCard
                  isClosing={isSplashCardClosing}
                  recruitingEndDate={recruitingEndDate}
                />
              ),
              false: <StatusContainer />
            }}
            defaultComponent={null}
          />
        </section>
      </Flex>
      <If condition={status !== null}>
        <div className={styles.tryAgainTextButtonBox}>
          <TextButton
            onClick={handleTryAgain}
            rightAddon={<RightArrow />}>
            다시 시도하기
          </TextButton>
        </div>
      </If>
    </StatusContainerContextProvider>
  )
}
