import React, { memo, forwardRef } from 'react';
import Box, { IBoxProps } from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks';
import { ScrollView, IScrollViewProps } from '../../basic/ScrollView';

const ModalBody = (
  { children, ...props }: IBoxProps & { _scrollview?: IScrollViewProps },
  ref?: any
) => {
  const { _scrollview, ...resolvedProps } = usePropsResolution(
    'ModalBody',
    props
  );

  return (
    <ScrollView {..._scrollview}>
      <Box {...resolvedProps} ref={ref}>
        {children}
      </Box>
    </ScrollView>
  );
};

export default memo(forwardRef(ModalBody));
