import React from 'react';
import Box from '../Box';
import type { IListItemProps } from './types';
import { useThemeProps } from '../../../hooks';

const ListItem = React.memo(({ children, ...props }: IListItemProps) => {
  const {
    index,
    start,
    unordered,
    ul,
    ordered,
    ol,
    _text,
    borderTopWidth,
    ...newProps
  } = useThemeProps('ListItem', props);

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      {...newProps}
      borderTopWidth={index ? borderTopWidth : 0}
    >
      <Box flexDirection="row" alignItems="center" pl={2}>
        {ul || unordered ? ( //Adding disc in front of ListItem
          <Box
            style={{ transform: [{ scale: 1.5 }] }}
            mr={2}
            _text={{ fontWeight: 'bold', ..._text }}
          >
            •
          </Box>
        ) : null}
        {ol || ordered ? ( //Adding index number in front of ListItem
          <Box mr={2} _text={{ fontWeight: 'bold', ..._text }}>
            {index + start + '.'}
          </Box>
        ) : null}
      </Box>
      <Box flexDirection="row" alignItems="center" _text={{ ..._text }}>
        {children}
      </Box>
    </Box>
  );
});

export default React.memo(ListItem);
