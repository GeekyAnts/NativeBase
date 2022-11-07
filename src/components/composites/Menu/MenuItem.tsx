import React, { forwardRef, memo } from 'react';
import Text from '../../primitives/Text';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { Pressable } from '../../primitives/Pressable';
import type { IMenuItemProps } from './types';
import { MenuContext } from './MenuContext';
import { useMenuItem } from './useMenu';
import { mergeRefs } from '../../../utils';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { HStack } from '../../primitives';

const MenuItem = (
  { children, isDisabled, onPress, textValue, ...props }: IMenuItemProps,
  ref: any
) => {
  const { closeOnSelect, onClose } = React.useContext(MenuContext);
  const menuItemRef = React.useRef<any>(null);
  const mergedRef = mergeRefs([menuItemRef, ref]);
  const { _text, _stack, ...resolvedProps } = usePropsResolution(
    'MenuItem',
    props,
    {
      isDisabled,
    },
    {
      cascadePseudoProps: true,
    }
  );
  const [textContent, setTextContent] = React.useState('');
  React.useEffect(() => {
    const menuItem = menuItemRef.current;
    if (menuItem) {
      setTextContent((menuItem.textContent ?? '').trim());
    }
  }, [children]);

  const menuItemProps = useMenuItem({
    textValue: textValue ?? textContent,
    ref: menuItemRef,
  });

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  return (
    <Pressable
      {...menuItemProps}
      {...resolvedProps}
      ref={mergedRef}
      disabled={isDisabled}
      accessibilityState={{
        disabled: isDisabled,
      }}
      onPress={(e: any) => {
        if (!isDisabled) {
          onPress && onPress(e);
          if (closeOnSelect) {
            onClose && onClose();
          }
        }
      }}
    >
      <HStack {..._stack}>
        {React.Children.map(children, (child, index: any) => {
          if (typeof child === 'string' || typeof child === 'number') {
            return (
              <Text key={`menu-item-${index}`} {..._text}>
                {child}
              </Text>
            );
          } else {
            return child;
          }
        })}
      </HStack>
    </Pressable>
  );
};

export default memo(forwardRef(MenuItem));
