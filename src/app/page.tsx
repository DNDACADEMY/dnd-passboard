import { PassboardContainer } from '@/features/passboard'
import { checkEvent } from '@/features/passboard/apis/checkEvent'
import { QueryProvider } from '@/shared/providers/QureyClient'
import { OverlayProvider } from '@/shared/providers/Overlay'
import { type Metadata } from 'next'
import { defaultMetadata } from '@/shared/constants/defaultMetadata'

export const metadata: Metadata = defaultMetadata

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
