import React, { memo, forwardRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { getColor } from '../../../theme';
import { useTheme } from '../../../hooks';
import {
  makeStyledComponent,
  resolveComponentThemeStyleAndUpdateMap,
} from '../../../utils/styled';
import { wrapStringChild } from '../../../utils/wrapStringChild';
import type { IBoxProps, InterfaceBoxProps } from './types';
import { useSafeArea } from '../../../hooks/useSafeArea';
import { useNativeBaseConfig } from '../../../core/NativeBaseContext';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { useStyledSystemPropsResolver } from '../../../hooks/';
import { getResolvedStyleSheet } from '../../../core';
import { useColorMode } from '../../../core';

const StyledBox = makeStyledComponent(View);

resolveComponentThemeStyleAndUpdateMap('Box');

let MemoizedGradient: any;
const safeAreaPropsExists = (props: IBoxProps) => {
  if (
    props.safeArea ||
    props.safeAreaX ||
    props.safeAreaY ||
    props.safeAreaTop ||
    props.safeAreaBottom ||
    props.safeAreaLeft ||
    props.safeAreaRight
  ) {
    return true;
  }
  return false;
};
const Box = ({ children, ...props }: IBoxProps, ref: any) => {
  // console.time("useTheme");

  const theme = useTheme();
  // console.timeEnd("useTheme");
  // console.time("usePropsResolution");

  const { _text, ...resolvedProps } = usePropsResolution('Box', props);
  // console.timeEnd("usePropsResolution");
  // console.time("useSafeArea111");

  let Gradient = useNativeBaseConfig('NativeBaseConfigProvider').config
    .dependencies?.['linear-gradient'];
  // console.timeEnd("useSafeArea111");
  // console.time("useSafeArea");

  // console.log("box props", props);

  //TODO: fix useSafeArea
  const safeAreaProps = props;

  // return <StyledBox {...resolvedProps} />;

  // console.log(safeAreaProps, "safe area");
  // console.timeEnd("useSafeArea");
  // const [style, restProps] = useStyledSystemPropsResolver(props);
  // console.log("style ^^^^^^", style);
  // return <View {...props} style={style}></View>;
  // return <StyledBox {...props}></StyledBox>;

  // if (
  //   resolvedProps.bg?.linearGradient ||
  //   resolvedProps.background?.linearGradient ||
  //   resolvedProps.bgColor?.linearGradient ||
  //   resolvedProps.backgroundColor?.linearGradient
  // ) {
  //   const lgrad =
  //     resolvedProps.bg?.linearGradient ||
  //     resolvedProps.background?.linearGradient ||
  //     resolvedProps.bgColor?.linearGradient ||
  //     resolvedProps.backgroundColor?.linearGradient;

  //   if (Gradient) {
  //     if (!MemoizedGradient) {
  //       MemoizedGradient = makeStyledComponent(Gradient);
  //     }

  //     Gradient = MemoizedGradient;

  //     lgrad.colors = lgrad.colors?.map((color: string) => {
  //       return getColor(color, theme.colors, theme);
  //     });
  //     let startObj = { x: 0, y: 0 };
  //     let endObj = { x: 0, y: 1 };
  //     if (lgrad.start && lgrad.start.length === 2) {
  //       startObj = {
  //         x: lgrad.start[0],
  //         y: lgrad.start[1],
  //       };
  //     }
  //     if (lgrad.end && lgrad.end.length === 2) {
  //       endObj = {
  //         x: lgrad.end[0],
  //         y: lgrad.end[1],
  //       };
  //     }
  //     const backgroundColorProps = [
  //       "bg",
  //       "bgColor",
  //       "background",
  //       "backgroundColor",
  //     ];
  //     backgroundColorProps.forEach((backgroundColorProp) => {
  //       if (backgroundColorProp in safeAreaProps)
  //         delete safeAreaProps[backgroundColorProp];
  //     });

  //     return (
  //       <Gradient
  //         ref={ref}
  //         {...safeAreaProps}
  //         colors={lgrad.colors}
  //         start={startObj}
  //         end={endObj}
  //         locations={lgrad.locations}
  //       >
  //         {/* {React.Children.map(children, (child) =>
  //           typeof child === 'string' || typeof child === 'number' ? (
  //             <Text {..._text}>{child}</Text>
  //           ) : (
  //             child
  //           )
  //         )} */}
  //         {wrapStringChild(children, _text)}
  //       </Gradient>
  //     );
  //   }
  // }

  if (safeAreaPropsExists(props)) {
    return (
      <BoxComponentWithSafeArea {...props} {..._text}>
        {children}
      </BoxComponentWithSafeArea>
    );
  } else {
    return (
      <BoxComponentWithoutSafeArea {...props} {..._text}>
        {children}
      </BoxComponentWithoutSafeArea>
    );
  }

  // return (
  //   <StyledBox ref={ref} {...safeAreaProps}>
  //     {/* {React.Children.map(children, (child) => {
  //       return typeof child === 'string' ||
  //         typeof child === 'number' ||
  //         (child?.type === React.Fragment &&
  //           (typeof child.props?.children === 'string' ||
  //             typeof child.props?.children === 'number')) ? (
  //         <Text {..._text}>{child}</Text>
  //       ) : (
  //         child
  //       );
  //     })} */}
  //     {wrapStringChild(children, _text)}
  //   </StyledBox>
  // );
};

const BoxComponentWithSafeArea = forwardRef(
  ({ children, _text, INTERNAL_themeStyle, ...props }: IBoxProps, ref: any) => {
    const safeAreaProps = useSafeArea(props);
    const { colorMode } = useColorMode();

    return (
      <StyledBox
        ref={ref}
        {...safeAreaProps}
        INTERNAL_themeStyle={[
          INTERNAL_themeStyle,
          getResolvedStyleSheet('Box', colorMode),
        ]}
      >
        {wrapStringChild(children, _text)}
      </StyledBox>
    );
  }
);

const BoxComponentWithoutSafeArea = forwardRef(
  ({ children, _text, INTERNAL_themeStyle, ...props }: IBoxProps, ref: any) => {
    const { colorMode } = useColorMode();

    return (
      <StyledBox
        ref={ref}
        {...props}
        INTERNAL_themeStyle={[
          INTERNAL_themeStyle,
          getResolvedStyleSheet('Box', colorMode),
        ]}
        // INTERNAL_themeStyle={getStyledComponent('Box', colorMode)}
      >
        {wrapStringChild(children, _text)}
      </StyledBox>
    );
  }
);

export type { IBoxProps, InterfaceBoxProps };
export default memo(forwardRef(Box));
