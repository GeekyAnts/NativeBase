import React, { memo, forwardRef } from 'react';
import Text from '../Text';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { IHeadingProps } from './types';

const Heading = (props: IHeadingProps, ref: any) => {
  const newProps = usePropsResolution('Heading', props);
  return <Text {...newProps} ref={ref} />;
};

export default memo(forwardRef(Heading));
export type { IHeadingProps };
