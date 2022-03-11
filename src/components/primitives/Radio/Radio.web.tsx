import React, { memo, forwardRef } from 'react';
import Box from '../Box';
import { Stack } from '../Stack';
import { Center } from '../../composites/Center';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { wrapStringChild } from '../../../utils/wrapStringChild';
import type { IRadioProps } from './types';
import { mergeRefs } from './../../../utils';
import { useHover } from '@react-native-aria/interactions';
import { useRadio } from '@react-native-aria/radio';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { RadioContext } from './RadioGroup';
import { useFocusRing } from '@react-native-aria/focus';
import { CircleIcon } from '../Icon/Icons';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { combineContextAndProps, isEmptyObj } from '../../../utils';
import { useFormControlContext } from '../../composites/FormControl';

const RadioComponent = memo(
  forwardRef(
    (
      {
        icon,
        inputProps,
        combinedProps,
        children,
        wrapperRef,
        isHovered: isHoveredProp,
        isFocusVisible: isFocusVisibleProp,
        ...props
      }: any,
      ref: any
    ) => {
      const { isInvalid, isReadOnly, isIndeterminate } = combinedProps;
      const { disabled: isDisabled, checked: isChecked } = inputProps;
      const _ref = React.useRef(null);
      const { isHovered } = useHover({}, _ref);
      const mergedRefs = mergeRefs([_ref, wrapperRef]);
      const { focusProps, isFocusVisible } = useFocusRing();

      const {
        _interactionBox,
        _icon,
        _stack,
        _text,
        ...resolvedProps
      } = usePropsResolution('Radio', combinedProps, {
        isInvalid,
        isReadOnly,
        isFocusVisible: isFocusVisibleProp || isFocusVisible,
        isDisabled,
        isIndeterminate,
        isChecked,
        isHovered: isHoveredProp || isHovered,
      });

      // only calling below function when icon exist.
      const sizedIcon = () =>
        //@ts-ignore
        React.cloneElement(icon, {
          ..._icon,
        });

      const component = (
        <Stack {..._stack}>
          <Center>
            {/* Interaction Box */}
            <Box {..._interactionBox} />
            {/* Radio */}
            <Center {...resolvedProps}>
              {icon && sizedIcon && isChecked ? (
                sizedIcon()
              ) : (
                <CircleIcon {..._icon} opacity={isChecked ? 1 : 0} />
              )}
            </Center>
          </Center>
          {wrapStringChild(children, _text)}
        </Stack>
      );
      //TODO: refactor for responsive prop
      if (useHasResponsiveProps(props)) {
        return null;
      }

      return (
        <Box
          // @ts-ignore - RN web supports accessibilityRole="label"
          accessibilityRole="label"
          ref={mergedRefs}
        >
          <VisuallyHidden>
            <input {...inputProps} {...focusProps} ref={ref} />
          </VisuallyHidden>
          {component}
        </Box>
      );
    }
  )
);

const Radio = (
  {
    icon,
    children,
    wrapperRef,
    isHovered: isHoveredProp,
    isFocusVisible: isFocusVisibleProp,
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

  //@ts-ignore
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const inputProps = React.useMemo(() => radioState.inputProps, [
    radioState.inputProps.checked,
    radioState.inputProps.disabled,
  ]);

  const [contextCombinedProps] = React.useState({
    ...combinedProps,
  });

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
      ref={ref}
      icon={icon}
      wrapperRef={wrapperRef}
      isHovered={isHoveredProp}
      isFocusVisible={isFocusVisibleProp}
    />
  );
};

export default memo(forwardRef(Radio));
