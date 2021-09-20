import React, { memo, forwardRef } from 'react';
import { Modal } from '../../composites/Modal';
import type { IActionsheetFooterProps } from './types';
import { usePropsResolution } from '../../../hooks';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const ActionsheetFooter = (props: IActionsheetFooterProps, ref?: any) => {
  const resolvedProps = usePropsResolution('ActionsheetFooter', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return <Modal.Content {...resolvedProps} ref={ref} />;
};

export default memo(forwardRef(ActionsheetFooter));
