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
import { useOverlay } from '@toss/use-overlay'
import { Alert } from '@/shared/components/Alert'

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
  const overlay = useOverlay()

  const openAlert = () => {
    return overlay.open(({ isOpen, close }) => (
      <NotFoundAlert
        isOpen={isOpen}
        close={close}
      />
    ))
  }

  const onSubmit = handleSubmit(async (data) => {
    checkUserStatus(
      { eventName, req: data },
      {
        onSuccess: async (res) => {
          if (res.status === 'NONE') {
            await openAlert()
          } else {
            setStatus(res)
          }
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

type NotFoundAlertProps = {
  isOpen: boolean
  close: () => void
}

const NotFoundAlert = ({ isOpen, close }: NotFoundAlertProps) => {
  return (
    <Alert
      isOpen={isOpen}
      onClose={close}>
      <Alert.Backdrop />
      <Alert.Content bottomAddon={<Alert.Button type='button'>닫기</Alert.Button>}>
        <Alert.Title>
          입력하신 정보를
          <br /> 찾을 수 없습니다.
        </Alert.Title>
        <Alert.Description>이름과 이메일을 다시 확인해주세요.</Alert.Description>
        <Alert.SubDescription>지속 된 문제 발생시 채널톡으로 문의주세요.</Alert.SubDescription>
      </Alert.Content>
    </Alert>
  )
}
