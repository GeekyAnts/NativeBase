import borders from './borders';
import breakpoints from './breakpoints';
import colors from './colors';
import radii from './radius';
import shadows from './shadows';
import sizes from './sizes';
import { spacing } from './space';
import typography from './typography';

const theme = {
  borders,
  breakpoints,
  colors,
  radii,
  ...typography,
  sizes,
  space: spacing,
  shadows,
};

export type ITheme = typeof theme;

export const themePropertyMap: any = {
  borderRadius: 'radii',
  color: 'colors',
  letterSpacing: 'letterSpacings',
  lineHeight: 'lineHeights',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  size: 'sizes',
  space: 'space',
  border: 'borders',
  shadow: 'shadows',
};

export default theme;
