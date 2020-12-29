import React, { forwardRef } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, position, space } from 'styled-system';
import { usePropsConfig } from '../../../hooks';
import { themeTools } from '../../../theme';
import {
  customBackground,
  customBorder,
  customExtra,
  customLayout,
  customOutline,
  customPosition,
  customShadow,
} from '../../../utils/customProps';
import Text from '../../primitives/Text';
import { default as Box, IBoxProps } from '../Box';
import Flex from '../Flex';
import Spinner from '../Spinner';
import type { IButtonGroupProps, IButtonProps } from './props';
import { useButton } from './useButton';

const StyledButton = styled(TouchableOpacity)<
  IButtonProps & TouchableOpacityProps
>(
  color,
  space,
  layout,
  flexbox,
  border,
  position,
  customPosition,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout
);
const Button = (
  {
    style,
    children,
    highlight,
    isLoading,
    isLoadingText,
    size,
    leftIcon,
    rightIcon,
    spinner,
    ...props
  }: IButtonProps & IBoxProps,
  ref: any
) => {
  const newProps = usePropsConfig('Button', {
    ...props,
    size,
  });
  let [textProps, remainingProps] = themeTools.extractInObject(newProps, [
    'fontWeight',
    'fontSize',
    'textDecorationLine',
    'color',
  ]);
  let [layoutProps, viewProps] = themeTools.extractInObject(remainingProps, [
    'm',
    'margin',
    'mt',
    'marginTop',
    'mr',
    'marginRight',
    'mb',
    'marginBottom',
    'ml',
    'marginLeft',
    'mx',
    'marginX',
    'my',
    'marginY',
    'left',
    'top',
    'bottom',
    'right',
    'position',
  ]);
  let [
    additionalButtonProps,
    innerButtonProps,
  ] = themeTools.extractInObject(viewProps, [
    'accessible',
    'accessibilityRole',
    'accessibilityState',
    'accessibilityLabel',
    'accessibilityHint',
    'isDisabled',
    'onPress',
  ]);

  additionalButtonProps.isDisabled =
    additionalButtonProps.isDisabled || isLoading;
  const innerButton = (
    <Box {...innerButtonProps} opacity={isLoading ? 0.5 : 1} style={style}>
      {leftIcon ? (
        <Box mr={innerButtonProps.px / 2 || 2}>{leftIcon}</Box>
      ) : null}
      {isLoading ? (
        <Flex direction="row">
          {spinner ? spinner : <Spinner color={textProps.color} size="sm" />}
          <Text {...textProps}>{isLoadingText ? ' ' + isLoadingText : ''}</Text>
        </Flex>
      ) : React.Children.count(children) > 1 ? (
        children
      ) : (
        <Text
          {...textProps}
          style={{ textDecorationLine: textProps.textDecorationLine }}
        >
          {children}
        </Text>
      )}
      {rightIcon ? (
        <Box ml={innerButtonProps.px / 2 || 2}>{rightIcon}</Box>
      ) : null}
    </Box>
  );

  const { buttonProps } = useButton(additionalButtonProps, ref);
  return (
    <StyledButton
      activeOpacity={highlight ? highlight : 0.8}
      ref={ref}
      {...layoutProps}
      {...buttonProps}
    >
      {innerButton}
    </StyledButton>
  );
};

export { ButtonGroup } from './ButtonGroup';
export type { IButtonProps, IButtonGroupProps };
export default forwardRef<any, IButtonProps & IBoxProps>(Button);
