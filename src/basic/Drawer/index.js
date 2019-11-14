import React, { Component } from 'react';
import RNDrawer from 'react-native-drawer';

export default class Drawer extends Component {
  render() {
    return <RNDrawer ref={c => (this._root = c)} {...this.props} />;
  }
}

Drawer.defaultProps = {
  type: 'overlay',
  tapToClose: true,
  openDrawerOffset: 0.2,
  panCloseMask: 0.2,
  closedDrawerOffset: 0,
  styles: {
    drawer: {
      shadowColor: '#000000',
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 5
    },
    mainOverlay: {
      opacity: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      elevation: 0
    }
  },
  tweenHandler: ratio => ({
    mainOverlay: { opacity: ratio / 2 }
  })
};
