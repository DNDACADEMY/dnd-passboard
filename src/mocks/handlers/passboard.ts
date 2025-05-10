import { http, HttpResponse } from 'msw'
import { MOCK_SERVER_URL } from '@/shared/constants'

export const passboardHandlers = [
  http.get(`${MOCK_SERVER_URL}/status`, () => {
    return HttpResponse.json({ status: 'recruiting' })
  }),
  http.post(`${MOCK_SERVER_URL}/status`, () => {
    return HttpResponse.json({ status: 'recruiting' })
  })
]
