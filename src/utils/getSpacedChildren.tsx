import React from 'react';
import { default as Box } from '../components/primitives/Box';
import type { SpaceType as ThemeSpaceType } from '../components/types';
import { ResponsiveQueryContext } from './useResponsiveQuery/ResponsiveQueryProvider';

type SpaceType =
  | 'gutter'
  | '2xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | ThemeSpaceType;

// Thanks @gregberge for code and @nandorojo for suggestion.
// Original source: https://github.com/gregberge/react-flatten-children
type ReactChildArray = ReturnType<typeof React.Children.toArray>;
function flattenChildren(children: React.ReactNode): ReactChildArray {
  const childrenArray = React.Children.toArray(children);
  return childrenArray.reduce((flatChildren: ReactChildArray, child) => {
    if ((child as React.ReactElement<any>).type === React.Fragment) {
      return flatChildren.concat(
        flattenChildren((child as React.ReactElement<any>).props.children)
      );
    }
    flatChildren.push(child);
    return flatChildren;
  }, []);
}

const getSpacedChildren = (
  children: JSX.Element[] | JSX.Element,
  space: undefined | SpaceType,
  axis: 'X' | 'Y',
  reverse: string,
  divider: JSX.Element | undefined
): any => {
  let childrenArray = React.Children.toArray(flattenChildren(children));
  childrenArray =
    reverse === 'reverse' ? [...childrenArray].reverse() : childrenArray;

  const orientation = axis === 'X' ? 'vertical' : 'horizontal';

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const responsiveQueryContext = React.useContext(ResponsiveQueryContext);
  const disableCSSMediaQueries = responsiveQueryContext.disableCSSMediaQueries;

  // If there's a divider, we wrap it with a Box and apply vertical and horizontal margins else we add a spacer Box with height or width
  if (divider) {
    const spacingProp: object = {
      ...(axis === 'X' ? { mx: space } : { my: space }),
    };

    divider = React.cloneElement(divider, {
      orientation,
      ...spacingProp,
    });

    childrenArray = childrenArray.map((child: any, index: number) => {
      return (
        <React.Fragment key={child.key ?? `spaced-child-${index}`}>
          {child}
          {index < childrenArray.length - 1 && divider}
        </React.Fragment>
      );
    });
  } else {
    const spacingProp: object = {
      ...(axis === 'X' ? { width: space } : { height: space }),
    };
    childrenArray = childrenArray.map((child: any, index: number) => {
      return (
        <React.Fragment key={child.key ?? `spaced-child-${index}`}>
          {child}
          {disableCSSMediaQueries ? (
            index < childrenArray.length - 1 && <Box {...spacingProp} />
          ) : (
            <></>
          )}
        </React.Fragment>
      );
    });
  }

  return childrenArray;
};

export default getSpacedChildren;
