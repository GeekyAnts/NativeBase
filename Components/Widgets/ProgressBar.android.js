/* @flow */
'use strict';

import React from 'react';
import ProgressBar from 'ProgressBarAndroid';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';


export default class SpinnerNB extends NativeBaseComponent {

    prepareRootProps() {

        var type = {
            height: 40
        }

        var defaultProps = {
            style: type
        }

        return computeProps(this.props, defaultProps);

    }


    render() {
        return(
            <ProgressBar {...this.prepareRootProps()} styleAttr = 'Horizontal'
                indeterminate = {false} progress={this.props.progress ? this.props.progress/100 : 0.5}
                color={this.props.color ? this.props.color : this.props.inverse ? this.getTheme().inverseProgressColor :
                this.getTheme().defaultProgressColor} />
        );
    }

}
