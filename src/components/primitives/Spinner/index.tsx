import React, { memo, forwardRef } from 'react';
import { ActivityIndicator } from 'react-native';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { getColor } from '../../../theme';
import type { ISpinnerProps } from './types';
import { useStyledSystemPropsResolver, useTheme } from '../../../hooks';

const Spinner = ({ ...props }: ISpinnerProps, ref: any) => {
  const { color, size, ...resolvedProps } = usePropsResolution(
    'Spinner',
    props
  );
  const resolvedColor = getColor(color, useTheme().colors, useTheme());
  const [style, restProps] = useStyledSystemPropsResolver(resolvedProps);
  return (
    <ActivityIndicator
      accessible
      accessibilityLabel="loading"
      {...restProps}
      color={resolvedColor}
      ref={ref}
      size={size}
      style={style}
    />
  );
};

export default memo(forwardRef(Spinner));
export type { ISpinnerProps };
