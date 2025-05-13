'use client'

import { container } from './style.css'
import { Flex } from '@/shared/components/Flex'
import { SplashCard } from './components/spash-card'
import { useTimedVisibility } from '@/shared/hooks/useTimedVisibility'
import Link from 'next/link'
import Image from 'next/image'
import * as styles from './style.css'
import { SwitchCase } from '@/shared/components/SwichCase'
import { StatusContainer } from './components/status-container/StatusContainer'

type Props = {
  recruitingEndDate: string | Date
}

const DND_ACTIVE_PATH = 'https://dnd.ac/'

export function PassboardContainer({ recruitingEndDate }: Props) {
  const { isVisible: isSplashCardVisible, isClosing: isSplashCardClosing } = useTimedVisibility()

  return (
    <Flex
      direction='column'
      align='center'
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
  )
}
