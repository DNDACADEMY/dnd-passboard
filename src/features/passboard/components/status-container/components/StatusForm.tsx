'use client'

import { Inputfield } from '@/shared/components/Inputfield'
import { Button } from '@/shared/components/Button'
import { Flex } from '@/shared/components/Flex'
import { useForm } from 'react-hook-form'
import { checkUserStatusSchema } from '../../../apis/checkUserStatus'
import { zodResolver } from '@hookform/resolvers/zod'
import type { z } from 'zod'
import { useTransition, useState } from 'react'
import { motion } from 'framer-motion'
import { useCheckUserStatus } from '../../../hooks/useCheckUserStatus'

export const StatusForm = ({ eventName, isClosed }: { eventName: string; isClosed: boolean }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<z.infer<typeof checkUserStatusSchema>>({
    resolver: zodResolver(checkUserStatusSchema)
  })

  const [isPending, startTransition] = useTransition()
  const { mutate: checkUserStatus } = useCheckUserStatus()
  const [isUnmounted, setIsUnmounted] = useState(false)

  const onSubmit = handleSubmit(async (data) => {
    startTransition(async () => {
      checkUserStatus({ eventName, req: data })
    })
  })

  if (isUnmounted) return null

  return (
    <Flex
      direction='column'
      gap={32}
      asChild>
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, height: 0, y: 100 }}
        animate={
          isClosed ? { opacity: 0, y: -120, height: 0 } : { opacity: 1, y: 0, height: 'auto' }
        }
        exit={{ opacity: 0, y: -120, height: 0 }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        onAnimationComplete={() => {
          if (isClosed) setIsUnmounted(true)
        }}>
        <StatusField
          label='이름'
          placeholder='이름을 입력해주세요.'
          error={errors.name?.message}
          {...register('name')}
        />
        <StatusField
          label='이메일'
          placeholder='이메일을 입력해주세요.'
          error={errors.email?.message}
          {...register('email')}
        />
        <Button
          size='xlarge'
          type='submit'
          disabled={!!errors.name?.message || !!errors.email?.message || isPending}>
          결과 확인하기
        </Button>
      </motion.form>
    </Flex>
  )
}

type StatusFieldProps = {
  label: string
  placeholder: string
  error?: string
}

const StatusField = (props: StatusFieldProps) => {
  const { label, placeholder, error, ...restProps } = props
  return (
    <Inputfield
      placeholder={placeholder}
      topAddon={<Inputfield.Label required>{label}</Inputfield.Label>}
      bottomAddon={error && <Inputfield.BottomText state='error'>{error}</Inputfield.BottomText>}
      {...restProps}
    />
  )
}
