import React from 'react';

export default (children: React.ReactNode, startingIndex?: number) => {
  let counter = startingIndex ? startingIndex - 1 : -1;
  const indexedChildren = React.Children.map(children, (child: any) => {
    counter++;
    return React.cloneElement(
      child,
      {
        index: counter,
      },
      child.props.children
    );
  });
  return indexedChildren;
};
