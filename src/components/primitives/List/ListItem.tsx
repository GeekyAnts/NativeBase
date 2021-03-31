import React from 'react';
import Box from '../Box';
import type { IListItemProps } from './types';
import { useThemeProps } from '../../../hooks';
import { mergeRefs } from '../../../utils';
import { useHover } from '@react-native-aria/interactions';

const ListItem = React.memo(
  React.forwardRef(({ children, ...props }: IListItemProps, ref: any) => {
    const {
      index,
      start,
      unordered,
      ul,
      ordered,
      ol,
      _text,
      borderTopWidth,
      _hover,
      ...newProps
    } = useThemeProps('ListItem', props);
    const _ref = React.useRef(null);
    const { isHovered } = useHover({}, _ref);
    return (
      <Box
        flexDirection="row"
        alignItems="center"
        {...newProps}
        borderTopWidth={index ? borderTopWidth : 0}
        ref={mergeRefs([ref, _ref])}
        {...(isHovered && _hover)}
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
  })
);

export default React.memo(ListItem);
