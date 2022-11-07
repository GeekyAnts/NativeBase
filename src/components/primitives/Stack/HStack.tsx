import React, { memo, forwardRef } from 'react';
import StackMain, { InterfaceStackProps } from './Stack';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type {
  CustomProps,
  ResponsiveValue,
  // ThemeComponentSizeType,
} from '../../types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
export interface InterfaceHStackProps extends InterfaceStackProps {
  /**
   * The direction of the Stack Items.
   * @default row
   */
  direction?: ResponsiveValue<
    'column' | 'row' | 'column-reverse' | 'row-reverse'
  >;
}

export type IHStackProps = InterfaceHStackProps & CustomProps<'HStack'>;

const HStack = (props: IHStackProps, ref?: any) => {
  const resolvedProps = usePropsResolution('HStack', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return <StackMain ref={ref} direction="row" {...resolvedProps} />;
};

export default memo(forwardRef(HStack));
