'use client'

import { container } from './style.css'
import { Flex } from '@/shared/components/Flex'
import { SplashCard } from './components/spash-card'
import Link from 'next/link'
import Image from 'next/image'
import * as styles from './style.css'
import { SwitchCase } from '@/shared/components/SwichCase'
import { StatusContainer } from './components/status-container'
import { If } from '@/shared/components/If'
import { RightArrow } from '@/shared/libs/assets/icon'
import { TextButton } from '@/shared/components/TextButton'
import { useCheckUserStatus } from './hooks/useCheckUserStatus'

type Props = {
  recruitingEndDate: string | Date
}

const DND_ACTIVE_PATH = 'https://dnd.ac/'

export function PassboardContainer({ recruitingEndDate }: Props) {
  const { data: userStatus, reset } = useCheckUserStatus()

  const handleTryAgain = () => {
    reset()
  }

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

      <SwitchCase
        value={userStatus === null}
        cases={{
          true: <SplashCard recruitingEndDate={recruitingEndDate} />,
          false: <StatusContainer />
        }}
        defaultComponent={null}
      />
      <If condition={userStatus !== null}>
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
