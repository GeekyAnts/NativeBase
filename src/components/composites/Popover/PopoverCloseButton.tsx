import React from 'react';
import { usePropsResolution } from '../../../hooks';
import { default as IconButton, IIconButtonProps } from '../IconButton';
import { CloseIcon } from '../../primitives/Icon/Icons';
import { PopoverContext } from './PopoverContext';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const PopoverCloseButton = (
  props: Omit<IIconButtonProps, 'icon'>,
  ref: any
) => {
  const { onClose }: any = React.useContext(PopoverContext);
  const { _icon, ...resolvedPorps } = usePropsResolution(
    'PopoverCloseButton',
    props
  );
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <IconButton
      ref={ref}
      {...resolvedPorps}
      icon={<CloseIcon {..._icon} />}
      onPress={onClose}
    />
  );
};

export default React.memo(React.forwardRef(PopoverCloseButton));
