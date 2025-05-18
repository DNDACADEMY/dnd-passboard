import { PassboardContainer } from '@/features/passboard'
import { checkEvent } from '@/features/passboard/apis/checkEvent'

export default async function Page() {
  const { eventName, eventEndDate } = await checkEvent()

  return (
    <PassboardContainer
      recruitingEndDate={eventEndDate}
      eventName={eventName}
    />
  )
}
