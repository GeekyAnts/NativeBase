import type { StyledProps } from '../../../theme/types';
import type { SectionListProps } from 'react-native';
import type { PlatformProps } from '../../types';

// TODO: any need to fixed
export interface ISectionListProps
  extends SectionListProps<any, any>,
    StyledProps,
    PlatformProps<ISectionListProps> {}
