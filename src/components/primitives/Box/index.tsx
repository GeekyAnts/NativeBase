import React, { memo, forwardRef } from 'react';
import { View } from 'react-native';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { getColor } from '../../../theme';
import { useTheme } from '../../../hooks';
import {
  makeStyledComponent,
  updateComponentThemeMap,
} from '../../../utils/styled';
import { wrapStringChild } from '../../../utils/wrapStringChild';
import type { IBoxProps, InterfaceBoxProps } from './types';
import { useSafeArea } from '../../../hooks/useSafeArea';
import {
  useNativeBaseConfig,
  NativeBaseConfigProvider,
  Context,
} from '../../../core/NativeBaseContext';
import { getResolvedStyleSheet, getThemeProps } from '../../../core';
import { useColorMode } from '../../../core';

const StyledBox = makeStyledComponent(View);

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
const gradientPropExists = (props: any) => {
  if (
    props.bg?.linearGradient ||
    props.background?.linearGradient ||
    props.bgColor?.linearGradient ||
    props.backgroundColor?.linearGradient
  ) {
    if (!MemoizedGradient) {
      let Gradient = useNativeBaseConfig('NativeBaseConfigProvider').config
        .dependencies?.['linear-gradient'];
      MemoizedGradient = makeStyledComponent(Gradient);
    }
    return true;
  }
  return false;
};

const GradientBox = forwardRef(
  ({ children, safeAreaProps, _text, ...props }: any, ref: any) => {
    const theme = useTheme();

    const lgrad =
      props.bg?.linearGradient ||
      props.background?.linearGradient ||
      props.bgColor?.linearGradient ||
      props.backgroundColor?.linearGradient;

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
      <MemoizedGradient
        ref={ref}
        {...safeAreaProps}
        colors={lgrad.colors}
        start={startObj}
        end={endObj}
        locations={lgrad.locations}
      >
        {/* {React.Children.map(children, (child) =>
            typeof child === 'string' || typeof child === 'number' ? (
              <Text {..._text}>{child}</Text>
            ) : (
              child
            )
          )} */}
        {wrapStringChild(children, _text)}
      </MemoizedGradient>
    );
  }
);

// const getContext = () => {
//   // const context = React.useContext(Context);
//   // return context;
//   console.log(window['currentBreakpoint'], 'hello current breakpoint');
// };
const Box = ({ children, ...props }: IBoxProps, ref: any) => {
  const { _text, ...resolvedProps } = usePropsResolution('Box', props);

  if (safeAreaPropsExists(props)) {
    return (
      <BoxComponentWithSafeArea {...resolvedProps} _text={_text} ref={ref}>
        {children}
      </BoxComponentWithSafeArea>
    );
  } else {
    return (
      <BoxComponentWithoutSafeArea {...resolvedProps} _text={_text} ref={ref}>
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

    // console.log(safeAreaProps, props, 'hello props here');
    if (gradientPropExists(props) && GradientBox) {
      return <GradientBox {...props} {...safeAreaProps} ref={ref} />;
    } else {
      return (
        <StyledBox
          ref={ref}
          {...safeAreaProps}
          INTERNAL_themeStyle={[
            getResolvedStyleSheet('Box', colorMode),
            INTERNAL_themeStyle,
          ]}
        >
          {wrapStringChild(children, _text)}
        </StyledBox>
      );
    }
  }
);

const BoxComponentWithoutSafeArea = forwardRef(
  ({ children, _text, INTERNAL_themeStyle, ...props }: IBoxProps, ref: any) => {
    const { colorMode } = useColorMode();

    if (gradientPropExists(props) && GradientBox) {
      return <GradientBox {...props} ref={ref} />;
    } else {
      // console.log(props, INTERNAL_themeStyle, '*****');
      return (
        <StyledBox
          ref={ref}
          {...props}
          INTERNAL_themeStyle={[
            getResolvedStyleSheet('Box', colorMode),
            INTERNAL_themeStyle,
          ]}
          // INTERNAL_themeStyle={getStyledComponent('Box', colorMode)}
        >
          {wrapStringChild(children, _text)}
        </StyledBox>
      );
    }
  }
);

export type { IBoxProps, InterfaceBoxProps };
export default memo(forwardRef(Box));
