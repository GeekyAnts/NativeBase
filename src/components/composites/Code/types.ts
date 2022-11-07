import type { CustomProps } from '../../../components/types/utils';
import type { InterfaceBoxProps } from '../../primitives/Box';
import type { ColorSchemeType } from '../../../components/types';

export type InterfaceCodeProps = InterfaceBoxProps<ICodeProps> & {
  colorScheme?: ColorSchemeType;
};

export type ICodeProps = InterfaceCodeProps & CustomProps<'Code'>;
