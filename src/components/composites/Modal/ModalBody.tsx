import React from 'react';
import { Box, IBoxProps } from '../../primitives';
import { useThemeProps } from '../../../hooks';
import { ScrollView } from 'react-native';

const ModalBody = (props: IBoxProps, ref?: any) => {
  const newProps = useThemeProps('ModalBody', props);

  return (
    <ScrollView>
      <Box {...newProps} ref={ref}>
        {props.children}
      </Box>
    </ScrollView>
  );
};

export default React.memo(React.forwardRef(ModalBody));
