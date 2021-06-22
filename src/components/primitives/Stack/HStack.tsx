import React, { memo, forwardRef } from 'react';
import StackMain, { IStackProps } from './Stack';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { ResponsiveValue } from 'styled-system';
export interface IHStackProps extends IStackProps {
  /**
   * The direction of the Stack Items.
   * @default row
   */
  direction?: ResponsiveValue<'column' | 'row'>;
}

const HStack = (props: IHStackProps, ref?: any) => {
  const newProps = usePropsResolution('HStack', props);
  return <StackMain ref={ref} direction="row" {...newProps} />;
};

export default memo(forwardRef(HStack));
