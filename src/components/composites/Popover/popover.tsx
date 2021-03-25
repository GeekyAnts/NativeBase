import React from 'react';
import { useOverlayPosition } from '@react-native-aria/overlays';
import { ScrollView, View, ViewStyle } from 'react-native';
import type {
  IPopoverArrowImplProps,
  IPopoverArrowProps,
  IPopoverProps,
  IPopoverContentImpl,
  IScrollContentStyle,
  IArrowStyles,
  IPopoverImplProps,
} from './types';
import { Overlay } from '../../../core/Overlay/Overlay';
import { useControllableState, useKeyboardDismissable } from '../../../hooks';
import { PopoverContent } from './PopoverContent';
import PopoverBody from './PopoverBody';
import PopoverCloseButton from './PopoverCloseButton';
import PopoverFooter from './PopoverFooter';
import PopoverHeader from './PopoverHeader';
import Box from '../../primitives/Box';

const defaultArrowHeight = 10;
const defaultArrowWidth = 16;

export const PopoverContext = React.createContext({ onClose: () => {} });

const PopoverImpl = (props: IPopoverImplProps) => {
  const overlayRef = React.useRef(null);

  React.useEffect(() => {
    if (props.initialFocusRef && props.initialFocusRef.current) {
      // Move focus in next tick so RN web modal can save the focus of current element
      Promise.resolve().then(() => {
        props.initialFocusRef.current.focus();
      });
    }

    return () => {
      if (props.finalFocusRef && props.finalFocusRef.current) {
        props.finalFocusRef.current.focus();
      }
    };
  }, [props.finalFocusRef, props.initialFocusRef]);

  const { overlayProps, rendered, arrowProps, placement } = useOverlayPosition({
    targetRef: props.triggerRef,
    overlayRef,
    shouldFlip: props.shouldFlip,
    crossOffset: props.crossOffset,
    isOpen: true,
    offset: props.offset,
    placement: props.placement,
    containerPadding: 0,
    onClose: props.onClose,
    shouldOverlapWithTrigger: props.shouldOverlapWithTrigger,
  });

  let arrowElement: any = useElementByType(props.children, 'PopoverArrow');
  let contentElement: any = useElementByType(props.children, 'PopoverContent');

  let arrowHeight = 0;
  let arrowWidth = 0;

  useKeyboardDismissable({
    enabled: props.isKeyboardDismissable ?? true,
    onClose: props.onClose ? props.onClose : () => {},
  });

  if (arrowElement) {
    arrowHeight = defaultArrowHeight;
    arrowWidth = defaultArrowWidth;
    // No custom Arrow Icon passed
    if (!arrowElement) {
      arrowHeight = arrowElement.props.height ?? defaultArrowHeight;
      arrowWidth = arrowElement.props.width ?? defaultArrowWidth;
      arrowElement = <PopoverArrow height={arrowHeight} width={arrowWidth} />;
    }
    // Custom Arrow
    else {
      arrowHeight = arrowElement.props.height;
      arrowWidth = arrowElement.props.width;
    }
  }

  return (
    <View
      ref={overlayRef}
      collapsable={false}
      style={[
        overlayProps.style,
        { opacity: rendered ? 1 : 0, position: 'absolute' },
      ]}
    >
      {contentElement && (
        <PopoverContentImpl
          children={contentElement}
          arrowHeight={arrowHeight}
          arrowWidth={arrowWidth}
          placement={placement}
          arrowProps={arrowProps}
        />
      )}
      {arrowElement && (
        <PopoverArrowImpl
          {...arrowElement.props}
          height={arrowHeight}
          width={arrowWidth}
          arrowProps={arrowProps}
          placement={placement}
        />
      )}
    </View>
  );
};

// This is an internal implmentation of PopoverContent
const PopoverContentImpl = (props: IPopoverContentImpl) => {
  const { placement } = props;
  let arrowWidth = props.arrowWidth;

  const scrollContainerStyle = React.useMemo(
    () =>
      getScrollContentStyle({
        placement,
        arrowHeight: props.arrowHeight,
        arrowWidth,
      }),
    [props.arrowHeight, arrowWidth, placement]
  );

  return (
    <ScrollView contentContainerStyle={scrollContainerStyle}>
      {props.children}
    </ScrollView>
  );
};

