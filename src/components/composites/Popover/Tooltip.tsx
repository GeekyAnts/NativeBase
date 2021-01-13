import * as React from 'react';
import { I18nManager, Modal, TouchableOpacity } from 'react-native';
import { View } from '../../primitives';
import getTooltipCoordinate from './getTooltipCoordinate';
import { isIOS, ScreenHeight, ScreenWidth } from './helpers';
import Triangle from './Triangle';

type State = {
  isVisible: boolean;
  yOffset: number;
  xOffset: number;
  elementWidth: number;
  elementHeight: number;
};

export type Props = {
  children?: JSX.Element | JSX.Element[];
  withPointer?: boolean;
  popover?: JSX.Element;
  height?: number | string;
  width?: number | string;
  containerStyle?: any;
  pointerColor?: string;
  pointerStyle?: {};
  onClose?: () => void;
  onOpen?: () => void;
  withOverlay?: boolean;
  overlayColor?: string;
  backgroundColor?: string;
  highlightColor?: string;
  toggleWrapperProps?: {};
  closeOnPopoverPress?: boolean;
  closeOnBlur?: boolean;
  actionType?: 'press' | 'longPress' | 'none';
  borderColor?: string;
  borderWidth?: number;
};

class Tooltip extends React.PureComponent<Props, State> {
  state = {
    isVisible: false,
    yOffset: 0,
    xOffset: 0,
    elementWidth: 0,
    elementHeight: 0,
  };

  renderedElement: any;
  timeout: any;

  static defaultProps: {
    toggleWrapperProps: {};
    withOverlay: true;
    highlightColor: 'transparent';
    withPointer: true;
    actionType: 'press';
    height: 40;
    width: 150;
    containerStyle: {};
    pointerStyle: {};
    backgroundColor: '#617080';
    onClose: () => void;
    onOpen: () => void;
  };

  toggleTooltip = () => {
    const { onClose } = this.props;
    this.getElementPosition();
    this.setState((prevState) => {
      if (prevState.isVisible && !isIOS) {
        onClose && onClose();
      }
      return { isVisible: !prevState.isVisible };
    });
  };

  wrapWithAction = (actionType: any, children: {} | null | undefined) => {
    if (actionType === 'press' || actionType === 'longPress') {
      return (
        <TouchableOpacity
          onPress={actionType === 'press' ? this.toggleTooltip : undefined}
          onLongPress={
            actionType === 'longPress' ? this.toggleTooltip : undefined
          }
          activeOpacity={1}
          {...this.props.toggleWrapperProps}
        >
          {children}
        </TouchableOpacity>
      );
    }
    return children;
  };

  getTooltipStyle = () => {
    const { yOffset, xOffset, elementHeight, elementWidth } = this.state;
    const { height, width, withPointer, containerStyle } = this.props;

    const { x, y } = getTooltipCoordinate(
      xOffset,
      yOffset,
      elementWidth,
      elementHeight,
      ScreenWidth,
      ScreenHeight,
      width,
      height,
      withPointer
    );

    return {
      position: 'absolute',
      left: I18nManager.isRTL ? null : x,
      right: I18nManager.isRTL ? x : null,
      top: y,
      width,
      height,
      // default styles
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      borderRadius: 10,
      paddingTop: 10,
      paddingBottom: 10,
      // borderWidth: 1,
      // borderColor: '#CBD5E0',
      ...containerStyle,
    };
  };

  renderPointer = (tooltipY: any) => {
    const { yOffset, xOffset, elementHeight, elementWidth } = this.state;
    const { backgroundColor, pointerStyle } = this.props;
    const pastMiddleLine = yOffset > tooltipY;
    const styling: any = {
      position: 'absolute',
      top: pastMiddleLine ? yOffset - 13 : yOffset + elementHeight - 2,
      left: I18nManager.isRTL ? null : xOffset + elementWidth / 2 - 7.5,
      right: I18nManager.isRTL ? xOffset + elementWidth / 2 - 7.5 : null,
    };
    return (
      <View style={styling}>
        <Triangle
          borderBottomColor={backgroundColor}
          style={{
            ...pointerStyle,
          }}
          isDown={pastMiddleLine}
        />
      </View>
    );
  };
  renderContent = (withTooltip: any) => {
    const { popover, withPointer, highlightColor, actionType } = this.props;

    if (!withTooltip)
      return this.wrapWithAction(actionType, this.props.children);

    const { yOffset, xOffset, elementWidth, elementHeight } = this.state;
    const tooltipStyle = this.getTooltipStyle();
    const styling: any = {
      position: 'absolute',
      top: yOffset,
      left: I18nManager.isRTL ? null : xOffset,
      right: I18nManager.isRTL ? xOffset : null,
      backgroundColor: highlightColor,
      overflow: 'visible',
      width: elementWidth,
      height: elementHeight,
    };
    return (
      <View>
        <View style={styling}>{this.props.children}</View>
        {withPointer && this.renderPointer(tooltipStyle.top)}
        <View
          bg={this.props.backgroundColor}
          borderColor={this.props.borderColor}
          borderWidth={this.props.borderWidth}
          style={tooltipStyle}
        >
          {popover}
        </View>
      </View>
    );
  };

  componentDidMount() {
    // wait to compute onLayout values.
    this.timeout = setTimeout(this.getElementPosition, 500);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  getElementPosition = () => {
    this.renderedElement &&
      this.renderedElement.measureInWindow(
        (pageOffsetX: any, pageOffsetY: any, width: any, height: any) => {
          this.setState({
            xOffset: pageOffsetX,
            yOffset: pageOffsetY,
            elementWidth: width,
            elementHeight: height,
          });
        }
      );
  };

  render() {
    const { isVisible } = this.state;
    const { onClose, withOverlay, onOpen, overlayColor } = this.props;

    return (
      <View collapsable={false} ref={(e: any) => (this.renderedElement = e)}>
        {this.renderContent(false)}
        <Modal
          animationType="fade"
          visible={isVisible}
          transparent
          onDismiss={onClose}
          onShow={onOpen}
          onRequestClose={onClose}
        >
          {this.props.closeOnBlur ? (
            <TouchableOpacity
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                opacity: 0.5,
                right: 0,
                bottom: 0,
              }}
              onPress={this.toggleTooltip}
            />
          ) : null}

          {this.props.closeOnPopoverPress ? (
            <TouchableOpacity
              style={styles.container(withOverlay, overlayColor)}
              onPress={this.toggleTooltip}
              activeOpacity={1}
            >
              <View>{this.renderContent(true)}</View>
            </TouchableOpacity>
          ) : (
            this.renderContent(true)
          )}
        </Modal>
      </View>
    );
  }
}
Tooltip.defaultProps = {
  toggleWrapperProps: {},
  withOverlay: true,
  highlightColor: 'transparent',
  withPointer: true,
  actionType: 'press',
  height: 40,
  width: 150,
  containerStyle: {},
  pointerStyle: {},
  backgroundColor: '#617080',
  onClose: () => {},
  onOpen: () => {},
};
const styles = {
  container: (withOverlay: any, overlayColor: any) => ({
    backgroundColor: withOverlay
      ? overlayColor
        ? overlayColor
        : 'rgba(250, 250, 250, 0.70)'
      : 'transparent',
    flex: 1,
    zIndex: -1,
  }),
};

export default Tooltip;
