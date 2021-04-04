import React from 'react';
import { useThemeProps } from '../../../hooks';
import View from '../../primitives/View';
import { default as IconButton, IIconButtonProps } from '../IconButton';
import Icon from '../../primitives/Icon';
import { PopoverContext } from './PopoverContext';

const PopoverCloseButton = (props: Omit<IIconButtonProps, 'icon'>) => {
  const { onClose }: any = React.useContext(PopoverContext);
  const style = useThemeProps('Popover', props);

  return (
    <View position="absolute" right={0} top={0} zIndex={1}>
      <IconButton
        {...style.popoverCloseButtonProps}
        {...props}
        icon={<Icon name="close" size="xs" />}
        onPress={onClose}
      />
    </View>
  );
};

export default React.memo(PopoverCloseButton);
