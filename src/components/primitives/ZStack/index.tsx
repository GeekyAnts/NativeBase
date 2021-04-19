import React from 'react';
import { default as Box, IBoxProps } from '../Box';
import { getAbsoluteChildren } from '../../../utils';
import { usePropsResolution } from '../../../hooks/useThemeProps';

export type IZStackProps = IBoxProps & {
  children: JSX.Element[] | JSX.Element;
  reversed?: boolean;
};

const ZStack = ({ children, reversed, ...props }: IZStackProps, ref?: any) => {
  const newProps = usePropsResolution('ZStack', props);
  return (
    <Box {...newProps} ref={ref}>
      {getAbsoluteChildren(children, reversed)}
    </Box>
  );
};

export default React.memo(React.forwardRef(ZStack));
