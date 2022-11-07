import React, { forwardRef, memo } from 'react';
import { StyleSheet, ViewStyle, Platform } from 'react-native';
import { default as Box } from '../../primitives/Box';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { usePropsResolution } from '../../../hooks';
import type { IAspectRatioProps } from './types';

const AspectView = forwardRef((props: any, ref?: any) => {
  const [layout, setLayout] = React.useState();
  const aspectViewStyle = [StyleSheet.flatten(props.style) || {}];
  if (layout) {
    // @ts-ignore
    let { width = 0, height = 0 } = layout;
    if (width === 0) {
      aspectViewStyle.push({ width: height * props.aspectRatio, height });
    } else {
      aspectViewStyle.push({ width, height: width / props.aspectRatio });
    }
  }

  return (
    <Box
      ref={ref}
      {...props}
      style={aspectViewStyle}
      onLayout={({ nativeEvent: { layout: inLayout } }: any) =>
        setLayout(inLayout)
      }
    />
  );
});

const AspectRatio = (props: IAspectRatioProps, ref?: any) => {
  const { ratio, children = <></>, ...resolvedProps } = usePropsResolution(
    'AspectRatio',
    props,
    {},
    { resolveResponsively: ['ratio'] }
  );
  let computedStyle: ViewStyle | undefined = resolvedProps.style;
  const newChildWithProps = React.cloneElement(
    children,
    {
      ...children?.props,
      style: StyleSheet.absoluteFillObject,
    },
    children?.props?.children
  );

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(resolvedProps)) {
    return null;
  }
  // DOC:  It uses a aspectRatio property of React Native and manually calculate on Web
  if (Platform.OS === 'web') {
    return (
      <AspectView aspectRatio={ratio} {...resolvedProps} ref={ref}>
        {newChildWithProps}
      </AspectView>
    );
  } else {
    computedStyle = StyleSheet.flatten([
      { style: resolvedProps.style },
      { aspectRatio: ratio },
    ]);
    return (
      <Box {...resolvedProps} style={computedStyle} ref={ref}>
        {newChildWithProps}
      </Box>
    );
  }
};

export default memo(forwardRef(AspectRatio));
