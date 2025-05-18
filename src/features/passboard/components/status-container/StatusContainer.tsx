'use client'

import * as styles from './style.css'
import { StatusForm } from './components/StatusForm'
import { ResultCard } from './components/RerultCard'
import './subset-font.css'
import { If } from '@/shared/components/If'
import { useCheckUserStatus } from '../../hooks/useCheckUserStatus'

type StatusContainerProps = {
  eventName: string
}

export const StatusContainer = ({ eventName }: StatusContainerProps) => {
  const { data: userStatus } = useCheckUserStatus()
  const { status, name } = userStatus ?? {}

  if (status == null || name == null) return null

  return (
    <div className={styles.container}>
      <StatusForm
        eventName={eventName}
        isClosed={userStatus != null}
        key='form'
      />
      <If condition={userStatus != null}>
        <ResultCard
          key='result'
          status={status}
          name={name}
        />
      </If>
    </div>
  )
}
