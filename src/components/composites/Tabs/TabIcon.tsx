import React from 'react';
import { Icon, IIconProps } from '../../primitives/Icon';
import type { ITabsContextProps, ITabContextProps } from './types';
import { TabsContext } from './Context';
import { TabContext } from './Tab';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const TabIcon = (props: IIconProps, ref?: any) => {
  const {
    activeIconProps,
    inactiveIconProps,
  }: ITabsContextProps = React.useContext(TabsContext);
  const { isSelected }: ITabContextProps = React.useContext(TabContext);
  const iconProps = isSelected ? activeIconProps : inactiveIconProps;
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return <Icon {...iconProps} {...props} ref={ref} />;
};

export default React.memo(React.forwardRef(TabIcon));
