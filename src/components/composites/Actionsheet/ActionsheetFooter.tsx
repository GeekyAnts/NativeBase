import React, { memo, forwardRef } from 'react';
import { Modal } from '../../composites/Modal';
import type { IActionsheetFooterProps } from './types';
import { usePropsResolution } from '../../../hooks';

const ActionsheetFooter = (
  { children, ...props }: IActionsheetFooterProps,
  ref?: any
) => {
  const newProps = usePropsResolution('ActionsheetFooter', props);

  return (
    <Modal.Content {...newProps} ref={ref}>
      {children}
    </Modal.Content>
  );
};

export default memo(forwardRef(ActionsheetFooter));
