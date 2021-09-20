import React, { memo, forwardRef } from 'react';
import Box from '../../primitives/Box';
import { HStack } from '../../primitives/Stack';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useFormControlContext } from './useFormControl';
import type { IFormControlErrorMessageProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const FormControlErrorMessage = (
  {
    children,
    _disabled,
    rightIcon,
    startIcon,
    leftIcon,
    endIcon,
    ...props
  }: IFormControlErrorMessageProps,
  ref: any
) => {
  const { _text, _stack, ...resolvedProps } = usePropsResolution(
    'FormControlErrorMessage',
    props
  );

  const formControlContext = useFormControlContext();
  if (rightIcon) {
    endIcon = rightIcon;
  }
  if (leftIcon) {
    startIcon = leftIcon;
  }
  if (endIcon && React.isValidElement(endIcon)) {
    endIcon = React.Children.map(
      endIcon,
      (child: JSX.Element, index: number) => {
        return React.cloneElement(child, {
          key: `button-end-icon-${index}`,
          ..._text,
          ...child.props,
        });
      }
    );
  }
  if (startIcon && React.isValidElement(startIcon)) {
    startIcon = React.Children.map(
      startIcon,
      (child: JSX.Element, index: number) => {
        return React.cloneElement(child, {
          key: `button-start-icon-${index}`,
          ..._text,
          ...child.props,
        });
      }
    );
  }

  React.useEffect(() => {
    formControlContext?.setHasFeedbackText(true);
    return () => {
      formControlContext?.setHasFeedbackText(false);
    };
  });
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return formControlContext?.isInvalid ? (
    <Box
      nativeID={formControlContext?.helpTextId}
      {...resolvedProps}
      {...props}
      {...(formControlContext?.isDisabled && _disabled)}
      ref={ref}
    >
      <HStack {..._stack}>
        {startIcon}
        <Box _text={_text}>{children}</Box>
        {endIcon}
      </HStack>
    </Box>
  ) : null;
};

export default memo(forwardRef(FormControlErrorMessage));
