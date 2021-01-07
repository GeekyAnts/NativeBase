import React from 'react';
import { Animated, StyleSheet, TouchableOpacity } from 'react-native';
import { useFadeTransition } from '../../components/composites/Transitions/useFadeTransition';
import type { IOverlayProps } from './props';
import { OverlayContext } from './Context';
import View from '../../components/primitives/View';

const Overlay = ({
  children,
  disableOverlay,
  position,
  animationDuration,
  defaultBackgroundColor,
  closeOnPress,
}: IOverlayProps) => {
  const [overlayItem, setOverlayItem] = React.useState(null);
  const [config, setConfig] = React.useState({
    disableOverlay,
    position: position ?? 'center',
    backgroundColor: defaultBackgroundColor ?? '#161616',
    animationDuration: animationDuration ?? 500,
    closeOnPress: !closeOnPress ? false : true,
    onClose: (_a: any) => {},
  });

  const { fadeValue, fadeIn, fadeOut } = useFadeTransition(animationDuration);
  let providerStyle = StyleSheet.create({
    provider: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: 999,
      alignItems: 'center',
      opacity: 0.5,
      // backgroundColor: config.disableOverlay
      //   ? 'transparent'
      //   : config.backgroundColor,
      justifyContent:
        config.position === 'top'
          ? 'flex-start'
          : config.position === 'bottom'
          ? 'flex-end'
          : 'center',
    },
  });

  const pointerEventsSetter = () => {
    if (overlayItem) {
      return config.disableOverlay ? 'box-none' : 'auto';
    } else {
      return 'none';
    }
  };
  overlayItem ? fadeIn() : fadeOut();
  return (
    // Need to use React native view to apply pointerEvents none
    <OverlayContext.Provider
      value={{ setOverlayItem, defaultConfig: config, setConfig }}
    >
      {children}
      <Animated.View
        nativeID="toast-provider"
        style={[providerStyle.provider, { opacity: fadeValue }]}
        pointerEvents={pointerEventsSetter()}
      >
        <View top={0} left={0} right={0} bottom={0} zIndex={999999}>
          {overlayItem}
        </View>
        <View
          bg={
            config.disableOverlay
              ? 'transparent'
              : config.backgroundColor
              ? config.backgroundColor
              : '#161616cc'
          }
          style={providerStyle.provider}
        />
        {config.closeOnPress ? (
          <TouchableOpacity
            style={[providerStyle.provider, { backgroundColor: 'transparent' }]}
            onPress={() => {
              setOverlayItem(null);
              config.onClose ? config.onClose(false) : null;
            }}
          />
        ) : null}
      </Animated.View>
    </OverlayContext.Provider>
  );
};

export default Overlay;