// This is an internal implementation of PopoverArrow
const PopoverArrowImpl = ({
  height,
  width,
  arrowProps,
  placement,
  ...rest
}: IPopoverArrowImplProps) => {
  const additionalStyles = React.useMemo(
    () => getArrowStyles({ placement, height, width }),
    [height, width, placement]
  );

  let triangle: ViewStyle = {
    position: 'absolute',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: width / 2,
    borderRightWidth: width / 2,
    borderBottomWidth: height,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  };

  if (rest.color) {
    rest.borderBottomColor = rest.color;
  }

  return (
    <Box style={[triangle, additionalStyles, arrowProps.style]} {...rest}></Box>
  );
};

const getArrowStyles = (props: IArrowStyles) => {
  let additionalStyles: any = {
    transform: [],
    position: 'absolute',
    height: props.height,
    width: props.width,
    justifyContent: 'center',
    alignItems: 'center',
  };

  if (props.placement === 'top' && props.width) {
    additionalStyles.transform.push({ translateX: -props.width / 2 });
    additionalStyles.transform.push({ rotate: '180deg' });
    additionalStyles.bottom = 0;
  }

  // No rotation is needed in bottom as arrow is already pointing top!
  // additionalStyles.transform.push({ rotate: '-180deg' });
  if (props.placement === 'bottom' && props.width) {
    additionalStyles.transform.push({ translateX: -props.width / 2 });
    additionalStyles.top = 0;
  }

  if (props.placement === 'left' && props.height) {
    additionalStyles.transform.push({ translateY: -props.height / 2 });
    additionalStyles.transform.push({ rotate: '90deg' });
    additionalStyles.right = 0;
  }

  if (props.placement === 'right' && props.height) {
    additionalStyles.transform.push({ translateY: -props.height / 2 });
    additionalStyles.transform.push({ rotate: '-90deg' });
    additionalStyles.left = 0;
  }

  return additionalStyles;
};

const getScrollContentStyle = ({
  placement,
  arrowHeight,
}: IScrollContentStyle) => {
  if (placement === 'top') {
    return { marginBottom: arrowHeight };
  }

  if (placement === 'bottom') {
    return { marginTop: arrowHeight };
  }

  if (placement === 'left') {
    return { marginRight: arrowHeight };
  }

  if (placement === 'right') {
    return { marginLeft: arrowHeight };
  }

  return {};
};

export const useElementByType = (children: React.ReactNode, name: string) => {
  let element;
  React.Children.forEach(children, (child) => {
    //@ts-ignore
    if (child.type.displayName === name) {
      element = child;
    }
  });

  return element;
};
// This component just uses original Popover by wrapping it with OverlayContainer, to make sure it gets rendered in OverlayProvider
const PopoverWithOverlayContainer = (props: IPopoverProps) => {
  const triggerRef = React.useRef(null);

  const [isOpen, setIsOpen] = useControllableState({
    defaultValue: props.defaultIsOpen,
    value: props.isOpen,
    onChange: (val) => {
      val ? props.onOpen : props.onClose;
    },
  });

  const triggerElem = props.trigger(
    {
      onPress: () => setIsOpen(true),
      ref: triggerRef,
      accessibilityRole: 'button',
    },
    { open: isOpen }
  );

  const handleClose = () => {
    setIsOpen(false);
  };

  // let Parent = ({ children }: any) =>
  //   props.trapFocus ? <FocusScope> {children} </FocusScope> : children;

  return (
    <>
      {triggerElem}
      <Overlay
        isOpen={isOpen}
        closeOnBlur={props.closeOnBlur}
        onClose={handleClose}
      >
        <PopoverContext.Provider value={{ onClose: handleClose }}>
          {/* <Parent> */}
          <PopoverImpl
            {...props}
            onClose={handleClose}
            triggerRef={triggerRef}
          />
          {/* </Parent> */}
        </PopoverContext.Provider>
      </Overlay>
    </>
  );
};

export const PopoverArrow = (_props: IPopoverArrowProps) => {
  return <></>;
};

PopoverArrow.displayName = 'PopoverArrow';

PopoverWithOverlayContainer.Content = PopoverContent;
PopoverWithOverlayContainer.Arrow = PopoverArrow;
PopoverWithOverlayContainer.CloseButton = PopoverCloseButton;
PopoverWithOverlayContainer.Header = PopoverHeader;
PopoverWithOverlayContainer.Footer = PopoverFooter;
PopoverWithOverlayContainer.Body = PopoverBody;

export { PopoverWithOverlayContainer as Popover };
