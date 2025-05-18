import { vars } from '@/shared/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  minHeight: '100vh',
  padding: '90px 0'
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

export const tryAgainTextButtonBox = style({
  position: 'relative',
  zIndex: 1001,
  marginTop: '24px',
  display: 'flex',
  justifyContent: 'center'
})
