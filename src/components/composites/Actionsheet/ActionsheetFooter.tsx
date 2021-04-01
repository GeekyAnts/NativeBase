import React from 'react';
import { Modal } from '../../composites/Modal';
import type { IActionsheetFooterProps } from './types';
import { useThemeProps } from '../../../hooks';

const ActionsheetFooter = (
  { children, ...props }: IActionsheetFooterProps,
  ref?: any
) => {
  const newProps = useThemeProps('ActionsheetFooter', props);

  return (
    <Modal.Content {...newProps} ref={ref}>
      {children}
    </Modal.Content>
  );
};

export default React.memo(React.forwardRef(ActionsheetFooter));
