import React from 'react';
import Box from '../Box';
import Text from '../Text';
import type { IListItemProps } from './types';
import { useThemeProps } from '../../../hooks';
import { findProps } from './utils';

const ListItem = React.memo(({ children, ...props }: IListItemProps) => {
  const themeProps = useThemeProps('List', props);
  let [textProps, remainingProps, layoutProps, borderProps] = findProps(props);
  const startNum = remainingProps.start ? remainingProps.start : 1; // Ordered list starting number

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      {...themeProps.listItemStyle}
      {...borderProps}
      {...layoutProps}
    >
      <Box flexDirection="row" alignItems="center" {...remainingProps} pl={2}>
        {remainingProps.unordered || remainingProps.ul ? ( //Adding disc in front of ListItem
          <Text
            {...themeProps.listItemNumberingStyle}
            {...textProps}
            style={{ transform: [{ scale: 1.5 }] }}
          >
            {`\u2022`}
          </Text>
        ) : null}
        {remainingProps.ordered || remainingProps.ol ? ( //Adding index number in front of ListItem
          <Text mr={2} fontWeight="bold" {...textProps}>
            {remainingProps.index + startNum + '.'}
          </Text>
        ) : null}
      </Box>
      <Box
        flexDirection="row"
        alignItems="center"
        {...themeProps.listItemTextStyle}
        {...remainingProps}
        {...textProps}
      >
        {children}
      </Box>
    </Box>
  );
});

export default React.memo(ListItem);
