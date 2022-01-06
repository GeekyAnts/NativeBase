import React from 'react';

const getAttachedChildren = (children: any) => {
  const childrenArray: any = React.Children.toArray(children);
  /*
  | Separate the trailing (not first) children from the children array
  */

  if (childrenArray.length <= 1) {
    return childrenArray;
  }

  const trailingChildren = childrenArray.slice(1);
  trailingChildren.pop();
  const marginProp: object = {
    ...{ ml: 0, mr: 0, roundedRight: 0, roundedLeft: 0 },
  };
  const leftElemProp: object = {
    ...{ mr: 0, roundedRight: 0 },
  };
  const rightElemProp: object = {
    ...{ ml: 0, roundedLeft: 0 },
  };

  /*
  | Add the margiin to the children
  */
  const trailingChildrenWithSpacing = trailingChildren.map((child: any) => {
    return React.cloneElement(child, marginProp, child.props.children);
  });
  /*
  | New children array with applied margin to trailing children
  */
  return [
    React.cloneElement(
      childrenArray[0],
      leftElemProp,
      childrenArray[0].props.children
    ),
    ...trailingChildrenWithSpacing,
    React.cloneElement(
      childrenArray[childrenArray.length - 1],
      rightElemProp,
      childrenArray[childrenArray.length - 1].props.children
    ),
  ];
};

export default getAttachedChildren;
