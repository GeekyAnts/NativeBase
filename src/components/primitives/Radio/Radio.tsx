import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import Icon from '../Icon';
import Box from '../Box';
import { useThemeProps } from '../../../hooks';
// import { RadioContext } from './RadioGroup';
import type { IRadioProps } from './types';
// import { useRadio } from './useRadio';
import { mergeRefs } from './../../../utils';
import { useHover } from '@react-native-aria/interactions';
import { useRadio } from '@react-native-aria/radio';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { RadioContext } from './RadioGroup';

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

  let { state, isReadOnly, isDisabled } = React.useContext(RadioContext);
  const inputRef = React.useRef(null);
  let { inputProps } = useRadio(
    { isReadOnly, isDisabled, ...props },
    state,
    inputRef
  );

  let isSelected = state.selectedValue === props.value;
  const { checked, disabled: isDisabled } = inputProps;

  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);

  const outlineColor =
    isHovered && !isDisabled
      ? activeColor
      : checked
      ? isDisabled
        ? borderColor
        : activeColor
      : borderColor;
  let component = (
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
              checked ? (isDisabled ? borderColor : activeColor) : 'transparent'
            }
            opacity={checked ? 1 : 0}
          />
        )}
      </Box>
      {children}
    </Box>
  );
  return (
    <>
      {Platform.OS === 'web' ? (
        <label>
          <VisuallyHidden>
            <input {...inputProps} ref={ref}></input>
          </VisuallyHidden>

          {component}
        </label>
      ) : (
        <TouchableOpacity
          activeOpacity={1}
          ref={mergeRefs([ref, _ref])}
          {...inputProps}
          {...inputProps}
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
