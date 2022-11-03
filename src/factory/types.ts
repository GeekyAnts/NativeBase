import type { PlatformProps } from '../components/types';
import type { StyledProps } from '../theme/types';
import type { IStateProps } from '../hooks/useThemeProps/propsFlattener';

export type FactoryComponentProps = StyledProps &
  PlatformProps<StyledProps> & {
    children?: string | JSX.Element | JSX.Element[];
    _state?: IStateProps;
  };
