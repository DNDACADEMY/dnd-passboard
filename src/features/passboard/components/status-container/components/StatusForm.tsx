'use client'

import { Inputfield } from '@/shared/components/Inputfield'
import { Button } from '@/shared/components/Button'
import { Flex } from '@/shared/components/Flex'
import { useForm } from 'react-hook-form'
import { joinMyApplyStatus, joinMyApplyStatusSchema } from '../../../apis/joinMyStatus'
import { zodResolver } from '@hookform/resolvers/zod'
import type { z } from 'zod'
import { useTransition, useState } from 'react'
import { useStatusContainerContext } from '../context'
import { motion } from 'framer-motion'

export const StatusForm = ({ isClosed }: { isClosed: boolean }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<z.infer<typeof joinMyApplyStatusSchema>>({
    resolver: zodResolver(joinMyApplyStatusSchema)
  })

  const [isPending, startTransition] = useTransition()
  const { setStatus, setName } = useStatusContainerContext('StatusForm')
  const [isUnmounted, setIsUnmounted] = useState(false)

  const onSubmit = handleSubmit(async (data) => {
    startTransition(async () => {
      const res = await joinMyApplyStatus(data)
      setName(data.name)
      setStatus(res.status)
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
        initial={{ opacity: 0, height: 0, y: 100, marginBottom: 0, marginTop: 0 }}
        animate={
          isClosed
            ? { opacity: 0, y: -120, height: 0, marginBottom: 0, marginTop: 0 }
            : { opacity: 1, y: 0, height: 'auto', marginBottom: 32, marginTop: 0 }
        }
        exit={{ opacity: 0, y: -120, height: 0, marginBottom: 0, marginTop: 0 }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        onAnimationComplete={() => {
          if (isClosed) setIsUnmounted(true)
        }}>
        <Inputfield
          placeholder='이름을 입력해주세요.'
          topAddon={<Inputfield.Label required>이름</Inputfield.Label>}
          {...register('name')}
          bottomAddon={
            errors.name ? (
              <Inputfield.BottomText state='error'>{errors.name?.message}</Inputfield.BottomText>
            ) : undefined
          }
          error={!!errors.name?.message}
        />
        <Inputfield
          placeholder='이메일을 입력해주세요.'
          topAddon={<Inputfield.Label required>이메일</Inputfield.Label>}
          {...register('email')}
          bottomAddon={
            errors.email ? (
              <Inputfield.BottomText state='error'>{errors.email?.message}</Inputfield.BottomText>
            ) : undefined
          }
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
