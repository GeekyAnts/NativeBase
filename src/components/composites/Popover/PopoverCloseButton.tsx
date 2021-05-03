import React from 'react';
import { useThemeProps } from '../../../hooks';
import Box from '../../primitives/Box';
import { default as IconButton, IIconButtonProps } from '../IconButton';
import { CloseIcon } from '../../primitives/Icon/Icons';
import { PopoverContext } from './PopoverContext';

const PopoverCloseButton = (
  props: Omit<IIconButtonProps, 'icon'>,
  ref: any
) => {
  const { onClose }: any = React.useContext(PopoverContext);
  const style = useThemeProps('Popover', props);

  return (
    <Box position="absolute" right={0} top={0} zIndex={1} ref={ref}>
      <IconButton
        {...style.popoverCloseButtonProps}
        {...props}
        icon={<CloseIcon size="xxs" />}
        onPress={onClose}
      />
    </Box>
  );
};

export default React.memo(React.forwardRef(PopoverCloseButton));
