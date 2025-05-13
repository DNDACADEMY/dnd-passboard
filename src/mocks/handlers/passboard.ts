import { http, HttpResponse } from 'msw'
import { MOCK_SERVER_URL } from '@/shared/constants'
import { type ResqMyApplyStatus } from '@/features/passboard/apis/joinMyStatus'

export const passboardHandlers = [
  http.get(`${MOCK_SERVER_URL}/status`, () => {
    const data: ResqMyApplyStatus[] = [
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        status: 'accepted'
      },
      {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        status: 'rejected'
      },
      {
        name: 'Jim Doe',
        email: 'jim.doe@example.com',
        status: 'waitlisted'
      }
    ]
    return HttpResponse.json(data[Math.floor(Math.random() * data.length)])
  })
]
