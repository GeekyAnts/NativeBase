import React from 'react';
import { Box, HStack, VStack } from '../../primitives';
import type { ISimpleGridProps } from './types';
// const isDebug = process.env.NODE_ENV !== 'production';
import { useThemeProps } from '../../../hooks/useThemeProps';

const DEBUG_STYLES = false
  ? {
      rows: {
        border: '1px solid black',
      },
      cols: {
        border: '1px solid red',
      },
    }
  : {
      rows: {},
      cols: {},
    };

const SimpleGrid = (props: ISimpleGridProps, ref?: any): JSX.Element => {
  const {
    columns,
    space,
    spacingX,
    spacingY,
    minChildWidth,
    children,
    ...remainingProps
  } = useThemeProps('SimpleGrid', props);
  let cellSpacing = space ?? 0;
  let cellSpacingX = spacingX ?? cellSpacing;
  let cellSpacingY = spacingY ?? cellSpacing;

  const childrenArray = React.Children.toArray(children);
  if (columns) {
    let rowSlices = [];
    for (let i = 0; i < childrenArray.length; i = i + columns) {
      rowSlices.push(childrenArray.slice(i, i + columns));
    }

    return (
      <VStack
        {...DEBUG_STYLES.rows}
        space={cellSpacingY}
        {...remainingProps}
        ref={ref}
      >
        {rowSlices.map((row, rowIndex) => {
          return (
            <HStack space={cellSpacingX} key={rowIndex}>
              {row.map((col: any) => {
                return (
                  <Box {...DEBUG_STYLES.cols} key={col.key}>
                    {col}
                  </Box>
                );
              })}
            </HStack>
          );
        })}
      </VStack>
    );
  }
  // Needs more work for empty spacing i.e. auto-fit. Current workaround is to use wrap and let the columns be created dynamically
  // https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/
  else if (minChildWidth) {
    return (
      <Box
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        {...remainingProps}
        ref={ref}
      >
        {childrenArray.map((col: any) => {
          return (
            <Box
              {...DEBUG_STYLES.cols}
              mx={cellSpacingX}
              my={cellSpacingY}
              key={col.key}
              minWidth={minChildWidth}
            >
              {col}
            </Box>
          );
        })}
      </Box>
    );
  }

  return <></>;
};
export default React.memo(React.forwardRef(SimpleGrid));
