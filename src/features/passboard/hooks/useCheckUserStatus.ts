'use client'

import {
  checkUserStatus,
  type ReqCheckUserStatusSchema,
  type ResCheckUserStatus
} from '../apis/checkUserStatus'
import { useMutation } from '@tanstack/react-query'

export const useCheckUserStatus = () => {
  return useMutation<
    ResCheckUserStatus | null,
    Error,
    { eventName: string; req: ReqCheckUserStatusSchema }
  >({
    mutationFn: ({ eventName, req }) => checkUserStatus(eventName, req)
  })
}
