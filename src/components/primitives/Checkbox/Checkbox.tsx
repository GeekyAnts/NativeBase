import React from 'react';
import { TouchableOpacity } from 'react-native';
import Box from '../Box';
import Icon from '../Icon';
import { Center } from '../../composites/Center';
import { usePropsConfig } from '../../../hooks';
import {
  FormControlContext,
  IFormControlContext,
} from '../../composites/FormControl';
import { CheckboxContext } from './CheckboxGroup';
import type { ICheckboxProps, ICheckboxContext } from './props';
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
    isInvalid,
    size,
    ...newProps
  } = usePropsConfig('Checkbox', {
    ...checkboxGroupContext,
    ...formControlContext,
    ...props,
  });

  const { inputProps } = useCheckbox(props, checkboxGroupContext, null);

  const isChecked = inputProps.checked;
  const isDisabled = inputProps.disabled;

  // only calling below function when icon exist.
  const sizedIcon = () =>
    React.cloneElement(
      // @ts-ignore
      icon,
      {
        size,
        // @ts-ignore
        color: icon.props.color ? icon.props.color : iconColor,
      },
      // @ts-ignore
      icon.props.children
    );
  return (
    <TouchableOpacity activeOpacity={1} ref={ref} {...inputProps}>
      <Box flexDirection="row" alignItems="center" {...newProps}>
        <Center
          backgroundColor={
            isChecked ? (isDisabled ? borderColor : activeColor) : 'transparent'
          }
          borderColor={
            isChecked
              ? isDisabled || isInvalid
                ? borderColor
                : activeColor
              : borderColor
          }
          borderWidth={2}
          borderRadius={5}
        >
          {icon && isChecked ? (
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
    </TouchableOpacity>
  );
};

export default React.forwardRef<TouchableOpacity, ICheckboxProps>(Checkbox);
