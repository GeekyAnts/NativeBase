import React, { memo, forwardRef } from 'react';
import StackMain, { InterfaceStackProps } from './Stack';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { CustomProps, ResponsiveValue } from '../../types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
export interface InterfaceVStackProps extends InterfaceStackProps {
  /**
   * The direction of the Stack Items.
   * @default column
   */
  direction?: ResponsiveValue<
    'column' | 'row' | 'column-reverse' | 'row-reverse'
  >;
}

export type IVStackProps = InterfaceVStackProps & CustomProps<'VStack'>;

const VStack = (props: IVStackProps, ref?: any) => {
  const resolvedProps = usePropsResolution('VStack', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return <StackMain ref={ref} {...resolvedProps} />;
};

export default memo(forwardRef(VStack));
