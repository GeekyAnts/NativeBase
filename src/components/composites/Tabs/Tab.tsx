import React from 'react';
import { Pressable } from 'react-native';
import Box from '../../primitives/Box';
import { TabsContext } from './Context';
import type { ITabProps, ITabsContextProps } from './types';
import { omitUndefined } from '../../../theme/tools/utils';
import { useTab } from '@react-native-aria/tabs';

const Tab = ({
  children,
  isDisabled,
  style,
  _active,
  _disabled,
  item,
  ...props
}: ITabProps) => {
  const newProps = omitUndefined(props);
  const {
    inactiveTabStyle,
    activeTabStyle,
    state,
  }: ITabsContextProps = React.useContext(TabsContext);
  let ref = React.useRef<any>(null);

  let isSelected = state.selectedKey === item.key;

  let { tabProps } = useTab({ item, isDisabled }, state, ref);

  React.useEffect(() => {
    if (isDisabled) {
      state.disabledKeys.add(item.key);
    } else {
      state.disabledKeys.delete(item.key);
    }
  }, [isDisabled, item.key, state.disabledKeys]);

  const tabStyle = isSelected ? activeTabStyle : inactiveTabStyle;

  return (
    <Pressable disabled={isDisabled} ref={ref} {...tabProps}>
      <Box
        {...tabStyle}
        {...newProps}
        style={[style, isSelected && _active, isDisabled && _disabled]}
      >
        {children}
      </Box>
    </Pressable>
  );
};

export default React.memo(Tab);
