import React from 'react';
import { useThemeProps } from '../../../hooks';
import Box from '../../primitives/Box';
import { default as IconButton, IIconButtonProps } from '../IconButton';
import Icon from '../../primitives/Icon';
import { PopoverContext } from './PopoverContext';

const PopoverCloseButton = (
  props: Omit<IIconButtonProps, 'icon'>,
  ref: any
) => {
  const { onClose }: any = React.useContext(PopoverContext);
  const style = useThemeProps('Popover', props);

  return (
    <Box position="absolute" right={1} top={1} zIndex={1} ref={ref}>
      <IconButton
        {...style.popoverCloseButtonProps}
        {...props}
        icon={<Icon name="close" size="xs" />}
        onPress={onClose}
      />
    </Box>
  );
};

export default React.memo(React.forwardRef(PopoverCloseButton));
