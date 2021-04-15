import React from 'react';
import { default as Pressable, IPressableProps } from '../Pressable';
import Icon from '../Icon';
import { Center } from '../../composites/Center';
import Box from '../Box';
import { useThemeProps } from '../../../hooks';
import type { IRadioProps } from './types';
import { useRadio } from '@react-native-aria/radio';
import { RadioContext } from './RadioGroup';

const Radio = ({ icon, children, ...props }: IRadioProps, ref: any) => {
  const contextState = React.useContext(RadioContext);
  const {
    _interactionBox: { _pressed: _iterationBoxPressed, ..._interactionBox },
    _radio: {
      _checked: _radioChecked,
      _disabled: _radioDisabled,
      _invalid: _radioInvalid,
      ..._radio
    },
    _icon,
    isInvalid,
    size,
    ...themedProps
  } = useThemeProps('Radio', {
    ...contextState,
    ...props,
  });

  const inputRef = React.useRef(null);
  const { inputProps } = useRadio(props, contextState.state, inputRef);
  const { disabled, checked } = inputProps;

  console.log(inputProps);

  // only calling below function when icon exist.
  const sizedIcon = () =>
    //@ts-ignore
    React.cloneElement(icon, {
      size,
      ..._icon,
    });

  return (
    <Pressable
      {...(inputProps as IPressableProps)}
      ref={ref}
      accessibilityRole="radio"
    >
      {({ isPressed }: any) => {
        return (
          <Center
            flexDirection="row"
            justifyContent="center "
            alignItems="center"
            borderRadius="full"
            {...themedProps}
          >
            <Center>
              {/* Interaction Wrapper */}
              <Box
                {..._interactionBox}
                {...(isPressed && _iterationBoxPressed)}
                p={5}
                w="100%"
                height="100%"
              />
              {/* radio */}
              <Center
                {..._radio}
                {...(checked && _radioChecked)}
                {...(disabled && _radioDisabled)}
                {...(isInvalid && _radioInvalid)}
              >
                {icon && sizedIcon && checked ? (
                  sizedIcon()
                ) : (
                  <Icon
                    name="circle"
                    size={size}
                    {..._icon}
                    opacity={checked ? 1 : 0}
                  />
                )}
              </Center>
            </Center>
            {/* Label */}
            {children}
          </Center>
        );
      }}
    </Pressable>
  );
};

export default React.memo(React.forwardRef(Radio));
