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

export const Svg = (props: any) => <RnSvg tabindex={-1} {...props} />;
export const G = (props: any) => <RnG tabindex={-1} {...props} />;
export const Path = (props: any) => <RnPath tabindex={-1} {...props} />;
export const Polygon = (props: any) => <RnPolygon tabindex={-1} {...props} />;
export const Line = (props: any) => <RnLine tabindex={-1} {...props} />;
export const Circle = (props: any) => <RnCircle tabindex={-1} {...props} />;
export const Rect = (props: any) => <RnRect tabindex={-1} {...props} />;
