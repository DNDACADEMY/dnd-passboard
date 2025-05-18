'use client'

import {
  checkUserStatus,
  type ReqCheckUserStatusSchema,
  type ResqMyApplyStatus
} from '../apis/checkUserStatus'
import { useMutation } from '@tanstack/react-query'

export const useCheckUserStatus = () => {
  return useMutation<ResqMyApplyStatus | null, Error, ReqCheckUserStatusSchema>({
    mutationFn: checkUserStatus
  })
}
