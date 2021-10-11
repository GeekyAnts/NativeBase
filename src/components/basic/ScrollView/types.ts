import type { ScrollViewProps } from 'react-native';
import type { StyledProps } from '../../../theme/types';
import type { PlatformProps } from '../../types';

export interface IScrollViewProps
  extends ScrollViewProps,
    StyledProps,
    PlatformProps<IScrollViewProps> {
  /**
   * Renders components as Box children. Accepts a JSX.Element or an array of JSX.Element. */
  children?: JSX.Element | JSX.Element[] | string | any;
  /**
   * pass props to contentContainerStyle, and this also resolved NB tokens.
   */
  _contentContainerStyle?: IScrollViewProps;
}
