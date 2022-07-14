import React, { memo, forwardRef } from 'react';
import Box, { IBoxProps } from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks';
import { ScrollView, IScrollViewProps } from '../../basic/ScrollView';

const AlertDialogBody = (
  { children, ...props }: IBoxProps & { _scrollview?: IScrollViewProps },
  ref?: any
) => {
  const { _scrollview, ...resolvedProps } = usePropsResolution(
    'AlertDialogBody',
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

export default memo(forwardRef(AlertDialogBody));
