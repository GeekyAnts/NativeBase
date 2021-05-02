import React from 'react';
import Text from '../Text';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { IHeadingProps } from './types';

const Heading = (props: IHeadingProps, ref: any) => {
  const newProps = usePropsResolution('Heading', props);
  console.log('nbew props ', newProps);
  return <Text {...newProps} ref={ref} />;
};

export default React.memo(React.forwardRef(Heading));
export type { IHeadingProps };
