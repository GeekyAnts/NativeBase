import type { CustomProps } from 'src/components/types';
import type { InterfaceBoxProps } from '../../primitives/Box';

export type InterfaceCodeProps = InterfaceBoxProps<ICodeProps> & {
  colorScheme?: string | undefined;
};

export type ICodeProps = InterfaceCodeProps | CustomProps<'Code'>;
