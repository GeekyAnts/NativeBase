import type { SpaceProps as ssSpaceProps } from 'styled-system';

interface SafeAreaProps {
  safeArea?: boolean | number;
  safeAreaX?: boolean | number;
  safeAreaY?: boolean | number;
  safeAreaTop?: boolean | number;
  safeAreaBottom?: boolean | number;
  safeAreaLeft?: boolean | number;
  safeAreaRight?: boolean | number;
}

export interface SpaceProps extends ssSpaceProps, SafeAreaProps {}
