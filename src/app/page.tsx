import { PassboardContainer } from '@/features/passboard'
import { checkEvent } from '@/features/passboard/apis/checkEvent'
import { QueryProvider } from '@/shared/providers/QureyClient'
import { OverlayProvider } from '@/shared/providers/Overlay'
export default async function Page() {
  const { eventName, eventEndDate } = await checkEvent()

  return (
    <OverlayProvider>
      <QueryProvider>
        <PassboardContainer
          recruitingEndDate={eventEndDate}
          eventName={eventName}
        />
      </QueryProvider>
    </OverlayProvider>
  )
}
