import React, { memo, forwardRef, useRef } from 'react';
import { Pressable } from '../../primitives/Pressable';
import Text from '../../primitives/Text';
import type { ITabProps } from './types';
import { useTab } from '@react-native-aria/tabs';

const Tab = (props: ITabProps<any>) => {
  const { item, state, isDisabled: propsDisabled } = props;
  const { key, rendered } = item;
  const isDisabled = propsDisabled || state.disabledKeys.has(key);
  const ref = useRef<HTMLDivElement>(null);
  const { tabProps } = useTab({ item, isDisabled }, state, ref);
  const isSelected = state.selectedKey === key;

  return (
    <Pressable {...tabProps} ref={ref} marginLeft="2">
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          color: isSelected ? '#5902EC' : '#1F2937',
          borderBottomColor: '#5902EC',
          borderBottomWidth: isSelected ? 2 : 0,
          padding: 10,
        }}
      >
        {rendered}
      </Text>
    </Pressable>
  );
};

export default memo(forwardRef(Tab));
