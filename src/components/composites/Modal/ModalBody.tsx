import React, { memo, forwardRef } from 'react';
import Box, { IBoxProps } from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks';
import { ScrollView } from 'react-native';

const ModalBody = (props: IBoxProps, ref?: any) => {
  const newProps = usePropsResolution('ModalBody', props);

  return (
    <ScrollView>
      <Box {...newProps} ref={ref}>
        {props.children}
      </Box>
    </ScrollView>
  );
};

export default memo(forwardRef(ModalBody));
