import {
  keyboardDismissHandlerManager,
  useThemeProps,
  useToken,
} from '../../../hooks';
import React from 'react';
import type { IPopoverContentProps } from './types';
import { Popper } from '../Popper';
import { PopoverContext } from './PopoverContext';

export const PopoverContent = React.forwardRef(
  (props: IPopoverContentProps, ref: any) => {
    const { onClose, initialFocusRef, finalFocusRef } = React.useContext(
      PopoverContext
    );
    let defaultStyle = useThemeProps('Popover', props);
    defaultStyle = props.isUnstyled ? {} : defaultStyle.popoverContentProps;

    const arrowDefaultColor =
      props.bgColor ??
      props.bg ??
      props.backgroundColor ??
      defaultStyle.backgroundColor;
    const color = useToken('colors', arrowDefaultColor);

    React.useEffect(() => {
      if (initialFocusRef && initialFocusRef.current) {
        initialFocusRef.current.focus();
      }

      return () => {
        if (finalFocusRef && finalFocusRef.current) {
          finalFocusRef.current.focus();
        }
      };
    }, [finalFocusRef, initialFocusRef]);

    React.useEffect(() => {
      let removeHandler = () => {};
      removeHandler = keyboardDismissHandlerManager.push(onClose);
      return () => {
        removeHandler();
      };
    }, []);

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

    return (
      <Popper.Content {...defaultStyle} {...props} ref={ref}>
        {arrowElement}
        {restChildren}
      </Popper.Content>
    );
  }
);

PopoverContent.displayName = 'PopoverContent';
