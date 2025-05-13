import { vars } from '@/shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  width: '340px',
  padding: vars.spacing['150'],
  borderRadius: vars.spacing['050'],
  backgroundColor: vars.colors.white
})
