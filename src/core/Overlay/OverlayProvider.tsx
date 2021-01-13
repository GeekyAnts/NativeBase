import React from 'react';
import { Animated, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useFadeTransition } from '../../components/composites/Transitions/useFadeTransition';
import { OverlayContext } from './Context';
import View from '../../components/primitives/View';

const OverlayProvider = ({ children }: { children: any }) => {
  const [overlayItem, setOverlayItem] = React.useState(null);
  const [overlayConfig, setOverlayConfig] = React.useState({
    disableOverlay: undefined,
    position: 'center',
    backgroundColor: '#161616',
    animationDuration: 400,
    closeOnPress: false,
    onClose: (_a: any) => {},
  });

  const { fadeValue, fadeIn, fadeOut } = useFadeTransition(
    overlayConfig.animationDuration
  );
  let overlayStyle = StyleSheet.create({
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
    <OverlayContext.Provider
      value={{
        setOverlayItem,
        defaultConfig: overlayConfig,
        setConfig: setOverlayConfig,
      }}
    >
      {children}
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
    </OverlayContext.Provider>
  );
};

export default OverlayProvider;
