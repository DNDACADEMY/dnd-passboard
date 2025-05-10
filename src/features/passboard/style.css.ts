import { vars } from '@/shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  marginTop: '90px'
})

export const titleBox = style({
  height: '45px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const title = style({
  fontSize: vars.fontSize.h4,
  fontWeight: vars.fontWeight.bold,
  color: vars.colors.white
})
