import React, { memo, forwardRef } from 'react';
import Box, { IBoxProps } from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks';
import { ScrollView } from 'react-native';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const ModalBody = ({ children, ...props }: IBoxProps, ref?: any) => {
  const resolvedProps = usePropsResolution('ModalBody', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <ScrollView>
      <Box {...resolvedProps} ref={ref}>
        {children}
      </Box>
    </ScrollView>
  );
};

export default memo(forwardRef(ModalBody));
