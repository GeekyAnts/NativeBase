import React from 'react';
import { Modal } from '../../composites/Modal';
import type { IActionsheetContentProps } from './types';
import { useThemeProps } from '../../../hooks';

const ActionsheetContent = ({
  children,
  ...props
}: IActionsheetContentProps) => {
  const newProps = useThemeProps('ActionsheetContent', props);

  return <Modal.Content {...newProps}>{children}</Modal.Content>;
};

export default React.memo(ActionsheetContent);
