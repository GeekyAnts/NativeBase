import React, { memo, forwardRef } from 'react';
import Box, { IBoxProps } from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks';
import { ModalContext } from './Context';
import { Platform } from 'react-native';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const ModalContent = (props: IBoxProps, ref?: any) => {
  const { ...newProps } = usePropsResolution('ModalContent', props);
  const {
    contentSize,
    initialFocusRef,
    finalFocusRef,
    handleClose,
  } = React.useContext(ModalContext);
  React.useEffect(() => {
    let finalRefVal = finalFocusRef ? finalFocusRef.current : null;
    if (initialFocusRef && initialFocusRef.current) {
      //@ts-ignore
      initialFocusRef.current.focus();
    }

    return () => {
      if (finalRefVal) {
        //@ts-ignore
        finalRefVal.focus();
      }
    };
  }, [initialFocusRef, finalFocusRef]);

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <Box
      {...contentSize}
      {...newProps}
      ref={ref}
      onAccessibilityEscape={handleClose}
      //@ts-ignore - web only
      aria-modal="true"
      //@ts-ignore - web only
      accessibilityRole={Platform.OS === 'web' ? 'dialog' : undefined}
      accessibilityViewIsModal
    />
  );
};

export default memo(forwardRef(ModalContent));
