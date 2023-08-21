import React, { forwardRef, memo } from 'react';
import { View } from 'react-native';
import { useNativeBaseConfig } from '../../../core/NativeBaseContext';
import { useTheme } from '../../../hooks';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { useSafeArea } from '../../../hooks/useSafeArea';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { getColor } from '../../../theme';
import { makeStyledComponent } from '../../../utils/styled';
import { wrapStringChild } from '../../../utils/wrapStringChild';
import type { IBoxProps, InterfaceBoxProps, LinearGradientBaseProps, LinearGradientProps } from './types';

const StyledBox = makeStyledComponent(View);

let MemoizedGradient: any;

const Box = ({ children, ...props }: IBoxProps, ref: any) => {
  // const { _text, ...resolvedProps } = useThemeProps('Box', props);
  const theme = useTheme();
  const { _text, ...resolvedProps } = usePropsResolution('Box', props);
  let Gradient = useNativeBaseConfig('NativeBaseConfigProvider').config
    .dependencies?.['linear-gradient'];

  const safeAreaProps = useSafeArea(resolvedProps);

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  if (
    resolvedProps.bg?.linearGradient ||
    resolvedProps.background?.linearGradient ||
    resolvedProps.bgColor?.linearGradient ||
    resolvedProps.backgroundColor?.linearGradient
  ) {
    const lgrad =
      resolvedProps.bg?.linearGradient ||
      resolvedProps.background?.linearGradient ||
      resolvedProps.bgColor?.linearGradient ||
      resolvedProps.backgroundColor?.linearGradient;

    if (Gradient) {
      if (!MemoizedGradient) {
        MemoizedGradient = makeStyledComponent(Gradient);
      }

      Gradient = MemoizedGradient;

      lgrad.colors = lgrad.colors?.map((color: string) => {
        return getColor(color, theme.colors, theme);
      });

      let linearGradientBaseProps: LinearGradientBaseProps = {
        colors: lgrad.colors,
        locations: lgrad.locations,
      };

      let linearGradientProps: LinearGradientProps;

      if(lgrad.useAngle) {
        linearGradientProps = {
          ...linearGradientBaseProps,
          useAngle: lgrad.useAngle,
          angle: lgrad.angle,
          angleCenter: lgrad.angleCenter,
        }
      } else {
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
        linearGradientProps = {
          ...linearGradientBaseProps,
          start: startObj,
          end: endObj,
        }
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
          {...linearGradientProps}
        >
          {/* {React.Children.map(children, (child) =>
            typeof child === 'string' || typeof child === 'number' ? (
              <Text {..._text}>{child}</Text>
            ) : (
              child
            )
          )} */}
          {wrapStringChild(children, _text)}
        </Gradient>
      );
    }
  }
  return (
    <StyledBox ref={ref} {...safeAreaProps}>
      {/* {React.Children.map(children, (child) => {
        return typeof child === 'string' ||
          typeof child === 'number' ||
          (child?.type === React.Fragment &&
            (typeof child.props?.children === 'string' ||
              typeof child.props?.children === 'number')) ? (
          <Text {..._text}>{child}</Text>
        ) : (
          child
        );
      })} */}
      {wrapStringChild(children, _text)}
    </StyledBox>
  );
};

export type { IBoxProps, InterfaceBoxProps };
export default memo(forwardRef(Box));
