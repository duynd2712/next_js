export type VariantTypographyType =
  | 'h1' //100
  | 'h2' //32
  | 'h3' //24
  | 'h4' //18
  | 'h5' //16
  | 'h6' //32
  | 'body1' //16
  | 'body2' //14
  | 'subtitle1' //16
  | 'subtitle2'
  | 'button'
  | 'caption'
  | 'overline' //12
  | '35' //35
  | '30' //30
  | '20'; //20

export type AlignTypographyType =
  | 'center'
  | 'inherit'
  | 'justify'
  | 'left'
  | 'right';

export type ColorType =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
  | string;

export type VariantButtonType = 'contained' | 'outlined' | 'text' | string;
export type SizeType = 'small' | 'medium' | 'large';
export type BreakpointType =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | false
  | string;
