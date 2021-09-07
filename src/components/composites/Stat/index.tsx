import React from 'react';
import {
  Box,
  IBoxProps,
  Text,
  ITextProps,
  IIconProps,
  HStack,
  IStackProps,
} from '../../primitives';
import { useThemeProps } from '../../../hooks';
import { ChevronDownIcon, ChevronUpIcon } from '../../primitives/Icon/Icons';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

export const StatLabel = React.memo(
  React.forwardRef(({ style, ...props }: ITextProps, ref?: any) => {
    let newProps = useThemeProps('Stat', props);
    //TODO: refactor for responsive prop
    if (useHasResponsiveProps(props)) {
      return null;
    }
    return (
      <Text
        {...newProps._statLabel}
        {...newProps}
        style={style}
        {...props}
        ref={ref}
      >
        {props.children}
      </Text>
    );
  })
);

export const StatNumber = React.memo(
  React.forwardRef(({ style, ...props }: ITextProps, ref?: any) => {
    let newProps = useThemeProps('Stat', props);
    return (
      <Text {...newProps._statNumber} {...newProps} style={style} ref={ref}>
        {props.children}
      </Text>
    );
  })
);

export const StatHelpText = React.memo(
  React.forwardRef(({ style, ...props }: IBoxProps, ref?: any) => {
    let newProps = useThemeProps('Stat', props);
    return (
      <Box {...newProps._statHelpText} {...newProps} style={style} ref={ref}>
        {props.children}
      </Box>
    );
  })
);

type IStatArrowProps = IIconProps & { type?: 'increase' | 'decrease' };
export const StatArrow = React.memo(
  React.forwardRef(({ type, ...props }: IStatArrowProps, ref?: any) => {
    return type === 'increase' ? (
      <ChevronUpIcon ml={-1} color="green.500" size={8} {...props} ref={ref} />
    ) : (
      <ChevronDownIcon ml={-1} color="red.500" size={8} {...props} ref={ref} />
    );
  })
);

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

type IStatComponentType = ((
  props: IBoxProps & { ref?: any }
) => JSX.Element) & {
  Label: React.MemoExoticComponent<
    (props: ITextProps & { ref?: any }) => JSX.Element
  >;
  Number: React.MemoExoticComponent<
    (props: ITextProps & { ref?: any }) => JSX.Element
  >;
  HelpText: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: any }) => JSX.Element
  >;
  Arrow: React.MemoExoticComponent<
    (props: IStatArrowProps & { ref?: any }) => JSX.Element
  >;
  Group: React.MemoExoticComponent<
    (props: IStackProps & { ref?: any }) => JSX.Element
  >;
};

const StatTemp: any = StatMain;
StatTemp.Label = StatLabel;
StatTemp.Number = StatNumber;
StatTemp.HelpText = StatHelpText;
StatTemp.Arrow = StatArrow;
StatTemp.Group = StatGroup;

const Stat = StatTemp as IStatComponentType;

export default Stat;
