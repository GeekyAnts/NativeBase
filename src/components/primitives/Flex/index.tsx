import React, { memo, forwardRef } from 'react';
import Box from '../Box';
import type { IFlexProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { useColorMode } from '../../../core/color-mode';
import { getThemeProps } from '../../../core';

const Flex = (props: IFlexProps, ref: any) => {
  const { colorMode } = useColorMode();
  const { style, unResolvedProps } = getThemeProps(
    'Flex',
    colorMode,
    {},
    props
  );

  const {
    align,
    justify,
    wrap,
    basis,
    grow,
    shrink,
    direction,
    ...resolvedProps
  } = usePropsResolution(
    'Flex',
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
    <Box
      INTERNAL_themeStyle={style}
      {...resolvedProps}
      flexDirection={direction || resolvedProps.flexDirection}
      alignItems={align || resolvedProps.alignItems}
      justifyContent={justify || resolvedProps.justifyContent}
      flexGrow={grow || resolvedProps.flexGrow}
      flexBasis={basis || resolvedProps.flexBasis}
      flexShrink={shrink || resolvedProps.flexShrink}
      flexWrap={wrap || resolvedProps.flexWrap}
      ref={ref}
    />
  );
};

//Spacer Component that adds space between components where it is placed
export const Spacer = (props: any) => {
  const { colorMode } = useColorMode();
  const { style, unResolvedProps } = getThemeProps(
    'Spacer',
    colorMode,
    {},
    props
  );
  const resolvedProps = usePropsResolution(
    'Spacer',
    {
      ...unResolvedProps,
      ...props,
    },
    {}
  );

  return <Box INTERNAL_themeStyle={style} {...resolvedProps} />;
};

export type { IFlexProps };
export default memo(forwardRef(Flex));
