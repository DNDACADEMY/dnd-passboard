import { forwardRef, useId, useState, type ComponentProps } from 'react'
import { textfieldStyle } from './style.css'
import { type TextfieldSize } from './type'

export type TextfieldProps = {
  defaultValue?: string
  disabled?: boolean
  error?: boolean
  size?: TextfieldSize
} & Omit<ComponentProps<'input'>, 'size'>

export const Textfield = forwardRef<HTMLInputElement, TextfieldProps>(
  ({ defaultValue, disabled = false, error = false, size = 'medium', ...restProps }, ref) => {
    const id = useId()
    const [value, setValue] = useState(defaultValue)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    }

    return (
      <input
        id={id}
        type='text'
        value={value}
        disabled={disabled}
        ref={ref}
        onChange={handleChange}
        {...restProps}
        className={textfieldStyle({ size, error })}
      />
    )
  }
)

Textfield.displayName = 'Textfield'
