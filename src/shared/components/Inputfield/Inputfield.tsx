import { type ComponentProps, forwardRef, type ReactNode } from 'react'
import { Textfield } from '../Textfield'
import { Flex } from '../Flex'
import { BottomText, Label } from './compound'

export type InputfieldProps = {
  topAddon?: ReactNode
  bottomAddon?: ReactNode
} & ComponentProps<typeof Textfield>

const InputfieldComponent = forwardRef<HTMLInputElement, InputfieldProps>(
  ({ placeholder, value, topAddon, bottomAddon, ...restProps }, ref) => {
    return (
      <Flex
        direction='column'
        gap={4}>
        {topAddon}
        <Textfield
          size='large'
          placeholder={placeholder}
          value={value}
          ref={ref}
          {...restProps}
        />
        {bottomAddon}
      </Flex>
    )
  }
)

InputfieldComponent.displayName = 'Inputfield'

export const Inputfield = Object.assign(InputfieldComponent, {
  Label: Label,
  BottomText: BottomText
})
