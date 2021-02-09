import React from 'react';
import { VStack } from '../Stack';
import Box from '../Box';
import Text from '../Text';
import { IIconProps, default as Icon } from '../Icon';
import type { IListProps, IListItemProps } from './types';
import { themeTools } from '../../../theme';
import { useThemeProps } from '../../../hooks';

function findProps(props: any) {
  let [textProps, remaining] = themeTools.extractInObject(props, [
    'fontWeight',
    'fontSize',
    'textDecorationLine',
    'color',
  ]);
  let [borderProps, otherRemainingProps] = themeTools.extractInObject(
    remaining,
    [
      'border',
      'borderBottom',
      'borderTop',
      'borderLeft',
      'borderRight',
      'borderWidth',
      'borderRadius',
      'borderColor',
      'borderRightColor',
      'borderBottomWidth',
      'borderLeftWidth',
      'borderTopWidth',
      'borderBotttomWidth',
      'borderTopLeftRadius',
      'borderBottomColor',
      'borderBottomEndRadius',
      'borderBottomLeftRadius',
      'borderBottomRightRadius',
      'borderBottomStartRadius',
      'borderBottomWidth',
      'borderEndColor',
      'borderLeftColor',
      'borderLeftWidth',
      'borderRadius',
      'borderRightWidth',
      'borderStartColor',
      'borderTopColor',
      'borderTopEndRadius',
      'borderTopLeftRadius',
      'borderTopRightRadius',
      'borderTopStartRadius',
      'borderTopWidth',
    ]
  );
  let [
    layoutProps,
    remainingProps,
  ] = themeTools.extractInObject(otherRemainingProps, [
    'm',
    'margin',
    'mt',
    'marginTop',
    'mr',
    'marginRight',
    'mb',
    'marginBottom',
    'ml',
    'marginLeft',
    'mx',
    'marginX',
    'my',
    'marginY',
    'left',
    'top',
    'bottom',
    'right',
    'position',
    'minH',
    'minHeight',
    'minWidth',
    'minW',
    'height',
    'width',
  ]);

  return [textProps, remainingProps, layoutProps, borderProps];
}

const List = ({ style, children, spacing, ...props }: IListProps) => {
  const themeProps = useThemeProps('List', props);
  // add props to children
  let childrenArray = React.Children.toArray(children);
  children = React.Children.map(children, (child: any, ind: number) => {
    if (ind === childrenArray.length - 1) {
      return React.cloneElement(
        child,
        {
          index: ind,
          ...themeProps.lastListItemStyle,
          ...props,
          py: spacing,
        },
        child.props.children
      );
    }
    return React.cloneElement(
      child,
      { index: ind, ...props, py: spacing },
      child.props.children
    );
  });
  let [, remainingProps, layoutProps, borderProps] = findProps(props);
  return (
    <Box
      style={style}
      {...themeProps.listStyle}
      {...layoutProps}
      {...borderProps}
    >
      <VStack {...remainingProps}>{children}</VStack>
    </Box>
  );
};
export const Ol = ({ style, children, spacing, ...props }: IListProps) => {
  // add props to children
  let childrenArray = React.Children.toArray(children);
  const themeProps = useThemeProps('List', props);
  children = React.Children.map(children, (child: any, ind: number) => {
    if (ind === childrenArray.length - 1) {
      return React.cloneElement(
        child,
        {
          index: ind,
          ...themeProps.lastListItemStyle,
          ...child.props,
          ...props,
          ol: true,
          py: spacing,
        },
        child.props.children
      );
    }
    return React.cloneElement(
      child,
      { index: ind, ...child.props, ...props, ol: true, py: spacing },
      child.props.children
    );
  });
  let [, remainingProps, layoutProps, borderProps] = findProps(props);
  return (
    <Box
      style={style}
      {...layoutProps}
      {...themeProps.listStyle}
      {...borderProps}
    >
      <VStack {...remainingProps}>{children}</VStack>
    </Box>
  );
};
export const Ul = ({ style, children, spacing, ...props }: IListProps) => {
  // add props to children
  const themeProps = useThemeProps('List', props);
  let childrenArray = React.Children.toArray(children);
  children = React.Children.map(children, (child: any, ind: number) => {
    if (ind === childrenArray.length - 1) {
      return React.cloneElement(
        child,
        {
          index: ind,
          ...themeProps.lastListItemStyle,
          ...props,
          ul: true,
          py: spacing,
        },
        child.props.children
      );
    }
    return React.cloneElement(
      child,
      { index: ind, ...props, ul: true, py: spacing },
      child.props.children
    );
  });

  let [, remainingProps, layoutProps, borderProps] = findProps(props);

  return (
    <Box
      style={style}
      {...themeProps.listStyle}
      {...layoutProps}
      {...borderProps}
    >
      <VStack {...remainingProps}>{children}</VStack>
    </Box>
  );
};

export const ListItem = React.memo(({ children, ...props }: IListItemProps) => {
  const themeProps = useThemeProps('List', props);
  let [textProps, remainingProps, , borderProps] = findProps(props);
  const startNum = remainingProps.start ? remainingProps.start : 1; // Ordered list starting number
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      {...themeProps.listItemStyle}
      {...borderProps}
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
export const ListIcon = React.memo((props: IIconProps) => {
  return <Icon mr={2} {...props} />;
});

export type { IListProps, IListItemProps };
export default React.memo(List);
