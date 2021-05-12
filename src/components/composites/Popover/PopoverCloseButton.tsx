import React from 'react';
import { usePropsResolution } from '../../../hooks';
import Box from '../../primitives/Box';
import { default as IconButton, IIconButtonProps } from '../IconButton';
import { CloseIcon } from '../../primitives/Icon/Icons';
import { PopoverContext } from './PopoverContext';

const PopoverCloseButton = (
  props: Omit<IIconButtonProps, 'icon'>,
  ref: any
) => {
  const { onClose }: any = React.useContext(PopoverContext);
  const { _icon, ...newProps } = usePropsResolution(
    'PopoverCloseButton',
    props
  );

  return (
    <Box position="absolute" right={1} top={1} zIndex={1} ref={ref}>
      <IconButton
        {...newProps}
        {...props}
        icon={<CloseIcon {..._icon} />}
        onPress={onClose}
      />
    </Box>
  );
};

export default React.memo(React.forwardRef(PopoverCloseButton));
