import React from 'react';
import { useFocusManager } from '@react-native-aria/focus';
import { useId } from '@react-native-aria/utils';
import { AccessibilityRole, Platform } from 'react-native';
import { ResponsiveQueryContext } from '../../../utils/useResponsiveQuery/ResponsiveQueryProvider';
import uniqueId from 'lodash.uniqueid';

type IMenuTriggerProps = {
  handleOpen: () => void;
  isOpen: boolean;
};

export const useMenuTrigger = ({ handleOpen, isOpen }: IMenuTriggerProps) => {
  let menuTriggerId = uniqueId();

  // let id = uniqueId();
  const responsiveQueryContext = React.useContext(ResponsiveQueryContext);
  const disableCSSMediaQueries = responsiveQueryContext.disableCSSMediaQueries;

  if (!disableCSSMediaQueries) {
    // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    menuTriggerId = useId();
  }
  return {
    'onKeyDownCapture': (event: KeyboardEvent) => {
      if ([' ', 'Enter', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
        event.preventDefault();
        handleOpen();
      }
    },
    'aria-haspopup': 'menu',
    'aria-expanded': isOpen ? true : undefined,
    'nativeID': menuTriggerId,
  };
};

export const useMenu = () => {
  const focusManager = useFocusManager();
  const onKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();
        //@ts-ignore
        focusManager?.focusNext({ wrap: true });
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        //@ts-ignore
        focusManager?.focusPrevious({ wrap: true });
        break;
      }
    }
  };

  return {
    onKeyDown,
    accessibilityRole: 'menu' as AccessibilityRole,
  };
};

export const useMenuItem = ({
  textValue,
  ref,
}: {
  textValue: string;
  ref: any;
}) => {
  return {
    accessibilityRole: 'menuitem' as AccessibilityRole,
    dataSet: {
      nativebaseMenuItem: textValue,
    },
    onHoverIn: () => {
      if (ref.current && Platform.OS === 'web') ref.current.focus();
    },
  };
};

export const useMenuOptionItem = ({
  isChecked,
  type,
}: {
  isChecked: boolean;
  type: 'checkbox' | 'radio';
}) => {
  return {
    accessibilityRole: ('menuitem' +
      (Platform.OS === 'web' ? type : '')) as AccessibilityRole,
    accessibilityState: {
      checked: isChecked,
    },
    accessibilityChecked: isChecked,
  };
};

const ITEM_ATTR = 'data-nativebase-menu-item';
const getValue = (element: Element) => element.getAttribute(ITEM_ATTR) ?? '';

export const useMenuTypeahead = (props: any): any => {
  return {
    onKeyDown(event: KeyboardEvent) {
      if (props.onKeyDown) {
        props.onKeyDown(event);
      }

      if (
        event.key.length === 1 &&
        !(event.ctrlKey || event.altKey || event.metaKey)
      ) {
        const container = event.currentTarget as HTMLElement;
        const values = Array.from(
          container.querySelectorAll(`[${ITEM_ATTR}]`)
        ).map(getValue);

        const searchKey = event.key;

        const foundValue = values.find((value) =>
          value.toLowerCase().startsWith(searchKey)
        );
        const newItem = container.querySelector(
          `[${ITEM_ATTR}="${foundValue}"]`
        );

        if (newItem) {
          /**
           * Imperative focus during keydown is risky so we prevent React's batching updates
           * to avoid potential bugs. See: https://github.com/facebook/react/issues/20332
           */
          setTimeout(() => (newItem as HTMLElement).focus());
        }
      }
    },
  };
};
