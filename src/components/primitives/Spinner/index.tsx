import React, { memo, forwardRef } from 'react';
import { ActivityIndicator } from 'react-native';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { getColor } from '../../../theme';
import type { ISpinnerProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { useTheme } from '../../../hooks';

const Spinner = (props: ISpinnerProps, ref: any) => {
  const { color, size, ...resolvedProps } = usePropsResolution(
    'Spinner',
    props
  );
  const resolvedColor = getColor(color, useTheme().colors, useTheme());
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <ActivityIndicator
      accessible
      accessibilityLabel="loading"
      {...resolvedProps}
      color={resolvedColor}
      ref={ref}
      size={size}
    />
  );
};

export default memo(forwardRef(Spinner));
export type { ISpinnerProps };
