import React, { memo, forwardRef } from 'react';
import Box, { IBoxProps } from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks';
import { ScrollView } from 'react-native';

const ModalBody = ({ children, ...props }: IBoxProps, ref?: any) => {
  const resolvedProps = usePropsResolution('ModalBody', props);

  return (
    <ScrollView>
      <Box {...resolvedProps} ref={ref}>
        {children}
      </Box>
    </ScrollView>
  );
};

export default memo(forwardRef(ModalBody));
