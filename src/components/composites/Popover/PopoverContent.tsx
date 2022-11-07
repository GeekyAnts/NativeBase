import {
  useKeyboardDismissable,
  usePropsResolution,
  useToken,
} from '../../../hooks';
import React from 'react';
import { Platform } from 'react-native';
import type { IPopoverContentProps } from './types';
import { Popper } from '../Popper';
import { PopoverContext } from './PopoverContext';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

export const PopoverContent = React.forwardRef(
  (props: IPopoverContentProps, ref: any) => {
    const {
      onClose,
      initialFocusRef,
      finalFocusRef,
      popoverContentId,
      headerMounted,
      bodyMounted,
      bodyId,
      headerId,
      isOpen,
    } = React.useContext(PopoverContext);
    const resolvedProps = usePropsResolution('PopoverContent', props);

    const arrowDefaultColor =
      props.bgColor ??
      props.bg ??
      props.backgroundColor ??
      resolvedProps.backgroundColor;
    const color = useToken('colors', arrowDefaultColor);

    React.useEffect(() => {
      const finalFocusRefCurrentVal = finalFocusRef?.current;
      if (initialFocusRef && initialFocusRef.current) {
        initialFocusRef.current.focus();
      }

      return () => {
        if (finalFocusRefCurrentVal) {
          finalFocusRefCurrentVal.focus();
        }
      };
    }, [finalFocusRef, initialFocusRef]);

    useKeyboardDismissable({
      enabled: true,
      callback: onClose,
    });

    let arrowElement = null;
    const restChildren: any = [];
    React.Children.toArray(props.children).forEach((child: any) => {
      if (child?.type?.displayName === 'PopperArrow') {
        arrowElement = React.cloneElement(child, {
          backgroundColor: child.props.color ?? color,
        });
      } else {
        restChildren.push(child);
      }
    });

    const accessibilityProps =
      Platform.OS === 'web'
        ? ({
            'accessibilityRole': 'dialog',
            'aria-labelledby': headerMounted ? headerId : undefined,
            'aria-describedby': bodyMounted ? bodyId : undefined,
          } as any)
        : {};

    //TODO: refactor for responsive prop
    if (useHasResponsiveProps(props)) {
      return null;
    }

    return (
      <Popper.Content
        nativeID={popoverContentId}
        {...accessibilityProps}
        {...resolvedProps}
        ref={ref}
        isOpen={isOpen}
      >
        {arrowElement}
        {restChildren}
      </Popper.Content>
    );
  }
);

PopoverContent.displayName = 'PopoverContent';
