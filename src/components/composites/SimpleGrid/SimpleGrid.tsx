import React from 'react';
import { Box, HStack, VStack } from '../../primitives';
import type { ISimpleGridProps } from './types';
// const isDebug = process.env.NODE_ENV !== 'production';
import { useThemeProps } from '../../../hooks/useThemeProps';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const DEBUG_STYLES = false
  ? {
      rows: {
        borderWidth: '0.25',
      },
      cols: {
        borderWidth: '0.25',
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
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return <></>;
  }
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
                  <Box {...DEBUG_STYLES.cols} flex={1}>
                    {col}
                  </Box>
                );
              })}

              {row.length % columns !== 0 ? (
                Array.from({ length: columns - row.length }, (_, index) => (
                  <Box flex="1" key={index} />
                ))
              ) : (
                <></>
              )}
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
