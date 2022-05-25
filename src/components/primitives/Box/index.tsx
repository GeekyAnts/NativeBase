import React, { memo, forwardRef } from 'react';
import { Platform, View } from 'react-native';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { getColor } from '../../../theme';
import { useTheme, useToken } from '../../../hooks';
import { makeStyledComponent } from '../../../utils/styled';
import { wrapStringChild } from '../../../utils/wrapStringChild';
import type { IBoxProps, InterfaceBoxProps } from './types';
import { useSafeArea } from '../../../hooks/useSafeArea';
import { useNativeBaseConfig } from '../../../core/NativeBaseContext';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const StyledBox = makeStyledComponent(View);

let MemoizedGradient: any;

const Box = ({ children, ...props }: IBoxProps, ref: any) => {
  const theme = useTheme();
  const { _text, ...resolvedProps } = usePropsResolution('Box', props);
  let Gradient = useNativeBaseConfig('NativeBaseConfigProvider').config
    .dependencies?.['linear-gradient'];

  const safeAreaProps = useSafeArea(resolvedProps);
  const lgrad =
    resolvedProps.bg?.linearGradient ||
    resolvedProps.background?.linearGradient ||
    resolvedProps.bgColor?.linearGradient ||
    resolvedProps.backgroundColor?.linearGradient;

  const gradienColors = useToken('colors', lgrad?.colors);

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  if (lgrad) {
    if (Platform.OS === 'web') {
      const theta =
        (lgrad.end[1] - lgrad.start[1]) / (lgrad.end[0] - lgrad.start[0])
          ? Math.atan(
              (lgrad.end[1] - lgrad.start[1]) / (lgrad.end[0] - lgrad.start[0])
            )
          : 0;
      const deg = 90 - theta * (180 / Math.PI);

      return (
        <StyledBox
          ref={ref}
          {...safeAreaProps}
          style={[
            {
              background: `linear-gradient(${deg}deg, ${gradienColors})`,
            },
            safeAreaProps.style,
          ]}
        >
          {wrapStringChild(children, _text)}
        </StyledBox>
      );
    } else if (Gradient) {
      if (!MemoizedGradient) {
        MemoizedGradient = makeStyledComponent(Gradient);
      }

      Gradient = MemoizedGradient;

      lgrad.colors = lgrad.colors?.map((color: string) => {
        return getColor(color, theme.colors, theme);
      });
      let startObj = { x: 0, y: 0 };
      let endObj = { x: 0, y: 1 };
      if (lgrad.start && lgrad.start.length === 2) {
        startObj = {
          x: lgrad.start[0],
          y: lgrad.start[1],
        };
      }
      if (lgrad.end && lgrad.end.length === 2) {
        endObj = {
          x: lgrad.end[0],
          y: lgrad.end[1],
        };
      }
      const backgroundColorProps = [
        'bg',
        'bgColor',
        'background',
        'backgroundColor',
      ];
      backgroundColorProps.forEach((backgroundColorProp) => {
        if (backgroundColorProp in safeAreaProps)
          delete safeAreaProps[backgroundColorProp];
      });

      return (
        <Gradient
          ref={ref}
          {...safeAreaProps}
          colors={lgrad.colors}
          start={startObj}
          end={endObj}
          locations={lgrad.locations}
        >
          {wrapStringChild(children, _text)}
        </Gradient>
      );
    } else {
      console.warn('Unable to add Linear Gradient');
    }
  }
  return (
    <StyledBox ref={ref} {...safeAreaProps}>
      {wrapStringChild(children, _text)}
    </StyledBox>
  );
};

export type { IBoxProps, InterfaceBoxProps };
export default memo(forwardRef(Box));
