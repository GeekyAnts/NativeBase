import React, {Component,PropTypes} from 'react';
import {
  PanResponder,
  View,
  StyleSheet,
  Dimensions
} from 'react-native'
import tween from './tweener'

let deviceScreen = Dimensions.get('window')

class Drawer extends Component {

  _left = 0;
  _prevLeft = 0;
  _offsetOpen = 0;
  _offsetClosed = 0;
  _open = false;
  _panning = false;
  _tweenPending = false;
  _activeTween = null;
  _lastPress = 0;
  _panStartTime = 0;
  _syncAfterUpdate = false;

  static tweenPresets = {
    parallax: (ratio, side = 'left') => {
      let drawer = { [side] : -150 * (1 - ratio)}
      return { drawer }
    }
  };

  static propTypes = {
    acceptDoubleTap: React.PropTypes.bool,
    acceptPan: React.PropTypes.bool,
    acceptTap: React.PropTypes.bool,
    captureGestures: React.PropTypes.bool,
    children: React.PropTypes.node,
    closedDrawerOffset: React.PropTypes.number,
    content: React.PropTypes.node,
    deviceScreen: React.PropTypes.object,
    disabled: React.PropTypes.bool,
    initializeOpen: React.PropTypes.bool,
    negotiatePan: React.PropTypes.bool,
    onClose: React.PropTypes.func,
    onCloseStart: React.PropTypes.func,
    onOpen: React.PropTypes.func,
    onOpenStart: React.PropTypes.func,
    openDrawerOffset: React.PropTypes.number,
    openDrawerThreshold: React.PropTypes.number,
    panCloseMask: React.PropTypes.number,
    panOpenMask: React.PropTypes.number,
    panStartCompensation: React.PropTypes.bool,
    relativeDrag: React.PropTypes.bool,
    side: React.PropTypes.oneOf(['left', 'right']),
    styles: React.PropTypes.object,
    tapToClose: React.PropTypes.bool,
    tweenDuration: React.PropTypes.number,
    tweenEasing: React.PropTypes.string,
    tweenHandler: React.PropTypes.func,
    type: React.PropTypes.oneOf(['overlay', 'static', 'displace']),
  };

  static defaultProps = {
    type: 'displace',
    closedDrawerOffset: 0,
    deviceScreen: deviceScreen,
    openDrawerOffset: 0,
    openDrawerThreshold: 0.25,
    relativeDrag: true,
    panStartCompensation: true,
    panOpenMask: 0.25,
    panCloseMask: 0.25,
    captureGestures: false,
    negotiatePan: false,
    initializeOpen: false,
    tweenHandler: null,
    tweenDuration: 250,
    tweenEasing: 'linear',
    disabled: false,
    acceptDoubleTap: false,
    acceptTap: false,
    acceptPan: true,
    tapToClose: false,
    styles: {},
    onOpen: () => {},
    onClose: () => {},
    side: 'left',
  };

  constructor(props) {
    super(props)
    // `this` keyword binding - No Autobinding in ES6 Classes
    this.handleStartShouldSetPanResponderCapture = this.handleStartShouldSetPanResponderCapture.bind(this)
    this.handleStartShouldSetPanResponder = this.handleStartShouldSetPanResponder.bind(this)
    this.handleMoveShouldSetPanResponderCapture = this.handleMoveShouldSetPanResponderCapture.bind(this)
    this.handleMoveShouldSetPanResponder = this.handleMoveShouldSetPanResponder.bind(this)
    this.handlePanResponderMove = this.handlePanResponderMove.bind(this)
    this.handlePanResponderEnd = this.handlePanResponderEnd.bind(this)
    this.componentWillMount = this.componentWillMount.bind(this)
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
    this.componentDidUpdate = this.componentDidUpdate.bind(this)
    this.updatePosition = this.updatePosition.bind(this)
    this.shouldOpenDrawer = this.shouldOpenDrawer.bind(this)
    this.testPanResponderMask = this.testPanResponderMask.bind(this)
    this.getMainView = this.getMainView.bind(this)
    this.getDrawerView = this.getDrawerView.bind(this)
    this.getOpenLeft = this.getOpenLeft.bind(this)
    this.getClosedLeft = this.getClosedLeft.bind(this)
    this.getMainWidth = this.getMainWidth.bind(this)
    this.getDrawerWidth = this.getDrawerWidth.bind(this)
    this.initialize = this.initialize.bind(this)
    this.handleSetViewport = this.handleSetViewport.bind(this)
    this.resync = this.resync.bind(this)
    this.requiresResync = this.requiresResync.bind(this)

    this.propsWhomRequireUpdate = [
      'closedDrawerOffset',
      'openDrawerOffset',
      'type'
    ]

    this.state = { viewport: props.deviceScreen }
  }

