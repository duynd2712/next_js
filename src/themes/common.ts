const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1200,
  xxl: 1440,
  xxxl: 1900
};

const color = {
  primary: '#1D1813',
  secondary: '#F7F6F5',
  success: '#2e7d32',
  info: '#0288d1',
  warning: '#ed6c02',
  yellow: '#FAED00',
  error: '#D11919',
  black: '#000000',
  white: '#ffffff',
  gray: {
    100: '#ADADAD',
    200: '#D8D8D8',
    300: '#F7F6F5',
    400: '#F6F6F5',
    500: '#2D2D2D'
  },
  text: {
    primary: '#33333',
    secondary: '#666666'
  }
};

const fontSize = {
  h1: '100px',
  h2: '32px',
  h3: '24px',
  h4: '18px',
  h5: '16px',
  h6: '12px',
  body1: '16px',
  body2: '14px',
  subtitle1: '16px',
  subtitle2: '14px',
  button: '16px',
  caption: '12px',
  overline: '12px',
  35: '35px',
  30: '30px',
  20: '20px',
  15: '15px',
  13: '13px',
  11: '11px',
  10: '10px'
};

const lineHeight = {
  h1: '140px',
  h2: '42px',
  h3: '48px',
  h4: '40px',
  h5: '32px',
  h6: '28px',
  default: '32px'
};

const fontWeight = {
  '900': 900,
  '800': 800,
  '700': 700,
  '600': 600,
  '500': 500,
  '400': 400,
  '300': 300,
  '200': 200,
  '100': 100
};

const spacing = [0, 4, 8, 16, 32, 48, 64, 128, 256, 512];

const borderRadius = {
  '5': '5px',
  '10': '10px',
  '15': '15px',
  '20': '20px',
  '25': '25px',
  '30': '30px'
};

const minHeight = {
  '42': '42px',
  '55': '55px',
  '60': '60px'
};

export const themes = {
  breakpoints,
  color,
  fontSize,
  lineHeight,
  fontWeight,
  spacing,
  borderRadius,
  minHeight
};

export type ThemeType = typeof themes;
