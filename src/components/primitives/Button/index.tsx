import React from 'react';
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
    startIcon,
    endIcon,
    spinner,
    ...props
  }: IButtonProps & IBoxProps,
  ref: any
) => {
  const { _text, ...newProps } = useThemeProps('Button', {
    ...props,
    size,
  });
  let [layoutProps, viewProps] = themeTools.extractInObject(newProps, [
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
    'zIndex',
    'minH',
    'minHeight',
    'minWidth',
    'minW',
    'height',
    'width',
    'opacity',
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
    <Box {...innerButtonProps} {...commonProps}>
      {startIcon ? (
        <Box mr={Math.floor(innerButtonProps.px / 2) || 2}>{startIcon}</Box>
      ) : null}
      {isLoading ? (
        <Flex direction="row">
          {spinner ? spinner : <Spinner color={_text?.color} size="sm" />}
          <Text {..._text}>{isLoadingText ? ' ' + isLoadingText : ''}</Text>
        </Flex>
      ) : React.Children.count(children) > 1 || typeof children !== 'string' ? (
        children
      ) : (
        <Text {..._text}>{children}</Text>
      )}
      {endIcon ? (
        <Box ml={Math.floor(innerButtonProps.px / 2) || 2}>{endIcon}</Box>
      ) : null}
    </Box>
  );

  return (
    <StyledButton
      activeOpacity={highlight ? highlight : 0.8}
      ref={ref}
      style={style}
      accessibilityRole="button"
      disabled={accessibilityProps.isDisabled}
      opacity={isLoading ? 0.8 : accessibilityProps.isDisabled ? 0.5 : 1}
      {...accessibilityProps}
      {...layoutProps}
      {...(Platform.OS === 'web'
        ? {
            cursor: accessibilityProps.isDisabled ? 'not-allowed' : 'auto',
          }
        : {})}
    >
      {innerButton}
    </StyledButton>
  );
};

// TODO: Move this to Button.Group
export { ButtonGroup } from './ButtonGroup';
export type { IButtonProps, IButtonGroupProps };
export default React.memo(React.forwardRef(Button));
