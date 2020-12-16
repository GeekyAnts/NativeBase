import React from 'react';

type SpaceType = 'gutter' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export default (
  children: JSX.Element[] | JSX.Element,
  space: number | undefined | SpaceType,
  axis: 'X' | 'Y',
  reverse: string,
  divider: JSX.Element | undefined
) => {
  let childrenArray = React.Children.toArray(children);
  const orientation = axis === 'X' ? 'vertical' : 'horizontal';
  if (divider) {
    divider = React.cloneElement(divider, {
      ...divider.props,
      orientation,
    });

    childrenArray = childrenArray.reduce(
      (r: any[], a: any) => r.concat(a, divider),
      [divider]
    );
    childrenArray = childrenArray.slice(1, -1);
  }
  /*
  | Separate the trailing (not first) children from the children array
  */
  const trailingChildren =
    reverse === 'reverse' ? childrenArray.slice(0, -1) : childrenArray.slice(1);
  /*
  | Set margin prop based on axis
  */
  let spaceValue;
  if (typeof space === 'string') {
    switch (space) {
      case 'gutter':
        spaceValue = 0;
        break;
      case '2xs':
        spaceValue = 1;
        break;
      case 'xs':
        spaceValue = 2;
        break;
      case 'sm':
        spaceValue = 3;
        break;
      case 'md':
        spaceValue = 4;
        break;
      case 'lg':
        spaceValue = 6;
        break;
      case 'xl':
        spaceValue = 7;
        break;
      case '2xl':
        spaceValue = 8;
        break;

      default:
        spaceValue = 1;
        break;
    }
  } else {
    spaceValue = space;
  }

  const marginProp: object = {
    ...(axis === 'X' ? { ml: spaceValue } : { mt: spaceValue }),
  };

  /*
  | Add the margiin to the children
  */
  /*
  | New children array with applied margin to trailing children
  */
  if (reverse === 'reverse') {
    const trailingChildrenWithSpacingReverse = trailingChildren
      .reverse()
      .map((child: any, index: number) => {
        return React.cloneElement(
          child,
          {
            key: `reverse-spaced-child-${index}`,
            ...child.props,
            ...marginProp,
          },
          child.props.children
        );
      });

    return [
      childrenArray[childrenArray.length - 1],
      trailingChildrenWithSpacingReverse,
    ];
  } else {
    const trailingChildrenWithSpacing = trailingChildren.map(
      (child: any, index: number) => {
        return React.cloneElement(
          child,
          { key: `spaced-child-${index}`, ...child.props, ...marginProp },
          child.props.children
        );
      }
    );
    return [childrenArray[0], trailingChildrenWithSpacing];
  }
};