  static childContextTypes = {
    drawer: PropTypes.any
  };

  getChildContext() {
    return { drawer: this }
  }

  componentWillMount() {
    this.initialize(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (this.requiresResync(nextProps)) {
      this.resync(null, nextProps)
    }
  }

  componentDidUpdate() {
    if (this._syncAfterUpdate) {
      this._syncAfterUpdate = false
      this._open ? this.open() : this.close()
    }
  }

  updatePosition() {
    let mainProps = {}
    let drawerProps = {}
    let ratio = (this._left - this._offsetClosed) / (this.getOpenLeft() - this._offsetClosed)

    switch (this.props.type) {
      case 'overlay':
        drawerProps[this.props.side] = -this.state.viewport.width + this._offsetOpen + this._left
        mainProps[this.props.side] = this._offsetClosed
        break
      case 'static':
        mainProps[this.props.side] = this._left
        drawerProps[this.props.side] = 0
        break
      case 'displace':
        mainProps[this.props.side] = this._left
        drawerProps[this.props.side] = -this.state.viewport.width + this._left + this._offsetOpen
        break
    }

    if (this.props.tweenHandler) {
      let propsFrag = this.props.tweenHandler(ratio, this.props.side)
      mainProps = Object.assign(mainProps, propsFrag.main)
      drawerProps = Object.assign(drawerProps, propsFrag.drawer)
    }
    this.drawer.setNativeProps({style: drawerProps})
    this.main.setNativeProps({style: mainProps})
  }

  shouldOpenDrawer(dx) {
    if (this._open) return dx < this.state.viewport.width * this.props.openDrawerThreshold
    return dx > this.state.viewport.width * this.props.openDrawerThreshold
  }

  handleStartShouldSetPanResponderCapture(e, gestureState) {
    if (this.props.captureGestures) return this.processShouldSet(e, gestureState)
    return false
  }

  handleStartShouldSetPanResponder(e, gestureState) {
    if (!this.props.captureGestures) return this.processShouldSet(e, gestureState)
    return false
  }

  processShouldSet = (e, gestureState) => {
    let inMask = this.testPanResponderMask(e, gestureState)
    if (inMask) {
      let toggled = this.processTapGestures()
      if (toggled) return false
      if (this.props.captureGestures && this.props.acceptPan) return true
    }
    if (this.props.negotiatePan) return false
    this._panStartTime = Date.now()
    if (!inMask) return false
    if (!this.props.acceptPan) return false
    this.terminateActiveTween()
    return true
  };

  handleMoveShouldSetPanResponderCapture(e, gestureState) {
    if (this.props.captureGestures && this.props.negotiatePan) return this.handleMoveShouldSetPanResponder(e, gestureState)
    return false
  }

  handleMoveShouldSetPanResponder(e, gestureState) {
    let inMask = this.testPanResponderMask(e, gestureState)
    if (!inMask) return false
    if (!this.props.acceptPan) return false

    if (!this.props.negotiatePan || this.props.disabled || !this.props.acceptPan || this._panning) return false
    let swipeToLeft = (gestureState.dx < 0) ? true : false
    let swipeToRight = (gestureState.dx > 0) ? true : false
    let swipeUpDown = (Math.abs(gestureState.dy) >= Math.abs(gestureState.dx)) ? true : false
    let swipeInCloseDirection = (this.props.side === 'left') ? swipeToLeft : swipeToRight
    if (swipeUpDown || (this._open && !swipeInCloseDirection) || (!this._open && swipeInCloseDirection)) {
      return false
    }

    this.terminateActiveTween()
    return true
  }

  processTapGestures = () => {
    if (this._activeTween) return false // disable tap gestures during tween
    let minLastPressInterval = 500
    if (this.props.acceptTap) {
      this._open ? this.close() : this.open()
      return true
    }
    if (this.props.tapToClose && this._open) {
      this.close()
      return true
    }
    if (this.props.acceptDoubleTap) {
      let now = new Date().getTime()
      let timeDelta = now - this._lastPress
      this._lastPress = now
      if (timeDelta < minLastPressInterval) {
        this._open ? this.close() : this.open()
        return true
      }
    }
    return false
  };

  testPanResponderMask(e, gestureState) {
    if (this.props.disabled) return false
    let x0 = e.nativeEvent.pageX

    let deltaOpen = this.props.side === 'left' ? deviceScreen.width - x0 : x0
    let deltaClose = this.props.side === 'left' ? x0 : deviceScreen.width - x0

    let whenClosedMask = this.props.panOpenMask % 1 === 0 && this.props.panOpenMask > 1 ? this.props.panOpenMask : deviceScreen.width * this.props.panOpenMask
    let whenOpenMask = this.props.panCloseMask % 1 === 0 && this.props.panCloseMask > 1 ? this.props.panCloseMask : deviceScreen.width * this.props.panCloseMask
    if ( this._open && deltaOpen > whenOpenMask ) return false
    if ( !this._open && deltaClose > whenClosedMask ) return false
    return true
  }

  handlePanResponderMove(e, gestureState) {
    if (!this.props.acceptPan) return false

    //Math is ugly overly verbose here, probably can be greatly cleaned up
    let dx = gestureState.dx
    //Do nothing if we are panning the wrong way
    if (this._open ^ dx < 0 ^ this.props.side === 'right') return false

    let absDx = Math.abs(dx)
    let moveX = gestureState.moveX
    let relMoveX = this.props.side === 'left'
      ? this._open ? -this.state.viewport.width + moveX : moveX
      : this._open ? -moveX : this.state.viewport.width - moveX
    let delta = relMoveX - dx
    let factor = absDx / Math.abs(relMoveX)
    let adjustedDx = dx + delta * factor
    let left = this.props.panStartCompensation ? this._prevLeft + adjustedDx : this._prevLeft + dx
    left = Math.min(left, this.getOpenLeft())
    left = Math.max(left, this.getClosedLeft())
    this._left = left
    this.updatePosition()
    this._panning = true
  }

  terminateActiveTween = () => {
    if (this._activeTween) {
      this._activeTween.terminate()
      this._activeTween = null
    }
  };

  open = () => {
    this.props.onOpenStart && this.props.onOpenStart()
    if (this._activeTween) return
    this._activeTween = tween({
      start: this._left,
      end: this.getOpenLeft(),
      duration: this.props.tweenDuration,
      easingType: this.props.tweenEasing,
      onFrame: (tweenValue) => {
        this._left = tweenValue
        this.updatePosition()
      },
      onEnd: () => {
        this._activeTween = null
        this._open = true
        this._prevLeft = this._left
        if (this.props.type === 'overlay') {
          this.mainOverlay.setNativeProps({ style: { width: this.getMainWidth() }})
        }
        this.props.onOpen()
      }
    })
  };

  close = () => {
    this.props.onCloseStart && this.props.onCloseStart()
    if (this._activeTween) return
    this._activeTween = tween({
      start: this._left,
      end: this.getClosedLeft(),
      easingType: this.props.tweenEasing,
      duration: this.props.tweenDuration,
      onFrame: (tweenValue) => {
        this._left = tweenValue
        this.updatePosition()
      },
      onEnd: () => {
        this._activeTween = null
        this._open = false
        this._prevLeft = this._left
        if (this.props.type === 'overlay') this.mainOverlay.setNativeProps({ style: { width: 0 }})
        this.props.onClose()
      }
    })
  };

  toggle = () => {
    this._open ? this.close() : this.open()
  };

  handlePanResponderEnd(e, gestureState) {
    if (Math.abs(gestureState.dx) < 50 && this._activeTween) return

    let absRelMoveX = this.props.side === 'left'
      ? this._open ? this.state.viewport.width - gestureState.moveX : gestureState.moveX
      : this._open ? gestureState.moveX : this.state.viewport.width - gestureState.moveX
    let calcPos = this.props.relativeDrag ? Math.abs(gestureState.dx) : absRelMoveX

    this.shouldOpenDrawer(calcPos) ? this.open() : this.close()

    this.updatePosition()
    this._prevLeft = this._left
    this._panning = false
  }

  getMainView() {
    return (
      <View
        {...this.responder.panHandlers}
        key="main"
        ref={c => this.main = c}
        style={[this.stylesheet.main, {height: this.getHeight(), width: this.getMainWidth()}]}
        >
        {this.props.children}
        {this.props.type === 'overlay'
          ? <View
              ref={c => this.mainOverlay = c}
              style={styles.mainOverlay}
              />
          : null}
      </View>
    )
  }

  getDrawerView() {
    return (
      <View
        {...this.responder.panHandlers}
        key="drawer"
        ref={c => this.drawer = c}
        style={[this.stylesheet.drawer, {height: this.getHeight(), width: this.getDrawerWidth()}]}
      >
        {this.props.content}
      </View>
    )
  }

  getOpenLeft() {
    return this.state.viewport.width - this._offsetOpen
  }

  getClosedLeft() {
    return this._offsetClosed
  }

  getHeight() {
    return this.state.viewport.height
  }

  getMainWidth() {
    return this.state.viewport.width - this._offsetClosed
  }

  getDrawerWidth() {
    return this.state.viewport.width - this._offsetOpen
  }

  initialize(props) {
    let fullWidth = this.state.viewport.width
    this._offsetClosed = props.closedDrawerOffset % 1 === 0 ? props.closedDrawerOffset : props.closedDrawerOffset * fullWidth
    this._offsetOpen = props.openDrawerOffset % 1 === 0 ? props.openDrawerOffset : props.openDrawerOffset * fullWidth
    this._prevLeft = this._left

    let styles = {
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    }

    styles.main = Object.assign({
      position: 'absolute',
      top: 0,
    }, {borderWidth:0}, this.props.styles.main)

    styles.drawer = Object.assign({
      position: 'absolute',
      top: 0,
    }, {borderWidth:0}, this.props.styles.drawer)

    if (props.initializeOpen === true) { // open
      this._open = true
      this._left = fullWidth - this._offsetOpen
      styles.main[this.props.side] = 0
      styles.drawer[this.props.side] = 0
      if (props.type === 'static') styles.main[this.props.side] = fullWidth - this._offsetOpen
      if (props.type === 'displace') styles.main[this.props.side] = fullWidth - this._offsetOpen
    } else { // closed
      this._open = false
      this._left = this._offsetClosed
      styles.main[this.props.side] = this._offsetClosed
      if (props.type === 'static') styles.drawer[this.props.side] = 0
      if (props.type === 'overlay') styles.drawer[this.props.side] = this._offsetClosed + this._offsetOpen - fullWidth
      if (props.type === 'displace') styles.drawer[this.props.side] = - fullWidth + this._offsetClosed + this._offsetOpen
    }

    if (this.main) {
      this.drawer.setNativeProps({ style: {left: styles.drawer.left}})
      this.main.setNativeProps({ style: {left: styles.main.left}})
    } else {
      this.stylesheet = StyleSheet.create(styles)
      this.responder = PanResponder.create({
        onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
        onStartShouldSetPanResponderCapture: this.handleStartShouldSetPanResponderCapture,
        onMoveShouldSetPanResponder: this.handleMoveShouldSetPanResponder,
        onMoveShouldSetPanResponderCapture: this.handleMoveShouldSetPanResponderCapture,
        onPanResponderMove: this.handlePanResponderMove,
        onPanResponderRelease: this.handlePanResponderEnd,
      })
    }

    this.resync(null, props)
  }

  handleSetViewport(e) {
    let viewport = e.nativeEvent.layout
    let oldViewport = this.state.viewport
    if (viewport.width === oldViewport.width && viewport.height === oldViewport.height) return
    let didRotationChange = viewport.width !== oldViewport.width
    this.resync(viewport, null, didRotationChange)
  }

  resync(viewport, props, didRotationChange) {
    if (didRotationChange) this._syncAfterUpdate = true
    viewport = viewport || this.state.viewport
    props = props || this.props
    this._offsetClosed = props.closedDrawerOffset % 1 === 0 ? props.closedDrawerOffset : props.closedDrawerOffset * viewport.width
    this._offsetOpen = props.openDrawerOffset % 1 === 0 ? props.openDrawerOffset : props.openDrawerOffset * viewport.width
    this.setState({ viewport })
  }

  requiresResync(nextProps) {
    for (let i = 0; i < this.propsWhomRequireUpdate.length; i++) {
      let key = this.propsWhomRequireUpdate[i]
      if (this.props[key] !== nextProps[key]) return true
    }
  }

  render() {
    let first = this.props.type === 'overlay' ? this.getMainView() : this.getDrawerView()
    let second = this.props.type === 'overlay' ? this.getDrawerView() : this.getMainView()

    return (
      <View
        key="drawerContainer"
        onLayout={this.handleSetViewport}
        style={this.stylesheet.container}
        >
        {first}
        {second}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  mainOverlay: {
    width: 0,
    left: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: 'transparent'
  }
})

module.exports = Drawer
