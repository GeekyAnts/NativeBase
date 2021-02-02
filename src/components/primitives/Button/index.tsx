import React, { forwardRef } from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Platform,
} from 'react-native';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, position, space } from 'styled-system';
import { useThemeProps } from '../../../hooks';
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
import type { IButtonGroupProps, IButtonProps } from './types';
import { useButton } from 'react-native-aria';

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
  const newProps = useThemeProps('Button', {
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
    'minH',
    'minHeight',
    'minWidth',
    'minW',
    'height',
    'width',
  ]);
  const [commonProps] = themeTools.extractInObject(layoutProps, [
    'minH',
    'minHeight',
    'minWidth',
    'minW',
    'height',
    'width',
  ]);
  let [
    accessibilityProps,
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

  accessibilityProps.isDisabled = accessibilityProps.isDisabled || isLoading;
  const innerButton = (
    <Box
      {...innerButtonProps}
      {...commonProps}
      opacity={isLoading ? 0.5 : 1}
      style={style}
    >
      {leftIcon ? (
        <Box mr={Math.floor(innerButtonProps.px / 2) || 2}>{leftIcon}</Box>
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
        <Box ml={Math.floor(innerButtonProps.px / 2) || 2}>{rightIcon}</Box>
      ) : null}
    </Box>
  );

  const ariaProps = useButton(
    {
      ...accessibilityProps,
      children,
      'aria-label': accessibilityProps.accessibilityLabel,
      'aria-describedby': accessibilityProps.accessibilityHint,
    },
    ref
  );
  return (
    <StyledButton
      activeOpacity={highlight ? highlight : 0.8}
      ref={ref}
      {...accessibilityProps}
      {...ariaProps}
      {...layoutProps}
      opacity={accessibilityProps.isDisabled ? 0.5 : 1}
      {...(Platform.OS === 'web'
        ? {
            disabled: accessibilityProps.isDisabled,
            cursor: accessibilityProps.isDisabled ? 'not-allowed' : 'auto',
          }
        : {})}
    >
      {innerButton}
    </StyledButton>
  );
};

export { ButtonGroup } from './ButtonGroup';
export type { IButtonProps, IButtonGroupProps };
export default React.memo(forwardRef<any, IButtonProps & IBoxProps>(Button));
