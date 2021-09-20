import React from 'react';
import { useOverlayPosition } from '@react-native-aria/overlays';
import { StyleSheet, View, ViewStyle } from 'react-native';
import type {
  IPopperProps,
  IScrollContentStyle,
  IArrowStyles,
  IPopoverArrowProps,
} from './types';
import { createContext } from '../../../utils';
import Box, { IBoxProps } from '../../primitives/Box';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const defaultArrowHeight = 15;
const defaultArrowWidth = 15;

const getDiagonalLength = (height: number, width: number) => {
  return Math.pow(height * height + width * width, 0.5);
};

type PopperContext = IPopperProps & {
  triggerRef: any;
  onClose: any;
  setOverlayRef?: (overlayRef: any) => void;
};

const [PopperProvider, usePopperContext] = createContext<PopperContext>(
  'PopperContext'
);

const Popper = (
  props: IPopperProps & {
    triggerRef: any;
    onClose: any;
    setOverlayRef?: (overlayRef: any) => void;
  }
) => {
  return <PopperProvider {...props}>{props.children}</PopperProvider>;
};

const PopperContent = React.forwardRef(
  ({ children, style, ...rest }: IBoxProps, ref: any) => {
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
    // const { top } = useSafeAreaInsets();
    const {
      overlayProps,
      rendered,
      arrowProps,
      placement,
    } = useOverlayPosition({
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
            // To handle translucent android StatusBar
            // marginTop: Platform.select({ android: top, default: 0 }),
            opacity: rendered ? 1 : 0,
            position: 'absolute',
          },
        }),
      [rendered, overlayProps.style]
    );
    //TODO: refactor for responsive prop
    if (useHasResponsiveProps(rest)) {
      return null;
    }

    return (
      <View ref={overlayRef} collapsable={false} style={overlayStyle.overlay}>
        {arrowElement}
        <Box
          style={StyleSheet.flatten([containerStyle, style])}
          {...rest}
          ref={ref}
        >
          {restElements}
        </Box>
      </View>
    );
  }
);

// This is an internal implementation of PopoverArrow
const PopperArrow = React.forwardRef(
  (
    {
      height = defaultArrowHeight,
      width = defaultArrowWidth,

      //@ts-ignore - Will be passed by React.cloneElement from PopperContent
      arrowProps,
      //@ts-ignore - Will be passed by React.cloneElement from PopperContent
      actualPlacement,
      style,
      borderColor = '#52525b',
      backgroundColor = 'black',
      ...rest
    }: IPopoverArrowProps & IBoxProps<IPopoverArrowProps>,
    ref: any
  ) => {
    const additionalStyles = React.useMemo(
      () => getArrowStyles({ placement: actualPlacement, height, width }),
      [actualPlacement, height, width]
    );

    let triangleStyle: ViewStyle = React.useMemo(
      () => ({
        position: 'absolute',
        width,
        height,
      }),
      [width, height]
    );

    let arrowStyles = React.useMemo(
      () => [arrowProps.style, triangleStyle, additionalStyles, style],
      [triangleStyle, additionalStyles, arrowProps.style, style]
    );

    return (
      <Box
        ref={ref}
        style={arrowStyles}
        borderColor={borderColor}
        backgroundColor={backgroundColor}
        zIndex={1}
        {...rest}
      />
    );
  }
);

const getArrowStyles = (props: IArrowStyles) => {
  let additionalStyles: any = {
    transform: [],
  };

  const diagonalLength = getDiagonalLength(
    defaultArrowHeight,
    defaultArrowHeight
  );

  if (props.placement === 'top' && props.width) {
    additionalStyles.transform.push({ translateX: -props.width / 2 });
    additionalStyles.transform.push({ rotate: '45deg' });
    additionalStyles.bottom = Math.ceil(
      (diagonalLength - defaultArrowHeight) / 2
    );
    additionalStyles.borderBottomWidth = 1;
    additionalStyles.borderRightWidth = 1;
  }

  if (props.placement === 'bottom' && props.width) {
    additionalStyles.transform.push({ translateX: -props.width / 2 });
    additionalStyles.transform.push({ rotate: '45deg' });
    additionalStyles.top = Math.ceil((diagonalLength - defaultArrowHeight) / 2);
    additionalStyles.borderTopWidth = 1;
    additionalStyles.borderLeftWidth = 1;
  }

  if (props.placement === 'left' && props.height) {
    additionalStyles.transform.push({ translateY: -props.height / 2 });
    additionalStyles.transform.push({ rotate: '45deg' });
    additionalStyles.right = Math.ceil(
      (diagonalLength - defaultArrowHeight) / 2
    );
    additionalStyles.borderTopWidth = 1;
    additionalStyles.borderRightWidth = 1;
  }

  if (props.placement === 'right' && props.height) {
    additionalStyles.transform.push({ translateY: -props.height / 2 });
    additionalStyles.transform.push({ rotate: '45deg' });
    additionalStyles.left = Math.ceil(
      (diagonalLength - defaultArrowHeight) / 2
    );
    additionalStyles.borderBottomWidth = 1;
    additionalStyles.borderLeftWidth = 1;
  }

  return additionalStyles;
};

const getContainerStyle = ({ placement, arrowHeight }: IScrollContentStyle) => {
  const diagonalLength = getDiagonalLength(arrowHeight, arrowHeight) / 2;

  if (placement === 'top') {
    return { marginBottom: diagonalLength };
  }

  if (placement === 'bottom') {
    return { marginTop: diagonalLength };
  }

  if (placement === 'left') {
    return { marginRight: diagonalLength };
  }

  if (placement === 'right') {
    return { marginLeft: diagonalLength };
  }

  return {};
};

PopperArrow.displayName = 'PopperArrow';
Popper.Content = PopperContent;
Popper.Arrow = PopperArrow;

export { Popper };
