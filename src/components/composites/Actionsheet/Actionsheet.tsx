import React, { memo, forwardRef } from 'react';
import { Modal } from '../../composites/Modal';
import type { IActionsheetProps } from './types';
import { usePropsResolution } from '../../../hooks';
import { ActionSheetContext } from './ActionSheetContext';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { getThemeProps } from '../../../core';
import { useColorMode } from '../../../core/color-mode';
const Actionsheet = (
  { children, hideDragIndicator = false, ...props }: IActionsheetProps,
  ref: any
) => {
  const { colorMode } = useColorMode();

  const {
    style,
    unResolvedProps,
    restDefaultProps,
    styleFromProps,
  } = getThemeProps('Actionsheet', colorMode, {}, props);

  const {
    isOpen,
    disableOverlay,
    onClose,
    ...resolvedProps
  } = usePropsResolution('Actionsheet', { ...unResolvedProps, ...props });

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  console.log(restDefaultProps, isOpen, 'actionsheet here ******');
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      {...restDefaultProps}
      {...resolvedProps}
      overlayVisible={disableOverlay ? false : true}
      closeOnOverlayClick={disableOverlay ? false : true}
      ref={ref}
      INTERNAL_themeStyle={style}
    >
      <ActionSheetContext.Provider value={{ hideDragIndicator }}>
        {children}
      </ActionSheetContext.Provider>
    </Modal>
  );
};

export default memo(forwardRef(Actionsheet));
