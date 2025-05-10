import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  colors: {
    primary: '#00d3f2',
    secondary: '#9660ff',
    tertiary: '#ff6b61',
    bgprimary: '#eff1f4',
    bgsecondary: '#13161c',
    warning: '#ffb23e',
    warningDark: '#2b261f',
    success: '#67d330',
    successDark: '#1b291e',
    error: '#ff7878',
    errorDark: '#2b2025',
    info: '#00d3f2',
    infoDark: '#112931',
    white: '#fff'
  },
  fontSize: {
    h1: '56px',
    h2: '48px',
    h2LetterSpacing: '-0.48px',
    h3: '44px',
    h3LetterSpacing: '-0.44px',
    h4: '32px',
    h5: '24px',
    h6: '20px',
    body1: '16px',
    body2: '14px',
    caption1: '12px',
    caption2: '10px'
  },
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
    bold: '700',
    extrabold: '800'
  }
})

export type Colors = typeof vars.colors
export type FontFamily = typeof vars.fontFamily
export type FontSize = typeof vars.fontSize
