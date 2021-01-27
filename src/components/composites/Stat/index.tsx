import React from 'react';
import { Box, IBoxProps, Text, ITextProps, Icon } from '../../primitives';
import { useThemeProps } from '../../../hooks';

export const StatLabel = React.memo(({ style, ...props }: ITextProps) => {
  let newProps = useThemeProps('Stat', props);
  return (
    <Text {...newProps._statLabel} {...newProps} style={style} {...props}>
      {props.children}
    </Text>
  );
});

export const StatNumber = React.memo(({ style, ...props }: ITextProps) => {
  let newProps = useThemeProps('Stat', props);
  return (
    <Text {...newProps._statNumber} {...newProps} style={style}>
      {props.children}
    </Text>
  );
});

export const StatHelpText = React.memo(({ style, ...props }: IBoxProps) => {
  let newProps = useThemeProps('Stat', props);
  return (
    <Box {...newProps._statHelpText} {...newProps} style={style}>
      {props.children}
    </Box>
  );
});

export const StatArrow = React.memo(
  ({ type, ...props }: { type?: 'increase' | 'decrease' }) => {
    return (
      <Icon
        ml={-1}
        type="Entypo"
        name={type === 'increase' ? 'triangle-up' : 'triangle-down'}
        {...props}
        color={type === 'increase' ? 'green.500' : 'red.500'}
        size={8}
      />
    );
  }
);

export const StatGroup = React.memo(({ style, ...props }: IBoxProps) => {
  let newProps = useThemeProps('Stat', props);
  return <Box {...newProps._statGroup} {...newProps} style={style} />;
});

const Stat = ({ style, ...props }: IBoxProps) => {
  return <Box {...props} style={style} />;
};
export default React.memo(Stat);
