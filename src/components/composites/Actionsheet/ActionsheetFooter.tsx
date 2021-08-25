import React, { memo, forwardRef } from 'react';
import { Modal } from '../../composites/Modal';
import type { IActionsheetFooterProps } from './types';
import { usePropsResolution } from '../../../hooks';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const ActionsheetFooter = (
  { children, ...props }: IActionsheetFooterProps,
  ref?: any
) => {
  const newProps = usePropsResolution('ActionsheetFooter', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <Modal.Content {...newProps} ref={ref}>
      {children}
    </Modal.Content>
  );
};

export default memo(forwardRef(ActionsheetFooter));
