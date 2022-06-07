import React, { memo, forwardRef } from 'react';
import Box, { IBoxProps } from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks';
import { ModalContext } from './Context';
import { Platform } from 'react-native';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

import { getThemeProps } from '../../../core';
import { useColorMode } from '../../../core/color-mode';
const ModalContent = (props: IBoxProps, ref?: any) => {
  const { colorMode } = useColorMode();

  const { style, unResolvedProps, styleFromProps } = getThemeProps(
    'ModalContent',
    colorMode,
    {},
    props
  );

  // console.log(styleFromProps, 'style from props &&&&*&*');
  const resolvedProps = usePropsResolution('ModalContent', {
    ...unResolvedProps,
    ...props,
  });
  const {
    contentSize,
    initialFocusRef,
    finalFocusRef,
    handleClose,
    visible,
  } = React.useContext(ModalContext);
  React.useEffect(() => {
    const finalRefVal = finalFocusRef ? finalFocusRef.current : null;
    if (visible) {
      if (initialFocusRef && initialFocusRef.current) {
        //@ts-ignore
        initialFocusRef.current.focus();
      }
    } else {
      if (finalRefVal) {
        //@ts-ignore
        finalRefVal.focus();
      }
    }
  }, [initialFocusRef, finalFocusRef, visible]);

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <Box
      {...contentSize}
      {...resolvedProps}
      ref={ref}
      onAccessibilityEscape={handleClose}
      //@ts-ignore - web only
      aria-modal="true"
      //@ts-ignore - web only
      accessibilityRole={Platform.OS === 'web' ? 'dialog' : undefined}
      accessibilityViewIsModal
      INTERNAL_themeStyle={[style, props.INTERNAL_themeStyle]}
    />
  );
};

export default memo(forwardRef(ModalContent));
