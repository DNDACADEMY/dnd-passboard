import { fetchWrapper } from '@/shared/utils/fetchWrapper'
import { z } from 'zod'
import type { UserStatus } from '../types/status'

export const checkUserStatusSchema = z.object({
  name: z.string().nonempty('이름을 입력해주세요.'),
  email: z.string().nonempty('이메일을 입력해주세요.').email('이메일 형식이 올바르지 않습니다.')
})

export type ReqCheckUserStatusSchema = z.infer<typeof checkUserStatusSchema>

export type ResCheckUserStatus = {
  eventName: string
  name: string
  status: UserStatus
}

export const checkUserStatus = async (
  eventName: string,
  req: ReqCheckUserStatusSchema
): Promise<ResCheckUserStatus> => {
  const res = await fetchWrapper<ResCheckUserStatus>(`/event/${eventName}/status/check`, {
    method: 'POST',
    body: JSON.stringify(req)
  })
  return res
}
