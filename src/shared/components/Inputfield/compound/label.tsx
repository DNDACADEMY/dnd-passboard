import { type ReactNode } from 'react'
import * as styles from '../style.css'

export type LabelProps = {
  children: ReactNode
  required?: boolean
}

export const Label = ({ children, required = false }: LabelProps) => {
  return (
    <div className={styles.labelStyle}>
      {children}
      {required && <span className={styles.requiredStyle}>*</span>}
    </div>
  )
}
