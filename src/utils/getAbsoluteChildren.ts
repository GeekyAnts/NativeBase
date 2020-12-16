import React from 'react';
import { Platform } from 'react-native';
export default (children: JSX.Element[] | JSX.Element, reverse?: boolean) => {
  let childrenArray = React.Children.toArray(children);
  if (reverse) {
    childrenArray = childrenArray.reverse();
  }
  /*
  | Add the position to the children
  */
  const trailingChildrenWithSpacing = childrenArray.map((child: any) => {
    return React.cloneElement(
      child,
      Platform.OS === 'web'
        ? { style: { position: 'absolute' } }
        : { position: 'absolute' },
      child.props.children
    );
  });
  /*
  | New children array with applied margin to trailing children
  */
  return [trailingChildrenWithSpacing];
};
