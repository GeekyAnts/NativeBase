import React from 'react';
import {
  Box,
  IBoxProps,
  Text,
  ITextProps,
  Icon,
  IIconProps,
  HStack,
  IStackProps,
} from '../../primitives';
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

type IStatArrowProps = IIconProps | { type?: 'increase' | 'decrease' };
export const StatArrow = React.memo(({ type, ...props }: IStatArrowProps) => {
  return (
    <Icon
      ml={-1}
      type="Entypo"
      name={type === 'increase' ? 'triangle-up' : 'triangle-down'}
      color={type === 'increase' ? 'green.500' : 'red.500'}
      size={8}
      {...props}
    />
  );
});

export const StatGroup = React.memo(
  React.forwardRef(({ style, ...props }: IBoxProps, ref: any) => {
    let newProps = useThemeProps('Stat', props);
    return (
      <HStack {...newProps._statGroup} {...newProps} ref={ref} style={style} />
    );
  })
);

const StatMain = React.forwardRef(
  ({ style, ...props }: IBoxProps, ref: any) => {
    return <Box {...props} ref={ref} style={style} />;
  }
);

type IStatComponentType = ((props: IBoxProps) => JSX.Element) & {
  Label: React.MemoExoticComponent<(props: ITextProps) => JSX.Element>;
  Number: React.MemoExoticComponent<(props: ITextProps) => JSX.Element>;
  HelpText: React.MemoExoticComponent<(props: IBoxProps) => JSX.Element>;
  Arrow: React.MemoExoticComponent<(props: IStatArrowProps) => JSX.Element>;
  Group: React.MemoExoticComponent<(props: IStackProps) => JSX.Element>;
};

const StatTemp: any = StatMain;
StatTemp.Label = StatLabel;
StatTemp.Number = StatNumber;
StatTemp.HelpText = StatHelpText;
StatTemp.Arrow = StatArrow;
StatTemp.Group = StatGroup;

const Stat = StatTemp as IStatComponentType;

export default Stat;
