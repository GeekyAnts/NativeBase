import type { CustomProps } from '../../../components/types';
import type { InterfaceBoxProps } from '../../primitives/Box';

export interface InterfaceTagProps extends InterfaceBoxProps<ITagProps> {
  variant?: 'solid' | 'subtle' | 'outline';
  colorScheme?: string;
  size?: string | number;
}

export type ITagProps = InterfaceTagProps & CustomProps<'Tag'>;
