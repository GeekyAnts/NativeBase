import type { IBoxProps } from '../../primitives';

export interface ICenterProps extends IBoxProps<ICenterProps> {}
export type ICircleProps = IBoxProps<ICircleProps> & { size?: number | string };
export type ISquareProps = IBoxProps<ISquareProps> & { size?: number | string };
