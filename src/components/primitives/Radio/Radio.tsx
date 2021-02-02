import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import Icon from '../Icon';
import Box from '../Box';
import { useThemeProps } from '../../../hooks';
import { RadioContext } from './RadioGroup';
import type { IRadioProps } from './types';
import { useRadio } from './useRadio';
import { Hoverable } from './../../../utils';

const Radio = ({ icon, children, ...props }: IRadioProps, ref: any) => {
  const contextState = React.useContext(RadioContext);

  const {
    activeColor,
    borderColor,
    size,
    // isInvalid,
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
      color:
        //@ts-ignore
        icon.props.color ?? checked
          ? isDisabled
            ? borderColor
            : activeColor
          : borderColor,
    });

  const { inputProps } = useRadio(props, contextState, null);
  const { checked, disabled: isDisabled } = inputProps;
  return (
    <TouchableOpacity activeOpacity={1} ref={ref} {...inputProps}>
      <Hoverable>
        {(isHovered: boolean) => {
          const outlineColor =
            isHovered && !isDisabled
              ? activeColor
              : checked
              ? isDisabled
                ? borderColor
                : activeColor
              : borderColor;
          return (
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
                borderColor={outlineColor}
                backgroundColor={isDisabled ? 'muted.200' : 'transparent'}
                borderWidth={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius={999}
                p={'2px'}
              >
                {icon && checked ? (
                  sizedIcon()
                ) : (
                  <Icon
                    name="circle"
                    type="MaterialCommunityIcons"
                    size={size}
                    color={
                      checked
                        ? isDisabled
                          ? borderColor
                          : activeColor
                        : 'transparent'
                    }
                    opacity={checked ? 1 : 0}
                  />
                )}
              </Box>
              {children}
            </Box>
          );
        }}
      </Hoverable>
    </TouchableOpacity>
  );
};

export default React.memo(
  React.forwardRef<TouchableOpacity, IRadioProps>(Radio)
);
