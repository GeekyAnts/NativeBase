import React, { memo, forwardRef } from 'react';
import Box from '../Box';
import type { IFlexProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';
const Flex = (
  {
    style,
    align,
    justify,
    wrap,
    basis,
    grow,
    shrink,
    direction,
    ...props
  }: IFlexProps,
  ref: any
) => {
  const newProps = usePropsResolution('Flex', props);
  return (
    <Box
      {...props}
      {...newProps}
      display="flex"
      flexDirection={direction || newProps.flexDirection}
      alignItems={align || newProps.alignItems}
      justifyContent={justify || newProps.justifyContent}
      flexGrow={grow || newProps.flexGrow}
      flexBasis={basis || newProps.flexBasis}
      flexShrink={shrink || newProps.flexShrink}
      flexWrap={wrap || newProps.flexWrap}
      style={style}
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
