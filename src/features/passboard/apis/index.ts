import { fetchWrapper } from '@/shared/utils/fetchWrapper'
import { type ResqMyApplyStatus, type ResqPassboardStatus } from './type'

export const getPassboardStatus = async (): Promise<ResqPassboardStatus> => {
  const res = await fetchWrapper<ResqPassboardStatus>('/status')
  return res
}

export const getMyApplyStatus = async (): Promise<ResqMyApplyStatus> => {
  const res = await fetchWrapper<ResqMyApplyStatus>('/status', {
    method: 'POST',
    body: JSON.stringify({
      email: 'test@test.com',
      password: 'test'
    })
  })
  return res
}
