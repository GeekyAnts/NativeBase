import React, { memo, forwardRef } from 'react';
import { AccessibilityRole, Platform } from 'react-native';
import { HStack } from '../../primitives/Stack';
import { useControllableState } from '../../../hooks';
import { Pressable } from '../../primitives/Pressable';
import type { IBreadcrumbProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps/usePropsResolution';
import Text from '../../primitives/Text';
import type { IFlexProps } from '../../primitives';
import { ThreeDotsIcon } from '../../primitives/Icon/Icons';

import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
const Breadcrumb = (
  {
    style,
    children,
    separator,
    _text,
    maxItems,
    _button,
    isCollapsed,
    onCollapseChange,
    ...props
  }: IBreadcrumbProps & IFlexProps,
  ref: any
) => {
  const textProps = { ..._text };

  // Maintaining state to show all children on press of collapse button
  const [collapsed, setCollapsed] = useControllableState({
    value: isCollapsed,
    defaultValue: false,
    onChange: (value) => {
      onCollapseChange && onCollapseChange(value);
    },
  });
  const { spacing, ...newProps } = usePropsResolution('Breadcrumb', props);

  const separatorProps = {
    accessibilityRole: (Platform.OS === 'web'
      ? 'presentation'
      : undefined) as AccessibilityRole,
  };
  const separatorElement = separator ? (
    typeof separator === 'string' ? (
      <Text {...separatorProps} mx={spacing}>
        {separator}
      </Text>
    ) : (
      React.cloneElement(separator, {
        mx: spacing,
        ...separatorProps,
      })
    )
  ) : (
    <Text mx={spacing} {...separatorProps}>
      {'/'}
    </Text>
  );

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <HStack
      display="flex"
      flexWrap="wrap"
      {...newProps}
      ref={ref}
      style={style}
      // Custom Separator
      divider={separatorElement}
      space={spacing}
      // @ts-ignore - Web only prop
      accessibilityRole={Platform.OS === 'web' ? 'navigation' : undefined}
      accessibilityLabel="Breadcrumb"
    >
      {children && !children.length
        ? children
        : getBreadcrumbSeparator(
            children,
            textProps,
            maxItems,
            _button,
            collapsed,
            setCollapsed
          )}
    </HStack>
  );
};

// Returns children to be rendered
const getBreadcrumbSeparator = (
  children: JSX.Element[] | JSX.Element | any,
  props: any,
  maxItems: number | number[] | undefined,
  _button: any,
  collapsed: boolean | undefined,
  setCollapsed: any
) => {
  if (Array.isArray(children)) {
    if (children.length === 1) {
      return children;
    }
    let result: any = [];
    if (maxItems) {
      let buttonAdded = false;
      if (typeof maxItems == 'number') {
        // When MaxItems is a number
        if (children.length > 2 * maxItems) {
          for (let i = 0; i < children.length; i++) {
            if (i < maxItems || i >= children.length - maxItems) {
              result.push(children[i]);
            } else {
              if (!buttonAdded) {
                result.push(
                  <CollapseButton {..._button} setCollapsed={setCollapsed} />
                );
                buttonAdded = true;
              }
            }
          }
          buttonAdded = false;
        }
      }
      // Whem maxItems is an array
      else if (typeof maxItems == 'object') {
        if (children.length > maxItems[0] + maxItems[1])
          for (let i = 0; i < children.length; i++) {
            if (i < maxItems[0] || i >= children.length - maxItems[1]) {
              result.push(children[i]);
            } else {
              if (!buttonAdded) {
                // pushing Collapsible button as a child
                result.push(
                  <CollapseButton {..._button} setCollapsed={setCollapsed} />
                );
                buttonAdded = true;
              }
            }
          }
        buttonAdded = false;
      }
    } else {
      result = children;
    }
    if (!collapsed) {
      result = children;
    }
    return result.map((child: any, index: number) => {
      return React.cloneElement(child, {
        _text: { ...props },
        ...props,
        key: `breadcrumb-separator-${index}`,
      });
    });
  } else {
    return children;
  }
};

// Collapse button
const CollapseButton = (props: any) => {
  const { ...remainingProps } = props;

  return (
    <Pressable
      {...remainingProps}
      onPress={() => {
        props.setCollapsed(false);
      }}
    >
      <ThreeDotsIcon size={4} />
    </Pressable>
  );
};

export default memo(forwardRef(Breadcrumb));
export type { IBreadcrumbProps };
