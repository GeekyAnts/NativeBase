import { OverlayContainer } from '@react-native-aria/overlays';
import React from 'react';
import {
  keyboardDismissHandlerManager,
  useControllableState,
} from '../../../hooks';
import { Popper } from '../Popper';
import type { IPlacement } from '../Popper/types';
import { composeEventHandlers, mergeRefs } from '../../../utils';
import { Transition } from '../Transitions';
import { Platform, StyleSheet } from 'react-native';
import { useThemeProps } from '../../../hooks';
import Box, { IBoxProps } from '../../primitives/Box';
import { useId } from '@react-aria/utils';

type ITooltipProps = {
  label: string;
  isOpen?: boolean;
  isDisabled?: boolean;
  defaultIsOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  openDelay?: number;
  closeDelay?: number;
  placement?: IPlacement;
  children: any;
  closeOnClick?: boolean;
  arrowSize?: string;
  hasArrow?: boolean;
  offset?: number;
} & IBoxProps;

export const Tooltip = ({
  label,
  children,
  onClose,
  onOpen,
  defaultIsOpen,
  placement,
  openDelay = 0,
  closeDelay = 0,
  closeOnClick = true,
  offset,
  isDisabled,
  hasArrow,
  isOpen: isOpenProp,
  ...rest
}: ITooltipProps) => {
  if (hasArrow && offset === undefined) {
    offset = 0;
  } else {
    offset = 6;
  }

  const themeProps = useThemeProps('Tooltip', rest);
  const [isOpen, setIsOpen] = useControllableState({
    value: isOpenProp,
    defaultValue: defaultIsOpen,
    onChange: (value) => {
      value ? onOpen && onOpen() : onClose && onClose();
    },
  });

  const arrowBg =
    rest.backgroundColor ?? rest.bgColor ?? rest.bg ?? themeProps.bg;

  const targetRef = React.useRef(null);

  const enterTimeout = React.useRef<number>();
  const exitTimeout = React.useRef<number>();
  const tooltipID = useId();

  const openWithDelay = React.useCallback(() => {
    if (!isDisabled) {
      enterTimeout.current = setTimeout(() => setIsOpen(true), openDelay);
    }
  }, [isDisabled, setIsOpen, openDelay]);

  const closeWithDelay = React.useCallback(() => {
    if (enterTimeout.current) {
      clearTimeout(enterTimeout.current);
    }
    exitTimeout.current = setTimeout(() => setIsOpen(false), closeDelay);
  }, [closeDelay, setIsOpen]);

  React.useEffect(
    () => () => {
      clearTimeout(enterTimeout.current);
      clearTimeout(exitTimeout.current);
    },
    []
  );

  let newChildren = children;

  if (typeof children === 'string') {
    newChildren = <Box>{children}</Box>;
  }

  newChildren = React.cloneElement(newChildren, {
    'onPress': composeEventHandlers<any>(newChildren.props.onPress, () => {
      if (closeOnClick) {
        closeWithDelay();
      }
    }),
    'onFocus': composeEventHandlers<any>(
      newChildren.props.onFocus,
      openWithDelay
    ),
    'onBlur': composeEventHandlers<any>(
      newChildren.props.onBlur,
      closeWithDelay
    ),
    'onMouseEnter': composeEventHandlers<any>(
      newChildren.props.onMouseEnter,
      openWithDelay
    ),
    'onMouseLeave': composeEventHandlers<any>(
      newChildren.props.onMouseLeave,
      closeWithDelay
    ),
    'ref': mergeRefs([newChildren.ref, targetRef]),

    'aria-describedby': isOpen ? tooltipID : undefined,
  });

  React.useEffect(() => {
    let cleanupFn = () => {};
    if (isOpen) {
      cleanupFn = keyboardDismissHandlerManager.push(() => setIsOpen(false));
    } else {
      cleanupFn();
    }

    return () => {
      cleanupFn();
    };
  }, [isOpen, setIsOpen]);

  return (
    <>
      {newChildren}
      {isOpen && (
        <OverlayContainer>
          <Transition
            from={{ opacity: 0 }}
            entry={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            visible={isOpen}
            style={StyleSheet.absoluteFill}
            exitDuration={100}
            entryDuration={150}
          >
            <Popper
              triggerRef={targetRef}
              onClose={() => setIsOpen(false)}
              placement={placement}
              offset={offset}
            >
              <Popper.Content>
                {hasArrow && (
                  <Popper.Arrow
                    borderColor="transparent"
                    backgroundColor={arrowBg}
                    height={10}
                    width={10}
                  />
                )}
                <Box
                  {...themeProps}
                  //@ts-ignore
                  accessibilityRole={
                    Platform.OS === 'web' ? 'tooltip' : undefined
                  }
                  nativeID={tooltipID}
                >
                  {label}
                </Box>
              </Popper.Content>
            </Popper>
          </Transition>
        </OverlayContainer>
      )}
    </>
  );
};
