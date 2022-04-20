import { OverlayContainer } from '@react-native-aria/overlays';
import React from 'react';
import { useControllableState, useKeyboardDismissable } from '../../../hooks';
import { Popper } from '../Popper';
import { composeEventHandlers, mergeRefs } from '../../../utils';
import { PresenceTransition } from '../Transitions';
import { Platform, StyleSheet } from 'react-native';
import { usePropsResolution } from '../../../hooks';
import Box from '../../primitives/Box';
import type { ITooltipProps } from './types';
import { useId } from '@react-aria/utils';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

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
  arrowSize = 12,
  isOpen: isOpenProp,
  ...props
}: ITooltipProps) => {
  if (hasArrow && offset === undefined) {
    offset = 0;
  } else {
    offset = 6;
  }

  const resolvedProps = usePropsResolution('Tooltip', props);
  const [isOpen, setIsOpen] = useControllableState({
    value: isOpenProp,
    defaultValue: defaultIsOpen,
    onChange: (value) => {
      value ? onOpen && onOpen() : onClose && onClose();
    },
  });

  const arrowBg =
    props.backgroundColor ?? props.bgColor ?? props.bg ?? resolvedProps.bg;

  const targetRef = React.useRef(null);

  const enterTimeout = React.useRef<any>();
  const exitTimeout = React.useRef<any>();
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

  useKeyboardDismissable({
    enabled: isOpen,
    callback: () => setIsOpen(false),
  });
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <>
      {newChildren}
      {isOpen && (
        <OverlayContainer>
          <PresenceTransition
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 150 } }}
            exit={{ opacity: 0, transition: { duration: 100 } }}
            visible={isOpen}
            style={StyleSheet.absoluteFill}
          >
            <Popper
              triggerRef={targetRef}
              onClose={() => setIsOpen(false)}
              placement={placement}
              offset={offset}
            >
              <Popper.Content isOpen={isOpen}>
                {hasArrow && (
                  <Popper.Arrow
                    borderColor="transparent"
                    backgroundColor={arrowBg}
                    height={arrowSize}
                    width={arrowSize}
                  />
                )}
                <Box
                  {...resolvedProps}
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
          </PresenceTransition>
        </OverlayContainer>
      )}
    </>
  );
};
