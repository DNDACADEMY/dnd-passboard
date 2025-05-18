'use client'

import * as styles from './style.css'
import { StatusForm } from './components/StatusForm'
import { ResultCard } from './components/RerultCard'
import './subset-font.css'
import { If } from '@/shared/components/If'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useCheckUserStatus } from '../../hooks/useCheckUserStatus'
const firecracker = '/assets/lottie/firecracker.lottie'

export const StatusContainer = () => {
  const { data: userStatus } = useCheckUserStatus()
  const { status, name } = userStatus ?? {}

  if (status == null || name == null) return null

  return (
    <>
      <If condition={userStatus?.status === 'WAITLISTED' || userStatus?.status === 'PASSED'}>
        <DotLottieReact
          src={firecracker}
          autoplay
          style={{
            width: '100vw',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1000
          }}
        />
      </If>
      <div className={styles.container}>
        <StatusForm
          isClosed={userStatus !== null}
          key='form'
        />
        <If condition={userStatus !== null}>
          <ResultCard
            key='result'
            status={status}
            name={name}
          />
        </If>
      </div>
    </>
  )
}
