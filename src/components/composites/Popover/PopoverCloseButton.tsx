import React from 'react';
import View from '../../primitives/View';
import { default as CloseButton, ICloseButtonProps } from '../CloseButton';
import { PopoverContext } from './popover';

const PopoverCloseButton = (props: ICloseButtonProps) => {
  const {
    PopoverRef,
    newProps: { popoverCloseButtonProps },
  }: any = React.useContext(PopoverContext);

  return (
    <View position="absolute" right={0} top={0} zIndex={1}>
      <CloseButton
        {...popoverCloseButtonProps}
        {...props}
        onPress={() => PopoverRef?.current.toggleTooltip()}
      />
    </View>
  );
};

export default React.memo(PopoverCloseButton);
