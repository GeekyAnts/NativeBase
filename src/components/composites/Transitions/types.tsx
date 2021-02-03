import type { IBoxProps } from '../../primitives';

export type IFadeProps = IBoxProps & {
  in?: boolean;
  duration?: number;
  delay?: number;
};
export type IScaleFadeProps = IBoxProps & {
  in?: boolean;
  duration?: number;
  delay?: number;
  initialScale?: number;
};
export type ISlideProps = IBoxProps & {
  in?: boolean;
  duration?: number;
  delay?: number;
  placement?: 'top' | 'bottom';
};
export type ISlideFadeProps = IBoxProps & {
  in?: boolean;
  delay?: number;
  duration?: number;
  offsetX?: number;
  offsetY?: number;
};
