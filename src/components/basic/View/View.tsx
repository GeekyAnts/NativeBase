import React, { forwardRef } from 'react';
import { View as RNView } from 'react-native';
import { usePropsResolution } from '../../../hooks';
import { makeStyledComponent } from '../../../utils/styled';
import type { IViewProps } from './types';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '../../../utils';

const StyledView: any = makeStyledComponent(RNView);

export const View = forwardRef((props: IViewProps, ref: any) => {
  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);

  const { ...resolvedProps } = usePropsResolution('View', props, { isHovered });

  return <StyledView {...resolvedProps} ref={mergeRefs([ref, _ref])} />;
});
