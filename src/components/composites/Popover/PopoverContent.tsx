import React from 'react';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, position, space } from 'styled-system';
import {
  customBackground,
  customBorder,
  customExtra,
  customLayout,
  customOutline,
  customPosition,
  customShadow,
} from '../../../utils/customProps';
import { default as Box } from '../../primitives/Box';
import Tooltip from './Tooltip';
import type { IPopoverProps } from './types';
import { PopoverContext } from './popover';

const StyledPopover = styled(Tooltip)<IPopoverProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  position,
  customPosition,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout
);
const PopoverContent = ({
  children,
  ...props
}: IPopoverProps & { ref?: any }) => {
  const {
    PopoverRef,
    PopoverTrigger,
    onOpen,
    initialFocusRef,
    onClose,
    finalFocusRef,
    closeOnBlur,
    newProps,
    backgroundColor,
    borderColor,
    borderWidth,
  }: any = React.useContext(PopoverContext);
  return (
    <StyledPopover
      {...newProps.popoverContentProps}
      width={newProps._width || newProps.size || '45%'}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderWidth={borderWidth}
      ref={PopoverRef}
      onOpen={() => {
        onOpen && onOpen();
        initialFocusRef?.current.focus();
      }}
      onClose={() => {
        onClose && onClose();
        finalFocusRef?.current.focus();
      }}
      closeOnBlur={closeOnBlur ?? true}
      popover={
        <Box width="100%">
          <Box>{children}</Box>
        </Box>
      }
      {...props}
    >
      {PopoverTrigger}
    </StyledPopover>
  );
};

export default React.memo(PopoverContent);
