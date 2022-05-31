import React, { memo, forwardRef } from 'react';
import StackMain, { InterfaceStackProps } from './Stack';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { CustomProps, ResponsiveValue } from '../../types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { useColorMode } from '../../../core/color-mode';
import { getThemeProps } from '../../../core';

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
  const { colorMode } = useColorMode();
  const { style, unResolvedProps } = getThemeProps(
    'HStack',
    colorMode,
    {},
    props
  );

  const resolvedProps = usePropsResolution(
    'HStack',
    {
      ...unResolvedProps,
      ...props,
    },
    {}
  );
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <StackMain
      INTERNAL_themeStyle={style}
      ref={ref}
      direction="row"
      {...resolvedProps}
    />
  );
};

export default memo(forwardRef(HStack));
