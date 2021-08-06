import React, { memo, forwardRef } from 'react';
import StackMain, { IStackProps } from './Stack';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { ResponsiveValue } from 'styled-system';
import { mergeRefs } from '../../../utils';
import { useHover } from '@react-native-aria/interactions';
export interface IHStackProps extends IStackProps {
  /**
   * The direction of the Stack Items.
   * @default row
   */
  direction?: ResponsiveValue<'column' | 'row'>;
}

const HStack = (props: IHStackProps, ref?: any) => {
  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);
  const newProps = usePropsResolution('HStack', props, { isHovered });
  return (
    <StackMain ref={mergeRefs([ref, _ref])} direction="row" {...newProps} />
  );
};

export default memo(forwardRef(HStack));
