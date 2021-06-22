import React from 'react';
import { Icon, IIconProps } from '../../primitives/Icon';
import type { ITabsContextProps, ITabContextProps } from './types';
import { TabsContext } from './Context';
import { TabContext } from './Tab';

const TabIcon = (props: IIconProps, ref?: any) => {
  const {
    activeIconProps,
    inactiveIconProps,
  }: ITabsContextProps = React.useContext(TabsContext);
  const { isSelected }: ITabContextProps = React.useContext(TabContext);
  const iconProps = isSelected ? activeIconProps : inactiveIconProps;
  return <Icon {...iconProps} {...props} ref={ref} />;
};

export default React.memo(React.forwardRef(TabIcon));
