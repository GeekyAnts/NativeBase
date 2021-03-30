import React from 'react';
import { Animated } from 'react-native';
import { useFadeTransition } from '../../components/composites/Transitions';

export function OverlayTransition({
  children,
  animationDuration,
}: {
  animationDuration?: number;
  children: any;
}) {
  const { fadeValue, fadeIn, fadeOut } = useFadeTransition(animationDuration);

  React.useEffect(() => {
    fadeIn();

    return () => {
      fadeOut();
    };
  }, [fadeIn, fadeOut]);

  return (
    <Animated.View style={{ opacity: fadeValue }}>{children}</Animated.View>
  );
}
