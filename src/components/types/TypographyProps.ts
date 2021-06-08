import type { ResponsiveValue } from '../../components/types/responsiveValue';
import type { TypographyProps as ssTypographyProps } from './theme';
import type { TextStyle } from 'react-native';

/**
 * Types for typography related CSS properties
 */
export interface TypographyProps<T> extends ssTypographyProps<T> {
  textTransform?: ResponsiveValue<
    Pick<TextStyle, 'textTransform'>['textTransform']
  >;

  textDecorationColor?: ResponsiveValue<
    Pick<TextStyle, 'textDecorationColor'>['textDecorationColor']
  >;

  textDecorationStyle?: ResponsiveValue<
    Pick<TextStyle, 'textDecorationStyle'>['textDecorationStyle']
  >;

  textDecorationLine?: ResponsiveValue<
    Pick<TextStyle, 'textDecorationLine'>['textDecorationLine'] | string
  >;
}
