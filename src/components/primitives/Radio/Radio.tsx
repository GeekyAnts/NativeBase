import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
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

  // only calling below function when icon exist.
  const sizedIcon = () =>
    //@ts-ignore
    React.cloneElement(icon, {
      size,
      color:
        //@ts-ignore
        icon.props.color ?? isSelected
          ? contextState.isDisabled
            ? borderColor
            : activeColor
          : borderColor,
    });

  const inputRef = React.useRef(null);
  let { inputProps } = useRadio(
    {
      isReadOnly: contextState.isReadOnly,
      isDisabled: contextState.isDisabled,
      ...props,
    },
    contextState.state,
    inputRef
  );

  let isSelected = contextState.state.selectedValue === props.value;

  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);

  const outlineColor =
    isHovered && !contextState.isDisabled
      ? activeColor
      : isSelected
      ? contextState.isDisabled
        ? borderColor
        : activeColor
      : borderColor;
  let component = (
    <Box
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      {...newProps}
      opacity={contextState.isDisabled ? 0.4 : 1}
      {...(Platform.OS === 'web'
        ? {
            disabled: contextState.isDisabled,
            cursor: contextState.isDisabled ? 'not-allowed' : 'auto',
          }
        : {})}
    >
      <Box
        borderColor={outlineColor}
        backgroundColor={contextState.isDisabled ? 'muted.200' : 'transparent'}
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
                ? contextState.isDisabled
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
        <label>
          <VisuallyHidden>
            <input {...inputProps} ref={ref}></input>
          </VisuallyHidden>

          {component}
        </label>
      ) : (
        //@ts-ignore
        <TouchableOpacity
          activeOpacity={1}
          ref={mergeRefs([ref, _ref])}
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
