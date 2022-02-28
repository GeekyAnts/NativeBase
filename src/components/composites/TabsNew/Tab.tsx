import React, { memo, forwardRef, useRef, useContext } from 'react';
import { Pressable } from '../../primitives/Pressable';
import Text from '../../primitives/Text';
import type { ITabProps, ITabsContextProps } from './types';
import { useTab } from '@react-native-aria/tabs';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { TabsContext } from './Context';
import { mergeRefs } from '../../../utils';

const Tab = (props: ITabProps<any>, ref?: any) => {
  const { item, state, isDisabled: propsDisabled, tabItemProps } = props;
  const { variant, orientation }: ITabsContextProps = useContext(TabsContext);
  const { activeTabStyle, ...resolvedItemProps } = usePropsResolution('Tab', {
    variant,
    ...tabItemProps.props,
  });
  const { key, rendered } = item;
  const isDisabled = propsDisabled || state.disabledKeys.has(key);
  const tabref = useRef<HTMLDivElement>(null);
  const { tabProps } = useTab({ item, isDisabled }, state, tabref);
  const isSelected = state.selectedKey === key;
  const tabStyle = isSelected ? activeTabStyle : null;

  return (
    <Pressable
      {...resolvedItemProps}
      {...tabProps}
      {...tabStyle}
      ref={mergeRefs([tabref, ref])}
      borderBottomWidth={orientation === 'horizontal' ? '2' : '0'}
      borderRightWidth={orientation === 'vertical' ? '2' : '0'}
      disabled={isDisabled}
    >
      <Text>{rendered}</Text>
    </Pressable>
  );
};

export default memo(forwardRef(Tab));
