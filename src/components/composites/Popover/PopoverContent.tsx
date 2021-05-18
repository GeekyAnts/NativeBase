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
    } = React.useContext(PopoverContext);
    let newProps = usePropsResolution('PopoverContent', props);

    const arrowDefaultColor =
      props.bgColor ??
      props.bg ??
      props.backgroundColor ??
      newProps.backgroundColor;
    const color = useToken('colors', arrowDefaultColor);

    React.useEffect(() => {
      let finalFocusRefCurrentVal = finalFocusRef?.current;
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
    let restChildren: any = [];
    React.Children.forEach(props.children, (child) => {
      if (child.type.displayName === 'PopperArrow') {
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

    return (
      <Popper.Content
        nativeID={popoverContentId}
        {...accessibilityProps}
        {...newProps}
        {...props}
        ref={ref}
      >
        {arrowElement}
        {restChildren}
      </Popper.Content>
    );
  }
);

PopoverContent.displayName = 'PopoverContent';
