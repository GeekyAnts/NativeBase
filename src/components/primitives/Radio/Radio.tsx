import React, { memo, forwardRef } from 'react';
import { Pressable, IPressableProps } from '../Pressable';
import { Center } from '../../composites/Center';
import Box from '../Box';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { IRadioProps } from './types';
import { useRadio } from '@react-native-aria/radio';
import { RadioContext } from './RadioGroup';
import { mergeRefs } from '../../../utils';
import { CircleIcon } from '../Icon/Icons';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { composeEventHandlers, combineContextAndProps } from '../../../utils';
import { extractInObject, stylingProps } from '../../../theme/tools/utils';
import {
  useHover,
  useFocus,
  useIsPressed,
} from '../../primitives/Pressable/Pressable';

const Radio = ({ icon, wrapperRef, size, ...props }: IRadioProps, ref: any) => {
  const { hoverProps, isHovered } = useHover();
  const { pressableProps, isPressed } = useIsPressed();
  const { focusProps, isFocused } = useFocus();

  const contextState = React.useContext(RadioContext);

  const {
    isInvalid,
    isReadOnly,
    isIndeterminate,
    ...combinedProps
  } = combineContextAndProps(contextState, props);

  const inputRef = React.useRef(null);
  const { inputProps } = useRadio(props, contextState.state, inputRef);
  const { disabled: isDisabled, checked: isChecked } = inputProps;

  const {
    onPressIn,
    onPressOut,
    onHoverIn,
    onHoverOut,
    onFocus,
    onBlur,
    _interactionBox,
    _icon,
    ...resolvedProps
  } = usePropsResolution(
    'Radio',
    {
      ...combinedProps,
      size,
    },
    {
      isInvalid,
      isReadOnly,
      isDisabled,
      isIndeterminate,
      isChecked,
      isHovered,
      isPressed,
      isFocused,
    }
  );

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  // only calling below function when icon exist.
  const sizedIcon = () =>
    //@ts-ignore
    React.cloneElement(icon, {
      ..._icon,
    });

  const [layoutProps, nonLayoutProps] = extractInObject(resolvedProps, [
    ...stylingProps.margin,
    ...stylingProps.layout,
    ...stylingProps.flexbox,
    ...stylingProps.position,
    '_text',
  ]);

  return (
    <Pressable
      {...pressableProps}
      {...(inputProps as IPressableProps)}
      ref={mergeRefs([ref, wrapperRef])}
      accessibilityRole="radio"
      onPressIn={composeEventHandlers(onPressIn, pressableProps.onPressIn)}
      onPressOut={composeEventHandlers(onPressOut, pressableProps.onPressOut)}
      // @ts-ignore - web only
      onHoverIn={composeEventHandlers(onHoverIn, hoverProps.onHoverIn)}
      // @ts-ignore - web only
      onHoverOut={composeEventHandlers(onHoverOut, hoverProps.onHoverOut)}
      // @ts-ignore - web only
      onFocus={composeEventHandlers(
        composeEventHandlers(onFocus, focusProps.onFocus)
        // focusRingProps.onFocu
      )}
      // @ts-ignore - web only
      onBlur={composeEventHandlers(
        composeEventHandlers(onBlur, focusProps.onBlur)
        // focusRingProps.onBlur
      )}
    >
      <Center
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        borderRadius="full"
        {...layoutProps}
      >
        <Center>
          {/* Interaction Wrapper */}
          <Box {..._interactionBox} p={5} w="100%" height="100%" />
          {/* radio */}
          <Center {...nonLayoutProps}>
            {icon && sizedIcon && isChecked ? (
              sizedIcon()
            ) : (
              <CircleIcon {..._icon} opacity={isChecked ? 1 : 0} />
            )}
          </Center>
        </Center>
        {/* Label */}
        {props.children}
      </Center>
    </Pressable>
  );
};

export default memo(forwardRef(Radio));
