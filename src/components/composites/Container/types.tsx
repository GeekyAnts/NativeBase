import type { CustomProps } from '../../../components/types';
import type { InterfaceBoxProps } from '../../primitives/Box';

export type InterfaceContainerProps = InterfaceBoxProps<IContainerProps> & {
  centerContent?: boolean;
};

export type IContainerProps = InterfaceContainerProps &
  CustomProps<'Container'>;
