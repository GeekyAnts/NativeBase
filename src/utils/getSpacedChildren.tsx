import React from 'react';
import { default as Box } from '../components/primitives/Box';

type SpaceType =
  | 'gutter'
  | '2xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | number;

export default (
  children: JSX.Element[] | JSX.Element,
  space: undefined | SpaceType,
  axis: 'X' | 'Y',
  reverse: string,
  divider: JSX.Element | undefined
): any => {
  let childrenArray = React.Children.toArray(children);
  childrenArray =
    reverse === 'reverse' ? [...childrenArray].reverse() : childrenArray;

  const orientation = axis === 'X' ? 'vertical' : 'horizontal';

  if (divider) {
    divider = React.cloneElement(<Box>{divider}</Box>, {
      ...divider.props,
      orientation,
    });

    childrenArray = childrenArray.reduce(
      (r: any[], a: any) => r.concat(a, divider),
      [divider]
    );
    childrenArray = childrenArray.slice(1, -1);
  }

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
    ...(axis === 'X' ? { width: spaceValue } : { height: spaceValue }),
  };

  return childrenArray.map((child: any, index: number) => {
    return (
      <React.Fragment key={`spaced-child-${index}`}>
        {child}
        {index < childrenArray.length - 1 && <Box {...marginProp} />}
      </React.Fragment>
    );
  });
};
