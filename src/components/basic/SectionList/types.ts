import type { StyledProps } from '../../../theme/types';
import type { SectionListProps } from 'react-native';
import type { CustomProps, GenericRef, PlatformProps } from '../../types';
type DefaultSectionT = {
  [key: string]: any;
};
// TODO: any need to fixed
export interface InterfaceSectionListProps<ItemT, sectionT = DefaultSectionT>
  extends SectionListProps<ItemT, sectionT>,
    StyledProps,
    PlatformProps<ISectionListProps<ItemT, sectionT>> {
  ref?: GenericRef<any>;
}

export type ISectionListProps<
  ItemT,
  sectionT = DefaultSectionT
> = InterfaceSectionListProps<ItemT, sectionT> & CustomProps<'SectionList'>;
