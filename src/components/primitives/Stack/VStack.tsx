import React, { memo, forwardRef } from 'react';
import StackMain, { IStackProps } from './Stack';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { ResponsiveValue } from '../../types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
export interface IVStackProps extends IStackProps {
  /**
   * The direction of the Stack Items.
   * @default column
   */
  direction?: ResponsiveValue<
    'column' | 'row' | 'column-reverse' | 'row-reverse'
  >;
}

const VStack = (props: IVStackProps, ref?: any) => {
  const resolvedProps = usePropsResolution('VStack', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return <StackMain ref={ref} {...resolvedProps} />;
};

export default memo(forwardRef(VStack));
