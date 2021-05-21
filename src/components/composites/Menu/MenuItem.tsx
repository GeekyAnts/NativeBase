import React, { forwardRef, memo } from 'react';
import Text from '../../primitives/Text';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { Pressable } from '../../primitives/Pressable';
import type { IMenuItemProps } from './types';
import { MenuContext } from './MenuContext';
import { useMenuItem } from './useMenu';
import { mergeRefs } from '../../../utils';

const MenuItem = (
  { children, onPress, style, textValue, ...props }: IMenuItemProps,
  ref: any
) => {
  const { closeOnSelect, onClose } = React.useContext(MenuContext);
  const menuItemRef = React.useRef<any>(null);
  const mergedRef = mergeRefs([menuItemRef, ref]);
  const newProps = usePropsResolution('MenuItem', props);
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
  const { _text, _pressed, _focus, ...touchProps } = allProps;

  const menuItemProps = useMenuItem({
    textValue: textValue ?? textContent,
    ref: menuItemRef,
  });

  return (
    <Pressable
      _pressed={_pressed}
      _focus={_focus}
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
    </Pressable>
  );
};

export default memo(forwardRef(MenuItem));
