'use client'

import { createCtxProvider } from '@/shared/components/createContextProvider'
import type { UserStatus } from '../../types/status'

type StatusContainerContextValue = {
  status: UserStatus | null
  setStatus: (status: UserStatus) => void
  name: string
  setName: (name: string) => void
}

const [StatusContainerContextProvider, useStatusContainerContext] =
  createCtxProvider<StatusContainerContextValue>('StatusContainer', {
    status: null,
    setStatus: () => {},
    name: '',
    setName: () => {}
  })

export { StatusContainerContextProvider, useStatusContainerContext }
