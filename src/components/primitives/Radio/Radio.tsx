import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from '../Icon';
import Box from '../Box';
import { usePropsConfig } from '../../../hooks';
import { RadioContext } from './RadioGroup';
import type { IRadioProps } from './props';
import { useRadio } from './useRadio';

const Radio = (props: IRadioProps, ref: any) => {
  const { children, icon } = props;

  const contextState = React.useContext(RadioContext);

  const {
    activeColor,
    borderColor,
    iconColor,
    size,
    isInvalid,
    ...newProps
  } = usePropsConfig('Radio', {
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
