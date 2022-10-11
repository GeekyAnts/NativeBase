import React, { memo, forwardRef } from 'react';
//@ts-ignore
import stableHash from 'stable-hash';
import { Pressable, IPressableProps } from '../Pressable';
import { Center } from '../../composites/Center';
import Box from '../Box';
import { Stack } from '../Stack';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { wrapStringChild } from '../../../utils/wrapStringChild';
import type { IRadioProps } from './types';
import { useRadio } from '@react-native-aria/radio';
import { RadioContext } from './RadioGroup';
import { mergeRefs } from '../../../utils';
import { CircleIcon } from '../Icon/Icons';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import {
  composeEventHandlers,
  combineContextAndProps,
  isEmptyObj,
} from '../../../utils';
import { extractInObject, stylingProps } from '../../../theme/tools/utils';
import {
  useHover,
  useFocus,
  useIsPressed,
} from '../../primitives/Pressable/Pressable';
import { useFormControlContext } from '../../composites/FormControl';

const RadioComponent = memo(
  forwardRef(
    (
      {
        icon,
        inputProps,
        combinedProps,
        size,
        children,
        wrapperRef,
        isHovered: isHoveredProp,
        isPressed: isPressedProp,
        isFocused: isFocusedProp,
      }: any,
      ref: any
    ) => {
      const { isInvalid, isReadOnly, isIndeterminate } = combinedProps;
      const { hoverProps, isHovered } = useHover();
      const { pressableProps, isPressed } = useIsPressed();
      const { focusProps, isFocused } = useFocus();

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
        _stack,
        _text,
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
          isHovered: isHoveredProp || isHovered,
          isPressed: isPressedProp || isPressed,
          isFocused: isFocusedProp || isFocused,
        }
      );

      const [, cleanInputProps] = extractInObject(inputProps, [
        ...stylingProps.margin,
        ...stylingProps.layout,
        ...stylingProps.flexbox,
        ...stylingProps.position,
        ...stylingProps.background,
        ...stylingProps.padding,
        ...stylingProps.border,
        '_text',
      ]);

      // only calling below function when icon exist.
      const sizedIcon = () =>
        //@ts-ignore
        React.cloneElement(icon, {
          ..._icon,
        });

      return (
        <Pressable
          disabled={isDisabled}
          {...pressableProps}
          {...(cleanInputProps as IPressableProps)}
          ref={mergeRefs([ref, wrapperRef])}
          accessibilityRole="radio"
          onPressIn={composeEventHandlers(onPressIn, pressableProps.onPressIn)}
          onPressOut={composeEventHandlers(
            onPressOut,
            pressableProps.onPressOut
          )}
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
          <Stack {..._stack}>
            <Center>
              {/* Interaction Wrapper */}
              <Box {..._interactionBox} />
              {/* radio */}
              <Center {...resolvedProps}>
                {icon && sizedIcon && isChecked ? (
                  sizedIcon()
                ) : (
                  <CircleIcon {..._icon} opacity={isChecked ? 1 : 0} />
                )}
              </Center>
            </Center>
            {/* Label */}
            {wrapStringChild(children, _text)}
          </Stack>
        </Pressable>
      );
    }
  )
);

const Radio = (
  {
    icon,
    children,
    size,
    wrapperRef,
    isHovered: isHoveredProp,
    isPressed: isPressedProp,
    isFocused: isFocusedProp,
    ...props
  }: IRadioProps,
  ref: any
) => {
  const formControlContext = useFormControlContext();
  const contextState = React.useContext(RadioContext);
  const combinedProps = combineContextAndProps(
    { ...formControlContext, ...contextState },
    props
  );
  const inputRef = React.useRef(null);
  const radioState = useRadio(
    { ...combinedProps, 'aria-label': props.accessibilityLabel, children },
    contextState.state ?? {},
    inputRef
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const inputProps = React.useMemo(() => radioState.inputProps, [
    radioState.inputProps.checked,
    radioState.inputProps.disabled,
  ]);

  const contextCombinedProps = React.useMemo(() => {
    return { ...combinedProps };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stableHash(combinedProps)]);

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  if (isEmptyObj(contextState)) {
    console.error('Error: Radio must be wrapped inside a Radio.Group');
    return <></>;
  }

  return (
    <RadioComponent
      inputProps={inputProps}
      combinedProps={contextCombinedProps}
      children={children}
      size={size}
      ref={ref}
      icon={icon}
      wrapperRef={wrapperRef}
      isHovered={isHoveredProp}
      isPressed={isPressedProp}
      isFocused={isFocusedProp}
    />
  );
};

export default memo(forwardRef(Radio));
