'use client'

import {
  checkUserStatus,
  type ReqCheckUserStatusSchema,
  type ResCheckUserStatus
} from '../apis/checkUserStatus'
import { useMutation } from '@tanstack/react-query'
import { type UseMutationCustomOptions } from '@/shared/types/common'

type UseCheckUserStatusOptions = UseMutationCustomOptions<
  ResCheckUserStatus | null,
  { eventName: string; req: ReqCheckUserStatusSchema }
>

export const useCheckUserStatus = (mutationOptions?: UseCheckUserStatusOptions) => {
  return useMutation({
    mutationFn: ({ eventName, req }) => checkUserStatus(eventName, req),
    ...mutationOptions
  })
}
