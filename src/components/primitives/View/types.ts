import type { ViewProps } from 'react-native';
import type { CustomProps, SafeAreaProps } from '../../../components/types';
import type { StyledProps } from '../../../theme/types';

export type IViewProps = (ViewProps &
  StyledProps &
  SafeAreaProps & {
    children?: any;
  }) &
  CustomProps<'View'>;
