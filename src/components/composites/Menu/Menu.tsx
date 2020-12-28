import React from 'react';
import {
  Animated,
  Easing,
  Modal,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { getContainerStyles } from './utils/getContainerStyles';
import type { IMenuProps, IMenuContextProps } from './props';
import type { IBoxProps } from '../../primitives';
import View from '../../primitives/View';
import { usePropsConfig } from '../../../hooks';
import { extractInObject } from '../../../theme/tools/utils';
import styled from 'styled-components/native';
import {
  border,
  color,
  flexbox,
  layout,
  space,
  typography,
} from 'styled-system';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
  customTypography,
} from '../../../utils/customProps';

const STATES = {
  HIDDEN: 'HIDDEN',
  ANIMATING: 'ANIMATING',
  SHOWN: 'SHOWN',
};
const animationDuration = 300;
const EASING = Easing.bezier(0.4, 0, 0.2, 1);

export const MenuContext = React.createContext<IMenuContextProps>({
  open: false,
  closeMenu: () => {},
});

const StyleAnimatedView = styled(Animated.View)<IBoxProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  typography,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customTypography,
  customLayout
);
class MenuClass extends React.Component<IMenuProps, any> {
  _container = null;
  constructor(props: any) {
    super(props);
    this.state = {
      open: false,
      menuState: STATES.HIDDEN,
      top: 0,
      left: 0,
      menuWidth: 0,
      menuHeight: 0,
      buttonWidth: 0,
      buttonHeight: 0,
      menuSizeAnimation: new Animated.ValueXY({ x: 0, y: 0 }),
      opacityAnimation: new Animated.Value(0),
    };
  }

  _onMenuLayout = (e: any) => {
    if (this.state.menuState === STATES.ANIMATING) {
      return;
    }
    const { width, height } = e.nativeEvent.layout;
    this.setState(
      {
        menuState: STATES.ANIMATING,
        menuWidth: width,
        menuHeight: height,
      },
      () => {
        Animated.parallel([
          Animated.timing(this.state.menuSizeAnimation, {
            toValue: { x: width, y: height },
            duration: Platform.OS === 'ios' ? animationDuration : 10,
            easing: Easing.bezier(0.01, 1.3, 0.77, 0.91),
            useNativeDriver: Platform.OS !== 'web',
          }),
          Animated.timing(this.state.opacityAnimation, {
            toValue: 1,
            duration: animationDuration,
            easing: EASING,
            useNativeDriver: Platform.OS !== 'web',
          }),
        ]).start();
      }
    );
  };

  show = () => {
    if (this._container) {
      // @ts-ignore
      this._container.measureInWindow(
        (left: any, top: any, buttonWidth: any, buttonHeight: any) => {
          this.setState({
            buttonHeight,
            buttonWidth,
            left,
            menuState: STATES.SHOWN,
            top,
          });
        }
      );
    }
  };

  hide = (onHidden?: any) => {
    Animated.timing(this.state.opacityAnimation, {
      toValue: 0,
      duration: animationDuration,
      easing: EASING,
      useNativeDriver: Platform.OS !== 'web',
    }).start(() => {
      this.setState(
        {
          menuState: STATES.HIDDEN,
          menuSizeAnimation: new Animated.ValueXY({ x: 0, y: 0 }),
          opacityAnimation: new Animated.Value(0),
        },
        () => {
          if (onHidden) {
            onHidden();
          }
          if (Platform.OS !== 'ios' && this.props.onClose) {
            this.props.onClose();
          }
        }
      );
    });
  };

  _hide = () => {
    this.hide();
  };
  render() {
    const {
      menuSizeAnimation,
      menuWidth,
      menuHeight,
      buttonWidth,
      buttonHeight,
      opacityAnimation,
    } = this.state;
    let { menuSize, menuContainerStyle } = getContainerStyles(
      this.state.top,
      this.state.left,
      menuSizeAnimation,
      menuWidth,
      menuHeight,
      buttonWidth,
      buttonHeight,
      opacityAnimation
    );

    const { menuState } = this.state;
    const animationStarted = menuState === STATES.ANIMATING;
    const modalVisible = menuState === STATES.SHOWN || animationStarted;
    const {
      testID,
      trigger,
      style,
      children,
      onOpen,
      onClose,
      closeOnSelect = true,
    } = this.props;
    const closeMenu = () => {
      onClose && onClose();
      this.hide();
    };
    let triggerElement: any = trigger
      ? trigger(
          {
            onPress: () => {
              if (this.state.open) {
                closeMenu();
              } else {
                this.show();
                onOpen && onOpen();
              }
            },
          },
          { open: this.state.open }
        )
      : null;
    const [shadowContainerProps, remainingProps] = extractInObject(this.props, [
      'borderRadius',
      'borderWidth',
      'bg',
      'backgroundColor',
      'shadowOffset',
      'shadowColor',
      'elevation',
      'shadowOpacity',
      'shadowRadius',
    ]);
    return (
      <MenuContext.Provider
        value={{ open: this.state.open, closeMenu, closeOnSelect }}
      >
        <View
          ref={(ref: any) => {
            this._container = ref;
          }}
          collapsable={false}
          testID={testID}
          {...remainingProps}
        >
          {triggerElement}
          <Modal
            visible={modalVisible}
            onRequestClose={this._hide}
            supportedOrientations={[
              'portrait',
              'portrait-upside-down',
              'landscape',
              'landscape-left',
              'landscape-right',
            ]}
            transparent
          >
            <TouchableWithoutFeedback onPress={this._hide}>
              <View style={StyleSheet.absoluteFill}>
                <StyleAnimatedView
                  onLayout={this._onMenuLayout}
                  position="absolute"
                  opacity={0}
                  {...shadowContainerProps}
                  style={[menuContainerStyle, style]}
                >
                  <StyleAnimatedView style={[animationStarted ? menuSize : {}]}>
                    {children}
                  </StyleAnimatedView>
                </StyleAnimatedView>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
      </MenuContext.Provider>
    );
  }
}

export const Menu = (props: IMenuProps) => {
  const newProps = usePropsConfig('Menu', props);
  return <MenuClass {...newProps} />;
};
