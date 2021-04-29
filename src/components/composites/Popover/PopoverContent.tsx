import { keyboardDismissHandlerManager, useThemeProps } from '../../../hooks';
import React from 'react';
import Box from '../../primitives/Box';
import type { IPopoverContentProps } from './types';
import { Popper } from '../Popper';
import { useToken } from '../../../hooks';
import { PopoverContext } from './PopoverContext';

export const PopoverContent = React.forwardRef(
  (props: IPopoverContentProps, ref: any) => {
    const { onClose, initialFocusRef, finalFocusRef } = React.useContext(
      PopoverContext
    );
    let defaultStyle = useThemeProps('Popover', props);
    defaultStyle = props.isUnstyled ? {} : defaultStyle.popoverContentProps;
    const color = useToken('colors', defaultStyle.backgroundColor);

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

    return (
      <Popper.Content>
        <Popper.Arrow height={10} width={16} color={color} />
        <Box {...defaultStyle} {...props} ref={ref} />
      </Popper.Content>
    );
  }
);

PopoverContent.displayName = 'PopoverContent';
