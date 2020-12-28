import React from 'react';
import { Animated, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useFadeTransition } from '../../components/composites/Transitions/useFadeTransition';
import type { IPopoverConfig } from './props';
import { PopoverContext } from './Context';
import View from '../../components/primitives/View';
import { getCoordinates } from './utils';

const PopoverProvider = ({ children }: { children: any }) => {
  const [popoverItem, setPopoverItem] = React.useState(null);
  const [config, setConfig] = React.useState<IPopoverConfig>({
    triggerRef: null,
    placeOverTriggerElement: undefined,
    onClose: null,
    animationDuration: 200,
  });
  const [state, setState] = React.useState<any>({
    elementX: 0,
    elementY: 0,
    elementWidth: 0,
    elementHeight: 0,
  });
  const [triggerElementDims, setTriggerElementDims] = React.useState<any>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const getElementDims = ({ nativeEvent }: any) => {
    if (nativeEvent && nativeEvent.layout) {
      setState({
        elementX: nativeEvent.layout.x,
        elementY: nativeEvent.layout.y,
        elementWidth: nativeEvent.layout.width,
        elementHeight: nativeEvent.layout.height,
      });
    }
  };
  React.useEffect(() => {
    if (config.triggerRef && config.triggerRef.current) {
      config.triggerRef.current.measure(
        (x: any, y: any, width: any, height: any) => {
          setTriggerElementDims({ x, y, width, height });
        }
      );
    }
  }, [config.triggerRef]);
  let positions = getCoordinates(
    triggerElementDims.y,
    triggerElementDims.x,
    state.elementWidth,
    state.elementHeight,
    triggerElementDims.width,
    triggerElementDims.height,
    config.placeOverTriggerElement
  );
  const { fadeValue, fadeIn, fadeOut } = useFadeTransition(
    config.animationDuration
  );
  let providerStyle = StyleSheet.create({
    wrapper: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: 999,
    },
  });

  popoverItem ? fadeIn() : fadeOut();
  return (
    <PopoverContext.Provider
      value={{ setPopoverItem, defaultConfig: config, setConfig }}
    >
      {children}
      <Animated.View
        nativeID="popover-provider"
        style={[providerStyle.wrapper, { opacity: fadeValue }]}
        pointerEvents={popoverItem ? 'auto' : 'none'}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            setPopoverItem(null);
          }}
        >
          <View style={providerStyle.wrapper} />
        </TouchableWithoutFeedback>
        <View
          zIndex={99999}
          onLayout={getElementDims}
          position="absolute"
          style={positions}
        >
          {popoverItem}
        </View>
      </Animated.View>
    </PopoverContext.Provider>
  );
};

export default PopoverProvider;
