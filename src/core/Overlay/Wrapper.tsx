import React from 'react';
import { Animated, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useFadeTransition } from '../../components/composites/Transitions/useFadeTransition';
import View from '../../components/primitives/View';
import isEqual from 'lodash/isEqual';

type OverlayWrapperType = {
  overlayItem: any;
  overlayConfig: any;
  setOverlayItem: any;
};

function areEqual(
  prevProps: OverlayWrapperType,
  nextProps: OverlayWrapperType
) {
  if (
    isEqual(prevProps.overlayItem, nextProps.overlayItem) &&
    isEqual(prevProps.overlayConfig, nextProps.overlayConfig)
  )
    return true;
  return false;
}

function Wrapper({
  overlayItem,
  overlayConfig,
  setOverlayItem,
}: OverlayWrapperType) {
  const { fadeValue, fadeIn, fadeOut } = useFadeTransition(
    overlayConfig.animationDuration
  );
  const overlayStyle = StyleSheet.create({
    wrapper: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: 999,
      alignItems: 'center',
      justifyContent:
        overlayConfig.position === 'top'
          ? 'flex-start'
          : overlayConfig.position === 'bottom'
          ? 'flex-end'
          : 'center',
    },
  });

  overlayItem ? fadeIn() : fadeOut();
  return (
    <Animated.View
      style={[overlayStyle.wrapper, { opacity: fadeValue }]}
      pointerEvents={
        overlayItem
          ? overlayConfig.disableOverlay
            ? 'box-none'
            : 'auto'
          : 'none'
      }
      nativeID="overlay-provider"
    >
      <TouchableWithoutFeedback
        onPress={() => {
          if (overlayConfig.closeOnPress) {
            setOverlayItem(null);
            overlayConfig.onClose ? overlayConfig.onClose(false) : null;
          }
        }}
      >
        <View
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={999}
          opacity={0.5}
          bg={
            overlayConfig.disableOverlay
              ? 'transparent'
              : overlayConfig.backgroundColor ?? '#161616cc'
          }
        />
      </TouchableWithoutFeedback>
      <View zIndex={99999} flex={1}>
        {overlayItem}
      </View>
    </Animated.View>
  );
}

export default React.memo(Wrapper, areEqual);
