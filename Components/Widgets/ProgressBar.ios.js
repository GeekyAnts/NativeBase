/* @flow */
'use strict';

import React from 'react';
import { ProgressViewIOS} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
// import computeProps from '../../Utils/computeProps';


export default class ProgressBarNB extends NativeBaseComponent {



  render() {
    return(
      <ProgressViewIOS ref={c => this._root = c}	progress={this.props.progress ? this.props.progress/100 : 0.5}
        progressTintColor={	this.props.color ? this.props.color :
        this.props.inverse ? this.getTheme().inverseProgressColor :
        this.getTheme().defaultProgressColor} />
    );
  }

}
