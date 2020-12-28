import { I18nManager, Dimensions, StatusBar } from 'react-native';

export function getCoordinates(
  elementTop: any,
  elementLeft: any,
  elementWidth: any,
  elementHeight: any,
  triggerWidth: any,
  triggerHeight: any,
  placeOverTriggerElement: boolean = true
) {
  let top = elementTop;
  let left = elementLeft;
  const { isRTL } = I18nManager;
  const dimensions = Dimensions.get('window');
  const { width: windowWidth } = dimensions;
  const windowHeight = dimensions.height - (StatusBar.currentHeight || 0);
  const triggerIndent = !placeOverTriggerElement ? triggerHeight : 0;
  if (
    (isRTL && left + triggerWidth > elementWidth) ||
    (!isRTL && left + elementWidth > windowWidth)
  ) {
    left = Math.min(windowWidth - elementWidth, left + triggerWidth);
  }
  // Flip by Y axis if element hits bottom screen border
  if (top > windowHeight - elementHeight) {
    top = Math.min(
      windowHeight - elementHeight - triggerHeight - triggerIndent,
      top + triggerIndent
    );
  } else {
    top += triggerIndent;
  }
  const elementContainerStyle = {
    top,
    // Switch left to right for rtl devices
    ...(isRTL ? { right: left } : { left }),
  };
  return elementContainerStyle;
}
