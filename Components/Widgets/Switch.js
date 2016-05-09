/* @flow */
'use strict';

import React from 'react';
import {Switch} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';

export default class SwitchNB extends NativeBaseComponent {

    getInitialStyle() {
        return {
            switch: {

            }
        }
    }
    prepareRootProps() {
        var defaultProps = {
            style: this.getInitialStyle().switch
        };

        return computeProps(this.props, defaultProps);
    }
    
    render() { 
        return(
            <Switch {...this.prepareRootProps()}/>
        );
    }
}
