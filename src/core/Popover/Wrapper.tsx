import React from 'react';
import { Animated, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import View from '../../components/primitives/View';
import { getCoordinates } from './../Popover/utils';
import { useFadeTransition } from '../../components/composites/Transitions/useFadeTransition';

export function Wrapper({
  popoverItem,
  popoverConfig,
  setPopoverItem,
}: {
  popoverItem: any;
  popoverConfig: any;
  setPopoverItem: any;
}) {
  const [state, setState] = React.useState<any>({
    elementWidth: 0,
    elementHeight: 0,
  });
  const { fadeValue, fadeIn, fadeOut } = useFadeTransition(
    popoverConfig.animationDuration
  );

  popoverItem ? fadeIn() : fadeOut();
  const [triggerElementDims, setTriggerElementDims] = React.useState<any>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const getElementDims = ({ nativeEvent }: any) => {
    if (nativeEvent && nativeEvent.layout) {
      setState({
        elementWidth: nativeEvent.layout.width,
        elementHeight: nativeEvent.layout.height,
      });
    }
  };
  React.useEffect(() => {
    if (popoverConfig.triggerRef && popoverConfig.triggerRef.current) {
      popoverConfig.triggerRef.current.measure(
        (x: any, y: any, width: any, height: any) => {
          setTriggerElementDims({ x, y, width, height });
        }
      );
    }
  }, [popoverConfig.triggerRef]);
  let positions = getCoordinates(
    triggerElementDims.y,
    triggerElementDims.x,
    state.elementWidth,
    state.elementHeight,
    triggerElementDims.width,
    triggerElementDims.height,
    popoverConfig.placeOverTriggerElement
  );
  return (
    <Animated.View
      nativeID="popover-provider"
      style={[providerStyle.wrapper, { opacity: fadeValue }]}
      pointerEvents={popoverItem ? 'auto' : 'none'}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          setPopoverItem(null);
          popoverConfig.onClose && popoverConfig.onClose();
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
  );
}
const providerStyle = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 999,
  },
});
