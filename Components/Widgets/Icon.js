/* @flow */
'use strict';

import React from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import Icon from 'react-native-vector-icons/Ionicons';

export default class IconNB extends NativeBaseComponent {

    getInitialStyle() {
        return {
            icon: {
                fontSize: 27,
                color: 'white'
            }
        }
    }
    prepareRootProps() {
        var defaultProps = {
            style: this.getInitialStyle().icon
        };

        return computeProps(this.props, defaultProps);

    }
    
    render() { 
        return(
            <Icon {...this.prepareRootProps()}/>
        );
    }
}
