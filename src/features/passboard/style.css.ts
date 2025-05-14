import { vars } from '@/shared/styles/theme.css'
import { style } from '@vanilla-extract/css'
import { mediaQuery } from '@/shared/constants/mediaQuery'
export const container = style({
  marginTop: '90px',
  width: '100%',

  '@media': {
    [mediaQuery.desktop]: {
      marginTop: '0px',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -60%)'
    }
  }
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
