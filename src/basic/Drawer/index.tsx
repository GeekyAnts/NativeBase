import React, { Component, createRef } from 'react';
import RNDrawer from 'react-native-drawer';

export default class Drawer extends Component<{}, {}> {
  _root = createRef<RNDrawer>();
  static defaultProps = {
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
        elevation: 5,
      },
      mainOverlay: {
        opacity: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        elevation: 0,
      },
    },
    tweenHandler: (ratio: number) => ({
      mainOverlay: { opacity: ratio / 2 },
    }),
  };

  render() {
    return <RNDrawer ref={this._root} {...this.props} />;
  }
}
