import React from 'react';
import Text from '../Text';
import { useThemeProps } from '../../../hooks';
import type { IHeadingProps } from './types';

const Heading = (props: IHeadingProps, ref: any) => {
  const newProps = useThemeProps('Heading', props);
  return <Text {...newProps} ref={ref} />;
};

export default React.memo(React.forwardRef(Heading));
export type { IHeadingProps };
