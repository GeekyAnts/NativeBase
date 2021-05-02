import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  border,
  color,
  flexbox,
  layout,
  position,
  space,
  typography,
} from '../../../styled-system/packages/styled-system/src/index';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import Text from './../Text';
import {
  customBackground,
  customBorder,
  customExtra,
  customLayout,
  customOutline,
  customPosition,
  customShadow,
  customTypography,
} from '../../../utils/customProps';
import type { IBoxProps } from './types';
import { useSafeArea } from '../../../hooks/useSafeArea';
import { useNativeBase } from '../../../hooks';

const compose = (props, ...args) => {
  let style = {};
  args.forEach((arg) => {
    style = { ...style, ...arg(props) };
  });

  return style;
};

const stylesheetResolver = (props) => {
  const styles = compose(
    props,
    color,
    space,
    layout,
    flexbox,
    border,
    position,
    typography,
    customPosition,
    customBorder,
    customBackground,
    customOutline,
    customShadow,
    customExtra,
    customTypography,
    customLayout
  );

  console.log('styles ', styles);

  const styleSheet = StyleSheet.create({ boxStyle: styles });
  return styleSheet.boxStyle;
};

const StyledBox = React.forwardRef(({ style, ...rest }, ref) => {
  const { theme } = useNativeBase();
  const styles = stylesheetResolver({ ...rest, theme });
  return <View style={[styles, style]} ref={ref} {...rest} />;
});

console.log('color ', color);

// const StyledBox = styled(View)<IBoxProps>(
//   color,
//   space,
//   layout,
//   flexbox,
//   border,
//   position,
//   typography,
//   customPosition,
//   customBorder,
//   customBackground,
//   customOutline,
//   customShadow,
//   customExtra,
//   customTypography,
//   customLayout
// );

const Box = ({ children, _text, ...props }: IBoxProps, ref: any) => {
  // const { _text, ...resolvedProps } = useThemeProps('Box', props);
  const resolvedProps = usePropsResolution('Box', props);
  const safeAreaProps = useSafeArea(resolvedProps);

  return (
    <StyledBox ref={ref} {...safeAreaProps}>
      {React.Children.map(children, (child) =>
        typeof child === 'string' ? <Text {..._text}>{child}</Text> : child
      )}
    </StyledBox>
  );
};

export type { IBoxProps };

export default React.memo(React.forwardRef(Box));
