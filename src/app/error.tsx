'use client'

import { ErrorContainer } from '@/features/error'
import { useRouter } from 'next/navigation'

export default function Error({ error }: { error: Error }) {
  const router = useRouter()

  return (
    <ErrorContainer
      error={error}
      reset={router.refresh}
    />
  )
}
