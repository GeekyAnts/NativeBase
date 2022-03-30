import isNil from 'lodash.isnil';
import React, { useEffect, useRef, forwardRef } from 'react';
import { ViewStyle, LayoutAnimation, UIManager, Platform } from 'react-native';
import { Box } from '../../primitives';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import type { InterfaceBoxProps } from '../../primitives/Box';
export type InterfaceCollapseProps = InterfaceBoxProps<ICollapseProps> & {
  style?: ViewStyle;
  endingHeight?: number;
  startingHeight?: number;
  duration?: number;
  animateOpacity?: boolean;
  isOpen?: boolean;
  onAnimationEnd?: Function;
  onAnimationStart?: Function;
};

export type ICollapseProps = InterfaceCollapseProps;

function usePrevious(value: any) {
  const ref = useRef();
  function updatePrevious(newVal: any) {
    ref.current = newVal;
  }
  useEffect(() => {
    updatePrevious(value);
  }, [value]);
  return { value: ref.current, updatePrevious };
}

const Collapse = (
  {
    endingHeight,
    startingHeight,
    duration,
    // animateOpacity,
    isOpen,
    onAnimationEnd,
    onAnimationStart,
    ...props
  }: ICollapseProps,
  ref?: any
) => {
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  const CustomLayoutLinear = {
    duration: duration ? duration : 400,
    create: {
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
    },
  };
  const defaultStartHeight: any = isOpen
    ? endingHeight
    : startingHeight
    ? startingHeight
    : 1;
  let animatedStyle = { height: defaultStartHeight };
  const animateView = () => {
    if (onAnimationStart) {
      onAnimationStart();
    }
    animatedStyle = {
      height: isOpen ? endingHeight : defaultStartHeight,
    };
    let callback = onAnimationEnd ? onAnimationEnd : () => {};
    LayoutAnimation.configureNext(CustomLayoutLinear, callback());
  };

  let wasOpen = usePrevious(isOpen);
  if (!isNil(wasOpen.value) && wasOpen.value !== isOpen) {
    animateView();
    wasOpen.updatePrevious(isOpen);
  }
  const [size, setSize] = React.useState(startingHeight ?? 0);
  const provideSize = (layoutSize: any) => {
    setSize(layoutSize.height);
  };
  const _web = {
    transition: `height ${duration ?? '400'}ms`,
    height: isOpen ? endingHeight || size : startingHeight || 0,
  };
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <Box
      style={{ ...animatedStyle, ...(Platform.OS === 'web' && _web) }}
      overflow="hidden"
      ref={ref}
    >
      <Box
        //@ts-ignore
        overflow={Platform.OS === 'web' ? 'auto' : 'scroll'}
        onLayout={(e: any) => provideSize(e.nativeEvent.layout)}
        {...props}
      />
    </Box>
  );
};

export default React.memo(forwardRef(Collapse));
