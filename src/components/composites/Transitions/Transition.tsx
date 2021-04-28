import React from 'react';
import { Animated } from 'react-native';

const defaultStyles = {
  opacity: 1,
  translateY: 0,
  translateX: 0,
  translate: 0,
  scale: 1,
  scaleX: 1,
  scaleY: 1,
};

export const Transition = ({
  children,
  onTransitionComplete,
  visible = false,
  from,
  entry,
  exit,
  exitDuration = 200,
  entryDuration = 250,
  transition,
  style,
}: any) => {
  const animateValue = React.useRef(new Animated.Value(0)).current;

  const [exiting, setExiting] = React.useState(false);
  const [exited, setExited] = React.useState(!visible);

  const prevVisible = React.useRef(visible);

  React.useEffect(() => {
    if (visible) {
      Animated.timing(animateValue, {
        toValue: 1,
        duration: entryDuration,
        useNativeDriver: true,
        ...transition,
      }).start(() => {
        onTransitionComplete && onTransitionComplete('entered');
        setExited(false);
      });
    }
  }, [
    visible,
    onTransitionComplete,
    setExited,
    animateValue,
    entryDuration,
    transition,
  ]);

  React.useEffect(() => {
    // Exit request
    if (prevVisible.current !== visible && !visible) {
      setExiting(true);
    }
    prevVisible.current = visible;
  }, [visible]);

  React.useEffect(() => {
    if (exiting) {
      Animated.timing(animateValue, {
        toValue: 0,
        duration: exitDuration,
        useNativeDriver: true,
        ...transition,
      }).start(() => {
        onTransitionComplete && onTransitionComplete('exited');
        setExited(true);
        setExiting(false);
      });
    }
  }, [
    transition,
    exiting,
    onTransitionComplete,
    setExiting,
    setExited,
    exitDuration,
    animateValue,
  ]);

  if (!visible && exited) {
    return null;
  }

  from = exiting
    ? { ...defaultStyles, ...exit }
    : { ...defaultStyles, ...from };

  entry = { ...defaultStyles, ...entry };

  return (
    <Animated.View
      pointerEvents="box-none"
      style={[
        {
          opacity: animateValue.interpolate({
            inputRange: [0, 1],
            outputRange: [from.opacity, entry.opacity],
          }),
          transform: [
            {
              translateY: animateValue.interpolate({
                inputRange: [0, 1],
                outputRange: [from.translateY, entry.translateY],
              }),
            },
            {
              scale: animateValue.interpolate({
                inputRange: [0, 1],
                outputRange: [from.scale, entry.scale],
              }),
            },
          ],
        },
        style,
      ]}
    >
      {children}
    </Animated.View>
  );
};
