import { fetchWrapper } from '@/shared/utils/fetchWrapper'

export type ResCheckEvent = {
  eventName: string
  eventId: string
  eventStartDate: string | Date
  eventEndDate: string | Date
}

export const checkEvent = async (): Promise<ResCheckEvent> => {
  const res = await fetchWrapper<ResCheckEvent>('/event', {
    method: 'GET'
  })
  return res
}
