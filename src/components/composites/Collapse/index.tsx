import isNil from 'lodash/isNil';
import React, { useEffect, useRef } from 'react'; //import  also
import { ViewStyle, LayoutAnimation, UIManager, Platform } from 'react-native';
import { Box, IBoxProps } from '../../primitives';

export type ICollapseProps = IBoxProps & {
  style?: ViewStyle;
  endingHeight?: number;
  startingHeight?: number;
  duration?: number;
  animateOpacity?: boolean;
  isOpen?: boolean;
  onAnimationEnd?: Function;
  onAnimationStart?: Function;
};

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

const Collapse = ({
  endingHeight,
  startingHeight,
  duration,
  // animateOpacity,
  isOpen,
  onAnimationEnd,
  onAnimationStart,
  ...props
}: ICollapseProps) => {
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
    : 0;
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
  return (
    <Box style={animatedStyle} overflow="hidden">
      <Box overflow="scroll" {...props} />
    </Box>
  );
};

export default React.memo(Collapse);
