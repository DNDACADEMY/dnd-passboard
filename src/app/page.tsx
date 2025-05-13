import { PassboardContainer } from '@/features/passboard'

export default async function Page() {
  const recruitingEndDate = new Date('2025-05-14')

  return <PassboardContainer recruitingEndDate={recruitingEndDate} />
}
