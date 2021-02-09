import type { IBoxProps } from '../../primitives';

export type ICenterProps = IBoxProps;
export type ICircleProps = IBoxProps & { size?: number | string };
export type ISquareProps = IBoxProps & { size?: number | string };
