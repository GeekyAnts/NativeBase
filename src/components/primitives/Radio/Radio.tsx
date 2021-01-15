import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import Icon from '../Icon';
import Box from '../Box';
import { useThemeProps } from '../../../hooks';
import { RadioContext } from './RadioGroup';
import type { IRadioProps } from './props';
import { useRadio } from './useRadio';

const Radio = ({ icon, children, ...props }: IRadioProps, ref: any) => {
  const contextState = React.useContext(RadioContext);

  const {
    activeColor,
    borderColor,
    iconColor,
    size,
    isInvalid,
    ...newProps
  } = useThemeProps('Radio', {
    ...contextState,
    ...props,
  });

  // only calling below function when icon exist.
  const sizedIcon = () =>
    //@ts-ignore
    React.cloneElement(icon, {
      size,
      //@ts-ignore
      color: icon.props.color ? icon.props.color : iconColor,
    });

  const { inputProps } = useRadio(props, contextState, null);
  const { checked, disabled: isDisabled } = inputProps;

  return (
    <TouchableOpacity activeOpacity={1} ref={ref} {...inputProps}>
      <Box
        flexDirection="row"
        justifyContent="center"
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
        <Box
          backgroundColor={
            checked ? (isDisabled ? borderColor : activeColor) : 'transparent'
          }
          borderColor={
            checked
              ? isDisabled || isInvalid
                ? borderColor
                : activeColor
              : borderColor
          }
          borderWidth={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius={999}
        >
          {icon && checked ? (
            sizedIcon()
          ) : (
            <Icon
              name="circle-medium"
              type="MaterialCommunityIcons"
              size={size}
              color={iconColor}
              opacity={checked ? 1 : 0}
            />
          )}
        </Box>
        {children}
      </Box>
    </TouchableOpacity>
  );
};

export default React.forwardRef<TouchableOpacity, IRadioProps>(Radio);
