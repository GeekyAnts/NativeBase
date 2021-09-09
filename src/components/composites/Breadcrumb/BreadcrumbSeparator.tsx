import React from 'react';
import { AccessibilityRole, Platform } from 'react-native';
import Text from '../../primitives/Text';

export const getBreadcrumbSeparator = (
  children: JSX.Element[] | JSX.Element | any,
  separator: string | JSX.Element | JSX.Element[] | any,
  props: any,
  spacing: number | undefined
) => {
  let separatorProps = {
    accessibilityRole: (Platform.OS === 'web'
      ? 'presentation'
      : undefined) as AccessibilityRole,
  };

  if (Array.isArray(children)) {
    if (children.length === 1) {
      return children;
    }
    const separatorElement = separator ? (
      typeof separator === 'string' ? (
        <Text {...separatorProps} mx={spacing ?? 2}>
          {separator}
        </Text>
      ) : (
        React.cloneElement(separator, {
          mx: spacing ?? 2,
          ...separatorProps,
        })
      )
    ) : (
      <Text mx={spacing ?? 2} {...separatorProps}>
        {'/'}
      </Text>
    );
    let result: any = [];
    if (children && children.length > 1) {
      result = children.reduce(
        (r: any[], a: any) => r.concat(a, separatorElement),
        [separatorElement]
      );
    }
    result = result.slice(1, -1);
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
