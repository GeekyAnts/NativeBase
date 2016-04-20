/* @flow */
'use strict';

import React from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';
import Checkbox from 'react-native-checkbox';

export default class CheckBox extends NativeBaseComponent {

    getInitialStyle() {
        return {
            checkbox: {}
        }
    }
    prepareRootProps() {

        return this.props;

    }
    
    render() { 
        return(
          <Checkbox {...this.prepareRootProps()}/>
        );
    }

}
