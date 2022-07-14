import React, { memo, forwardRef } from 'react';
import { ActivityIndicator } from 'react-native';
import {
  usePropsResolution,
  useStyledSystemPropsResolver,
} from '../../../hooks';
import { getColor } from '../../../theme';
import type { ISpinnerProps } from './types';
import { useTheme } from '../../../hooks';

const Spinner = (props: ISpinnerProps, ref: any) => {
  const {
    color,
    boxSize,
    style,
    testID,
    ...resolvedProps
  } = usePropsResolution('Spinner', props);
  const resolvedColor = getColor(color, useTheme().colors, useTheme());
  const resolvedStyle = useStyledSystemPropsResolver(resolvedProps);

  // console.log('Spinner size', size, resolvedProps);

  return (
    <ActivityIndicator
      testID={testID}
      accessible
      accessibilityLabel="loading"
      color={resolvedColor}
      ref={ref}
      size={boxSize}
      // boxSize={boxSize}
      style={[resolvedStyle, style]}
    />
  );
};

export default memo(forwardRef(Spinner));
export type { ISpinnerProps };
