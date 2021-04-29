import React from 'react';
import { useOverlayPosition } from '@react-native-aria/overlays';
import { StyleSheet, View, ViewStyle } from 'react-native';
import type {
  IPopoverProps,
  IScrollContentStyle,
  IArrowStyles,
  IPopoverArrowProps,
  IPopoverContent,
} from './types';
import { createContext } from '../../../utils';

const defaultArrowHeight = 10;
const defaultArrowWidth = 16;

type PopperContext = IPopoverProps & {
  triggerRef: any;
  onClose: any;
  setOverlayRef?: (overlayRef: any) => void;
};

const [PopperProvider, usePopperContext] = createContext<PopperContext>(
  'PopperContext'
);

const Popper = (
  props: IPopoverProps & {
    triggerRef: any;
    onClose: any;
    setOverlayRef?: (overlayRef: any) => void;
  }
) => {
  return <PopperProvider {...props}>{props.children}</PopperProvider>;
};

const PopperContent = ({ children }: IPopoverContent) => {
  const {
    triggerRef,
    shouldFlip,
    crossOffset,
    offset,
    placement: placementProp,
    onClose,
    shouldOverlapWithTrigger,
    setOverlayRef,
  } = usePopperContext('PopperContent');
  const overlayRef = React.useRef(null);

  const { overlayProps, rendered, arrowProps, placement } = useOverlayPosition({
    targetRef: triggerRef,
    overlayRef,
    shouldFlip: shouldFlip,
    crossOffset: crossOffset,
    isOpen: true,
    offset: offset,
    placement: placementProp as any,
    containerPadding: 0,
    onClose: onClose,
    shouldOverlapWithTrigger,
  });

  let restElements: React.ReactNode[] = [];
  let arrowElement: React.ReactElement | null = null;

  React.useEffect(() => {
    setOverlayRef && setOverlayRef(overlayRef);
  }, [overlayRef, setOverlayRef]);

  // Might have performance impact if there are a lot of siblings!
  // Shouldn't be an issue with popovers since it would have atmost 2. Arrow and Content.
  React.Children.forEach(children, (child) => {
    if (
      React.isValidElement(child) &&
      // @ts-ignore
      child.type.displayName === 'PopperArrow'
    ) {
      arrowElement = React.cloneElement(child, {
        // @ts-ignore
        arrowProps,
        actualPlacement: placement,
      });
    } else {
      restElements.push(child);
    }
  });

  let arrowHeight = 0;
  let arrowWidth = 0;

  if (arrowElement) {
    arrowHeight = defaultArrowHeight;
    arrowWidth = defaultArrowWidth;

    //@ts-ignore
    if (arrowElement.props.height) {
      //@ts-ignore
      arrowHeight = arrowElement.props.height;
    }

    //@ts-ignore
    if (arrowElement.props.width) {
      //@ts-ignore
      arrowWidth = arrowElement.props.width;
    }
  }

  const containerStyle = React.useMemo(
    () =>
      getContainerStyle({
        placement,
        arrowHeight,
        arrowWidth,
      }),
    [arrowHeight, arrowWidth, placement]
  );

  const overlayStyle = React.useMemo(
    () =>
      StyleSheet.create({
        overlay: {
          ...overlayProps.style,
          opacity: rendered ? 1 : 0,
          position: 'absolute',
        },
      }),
    [rendered, overlayProps.style]
  );

  return (
    <View ref={overlayRef} collapsable={false} style={overlayStyle.overlay}>
      {arrowElement}
      <View style={containerStyle}>{restElements}</View>
    </View>
  );
};

// This is an internal implementation of PopoverArrow
const PopperArrow = ({
  height = defaultArrowHeight,
  width = defaultArrowWidth,

  //@ts-ignore - Will be passed by React.cloneElement from PopperContent
  arrowProps,
  //@ts-ignore - Will be passed by React.cloneElement from PopperContent
  actualPlacement,
  ...rest
}: IPopoverArrowProps) => {
  const additionalStyles = React.useMemo(
    () => getArrowStyles({ placement: actualPlacement, height, width }),
    [actualPlacement, height, width]
  );

  let triangleStyle: ViewStyle = React.useMemo(
    () => ({
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
      borderBottomColor: rest.color,
    }),
    [width, height, rest.color]
  );

  let arrowStyles = React.useMemo(
    () => [triangleStyle, additionalStyles, arrowProps.style, rest.style],
    [triangleStyle, additionalStyles, arrowProps.style, rest.style]
  );

  // Passed a custom Arrow, don't apply triangle style
  if (rest.children) {
    return (
      <View style={[additionalStyles, arrowProps.style, rest.style]}>
        {rest.children}
      </View>
    );
  }

  return <View style={arrowStyles}></View>;
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

const getContainerStyle = ({ placement, arrowHeight }: IScrollContentStyle) => {
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

PopperArrow.displayName = 'PopperArrow';
Popper.Content = PopperContent;
Popper.Arrow = PopperArrow;

export { Popper };
