import React, { useEffect } from 'react';
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Platform,
} from 'react-native';
import { useFadeTransition } from '../../components/composites/Transitions/useFadeTransition';
import Box from '../../components/primitives/Box';
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
  const backgroundColor = overlayConfig.disableOverlay
    ? 'transparent'
    : overlayConfig.backgroundColor ?? '#161616cc';
  const isSlideAnimation = overlayConfig.motionPreset === 'slide';
  const overlayStyle = StyleSheet.create({
    wrapper: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: 999,
    },
    background: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 999,
      opacity: 0.5,
      backgroundColor,
    },
    itemBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent:
        overlayConfig.position === 'top'
          ? 'flex-start'
          : overlayConfig.position === 'bottom'
          ? 'flex-end'
          : 'center',
      zIndex: 9999,
    },
  });

  const [overlayItemHeight, setOverlayItemHeight] = React.useState(0);
  const [overlayItemPosition, setOverlayItemposition] = React.useState(0);
  const [windowSize, setWindowSize] = React.useState(0);
  const [readyToAnimate, setReadyToAnimate] = React.useState(false);
  const provideSize = (layoutSize: any) => {
    setOverlayItemHeight(layoutSize.height);
  };
  const provideWindowSize = (layoutSize: any) => {
    setWindowSize(layoutSize.height);
  };

  useEffect(() => {
    if (isSlideAnimation) {
      if (overlayItem && overlayItemHeight) {
        setTimeout(() => {
          setReadyToAnimate(true);
        }, 100);
      } else if (!overlayItem) {
        setReadyToAnimate(false);
      }
    }
  }, [isSlideAnimation, overlayItem, overlayItemHeight, setReadyToAnimate]);

  useEffect(() => {
    if (isSlideAnimation) {
      switch (overlayConfig.position) {
        case 'top':
          setOverlayItemposition(windowSize);
          break;
        case 'bottom':
          setOverlayItemposition(overlayItemHeight);
          break;
        default:
          // as center is default position
          setOverlayItemposition(windowSize / 2 - overlayItemHeight / 2);
          break;
      }
    }
  }, [
    isSlideAnimation,
    overlayConfig.position,
    windowSize,
    overlayItemHeight,
    setOverlayItemposition,
  ]);

  const placeOverlayItem = () => {
    if (readyToAnimate && overlayItem) {
      const webStyle = {
        transition: `top ${overlayConfig.animationDuration}ms`,
        top: 0,
      };
      return (
        <Box style={{ ...(Platform.OS === 'web' && webStyle) }}>
          {overlayItem}
        </Box>
      );
    } else {
      return (
        <Box
          style={{ opacity: 0, top: overlayItemPosition }}
          onLayout={(e) => provideSize(e.nativeEvent.layout)}
        >
          {overlayItem}
        </Box>
      );
    }
  };

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
    >
      <TouchableWithoutFeedback
        onPress={() => {
          if (overlayConfig.closeOnPress) {
            setOverlayItem(null);
            overlayConfig.onClose ? overlayConfig.onClose(false) : null;
          }
        }}
      >
        <View style={overlayStyle.background} />
      </TouchableWithoutFeedback>
      {/* Added box-none instead of none to fix Web modal not able to get clicked inside Modal.Body */}
      <View
        pointerEvents="box-none"
        style={overlayStyle.itemBackground}
        onLayout={(e) =>
          isSlideAnimation && provideWindowSize(e.nativeEvent.layout)
        }
      >
        {isSlideAnimation ? placeOverlayItem() : overlayItem}
      </View>
    </Animated.View>
  );
}

export default React.memo(Wrapper, areEqual);
