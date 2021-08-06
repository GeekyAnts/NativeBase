import React, { memo, forwardRef } from 'react';
import StackMain, { IStackProps } from './Stack';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { ResponsiveValue } from '../../types';
import { mergeRefs } from '../../../utils';
import { useHover } from '@react-native-aria/interactions';
export interface IVStackProps extends IStackProps {
  /**
   * The direction of the Stack Items.
   * @default column
   */
  direction?: ResponsiveValue<'column' | 'row'>;
}

const VStack = (props: IVStackProps, ref?: any) => {
  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);
  const newProps = usePropsResolution('VStack', props, { isHovered });
  return <StackMain ref={mergeRefs([ref, _ref])} {...newProps} />;
};

export default memo(forwardRef(VStack));
