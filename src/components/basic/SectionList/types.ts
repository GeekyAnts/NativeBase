import type { StyledProps } from '../../../theme/types';
import type { SectionListProps } from 'react-native';
import type { CustomProps, PlatformProps } from '../../types';
import type { MutableRefObject } from 'react';
type DefaultSectionT = {
  [key: string]: any;
};
// TODO: any need to fixed
export interface InterfaceSectionListProps<ItemT, sectionT = DefaultSectionT>
  extends SectionListProps<ItemT, sectionT>,
    StyledProps,
    PlatformProps<ISectionListProps<ItemT, sectionT>> {
  ref?: MutableRefObject<any>;
}

export type ISectionListProps<
  ItemT,
  sectionT = DefaultSectionT
> = InterfaceSectionListProps<ItemT, sectionT> & CustomProps<'SectionList'>;
