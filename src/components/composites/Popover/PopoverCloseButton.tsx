import React from 'react';
import { usePropsResolution } from '../../../hooks';
import { default as IconButton, IIconButtonProps } from '../IconButton';
import { CloseIcon } from '../../primitives/Icon/Icons';
import { PopoverContext } from './PopoverContext';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '../../../utils';

const PopoverCloseButton = (
  props: Omit<IIconButtonProps, 'icon'>,
  ref: any
) => {
  const { onClose }: any = React.useContext(PopoverContext);
  const _ref = React.useRef(null);

  const { isHovered } = useHover({}, _ref);

  const { _icon, ...resolvedPorps } = usePropsResolution(
    'PopoverCloseButton',
    props,
    { isHovered }
  );
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <IconButton
      ref={mergeRefs([ref, _ref])}
      {...resolvedPorps}
      icon={<CloseIcon {..._icon} />}
      onPress={onClose}
    />
  );
};

export default React.memo(React.forwardRef(PopoverCloseButton));
