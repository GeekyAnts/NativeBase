import React, { memo, forwardRef } from 'react';
import { ActivityIndicator } from 'react-native';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { getColor } from '../../../theme';
import type { ISpinnerProps } from './types';
import { useStyledSystemPropsResolver, useTheme } from '../../../hooks';
import { mergeRefs } from '../../../utils';
import { useHover } from '@react-native-aria/interactions';

const Spinner = ({ ...props }: ISpinnerProps, ref: any) => {
  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);
  const { color, size, ...resolvedProps } = usePropsResolution(
    'Spinner',
    props,
    { isHovered }
  );
  const resolvedColor = getColor(color, useTheme().colors, useTheme());
  const [style, restProps] = useStyledSystemPropsResolver(resolvedProps);
  return (
    <ActivityIndicator
      accessible
      accessibilityLabel="loading"
      {...restProps}
      color={resolvedColor}
      ref={mergeRefs([ref, _ref])}
      size={size}
      style={style}
    />
  );
};

export default memo(forwardRef(Spinner));
export type { ISpinnerProps };
