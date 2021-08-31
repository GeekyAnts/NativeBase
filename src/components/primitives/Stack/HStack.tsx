import React, { memo, forwardRef } from 'react';
import StackMain, { IStackProps } from './Stack';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { ResponsiveValue } from 'styled-system';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
export interface IHStackProps extends IStackProps {
  /**
   * The direction of the Stack Items.
   * @default row
   */
  direction?: ResponsiveValue<
    'column' | 'row' | 'column-reverse' | 'row-reverse'
  >;
}

const HStack = (props: IHStackProps, ref?: any) => {
  const resolvedProps = usePropsResolution('HStack', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return <StackMain ref={ref} direction="row" {...resolvedProps} />;
};

export default memo(forwardRef(HStack));
