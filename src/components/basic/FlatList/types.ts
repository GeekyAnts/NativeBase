import type { StyledProps } from '../../../theme/types';
import type { FlatListProps } from 'react-native';
import type { PlatformProps } from '../../types';

export interface IFlatListProps<ItemT>
  extends FlatListProps<ItemT>,
    StyledProps,
    PlatformProps<IFlatListProps<ItemT>> {
  /**
   * pass props to contentContainerStyle, and this also resolved NB tokens.
   */
  _contentContainerStyle?: IFlatListProps<ItemT>;
}
