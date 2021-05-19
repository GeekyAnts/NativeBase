import React, { memo, forwardRef } from 'react';
import StackMain, { IStackProps } from './Stack';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { ResponsiveValue } from '../../types';
export interface IVStackProps extends IStackProps {
  /**
   * The direction of the Stack Items.
   * @default column
   */
  direction?: ResponsiveValue<'column' | 'row'>;
}

const VStack = (props: IVStackProps, ref?: any) => {
  const newProps = usePropsResolution('VStack', props);
  return <StackMain ref={ref} {...newProps} />;
};

export default memo(forwardRef(VStack));
