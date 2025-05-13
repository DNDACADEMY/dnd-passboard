import { fetchWrapper } from '@/shared/utils/fetchWrapper'
import { z } from 'zod'
import type { UserStatus } from '../types/status'

export const joinMyApplyStatusSchema = z.object({
  name: z.string().nonempty('이름을 입력해주세요.'),
  email: z.string().nonempty('이메일을 입력해주세요.').email('이메일 형식이 올바르지 않습니다.')
})

export type ReqMyApplyStatusSchema = z.infer<typeof joinMyApplyStatusSchema>

export type ResqMyApplyStatus = {
  name: string
  email: string
  status: UserStatus
}

export const joinMyApplyStatus = async (
  req: ReqMyApplyStatusSchema
): Promise<ResqMyApplyStatus> => {
  const res = await fetchWrapper<ResqMyApplyStatus>(`/status?name=${req.name}&email=${req.email}`, {
    method: 'GET'
  })
  return res
}
