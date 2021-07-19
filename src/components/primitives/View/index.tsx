import React from 'react';
import { makeStyledComponent } from '../../../utils/styled';
import { View as RNView } from 'react-native';

import { useThemeProps } from '../../../hooks/useThemeProps';
import { useSafeArea } from '../../../hooks/useSafeArea';
import type { IViewProps } from './types';
const StyledView: any = makeStyledComponent(RNView);

const View = (props: IViewProps, ref: any) => {
  const viewProps = useThemeProps('View', props);
  const safeAreaProps = useSafeArea(viewProps);
  return <StyledView {...safeAreaProps} ref={ref} />;
};
export default React.memo(React.forwardRef(View));
export type { IViewProps };
