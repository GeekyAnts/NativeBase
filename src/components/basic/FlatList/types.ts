import type { StyledProps } from '../../../theme/types';
import type { FlatListProps } from 'react-native';
import type { CustomProps, PlatformProps } from '../../types';

export interface InterfaceFlatListProps<ItemT>
  extends FlatListProps<ItemT>,
    StyledProps,
    PlatformProps<IFlatListProps<ItemT>> {
  /**
   * pass props to contentContainerStyle, and this also resolved NB tokens.
   */
  _contentContainerStyle?: Partial<IFlatListProps<ItemT>>;
}

export type IFlatListProps<ItemT> = InterfaceFlatListProps<ItemT> &
  CustomProps<'FlatList'>;
