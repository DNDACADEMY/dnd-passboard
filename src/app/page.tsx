import { getPassboardStatus } from '@/features/passboard/apis'
import { PassboardContainer } from '@/features/passboard'

export default async function Page() {
  const { recruitingEndDate } = await getPassboardStatus()

  return <PassboardContainer recruitingEndDate={recruitingEndDate} />
}
