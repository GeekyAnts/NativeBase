import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { Hoverable } from './../../../utils';
import { useThemeProps } from '../../../hooks';
import { Center } from '../../composites/Center';
import {
  FormControlContext,
  IFormControlContext,
} from '../../composites/FormControl';
import Box from '../Box';
import Icon from '../Icon';
import { CheckboxContext } from './CheckboxGroup';
import type { ICheckboxContext, ICheckboxProps } from './props';
import { useCheckbox } from './useCheckbox';

const Checkbox = ({ icon, ...props }: ICheckboxProps, ref: any) => {
  const formControlContext: IFormControlContext = React.useContext(
    FormControlContext
  );

  const checkboxGroupContext: ICheckboxContext = React.useContext(
    CheckboxContext
  );
  const {
    activeColor,
    borderColor,
    iconColor,
    size,
    ...newProps
  } = useThemeProps('Checkbox', {
    ...checkboxGroupContext,
    ...formControlContext,
    ...props,
  });

  const { inputProps } = useCheckbox(props, checkboxGroupContext, null);

  const isChecked = inputProps.checked;
  const isDisabled = inputProps.disabled;

  const sizedIcon = icon
    ? () =>
        React.cloneElement(
          icon,
          {
            size,
            color: icon.props.color ? icon.props.color : iconColor,
          },
          icon.props.children
        )
    : null;

  return (
    <TouchableOpacity activeOpacity={1} ref={ref} {...inputProps}>
      <Hoverable>
        {(isHovered: boolean) => {
          const outlineColor =
            isHovered && !isDisabled
              ? activeColor
              : isChecked
              ? isDisabled
                ? borderColor
                : activeColor
              : borderColor;
          return (
            <Box
              flexDirection="row"
              alignItems="center"
              {...newProps}
              opacity={isDisabled ? 0.4 : 1}
              {...(Platform.OS === 'web'
                ? {
                    disabled: isDisabled,
                    cursor: isDisabled ? 'not-allowed' : 'auto',
                  }
                : {})}
            >
              <Center
                backgroundColor={
                  isChecked
                    ? isDisabled
                      ? borderColor
                      : activeColor
                    : 'transparent'
                }
                borderColor={outlineColor}
                borderWidth={1}
                borderRadius={4}
                p={1}
              >
                {icon && sizedIcon && isChecked ? (
                  sizedIcon()
                ) : (
                  <Icon
                    name="check-bold"
                    type="MaterialCommunityIcons"
                    size={size}
                    color={iconColor}
                    opacity={isChecked ? 1 : 0}
                  />
                )}
              </Center>
              {props.children}
            </Box>
          );
        }}
      </Hoverable>
    </TouchableOpacity>
  );
};

export default React.memo(
  React.forwardRef<TouchableOpacity, ICheckboxProps>(Checkbox)
);
