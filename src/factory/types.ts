import type { PlatformProps } from '../components/types';
import type { StyledProps } from '../theme/types';

export type FactoryComponentProps = PlatformProps<StyledProps> & {
  children?: string | JSX.Element | JSX.Element[];
};
