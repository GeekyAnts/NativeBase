import type { CustomProps } from '../../../components/types/utils';
import type { IBoxProps } from '../../primitives';

export interface InterfaceCardProps extends IBoxProps<ICardProps> {}
export type ICardProps = InterfaceCardProps & CustomProps<'Card'>;
