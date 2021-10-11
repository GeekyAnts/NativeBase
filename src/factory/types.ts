import type { StyledProps } from '../theme/types';

export type FactoryComponentProps = StyledProps & {
  children?: string | JSX.Element | JSX.Element[];
};
