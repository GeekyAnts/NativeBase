import {
  Animated,
  I18nManager,
  Dimensions,
  StatusBar,
  Platform,
} from 'react-native';
const SCREEN_INDENT = 0;

export function getContainerStyles(
  top: any,
  left: any,
  menuSizeAnimation: any,
  menuWidth: any,
  menuHeight: any,
  buttonWidth: any,
  buttonHeight: any,
  opacityAnimation: any
) {
  const { isRTL } = I18nManager;
  const dimensions = Dimensions.get('window');
  const { width: windowWidth } = dimensions;
  const windowHeight = dimensions.height - (StatusBar.currentHeight || 0);

  const menuSize = {
    width: menuSizeAnimation.x,
    height: menuSizeAnimation.y,
  };
  // Adjust position of menu
  const transforms = [];

  if (
    (isRTL && left + buttonWidth - menuWidth > SCREEN_INDENT) ||
    (!isRTL && left + menuWidth > windowWidth - SCREEN_INDENT)
  ) {
    transforms.push({
      translateX: Animated.multiply(menuSizeAnimation.x, -1),
    });
    left = Math.min(windowWidth, left + buttonWidth);
  }

  // Flip by Y axis if menu hits bottom screen border
  if (top > windowHeight - menuHeight - SCREEN_INDENT) {
    transforms.push({
      translateY: Animated.multiply(menuSizeAnimation.y, -1),
    });
    top = windowHeight - SCREEN_INDENT;
    top = Math.min(
      windowHeight -
        menuHeight +
        SCREEN_INDENT +
        (Platform.OS === 'android' ? 3 : 2) * buttonHeight,
      top + buttonHeight
    );
  }
  const menuContainerStyle = {
    opacity: opacityAnimation,
    transform: transforms,
    top,
    // Switch left to right for rtl devices
    ...(isRTL ? { right: left } : { left }),
  };
  return { menuContainerStyle, menuSize };
}
