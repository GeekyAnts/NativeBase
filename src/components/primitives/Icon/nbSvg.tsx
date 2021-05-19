import React from 'react';
import {
  Svg as RnSvg,
  G as RnG,
  Path as RnPath,
  Polygon as RnPolygon,
  Line as RnLine,
  Circle as RnCircle,
  Rect as RnRect,
} from 'react-native-svg';

export const Svg = (props: any) => <RnSvg {...props} tabindex={-1} />;
export const G = (props: any) => <RnG {...props} tabindex={-1} />;
export const Path = (props: any) => <RnPath {...props} tabindex={-1} />;
export const Polygon = (props: any) => <RnPolygon {...props} tabindex={-1} />;
export const Line = (props: any) => <RnLine {...props} tabindex={-1} />;
export const Circle = (props: any) => <RnCircle {...props} tabindex={-1} />;
export const Rect = (props: any) => <RnRect {...props} tabindex={-1} />;
