import React, { memo, forwardRef } from 'react';
import { Modal } from '../../composites/Modal';
import type { IActionsheetFooterProps } from './types';
import { usePropsResolution } from '../../../hooks';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { getThemeProps } from '../../../core';
import { useColorMode } from '../../../core/color-mode';

const ActionsheetFooter = (props: IActionsheetFooterProps, ref?: any) => {
  const { colorMode } = useColorMode();

  const { style, unResolvedProps, styleFromProps } = getThemeProps(
    'ActionsheetFooter',
    colorMode,
    {},
    props
  );
  const resolvedProps = usePropsResolution('ActionsheetFooter', {
    ...unResolvedProps,
    ...props,
  });
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <Modal.Content {...resolvedProps} ref={ref} INTERNAL_themeStyle={style} />
  );
};

export default memo(forwardRef(ActionsheetFooter));
