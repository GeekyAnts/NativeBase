import type { StyledProps } from '../../../theme/types';
import type { SectionListProps } from 'react-native';
import type { PlatformProps } from '../../types';
type DefaultSectionT = {
  [key: string]: any;
};
// TODO: any need to fixed
export interface ISectionListProps<ItemT, sectionT = DefaultSectionT>
  extends SectionListProps<ItemT, sectionT>,
    StyledProps,
    PlatformProps<ISectionListProps<ItemT, sectionT>> {}
