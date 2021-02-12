import React from 'react';
import { StackMain } from './Stack';
import type { IStackProps } from './Stack';

export const HStack = (props: IStackProps, ref?: any) => {
  return StackMain({ ...props, direction: 'row' }, ref);
};

export default React.memo(React.forwardRef(HStack));
