import React, { memo, forwardRef } from 'react';
import Box from '../Box';
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
import { wrapperPropMap } from './wrapperPropMap';
import { extractInObject } from '../../../theme/tools/utils';
import { InternalWrapper } from '../../internal';

const InternalCenter = ({ children, ...props }: any) => {
  return (
    <InternalWrapper alignItems="center" justifyContent="center" {...props}>
      {children}
    </InternalWrapper>
  );
};
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
        _radio,
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

      const [wrapperProps, nonWrapperProps] = extractInObject(resolvedProps, [
        ...wrapperPropMap,
      ]);

      // only calling below function when icon exist.
      const sizedIcon = () =>
        //@ts-ignore
        React.cloneElement(icon, {
          ..._icon,
        });
      const component = (
        <>
          <InternalCenter>
            {/* Interaction Box */}
            <Box
              style={{
                // @ts-ignore - only for web"
                transition: 'height 200ms, width 200ms',
              }}
              {..._interactionBox}
            />
            {/* Radio */}
            <InternalCenter {..._radio} {...nonWrapperProps}>
              {icon && sizedIcon && isChecked ? (
                sizedIcon()
              ) : (
                <CircleIcon {..._icon} opacity={isChecked ? 1 : 0} />
              )}
            </InternalCenter>
          </InternalCenter>
          {wrapStringChild(children, _text)}
        </>
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
          {...wrapperProps}
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
