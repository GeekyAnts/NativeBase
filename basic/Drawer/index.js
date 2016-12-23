import React, { PropTypes, Component } from 'react';
import { PanResponder, View, StyleSheet, Dimensions } from 'react-native';

import tween from './tweener';

const deviceScreen = Dimensions.get('window');
const TAP_DURATION = 250;

export default class Drawer extends Component {

  static tweenPresets = {
    parallax: (ratio, side = 'left') => {
      const drawer = { [side]: -150 * (1 - ratio) };
      return { drawer };
    },
  };
  static propTypes = {
    acceptTap: PropTypes.bool,
    captureGestures: PropTypes.oneOf([true, false, 'open', 'closed']),
    children: PropTypes.node,
    content: PropTypes.node,
    elevation: PropTypes.number,
    initializeOpen: PropTypes.bool,
    open: PropTypes.bool,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    openDrawerOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    panCloseMask: PropTypes.number,
    panOpenMask: PropTypes.number,
    side: PropTypes.oneOf(['left', 'right']),
    styles: PropTypes.object,
    tapToClose: PropTypes.bool,
    tweenDuration: PropTypes.number,
    tweenEasing: PropTypes.string,
    tweenHandler: PropTypes.func,
    type: PropTypes.oneOf(['overlay', 'static', 'displace']),
  };

  static defaultProps = {
    open: null,
    initializeOpen: false,

    type: 'displace',
    closedDrawerOffset: 0,
    openDrawerOffset: 0,
    panOpenMask: null,
    panCloseMask: null,

    tweenHandler: null,
    tweenDuration: 250,
    tweenEasing: 'linear',

    captureGestures: 'open',
    acceptTap: false,
    tapToClose: false,

    styles: {},
    elevation: 0,
    onOpen: () => {},
    onClose: () => {},
    side: 'left',

  };

  state = {
    viewport: deviceScreen,
  };

  componentWillMount() {
    this.initialize(this.props);
  }

  onStartShouldSetPanResponderCapture = (e, gestureState) => {
    if (this.shouldCaptureGestures()) return this.processShouldSet(e, gestureState);
    return false;
  };

  getOpenLeft = () => this.state.viewport.width - this._offsetOpen;
  getClosedLeft = () => this._offsetClosed;
  getHeight = () => this.state.viewport.height;
  getMainWidth = () => this.state.viewport.width - this._offsetClosed;
  getDrawerWidth = () => this.state.viewport.width - this._offsetOpen;
  getOpenMask = () => {
    if (this.props.panCloseMask && this.props.panCloseMask % 1 === 0) {
      return this.props.panCloseMask;
    }
    if (this.props.panCloseMask) return this.state.viewport.width * this.props.panCloseMask;
    return Math.max(0.05, this._offsetOpen);
  };
  getClosedMask = () => {
    if (this.props.panOpenMask && this.props.panOpenMask % 1 === 0) return this.props.panOpenMask;
    if (this.props.panOpenMask) return this.state.viewport.width * this.props.panOpenMask;
    return Math.max(0.05, this._offsetClosed);
  };
  getOpenOffset = (props, viewport) => {
    if (typeof props.openDrawerOffset === 'function') return props.openDrawerOffset(viewport);
    return props.openDrawerOffset % 1 === 0 ?
      props.openDrawerOffset : props.openDrawerOffset * viewport.width;
  };
  getClosedOffset = (props, viewport) => {
    if (typeof props.closedDrawerOffset === 'function') return props.closedDrawerOffset(viewport);
    return props.closedDrawerOffset % 1 === 0 ?
      props.closedDrawerOffset : props.closedDrawerOffset * viewport.width;
  };

  initialize = (props) => {
    const fullWidth = this.state.viewport.width;
    this._offsetClosed = this.getClosedOffset(props, this.state.viewport);
    this._offsetOpen = this.getOpenOffset(props, this.state.viewport);
    this._prevLeft = this._left;

    const styles = {
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    };

    styles.main = Object.assign({
      position: 'absolute',
      top: 0,
    }, { borderWidth: 0 }, this.props.styles.main);

    styles.drawer = Object.assign({
      position: 'absolute',
      top: 0,
    }, { borderWidth: 0 }, this.props.styles.drawer);

    if (props.initializeOpen || props.open) {
      this._open = true;
      this._left = fullWidth - this._offsetOpen;
      styles.main[this.props.side] = 0;
      styles.drawer[this.props.side] = 0;
      if (props.type === 'static') styles.main[this.props.side] = fullWidth - this._offsetOpen;
      if (props.type === 'displace') styles.main[this.props.side] = fullWidth - this._offsetOpen;
    } else { // closed
      this._open = false;
      this._left = this._offsetClosed;
      styles.main[this.props.side] = this._offsetClosed;
      if (props.type === 'static') styles.drawer[this.props.side] = 0;
      if (props.type === 'overlay') styles.drawer[this.props.side] = this._offsetClosed + this._offsetOpen - fullWidth;
      if (props.type === 'displace') styles.drawer[this.props.side] = -fullWidth + this._offsetClosed + this._offsetOpen;
    }

    if (this.main) {
      this.drawer.setNativeProps({ style: { left: styles.drawer.left } });
      this.main.setNativeProps({ style: { left: styles.main.left } });
    } else {
      this.stylesheet = StyleSheet.create(styles);
      this.responder = PanResponder.create({
        onStartShouldSetPanResponderCapture: this.onStartShouldSetPanResponderCapture,
        onPanResponderRelease: this.onPanResponderRelease,
      });
    }
  };

