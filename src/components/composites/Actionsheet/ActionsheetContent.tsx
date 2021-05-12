import React, { memo, forwardRef } from 'react';
import { Modal } from '../../composites/Modal';
import type { IActionsheetContentProps } from './types';
import { usePropsResolution } from '../../../hooks';

const ActionsheetContent = (
  { children, ...props }: IActionsheetContentProps,
  ref?: any
) => {
  const newProps = usePropsResolution('ActionsheetContent', props);

  return (
    <Modal.Content {...newProps} ref={ref}>
      {children}
    </Modal.Content>
  );
};

export default memo(forwardRef(ActionsheetContent));
