import React, { useState } from 'react';
import { AccessibilityRole, Platform } from 'react-native';
import { HStack } from '../../primitives/Stack';
import { createIcon, Pressable } from 'native-base';
import { Path, G } from 'react-native-svg';
import type { IBreadcrumbProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps/usePropsResolution';
import Text from '../../primitives/Text';
import type { IFlexProps, ITextProps } from '../../primitives';

const Breadcrumb = (
  {
    style,
    children,
    separator,
    spacing,
    _text,
    maxItems,
    _button,
    ...props
  }: IBreadcrumbProps & IFlexProps & ITextProps,
  ref: any
) => {
  const textProps = { ..._text };
  // Maintaining state to show all children on press of collapse button
  const [showAllChildren, setShowAllChildren] = useState(
    maxItems ? false : true
  );
  let separatorProps = {
    accessibilityRole: (Platform.OS === 'web'
      ? 'presentation'
      : undefined) as AccessibilityRole,
  };
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

  let newProps = usePropsResolution('Breadcrumb', props);
  return (
    <HStack
      display="flex"
      flexWrap="wrap"
      {...newProps}
      ref={ref}
      style={style}
      // Custom Separator
      divider={separatorElement}
      space={spacing ?? 2}
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
            showAllChildren,
            setShowAllChildren
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
  showAllChildren: boolean,
  setShowAllChildren: any
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
                  <CollapseButton
                    {..._button}
                    setShowAllChildren={setShowAllChildren}
                  />
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
                  <CollapseButton
                    {..._button}
                    setShowAllChildren={setShowAllChildren}
                  />
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
    if (showAllChildren) {
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
  const CustomIcon = createIcon({
    viewBox: '0 0 32.055 32.055',
    path: [
      <G>
        <Path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967   C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967   s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967   c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z" />
      </G>,
    ],
  });
  return (
    <Pressable
      {...remainingProps}
      onPress={() => {
        props.setShowAllChildren(true);
      }}
    >
      <CustomIcon size={4} />
    </Pressable>
  );
};

export default React.memo(React.forwardRef(Breadcrumb));
export type { IBreadcrumbProps };