  updatePosition = () => {
    let mainProps = {};
    let drawerProps = {};
    const ratio = (this._left - this._offsetClosed) / (this.getOpenLeft() - this._offsetClosed);

    switch (this.props.type) {
      case 'overlay':
        drawerProps[this.props.side] = -this.state.viewport.width + this._offsetOpen + this._left;
        mainProps[this.props.side] = this._offsetClosed;
        break;
      case 'static':
        mainProps[this.props.side] = this._left;
        drawerProps[this.props.side] = 0;
        break;
      case 'displace':
        mainProps[this.props.side] = this._left;
        drawerProps[this.props.side] = -this.state.viewport.width + this._left + this._offsetOpen;
        break;
    }

    const mainOverlayProps = null;
    const drawerOverlayProps = null;
    if (this.props.tweenHandler) {
      const propsFrag = this.props.tweenHandler(ratio, this.props.side);
      mainProps = Object.assign(mainProps, propsFrag.main);
      drawerProps = Object.assign(drawerProps, propsFrag.drawer);
    }
    this.drawer.setNativeProps({ style: drawerProps });
    this.main.setNativeProps({ style: mainProps });
  };


  onPanResponderRelease = (e, gestureState) => {
    this._panning = false;
    if (Date.now() - this._panStartTime < TAP_DURATION) this.processTapGestures();
    if (Math.abs(gestureState.dx) < 50 && this._activeTween) return;

    this.updatePosition();
    this._prevLeft = this._left;
  };

  processShouldSet = (e, gestureState) => {
    const inMask = this.testPanResponderMask(e, gestureState);
    if (!inMask) return false;
    this._panStartTime = Date.now();
    if (inMask && this.shouldCaptureGestures()) return true;
  };


  processTapGestures = () => {
    if (this._activeTween) return false;
    if (this.props.acceptTap || (this.props.tapToClose && this._open)) {
      this._open ? this.close() : this.open();
      return true;
    }
    return false;
  };

  shouldCaptureGestures() {
    if (this.props.captureGestures === true) return true;
    if (this.props.captureGestures === 'closed' && this._open === false) return true;
    if (this.props.captureGestures === 'open' && this._open === true) return true;
    return false;
  }

  testPanResponderMask = (e, gestureState) => {
    if (this.context.drawer && this.context.drawer._open) return false;
    if (this._childDrawer && this._childDrawer._open) return false;

    const x0 = e.nativeEvent.pageX;
    const deltaOpen = this.props.side === 'left' ? this.state.viewport.width - x0 : x0;
    const deltaClose = this.props.side === 'left' ? x0 : this.state.viewport.width - x0;

    if (this._open && deltaOpen > this.getOpenMask()) return false;
    if (!this._open && deltaClose > this.getClosedMask()) return false;
    return true;
  };


  open = (type) => {
    const start = this._left;
    const end = this.getOpenLeft();


    this._activeTween = tween({
      start: this._left,
      end: this.getOpenLeft(),
      duration: this.props.tweenDuration,
      easingType: this.props.tweenEasing,
      onFrame: (tweenValue) => {
        this._left = tweenValue;
        this.updatePosition();
      },
      onEnd: () => {
        this._activeTween = null;
        this._open = true;
        this._prevLeft = this._left;
        this.adjustForCaptureGestures();
        this.props.onOpen();
      },
    });
  };

  close = (type) => {
    const start = this._left;
    const end = this.getClosedLeft();

    this._activeTween = tween({
      start,
      end,
      easingType: this.props.tweenEasing,
      duration: this.props.tweenDuration,
      onFrame: (tweenValue) => {
        this._left = tweenValue;
        this.updatePosition();
      },
      onEnd: () => {
        this._activeTween = null;
        this._open = false;
        this._prevLeft = this._left;
        this.adjustForCaptureGestures();
        this.props.onClose();
      },
    });
  };

  adjustForCaptureGestures() {
    if (!this.props.captureGestures) return;
    const shouldCapture = this.shouldCaptureGestures();
    if (this.mainOverlay && this.drawerOverlay) {
      this.mainOverlay.setNativeProps({ pointerEvents: shouldCapture && this._open ? 'auto' : 'none' });
      this.drawerOverlay.setNativeProps({ pointerEvents: shouldCapture && !this._open ? 'auto' : 'none' });
    }
  }


  render() {
    const first = this.props.type === 'overlay' ? this.renderMain() : this.renderDrawer();
    const second = this.props.type === 'overlay' ? this.renderDrawer() : this.renderMain();

    return (
      <View
        key="drawerContainer"
        onLayout={this.handleSetViewport}
        style={this.stylesheet.container}
      >
        {first}
        {second}
      </View>
    );
  }

  renderMain() {
    return (
      <View
        {...this.responder.panHandlers}
        key="main"
        ref={c => this.main = c}
        style={[this.stylesheet.main, { height: this.getHeight(), width: this.getMainWidth() }]}
      >
        {this.props.children}
        <View
          pointerEvents={this._open && this.shouldCaptureGestures() ? 'auto' : 'none'}
          ref={c => this.mainOverlay = c}
          style={[styles.overlay, this.props.styles && this.props.styles.mainOverlay]}
        />
      </View>
    );
  }

  renderDrawer() {
    return (
      <View
        {...this.responder.panHandlers}
        key="drawer"
        ref={c => this.drawer = c}
        elevation={this.props.elevation}
        style={[this.stylesheet.drawer, { height: this.getHeight(), width: this.getDrawerWidth() }]}
      >
        {this.props.content}
        <View
          pointerEvents={!this._open && this.shouldCaptureGestures() ? 'auto' : 'none'}
          ref={c => this.drawerOverlay = c}
          style={[styles.overlay, this.props.styles && this.props.styles.drawerOverlay]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: 'transparent',
  },
});
