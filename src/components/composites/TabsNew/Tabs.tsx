import React, { useState, memo, forwardRef } from 'react';
import Box from '../../primitives/Box';
import { TabsContext } from './Context';
import TabContents from './TabContents';
import type { ITabsProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';

const Tabs = ({ children, ...props }: ITabsProps, ref?: any) => {
  const { ...resolvedProps } = usePropsResolution('Tabs', props, {}, undefined);
  const initialActive = !children
    ? null
    : React.Children.map(children, (child) => {
        if (child?.type === TabContents && !!child.props.children) {
          if (!child.props.children.length) {
            return child.props.children.props.for;
          }
          return child.props.children[0].props.for;
        }
      })[0];

  const [active, setActive] = useState(initialActive);
  const variant = props.variant ?? 'underlined';
  return (
    <TabsContext.Provider value={{ active, setActive, variant }}>
      <Box {...resolvedProps} {...props} ref={ref}>
        {children}
      </Box>
    </TabsContext.Provider>
  );
};

export default memo(forwardRef(Tabs));
