import React, { useEffect } from 'react';
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Platform,
} from 'react-native';
import { useFadeTransition } from '../../components/composites/Transitions/useFadeTransition';
import isEqual from 'lodash.isequal';
import type { IOverlayConfig } from './types';
import { useKeyboardDismissable } from '../../hooks/useKeyboardDismissable';

type OverlayWrapperType = {
  overlayItem: any;
  overlayConfig: IOverlayConfig;
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

  const handleClose = React.useCallback(() => {
    setOverlayItem(null);
    overlayConfig.onClose ? overlayConfig.onClose(false) : null;
  }, [overlayConfig, setOverlayItem]);

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

  useKeyboardDismissable({
    enabled: !!overlayItem && overlayConfig.isKeyboardDismissable,
    onClose: handleClose,
  });

  const placeOverlayItem = () => {
    if (readyToAnimate && overlayItem) {
      const webStyle = {
        transition: `top ${overlayConfig.animationDuration}ms`,
        top: 0,
      };
      return (
        <View style={{ width: '100%', ...(Platform.OS === 'web' && webStyle) }}>
          {overlayItem}
        </View>
      );
    } else {
      return (
        <View
          style={{ opacity: 0, top: overlayItemPosition }}
          onLayout={(e) => provideSize(e.nativeEvent.layout)}
        >
          {overlayItem}
        </View>
      );
    }
  };

  overlayItem ? fadeIn() : fadeOut();

  const isOverlayOpen = !!overlayItem;
  const isModal = isOverlayOpen && overlayConfig.accessibilityViewIsModal;

  return (
    <Animated.View
      accessibilityLabel={
        isOverlayOpen ? overlayConfig.accessibilityLabel : undefined
      }
      // iOS
      accessibilityViewIsModal={isModal}
      // Web
      aria-modal={isModal}
      // To support Z gesture escape on iOS
      onAccessibilityEscape={handleClose}
      // Web. aria-* will be deprecated in future versions
      // @ts-ignore
      accessibilityModal={isModal}
      // @ts-ignore
      accessibilityRole={overlayConfig.accessibilityRole}
      style={[overlayStyle.wrapper, { opacity: fadeValue }]}
      pointerEvents={'box-none'}
    >
      {isOverlayOpen && !overlayConfig.disableOverlay && (
        <TouchableWithoutFeedback
          accessibilityLabel="Close Overlay"
          onPress={() => {
            if (overlayConfig.closeOnPress) {
              handleClose();
            }
          }}
        >
          <View style={overlayStyle.background} />
        </TouchableWithoutFeedback>
      )}
      {/* Added box-none instead of none to fix Web modal not able to get clicked inside Modal.Body */}
      <View
        pointerEvents="box-none"
        style={overlayStyle.itemBackground}
        onLayout={(e) => provideWindowSize(e.nativeEvent.layout)}
      >
        {isSlideAnimation ? placeOverlayItem() : overlayItem}
      </View>
    </Animated.View>
  );
}

export default React.memo(Wrapper, areEqual);
