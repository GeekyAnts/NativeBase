import React, { memo, forwardRef } from 'react';
import { ActivityIndicator } from 'react-native';
import {
  usePropsResolution,
  useStyledSystemPropsResolver,
} from '../../../hooks';
import { getColor } from '../../../theme';
import type { ISpinnerProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { useTheme } from '../../../hooks';

const Spinner = (props: ISpinnerProps, ref: any) => {
  const { color, size, style, testID, ...resolvedProps } = usePropsResolution(
    'Spinner',
    props
  );
  const resolvedColor = getColor(color, useTheme().colors, useTheme());
  const resolvedStyle = useStyledSystemPropsResolver(resolvedProps);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  return (
    <ActivityIndicator
      testID={testID}
      accessible
      accessibilityLabel="loading"
      color={resolvedColor}
      ref={ref}
      size={size}
      style={[resolvedStyle, style]}
    />
  );
};

export default memo(forwardRef(Spinner));
export type { ISpinnerProps };
