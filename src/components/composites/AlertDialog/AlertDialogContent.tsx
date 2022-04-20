import React, { memo, forwardRef } from 'react';
import Box, { IBoxProps } from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks';
import { AlertDialogContext } from './Context';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const AlertDialogContent = (props: IBoxProps, ref?: any) => {
  const newProps = usePropsResolution('AlertDialogContent', props);
  const {
    contentSize,
    initialFocusRef,
    finalFocusRef,
    handleClose,
  } = React.useContext(AlertDialogContext);
  React.useEffect(() => {
    const finalRefVal = finalFocusRef ? finalFocusRef.current : null;
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
      accessibilityRole="alert"
      accessibilityViewIsModal
    />
  );
};

export default memo(forwardRef(AlertDialogContent));
