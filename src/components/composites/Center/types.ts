import type { IBoxProps } from '../../primitives';

export interface ICenterProps extends IBoxProps {}
export type ICircleProps = IBoxProps & { size?: number | string };
export type ISquareProps = IBoxProps & { size?: number | string };
