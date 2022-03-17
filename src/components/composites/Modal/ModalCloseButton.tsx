import React, { memo, forwardRef } from 'react';
import { ModalContext } from './Context';
import { usePropsResolution } from '../../../hooks';
import Button from '../../primitives/Button/Button';
import { CloseIcon } from '../../primitives/Icon/Icons';
import type { IButtonProps } from '../../primitives/Button';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '../../../utils';

const ModalCloseButton = (props: IButtonProps, ref?: any) => {
  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);
  const { _icon, ...resolvedProps } = usePropsResolution(
    'ModalCloseButton',
    props,
    { isHovered }
  );
  const { handleClose } = React.useContext(ModalContext);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <Button
      variant="ghost"
      {...resolvedProps}
      onPress={handleClose}
      accessibilityLabel="Close dialog"
      ref={mergeRefs([ref, _ref])}
    >
      <CloseIcon {..._icon} />
    </Button>
  );
};

export default memo(forwardRef(ModalCloseButton));
