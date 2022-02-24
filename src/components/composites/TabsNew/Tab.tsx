import React, { memo, forwardRef, useContext, useRef } from 'react';
import { Pressable } from '../../primitives/Pressable';
import { TabsContext } from './Context';
import type { ITabProps } from './types';
import { useTab } from '@react-native-aria/tabs';

const Tab = (props: ITabProps<any>) => {
  const { state }: any = useContext(TabsContext);

  const { item, isDisabled: propsDisabled } = props;
  const { key, rendered } = item;
  const isDisabled = propsDisabled || state.disabledKeys.has(key);
  const tabref = useRef<HTMLDivElement>();
  // @ts-ignore
  const { tabProps } = useTab({ item, isDisabled }, state, tabref);
  // let isSelected = state.selectedKey === key;

  return (
    <Pressable {...tabProps} ref={tabref}>
      {rendered}
    </Pressable>
  );
};

export default memo(forwardRef(Tab));
