import React from 'react';
import { Modal } from '../../composites/Modal';
import type { IActionsheetFooterProps } from './types';
import { useThemeProps } from '../../../hooks';

const ActionsheetFooter = ({ children, ...props }: IActionsheetFooterProps) => {
  const newProps = useThemeProps('ActionsheetFooter', props);

  return <Modal.Content {...newProps}>{children}</Modal.Content>;
};

export default React.memo(ActionsheetFooter);
