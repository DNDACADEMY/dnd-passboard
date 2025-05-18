import { http, HttpResponse } from 'msw'
import { MOCK_SERVER_URL } from '@/shared/constants'
import { type ResCheckEvent } from '@/features/passboard/apis/checkEvent'
import { type ResCheckUserStatus } from '@/features/passboard/apis/checkUserStatus'

export const passboardHandlers = [
  http.get(`${MOCK_SERVER_URL}/event`, () => {
    const eventStartDate = '2025-05-14'
    const eventEndDate = '2025-05-14'

    const data: Omit<ResCheckEvent, 'eventStartDate' | 'eventEndDate'>[] = [
      {
        eventName: 'DND 13기 모집',
        eventId: '1234567890'
      },
      {
        eventName: 'DND 해커톤 모집',
        eventId: '1234567890'
      }
    ]
    return HttpResponse.json({
      ...data[Math.floor(Math.random() * data.length)],
      eventStartDate,
      eventEndDate
    })
  }),
  http.post(`${MOCK_SERVER_URL}/event/:eventName/status/check`, ({ params }) => {
    const { eventName } = params

    const status = 'NONE'

    const data: Omit<ResCheckUserStatus, 'eventName' | 'status'>[] = [
      {
        name: 'John Doe'
      },
      {
        name: 'Jane Doe'
      }
    ]
    return HttpResponse.json({
      eventName,
      status,
      ...data[Math.floor(Math.random() * data.length)]
    })
  })
]
