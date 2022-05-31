import React, { memo, forwardRef } from 'react';
import Text from '../Text';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { IHeadingProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { useColorMode } from '../../../core/color-mode';
import { getThemeProps } from '../../../core';

const Heading = (props: IHeadingProps, ref: any) => {
  const { colorMode } = useColorMode();

  const { style, unResolvedProps } = getThemeProps(
    'Heading',
    colorMode,
    {},
    props
  );

  const { size: _size, ...resolvedProps } = usePropsResolution(
    'Heading',
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

  return <Text INTERNAL_themeStyle={style} {...resolvedProps} ref={ref} />;
};

export default memo(forwardRef(Heading));
export type { IHeadingProps };
