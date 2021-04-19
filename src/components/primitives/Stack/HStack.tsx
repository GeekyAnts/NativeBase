import React from 'react';
import { StackMain } from './Stack';
import type { IStackProps } from './Stack';
import { usePropsResolution } from '../../../hooks/useThemeProps';

export const HStack = (props: IStackProps, ref?: any) => {
  const newProps: any = usePropsResolution('HStack', props);
  return StackMain({ ...newProps, direction: 'row' }, ref);
};

export default React.memo(React.forwardRef(HStack));
