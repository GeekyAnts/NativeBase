/* @flow */
'use strict';

import React from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import Icon from 'react-native-vector-icons/Ionicons';
import _ from 'lodash';

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

        console.log(computeProps(this.props, defaultProps));

        return computeProps(this.props, defaultProps);

    }
    
    render() { 
        return(
          <Icon {...this.prepareRootProps()}/>
        );
    }

}
