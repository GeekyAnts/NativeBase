import React from 'react';
import { makeStyledComponent } from '../../../utils/styled';
import { View as RNView } from 'react-native';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '../../../utils/mergeRefs';
import { useSafeArea } from '../../../hooks/useSafeArea';
import type { IViewProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps/usePropsResolution';

const StyledView: any = makeStyledComponent(RNView);

const View = (props: IViewProps, ref: any) => {
  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);
  const viewProps = usePropsResolution('View', props, { isHovered });
  const safeAreaProps = useSafeArea(viewProps);
  return <StyledView {...safeAreaProps} ref={mergeRefs([ref, _ref])} />;
};
export default React.memo(React.forwardRef(View));
export type { IViewProps };
