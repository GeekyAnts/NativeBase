import React from 'react';

export default (
  children: React.ReactNode,
  indexComponent: string,
  startingIndex?: number
) => {
  let counter = startingIndex ?? -1;
  const indexedChildren = React.Children.map(children, (child: any) => {
    if (child.type.name === indexComponent) {
      counter++;
      return React.cloneElement(
        child,
        {
          index: counter,
        },
        child.props.children
      );
    } else {
      return child;
    }
  });
  return indexedChildren;
};
