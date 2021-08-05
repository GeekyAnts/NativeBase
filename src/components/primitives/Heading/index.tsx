import React, { memo, forwardRef } from 'react';
import Text from '../Text';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { IHeadingProps } from './types';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '../../../utils';

const Heading = (props: IHeadingProps, ref: any) => {
  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);
  const newProps = usePropsResolution('Heading', props, { isHovered });
  return <Text {...newProps} ref={mergeRefs([ref, _ref])} />;
};

export default memo(forwardRef(Heading));
export type { IHeadingProps };
