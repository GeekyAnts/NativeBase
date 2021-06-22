import React, { createContext } from 'react';
import { Pressable } from '../../primitives/Pressable';
import Box from '../../primitives/Box';
import { TabsContext } from './Context';
import type { ITabProps, ITabsContextProps } from './types';
import { omitUndefined } from '../../../theme/tools/utils';
import { useTab } from '@react-native-aria/tabs';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '../../../utils';
import merge from 'lodash.merge';
import { themeTools } from '../../../theme';

export const TabContext = createContext({});

const Tab = (
  {
    children,
    isDisabled,
    style,
    _active,
    _disabled,
    item,
    ...props
  }: ITabProps,
  ref?: any
) => {
  const newProps = omitUndefined(props);
  const {
    inactiveTabStyle,
    activeTabStyle,
    state,
    isFitted,
  }: ITabsContextProps = React.useContext(TabsContext);
  let tabRef = React.useRef<any>(null);
  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);
  let isSelected = state.selectedKey === item.key;

  let { tabProps } = useTab({ item, isDisabled }, state, tabRef);

  React.useEffect(() => {
    if (isDisabled) {
      state.disabledKeys.add(item.key);
    } else {
      state.disabledKeys.delete(item.key);
    }
  }, [isDisabled, item.key, state.disabledKeys]);

  const tabStyle = isSelected ? activeTabStyle : inactiveTabStyle;
  const { _hover, ...remainingTabStyle } = tabStyle;
  const mergedProps = merge(remainingTabStyle, newProps);
  const [
    marginalProps,
    remainingProps,
  ] = themeTools.extractInObject(mergedProps, [
    'margin',
    'm',
    'marginTop',
    'mt',
    'marginRight',
    'mr',
    'marginBottom',
    'mb',
    'marginLeft',
    'ml',
    'marginX',
    'mx',
    'marginY',
    'my',
  ]);
  return (
    <TabContext.Provider
      value={{
        isSelected,
      }}
    >
      <Pressable
        disabled={isDisabled}
        ref={mergeRefs([tabRef, _ref, ref])}
        flex={isFitted ? 1 : undefined}
        {...tabProps}
        {...marginalProps}
      >
        <Box
          {...remainingProps}
          {...(isHovered && _hover)}
          style={[style, isSelected && _active, isDisabled && _disabled]}
        >
          {children}
        </Box>
      </Pressable>
    </TabContext.Provider>
  );
};

export default React.memo(React.forwardRef(Tab));
