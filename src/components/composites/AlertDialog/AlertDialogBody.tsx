import React, { memo, forwardRef } from 'react';
import Box, { IBoxProps } from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks';
import { ScrollView } from 'react-native';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const AlertDialogBody = (props: IBoxProps, ref?: any) => {
  const newProps = usePropsResolution('AlertDialogBody', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <ScrollView>
      <Box {...newProps} ref={ref}>
        {props.children}
      </Box>
    </ScrollView>
  );
};

export default memo(forwardRef(AlertDialogBody));
