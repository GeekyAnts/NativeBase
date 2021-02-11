import React from 'react';
import {
  TouchableOpacity,
  Platform,
  TouchableOpacityProps,
} from 'react-native';
import Icon from '../Icon';
import Box from '../Box';
import { useThemeProps } from '../../../hooks';
import type { IRadioProps } from './types';
import { mergeRefs } from './../../../utils';
import { useHover } from '@react-native-aria/interactions';
import { useRadio } from '@react-native-aria/radio';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { RadioContext } from './RadioGroup';

const Radio = ({ icon, children, ...props }: IRadioProps, ref: any) => {
  let contextState = React.useContext(RadioContext);
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

  const inputRef = React.useRef(null);
  let { inputProps } = useRadio(props, contextState.state, inputRef);

  // only calling below function when icon exist.
  const sizedIcon = () =>
    //@ts-ignore
    React.cloneElement(icon, {
      size,
      color:
        //@ts-ignore
        icon.props.color ?? isSelected
          ? inputProps.disabled
            ? borderColor
            : activeColor
          : borderColor,
    });

  let isSelected = contextState.state.selectedValue === props.value;

  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);
  const mergedRefs = mergeRefs([_ref, ref]);

  const outlineColor =
    isHovered && !inputProps.disabled
      ? activeColor
      : isSelected
      ? inputProps.disabled
        ? borderColor
        : activeColor
      : borderColor;

  let component = (
    <Box
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      {...newProps}
      opacity={inputProps.disabled ? 0.4 : 1}
      {...(Platform.OS === 'web'
        ? {
            disabled: inputProps.disabled,
            cursor: inputProps.disabled ? 'not-allowed' : 'auto',
          }
        : {})}
    >
      <Box
        borderColor={outlineColor}
        backgroundColor={inputProps.disabled ? 'muted.200' : 'transparent'}
        borderWidth={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius={999}
        p={'2px'}
      >
        {icon && isSelected ? (
          sizedIcon()
        ) : (
          <Icon
            name="circle"
            type="MaterialCommunityIcons"
            size={size}
            color={
              isSelected
                ? inputProps.disabled
                  ? borderColor
                  : activeColor
                : 'transparent'
            }
            opacity={isSelected ? 1 : 0}
          />
        )}
      </Box>
      {children}
    </Box>
  );

  return (
    <>
      {Platform.OS === 'web' ? (
        <label ref={_ref}>
          <VisuallyHidden>
            <input {...inputProps} ref={ref}></input>
          </VisuallyHidden>

          {component}
        </label>
      ) : (
        <TouchableOpacity
          activeOpacity={1}
          ref={mergedRefs}
          {...(inputProps as TouchableOpacityProps)}
        >
          {component}
        </TouchableOpacity>
      )}
    </>
  );
};

export default React.memo(
  React.forwardRef<TouchableOpacity, IRadioProps>(Radio)
);
