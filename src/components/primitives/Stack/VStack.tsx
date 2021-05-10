import React, { memo, forwardRef } from 'react';
import StackMain, { IStackProps } from './Stack';
import { usePropsResolution } from '../../../hooks/useThemeProps';
export interface IVStackProps extends IStackProps {
  /**
   * The direction of the Stack Items.
   * @default column
   */
  direction?: 'column' | 'row';
}

const HStack = (props: IVStackProps, ref?: any) => {
  const newProps = usePropsResolution('VStack', props);
  return <StackMain ref={ref} {...newProps} />;
};

export default memo(forwardRef(HStack));
