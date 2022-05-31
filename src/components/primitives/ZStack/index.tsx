import React, { memo, forwardRef } from 'react';
import { default as Box, InterfaceBoxProps } from '../Box';
import { getAbsoluteChildren } from '../../../utils';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import type { CustomProps } from '../../../components/types';
import { useColorMode } from '../../../core/color-mode';
import { getThemeProps } from '../../../core';

export interface InterfaceZStackProps extends InterfaceBoxProps<IZStackProps> {
  /**
   * The direction to stack the elements.
   */
  reversed?: boolean;
}

export type IZStackProps = InterfaceZStackProps & CustomProps<'ZStack'>;
const ZStack = ({ children, reversed, ...props }: IZStackProps, ref?: any) => {
  const { colorMode } = useColorMode();
  const { style, unResolvedProps } = getThemeProps(
    'ZStack',
    colorMode,
    {},
    props
  );

  const resolvedProps = usePropsResolution(
    'ZStack',
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
    <Box INTERNAL_themeStyle={style} {...resolvedProps} ref={ref}>
      {getAbsoluteChildren(children, reversed)}
    </Box>
  );
};

export default memo(forwardRef(ZStack));
