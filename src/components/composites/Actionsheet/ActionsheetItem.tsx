import React, { memo, forwardRef } from 'react';
import { Pressable } from '../../primitives/Pressable';
import Box from '../../primitives/Box';
import { HStack } from '../../primitives/Stack';
import Spinner from '../../primitives/Spinner';
import { usePropsResolution } from '../../../hooks';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import type { IActionsheetItemProps } from './types';

const ActionsheetItem = (
  {
    //@ts-ignore
    children,
    startIcon,
    rightIcon,
    leftIcon,
    endIcon,
    spinner,
    isDisabled,
    isLoading,
    spinnerPlacement = 'start',
    ...props
  }: IActionsheetItemProps,
  ref: any
) => {
  const {
    _text,
    _stack,
    _icon,
    _spinner,
    isLoadingText,
    ...resolvedProps
  } = usePropsResolution('ActionsheetItem', props, undefined, {
    cascadePseudoProps: true,
  });
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  if (leftIcon) {
    startIcon = leftIcon;
  }
  if (rightIcon) {
    endIcon = rightIcon;
  }
  if (endIcon && React.isValidElement(endIcon)) {
    endIcon = React.Children.map(
      endIcon,
      (child: JSX.Element, index: number) => {
        return React.cloneElement(child, {
          key: `button-end-icon-${index}`,
          ..._icon,
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
          ..._icon,
          ...child.props,
        });
      }
    );
  }
  const spinnerElement = spinner ? (
    spinner
  ) : (
    <Spinner color={_text?.color} {..._spinner} />
  );

  const boxChildren = (child: any) => {
    return child ? <Box _text={_text}>{child}</Box> : null;
  };

  return (
    <Pressable disabled={isDisabled || isLoading} {...resolvedProps} ref={ref}>
      <HStack {..._stack} test={true}>
        {startIcon && !isLoading ? startIcon : null}
        {isLoading && spinnerPlacement === 'start' ? spinnerElement : null}
        {isLoading
          ? isLoadingText
            ? boxChildren(isLoadingText)
            : null
          : boxChildren(children)}

        {endIcon && !isLoading ? endIcon : null}
        {isLoading && spinnerPlacement === 'end' ? spinnerElement : null}
      </HStack>
    </Pressable>
  );
};

export default memo(forwardRef(ActionsheetItem));
