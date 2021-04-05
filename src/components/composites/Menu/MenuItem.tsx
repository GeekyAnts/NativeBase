import React from 'react';
import Text from '../../primitives/Text';
import { useThemeProps } from '../../../hooks';
import TouchableItem from '../../primitives/TouchableItem';
import type { IMenuItemProps } from './types';
import { MenuContext } from './Menu';
import { PopoverContext } from '../Popover/PopoverContext';
import { useMenuItem } from './useMenu';
import { mergeRefs } from '../../../utils';

export const MenuItem = React.forwardRef(function MenuItem(
  { children, onPress, style, textValue, ...props }: IMenuItemProps,
  ref: any
) {
  const { closeOnSelect } = React.useContext(MenuContext);
  const { onClose } = React.useContext(PopoverContext);
  const menuItemRef = React.useRef<any>(null);
  const mergedRef = mergeRefs([menuItemRef, ref]);
  const newProps = useThemeProps('MenuItem', props);
  const [textContent, setTextContent] = React.useState('');
  React.useEffect(() => {
    const menuItem = menuItemRef.current;
    if (menuItem) {
      setTextContent((menuItem.textContent ?? '').trim());
    }
  }, [children]);

  let allProps = {
    ...newProps,
    ...(newProps.isDisabled ? newProps._disabled : {}),
  };
  const { _text, ...touchProps } = allProps;

  const menuItemProps = useMenuItem({
    textValue: textValue ?? textContent,
  });

  return (
    <TouchableItem
      {...menuItemProps}
      {...touchProps}
      ref={mergedRef}
      style={style}
      disabled={props.isDisabled}
      // TouchableHighlight doesn't announce disabled, even if disabled prop is set
      accessibilityState={{
        disabled: props.isDisabled,
      }}
      onPress={(e: any) => {
        if (!props.isDisabled) {
          onPress && onPress(e);
          if (closeOnSelect) {
            onClose && onClose();
          }
        }
      }}
    >
      <>
        {React.Children.map(children, (child, index: any) => {
          if (typeof child === 'string') {
            return (
              <Text {..._text} key={`menu-item-${index}`}>
                {child}
              </Text>
            );
          } else {
            return child;
          }
        })}
      </>
    </TouchableItem>
  );
});
