import React from 'react';
import { StyleSheet, ViewStyle, Platform } from 'react-native';
import { default as Box, IBoxProps } from '../../primitives/Box';
import isNil from 'lodash.isnil';

export type IAspectRatioProps = IBoxProps & {
  style?: ViewStyle;
  ratio?: number;
  children: JSX.Element;
};

const AspectView = React.forwardRef((props: any, ref?: any) => {
  const [layout, setLayout] = React.useState();
  const inputStyle = [StyleSheet.flatten(props.style) || {}];
  if (layout) {
    // @ts-ignore
    let { width = 0, height = 0 } = layout;
    if (width === 0) {
      inputStyle.push({ width: height * props.aspectRatio, height });
    } else {
      inputStyle.push({ width, height: width / props.aspectRatio });
    }
  }
  return (
    <Box
      {...props}
      ref={ref}
      style={inputStyle}
      onLayout={({ nativeEvent: { layout: inLayout } }: any) =>
        setLayout(inLayout)
      }
    />
  );
});

const AspectRatio = (
  { style, ratio, children, ...props }: IAspectRatioProps,
  ref?: any
) => {
  let computedStyle: ViewStyle | undefined = style;
  let newChildWithProps = React.cloneElement(
    children,
    {
      ...children.props,
      style: StyleSheet.absoluteFillObject,
    },
    children.props.children
  );
  let aspectRatio = !isNil(ratio) ? ratio : 4 / 3;

  // DOC:  It uses a aspectRatio property of React Native and manually calculate on Web
  if (Platform.OS === 'web') {
    return (
      <AspectView {...props} aspectRatio={aspectRatio} style={style} ref={ref}>
        {newChildWithProps}
      </AspectView>
    );
  } else {
    computedStyle = StyleSheet.flatten([style, { aspectRatio }]);
    return (
      <Box {...props} style={computedStyle} ref={ref}>
        {newChildWithProps}
      </Box>
    );
  }
};

export default React.memo(React.forwardRef(AspectRatio));
