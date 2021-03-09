import { Dimensions, I18nManager, StatusBar } from 'react-native';

/**
 *
 * @param triggerTop : Top of the trigger element
 * @param triggerLeft : Left of the trigger element
 * @param triggerWidth : Height of the trigger element
 * @param triggerHeight : Width of the trigger element
 * @param elementWidth : Width of the actual element that is being mounted
 * @param elementHeight : Height of the actual element that is being mounted
 * @param placeOverTriggerElement: option to mount over trigger element
 * @returns
 */
export function getCoordinates(
  triggerTop: any,
  triggerLeft: any,
  triggerWidth: any,
  triggerHeight: any,
  elementWidth: any,
  elementHeight: any,
  placeOverTriggerElement: boolean = true
) {
  let top = triggerTop;
  let left = triggerLeft;
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
