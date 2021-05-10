import React, { memo, forwardRef } from 'react';
import StackMain, { IStackProps } from './Stack';
import { usePropsResolution } from '../../../hooks/useThemeProps';

const HStack = (props: IStackProps, ref?: any) => {
  const newProps = usePropsResolution('HStack', props);
  return <StackMain ref={ref} direction="row" {...newProps} />;
};

export default memo(forwardRef(HStack));
