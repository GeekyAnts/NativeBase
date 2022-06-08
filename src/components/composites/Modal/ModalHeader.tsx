import React, { memo, forwardRef } from 'react';
import Box, { IBoxProps } from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const ModalHeader = (props: IBoxProps, ref?: any) => {
  const resolvedProps = usePropsResolution('ModalHeader', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return <Box {...resolvedProps} ref={ref} />;
};

export default memo(forwardRef(ModalHeader));
