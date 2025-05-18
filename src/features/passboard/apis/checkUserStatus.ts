import { fetchWrapper } from '@/shared/utils/fetchWrapper'
import { z } from 'zod'
import type { UserStatus } from '../types/status'

export const checkUserStatusSchema = z.object({
  name: z.string().nonempty('이름을 입력해주세요.'),
  email: z.string().nonempty('이메일을 입력해주세요.').email('이메일 형식이 올바르지 않습니다.')
})

export type ReqCheckUserStatusSchema = z.infer<typeof checkUserStatusSchema>

export type ResqMyApplyStatus = {
  name: string
  status: UserStatus
}

export const checkUserStatus = async (
  req: ReqCheckUserStatusSchema
): Promise<ResqMyApplyStatus> => {
  const res = await fetchWrapper<ResqMyApplyStatus>(`/status?name=${req.name}&email=${req.email}`, {
    method: 'POST'
  })
  return res
}
