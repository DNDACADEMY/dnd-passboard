'use client'

import { Inputfield } from '@/shared/components/Inputfield'
import { Button } from '@/shared/components/Button'
import { Flex } from '@/shared/components/Flex'
import { useForm } from 'react-hook-form'
import { checkUserStatusSchema } from '../../../apis/checkUserStatus'
import { zodResolver } from '@hookform/resolvers/zod'
import type { z } from 'zod'
import { useCheckUserStatus } from '../../../hooks/useCheckUserStatus'
import { useStatusContainerContext } from '../../../context'

export type StatusFormProps = {
  eventName: string
}

export const StatusForm = ({ eventName }: { eventName: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<z.infer<typeof checkUserStatusSchema>>({
    resolver: zodResolver(checkUserStatusSchema)
  })

  const { mutate: checkUserStatus, isPending: isChecking } = useCheckUserStatus()
  const { setStatus } = useStatusContainerContext('StatusForm')

  const onSubmit = handleSubmit(async (data) => {
    checkUserStatus(
      { eventName, req: data },
      {
        onSuccess: async (res) => {
          await setStatus(res)
        }
      }
    )
  })

  const isDisabled = !!errors.name?.message || !!errors.email?.message || isChecking
  return (
    <Flex
      direction='column'
      gap={32}
      asChild>
      <form onSubmit={onSubmit}>
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
          disabled={isDisabled}>
          결과 확인하기
        </Button>
      </form>
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
