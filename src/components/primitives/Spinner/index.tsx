import React, { memo, forwardRef } from 'react';
import { ActivityIndicator } from 'react-native';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useToken } from '../../../hooks';
import type { ISpinnerProps } from './types';
import { useStyledSystemPropsResolver } from '../../../hooks';

const Spinner = ({ ...props }: ISpinnerProps, ref: any) => {
  const { color, size, ...resolvedProps } = usePropsResolution(
    'Spinner',
    props
  );
  const resolvedColor = useToken('colors', color);
  const [style, restProps] = useStyledSystemPropsResolver(props);
  return (
    <ActivityIndicator
      accessible
      accessibilityLabel="loading"
      {...resolvedProps}
      {...restProps}
      // TODO: Fix color resolution issue in styled component.
      color={resolvedColor}
      ref={ref}
      size={size}
      style={style}
    />
  );
};

export default memo(forwardRef(Spinner));
export type { ISpinnerProps };
