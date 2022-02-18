import React, { useState, memo, forwardRef } from 'react';
import Stack from '../../primitives/Stack/Stack';
import { TabsContext } from './Context';
import TabContents from './TabContents';
import type { ITabsProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';

const Tabs = ({ children, ...props }: ITabsProps, ref?: any) => {
  const { ...resolvedProps } = usePropsResolution('Tabs', props, {}, undefined);
  const initialActive = !children
    ? null
    : React.Children.map(children, (child) => {
        if (child?.type === TabContents && !!child?.props.children) {
          if (!child?.props.children.length) {
            return child?.props.children.props.for;
          }
          const flattenChildren = child?.props.children.flat(Infinity);
          return flattenChildren[0].props.for;
        }
      })[0];

  const [active, setActive] = useState(initialActive);
  const variant = props.variant ?? 'underlined';
  const orientation = props.orientation ?? 'horizontal';
  return (
    <TabsContext.Provider value={{ active, setActive, variant, orientation }}>
      <Stack
        {...resolvedProps}
        {...props}
        ref={ref}
        direction={orientation === 'horizontal' ? 'column' : 'row'}
        aria-orientation={orientation}
        accessible
        accessibilityRole={props.accessibilityRole ?? 'tab'}
      >
        {children}
      </Stack>
    </TabsContext.Provider>
  );
};

export default memo(forwardRef(Tabs));
