import React, { memo, forwardRef } from 'react';
import Box from '../Box';
import type { IFlexProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const Flex = (props: IFlexProps, ref: any) => {
  const {
    align,
    justify,
    wrap,
    basis,
    grow,
    shrink,
    direction,
    ...resolvedProps
  } = usePropsResolution('Flex', props);

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  return (
    <Box
      {...props}
      {...resolvedProps}
      display="flex"
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
  return <Box flexGrow={1} {...props} />;
};

export type { IFlexProps };
export default memo(forwardRef(Flex));
