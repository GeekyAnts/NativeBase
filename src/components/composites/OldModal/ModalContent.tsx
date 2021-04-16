import React from 'react';
import { Box, IBoxProps } from '../../primitives';
import { ModalContext } from './Context';
import type { IModalContextType } from './types';
import { useThemeProps } from '../../../hooks';

const ModalContent = (props: IBoxProps, ref?: any) => {
  const { ...newProps } = useThemeProps('ModalContent', props);
  const { contentSize }: IModalContextType = React.useContext(ModalContext);

  return <Box {...contentSize} {...newProps} ref={ref} />;
};

export default React.memo(React.forwardRef(ModalContent));
