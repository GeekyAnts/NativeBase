import React from 'react';
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { getCoordinates } from './../Popover/utils';
import { useFadeTransition } from '../../components/composites/Transitions/useFadeTransition';
import isEqual from 'lodash/isEqual';

type PopoverWrapperType = {
  popoverItem: any;
  popoverConfig: any;
  setPopoverItem: any;
};

function areEqual(
  prevProps: PopoverWrapperType,
  nextProps: PopoverWrapperType
) {
  if (
    isEqual(prevProps.popoverItem, nextProps.popoverItem) &&
    isEqual(prevProps.popoverConfig, nextProps.popoverConfig)
  )
    return true;
  return false;
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

function Wrapper({
  popoverItem,
  popoverConfig,
  setPopoverItem,
}: PopoverWrapperType) {
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
      popoverConfig.triggerRef.current.measureInWindow(
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
        style={{
          position: 'absolute',
          zIndex: 99999,
          ...positions,
        }}
        onLayout={getElementDims}
      >
        {popoverItem}
      </View>
    </Animated.View>
  );
}

export default React.memo(Wrapper, areEqual);
