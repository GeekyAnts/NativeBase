import React from 'react';
import { Box, IBoxProps } from '../../primitives';
import { ModalContext } from './Context';
import type { IModalContextType } from './types';
import { useThemeProps } from '../../../hooks';

const ModalContent = (props: IBoxProps) => {
  const { ...newProps } = useThemeProps('ModalContent', props);
  const { contentSize }: IModalContextType = React.useContext(ModalContext);

  return <Box {...contentSize} {...newProps} />;
};

export default React.memo(ModalContent);
