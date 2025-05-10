import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  colors: {},
  padding: {},
  space: {},
  borderRadius: {},
  fontSize: {},
  lineHeight: {},
  width: {},
  height: {},
  zIndex: {},
  fontFamily: {
    default:
      "Pretendard, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700'
  }
})

export type Colors = typeof vars.colors
export type Padding = typeof vars.padding
export type Space = typeof vars.space
export type BorderRadius = typeof vars.borderRadius
export type FontFamily = typeof vars.fontFamily
export type FontSize = typeof vars.fontSize
