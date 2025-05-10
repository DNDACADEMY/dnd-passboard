import { http, HttpResponse } from 'msw'
import { MOCK_SERVER_URL } from '@/shared/constants'
import { type ResqPassboardStatus, type ResqMyApplyStatus } from '@/features/passboard/apis/type'

export const passboardHandlers = [
  http.get(`${MOCK_SERVER_URL}/status`, () => {
    const data: ResqPassboardStatus = {
      recruitingEndDate: new Date(Date.now() + Math.random() * 1000 * 60 * 60 * 24 * 30)
    }
    return HttpResponse.json(data)
  }),
  http.post(`${MOCK_SERVER_URL}/status`, () => {
    const data: ResqMyApplyStatus = {
      status: 'recruiting'
    }
    return HttpResponse.json(data)
  })
]
