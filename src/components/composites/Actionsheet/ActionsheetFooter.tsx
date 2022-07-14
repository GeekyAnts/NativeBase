import React, { memo, forwardRef } from 'react';
import { Modal } from '../../composites/Modal';
import type { IActionsheetFooterProps } from './types';
import { usePropsResolution } from '../../../hooks';

const ActionsheetFooter = (props: IActionsheetFooterProps, ref?: any) => {
  const resolvedProps = usePropsResolution('ActionsheetFooter', props);

  return <Modal.Content {...resolvedProps} ref={ref} />;
};

export default memo(forwardRef(ActionsheetFooter));
